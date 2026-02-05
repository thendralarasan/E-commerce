import { useOutletContext } from "react-router-dom";

function Products(props) {

  const outletData = useOutletContext() || {};
  const products = props.products || outletData.products || [];
  const category = props.category || outletData.category || "all";
  const searchText = props.searchText || outletData.searchText || "";

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "all" ? true : item.category === category;

    const searchMatch =
      searchText.trim() === ""
        ? true
        : item.title.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
        max-w-7xl
        mx-auto
      ">
        {filteredProducts.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full object-contain"
              />
            </div>

            <h3 className="font-semibold text-sm mb-2 line-clamp-2">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 capitalize mb-1">
              {item.category}
            </p>

            <p className="text-lg font-bold text-green-600 mb-2">
              ₹ {item.price}
            </p>

            <button className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
