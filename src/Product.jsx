import React from "react";

const Product = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
      {products.map((product) => (
        <div key={product.id} className="border p-3 rounded shadow-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-32 object-cover"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p>{product.category}</p>
          <p className="text-yellow-500">⭐ {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
