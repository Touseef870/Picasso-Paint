import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";

const products = [
  {
    id: 1,
    name: "Brighto Stain Free",
    price: "Rs. 12,000.00",
    image: Product1,
    sizeOptions: ["1 Liter", "2 Liters", "5 Liters", "10 Liters"],
    description: `Brighto Stain Free is a premium quality paint offering exceptional stain resistance and durability.
It is designed to keep your walls looking fresh and clean for years.
Ideal for both interior and exterior surfaces, this paint provides a smooth, elegant finish that enhances your space.
Formulated with advanced technology, it ensures easy cleaning and maintenance, making it perfect for high-traffic areas.`,
  },
  {
    id: 2,
    name: "Plastic Emulsion",
    price: "Rs. 12,250.00",
    image: Product2,
    sizeOptions: ["1 Liter", "3 Liters", "6 Liters"],
    description: `Plastic Emulsion is a versatile water-based paint suitable for all wall surfaces.
It offers a matte finish and excellent coverage, allowing you to transform your interiors with ease.
This eco-friendly product is easy to apply and quick to dry, making it perfect for DIY projects.`,
  },
  {
    id: 3,
    name: "Quick Wash Emulsion",
    price: "Rs. 12,500.00",
    image: Product3,
    sizeOptions: ["1 Liter", "4 Liters", "8 Liters"],
    description: `Quick Wash Emulsion is designed for easy cleaning and maintenance.
Its washable surface allows you to remove stains and dirt effortlessly without damaging the paint layer.
Perfect for homes with kids and pets, it combines durability with a beautiful satin finish.`,
  },
  {
    id: 4,
    name: "Super Emulsion",
    price: "Rs. 15,000.00",
    image: Product4,
    sizeOptions: ["1 Liter", "5 Liters", "10 Liters"],
    description: `Super Emulsion is a high-performance paint that provides excellent adhesion and color retention.
It resists fading and peeling even in harsh weather conditions.
Ideal for exterior walls, it keeps your property looking vibrant for longer.`,
  },
  {
    id: 5,
    name: "Wall Emulsion",
    price: "Rs. 16,000.00",
    image: Product5,
    sizeOptions: ["1 Liter", "7 Liters", "12 Liters"],
    description: `Wall Emulsion is a premium finish paint that offers smooth texture and rich colors.
It is formulated to be mildew resistant and easy to clean.
Suitable for both residential and commercial projects, it enhances the beauty and longevity of your walls.`,
  },
  {
    id: 6,
    name: "Premium Gloss Finish",
    price: "Rs. 17,000.00",
    image: Product6,
    sizeOptions: ["1 Liter", "4 Liters", "8 Liters"],
    description: `Premium Gloss Finish offers a shiny, reflective finish that adds elegance to any surface.
It is highly durable, resistant to scratches, and suitable for both indoor and outdoor use.
The paint is easy to apply and dries quickly, ensuring a long-lasting, vibrant color.`,
  },
];

const colorOptions = [
  { name: "Peanut Cream", color: "#F5DEB3", code: "4015" },
  { name: "Light Gray", color: "#D3D3D3", code: "4016" },
  { name: "Cream White", color: "#FFFDD0", code: "4017" },
  { name: "Soft Pink", color: "#F8BBD9", code: "4018" },
  { name: "Beige", color: "#F5F5DC", code: "4019" },
  { name: "Mint Green", color: "#F0FFF0", code: "4020" },
  { name: "Sage Green", color: "#9CAF88", code: "4021" },
  { name: "Peach", color: "#FFCBA4", code: "4022" },
  { name: "Light Blue", color: "#ADD8E6", code: "4023" },
  { name: "Lavender", color: "#E6E6FA", code: "4024" },
  { name: "Lemon Yellow", color: "#FFFACD", code: "4025" },
  { name: "Coral", color: "#FF7F50", code: "4026" },
  { name: "Sky Blue", color: "#87CEEB", code: "4027" },
  { name: "Olive Green", color: "#808000", code: "4028" },
  { name: "Rose Pink", color: "#FF69B4", code: "4029" },
  { name: "Turquoise", color: "#40E0D0", code: "4030" },
  { name: "Golden Yellow", color: "#FFD700", code: "4031" },
  { name: "Forest Green", color: "#228B22", code: "4032" },
  { name: "Royal Blue", color: "#4169E1", code: "4033" },
  { name: "Deep Purple", color: "#663399", code: "4034" },
  { name: "Crimson Red", color: "#DC143C", code: "4035" },
  { name: "Charcoal", color: "#36454F", code: "4036" },
  { name: "Pure White", color: "#FFFFFF", code: "4037" },
  { name: "Jet Black", color: "#000000", code: "4038" },
 
  { name: "Jet Black", color: "#000000", code: "4038" },
  { name: "Light Blue", color: "#ADD8E6", code: "4023" },
  { name: "Lavender", color: "#E6E6FA", code: "4024" },
  { name: "Lemon Yellow", color: "#FFFACD", code: "4025" },
  { name: "Coral", color: "#FF7F50", code: "4026" },
  { name: "Sky Blue", color: "#87CEEB", code: "4027" },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const product = products.find((p) => p.id === parseInt(productId));

  useEffect(() => {
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

      <div className="flex flex-col md:flex-row gap-10">
      <div className="flex-shrink-0 w-full md:w-1/3">
  {/* Only wrap the main image with colored background */}
  <div className="relative">
    {/* Background for only the main image */}
    <div
      className="absolute inset-0 rounded-lg"
      style={{ backgroundColor: selectedColor.color }}
    ></div>

    {/* Main Image */}
    <img
      src={product.image || "/placeholder.svg"}
      alt={product.name}
      className="relative z-10 w-full rounded-lg object-contain mix-blend-multiply"
    />
  </div>

  {/* Small second image placed separately without background color effect */}
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
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    selectedColor.code === color.code
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
      </div>

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
