import { useOutletContext } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "../components/cart/CartSiderbar";

function Products() {
  const { products = [], category = "all", searchText = "" } =
    useOutletContext() || {};

  const { addToCart } = useCart();

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "all" || item.category === category;

    const searchMatch =
      searchText.trim() === ""
        ? true
        : item.title.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-gray-100 px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        

       <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <div className="h-40 flex justify-center mb-3">
                  <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                {item.title}
              </h3>

                <p className="text-xs text-gray-500 capitalize">
                {item.description}
              </p>

              <p className="text-xs text-gray-500 capitalize">
                {item.category}
              </p>
             
              <p className="text-lg font-bold text-green-600 mt-2">
                ₹ {item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;
