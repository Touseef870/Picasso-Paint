import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Step 1: import useNavigate
import { products } from "../../constant/products";
import Contact from "../../components/Contact"


// Only relevant categories (no TOPLAC as per your request)
const categories = ["ALL", "EVERNEW", "KENT"];

function Product() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const navigate = useNavigate();  // Step 1: initialize navigate
  
    const filteredProducts =
      selectedCategory === "ALL"
        ? products
        : products.filter((p) => p.category === selectedCategory);
  
    return (
     <>
     
     <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Our Products
        </h1>
  
        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-semibold border transition-colors duration-300
                ${
                  selectedCategory === cat
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-teal-700 border-teal-300 hover:bg-teal-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
  
        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-base">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}  // Step 2 & 3: navigate on click
                className="border rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
                style={{ maxWidth: "300px", margin: "auto" }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/product/${product.id}`);
                  }
                }}
              >
                <div
                  className="overflow-hidden rounded-md mb-3"
                  style={{ height: "160px" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1 text-teal-800">
                  {product.name}
                </h2>
                <p className="text-gray-700 flex-grow text-sm">
                  {product.description}
                </p>
                <span className="mt-3 inline-block text-teal-900 text-xs font-semibold px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Contact />
      </>
    );
  }
  
  export default Product;
