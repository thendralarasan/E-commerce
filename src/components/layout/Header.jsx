import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "beauty",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "fragrances",
  "furniture",
  "groceries",
  "womens-dresses",
  "skin-care",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-shoes",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mobile-accessories",
  "motorcycle",
];

function Header({ onCategorySelect, onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
   
      <div className="flex items-center justify-between px-6 py-3">

        <Link
          to="/"
          onClick={() => {
            setSearchText("");
            onSearch("");
            onCategorySelect("all");
          }}
          className="text-2xl font-bold text-blue-600"
        >
          ShopEasy
        </Link>

        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="w-64 px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        <Link
          to="/cart"
          className="text-lg font-semibold text-gray-700 hover:text-blue-600"
        >
          🛒 Cart
        </Link>
      </div>

  
      <div className="flex gap-3 px-6 py-2 bg-gray-100 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className="px-4 py-1.5 bg-white border rounded-full text-xs capitalize hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
