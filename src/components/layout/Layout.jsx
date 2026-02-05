import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Loader from "../common/Loader";

function Layout() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products?limit=99&skip=0").then(res => res.json()),
      fetch("https://dummyjson.com/products?limit=99&skip=99").then(res => res.json())
    ])
      .then(([first, second]) => {
        const mergedProducts = [...first.products, ...second.products];
        setProducts(mergedProducts);
        setLoading(false);

        const uniqueCategories = [
          "all",
          ...new Set(mergedProducts.map(item => item.category))
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <>
      <Header
        categories={categories}
        onCategorySelect={setCategory}
        onSearch={setSearchText}
      />

      {loading ? (
        <Loader/>
      ):(

      <Outlet
        context={{
          products,
          category,
          searchText, 
        }}
      />
      )}
    </>
  );
}

export default Layout;
