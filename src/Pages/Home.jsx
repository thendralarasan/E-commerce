import { useEffect, useState } from "react";
import Products from "./Products";
import { useOutletContext } from "react-router-dom";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
   
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",

  },

  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
];

function Home() {
  const { products, category, searchText } = useOutletContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
    
      <div className="relative w-full h-[38vh] md:h-[42vh] overflow-hidden">
        <img
          src={banners[index].img}
          alt="banner"
          className="w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {banners[index].text}
          </h1>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white text-center py-3 font-semibold">
        🔥 Big Deals | Free Delivery | Best Prices Guaranteed 🔥| Trending Fashion Deals 👗
      </div>

      <Products
        products={products}
        category={category}
        searchText={searchText}
      />
    </div>
  );
}

export default Home;
