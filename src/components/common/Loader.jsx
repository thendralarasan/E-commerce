function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Outer spinner */}
        <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-center mt-4 text-gray-600 font-semibold">
          Loading products...
        </p>
      </div>
    </div>
  );
}

export default Loader;
