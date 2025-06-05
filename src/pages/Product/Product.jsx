import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Step 1: import useNavigate

// Import all product images
import Product1 from "../../assets/Evernew Gallon/Emulsion a.jpg";
import Product2 from "../../assets/Kent Gallon/Acrylic Putty.jpg";
import Product3 from "../../assets/Evernew Gallon/Gloss Enamel.jpg";
import Product4 from "../../assets/Kent Gallon/Gloss Enamel.jpg";
import Product5 from "../../assets/Evernew Gallon/Hydro Matt.jpg";
import Product6 from "../../assets/Kent Gallon/Hydro Matt.jpg";
import Product7 from "../../assets/Kent Gallon/Hydro Wall Primer Sealer.jpg";
import Product8 from "../../assets/Kent Gallon/Luxury Emulsion.jpg";
import Product9 from "../../assets/Kent Gallon/Matt Enamel.jpg";
import Product10 from "../../assets/Kent Gallon/Red Oxide.jpg";
import Product11 from "../../assets/Kent Gallon/Wall Primer.jpg";
import Product12 from "../../assets/Kent Gallon/Weather Care.jpg";
import Contact from "../../components/Contact"

const products = [
  {
    id: 1,
    name: "Evernew Gallon Emulsion",
    category: "EVERNEW",
    description:
      "Evernew Emulsion provides a smooth and durable finish, ideal for interior walls. It offers excellent coverage and a soft matte appearance, making your space look clean and elegant.",
    image: Product1,
  },
  {
    id: 2,
    name: "Kent Gallon Acrylic Putty",
    category: "KENT",
    description:
      "Kent Acrylic Putty offers a smooth base for walls by filling cracks and imperfections. Its strong adhesion ensures a perfect surface for topcoat application.",
    image: Product2,
  },
  {
    id: 3,
    name: "Gloss Enamel (Evernew)",
    category: "EVERNEW",
    description:
      "Evernew Gloss Enamel gives a luxurious, high-sheen finish that is both durable and washable. Best suited for metal and wooden surfaces.",
    image: Product3,
  },
  {
    id: 4,
    name: "Gloss Enamel (Kent)",
    category: "KENT",
    description:
      "Kent Gloss Enamel offers a brilliant glossy look and long-lasting protection for furniture, doors, windows, and trims.",
    image: Product4,
  },
  {
    id: 5,
    name: "Hydro Matt (Evernew)",
    category: "EVERNEW",
    description:
      "Hydro Matt by Evernew delivers a rich matte finish with water resistance. Ideal for interior and exterior applications.",
    image: Product5,
  },
  {
    id: 6,
    name: "Hydro Matt (Kent)",
    category: "KENT",
    description:
      "Kent Hydro Matt provides a smooth, breathable, and water-repellent layer that maintains a natural look for walls.",
    image: Product6,
  },
  {
    id: 7,
    name: "Hydro Wall Primer Sealer",
    category: "KENT",
    description:
      "This water-based primer and sealer enhances paint adhesion and ensures long-term protection against moisture and stains.",
    image: Product7,
  },
  {
    id: 8,
    name: "Luxury Emulsion",
    category: "KENT",
    description:
      "Luxury Emulsion adds richness and elegance to your interiors. It offers excellent color retention, smooth coverage, and a lavish matte appearance.",
    image: Product8,
  },
  {
    id: 9,
    name: "Matt Enamel",
    category: "KENT",
    description:
      "Matt Enamel provides a subtle, low-sheen finish for surfaces that need a classy look with durability and easy maintenance.",
    image: Product9,
  },
  {
    id: 10,
    name: "Red Oxide",
    category: "KENT",
    description:
      "Red Oxide is a protective metal primer that prevents rust and corrosion. Ideal for metal gates, grills, and industrial structures.",
    image: Product10,
  },
  {
    id: 11,
    name: "Wall Primer",
    category: "KENT",
    description:
      "This primer prepares walls for a smooth and uniform topcoat. It penetrates deeply and improves paint adhesion for lasting results.",
    image: Product11,
  },
  {
    id: 12,
    name: "Weather Care",
    category: "KENT",
    description:
      "Weather Care is a high-performance exterior paint that resists harsh weather, UV rays, and dirt. Keeps your walls protected and vibrant year-round.",
    image: Product12,
  },
];

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
