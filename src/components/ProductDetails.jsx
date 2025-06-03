import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { colorOptions } from "../constant/colors.js";
import { products } from "../constant/products.js"
import WallPainter from "./Wall Color/wallColor.jsx";


const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const product = products.find((p) => p.id === parseInt(productId));
  console.log(product)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) return null;

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      <button className="mb-8 px-4 py-2 rounded" onClick={() => navigate("/")}>
        ← Back to Products
      </button>

      <WallPainter />

      {/* <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: selectedColor.color }}
            ></div>

            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="relative z-10 w-full rounded-lg object-contain mix-blend-multiply"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm3nWNiqKxNQ08InNnIHHPB3RDQfHCXoNmw&s"
              alt="Second view"
              className="w-20 h-20 rounded shadow-md border"
            />
          </div>
        </div>


        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-[#da2a30] font-semibold text-xl mb-4">
            {product.price}
          </p>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Select Size:</label>
            <select className="border border-gray-300 rounded px-2 py-2 w-40">
              {product.sizeOptions.map((size, idx) => (
                <option key={idx} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Color: {selectedColor.name} {selectedColor.code}
            </label>
            <div className="grid grid-cols-10 gap-14 max-w-md">
              {colorOptions.map((color, idx) => (
                <button
                  key={idx}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor.code === color.code
                    ? "border-gray-800 scale-110"
                    : "border-gray-300 hover:border-gray-500"
                    }`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => setSelectedColor(color)}
                  title={`${color.name} ${color.code}`}
                ></button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              *Actual color may vary from the images shown.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="whitespace-pre-line text-gray-700 mb-4">
              {product.description}
            </p>

            <button className="mt-4 px-6 py-2 bg-[#da2a30] text-white rounded hover:bg-[#e28083] transition">
              Inquire Now
            </button>
          </div>
        </div>
      </div> */}

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {otherProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="cursor-pointer flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
