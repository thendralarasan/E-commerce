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
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEasy
        </Link>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearch}
          className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Cart */}
        <Link
          to="/cart"
          className="text-lg font-semibold text-gray-700 hover:text-blue-600"
        >
          Cart 🛒
        </Link>
      </div>

      {/* Categories */}
      <div className="flex gap-4 px-6 py-3 bg-gray-100 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className="px-4 py-2 bg-white border rounded-full text-sm capitalize hover:bg-blue-600 hover:text-white transition"
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
