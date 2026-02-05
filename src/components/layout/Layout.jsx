import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";

function Layout() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 🔥 API CALL HAPPENS HERE (ONCE)
    Promise.all([
      fetch("https://dummyjson.com/products?limit=99&skip=0").then(res => res.json()),
      fetch("https://dummyjson.com/products?limit=99&skip=99").then(res => res.json())
    ])
      .then(([first, second]) => {
        const merged = [...first.products, ...second.products];
        setProducts(merged);

        // extract categories dynamically
        const uniqueCategories = [
          "all",
          ...new Set(merged.map(item => item.category))
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <>
      <Header categories={categories} setCategory={setCategory} />
      <Outlet context={{ products, category }} />
    </>
  );
}

export default Layout;
