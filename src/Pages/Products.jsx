import { useOutletContext } from "react-router-dom";
function Products() {
  const { products, category } = useOutletContext();

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(item => item.category === category);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">
   
      </h1>

      {/* GRID CONTAINER */}
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
            {/* IMAGE */}
            <div className="h-48 flex items-center justify-center mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-sm mb-2 line-clamp-2">
              {item.title}
            </h3>

            {/* CATEGORY */}
            <p className="text-xs text-gray-500 capitalize mb-1">
              {item.category}
            </p>

            {/* PRICE */}
            <p className="text-lg font-bold text-green-600 mb-2">
              ₹ {item.price}
            </p>

            {/* BUTTON */}
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
