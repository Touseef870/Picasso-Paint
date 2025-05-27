import React from 'react';
import livingImg from '../assets/project1.jpg';
import kitchenImg from '../assets/project2.jpg';
import dressingImg from '../assets/project3.jpg';
import diningImg from '../assets/project4.jpg';
import bedroomImg from '../assets/project5.jpg';
import officeImg from '../assets/project6.jpg';

const portfolioData = [
  {
    title: 'Living Area',
    image: livingImg,
    description:
      'Stylish and cozy living areas designed with modern aesthetics and maximum comfort in mind.',
    button: 'Continue Reading →',
    span: false,
  },
  {
    title: 'Kitchen Area',
    image: kitchenImg,
    description:
      'Kitchen modern space with a balance blend of style and functionality. Premium materials ensure comfort and style for your everyday needs.',
    button: 'Continue Reading →',
    span: true, // This will make it span 2 columns
  },
  {
    title: 'Dressing Area',
    image: dressingImg,
    description:
      'Organized and elegant dressing areas that combine space-saving features with luxury design.',
    button: 'Continue Reading →',
    span: false,
  },
  {
    title: 'Dining Area',
    image: diningImg,
    description:
      'Sophisticated dining spaces perfect for family dinners and social gatherings.',
    button: 'Continue Reading →',
    span: false,
  },
  {
    title: 'Bed Room',
    image: bedroomImg,
    description:
      'Relaxing bedrooms designed to provide a serene atmosphere and restful sleep.',
    button: 'Continue Reading →',
    span: false,
  },
  {
    title: 'Office',
    image: officeImg,
    description:
      'Professional office setups that promote productivity and creativity in a modern space.',
    button: 'Continue Reading →',
    span: false,
  },
  {
    title: 'Kitchen Area',
    image: kitchenImg,
    description:
      'Kitchen modern space with a balance blend of style and functionality. Premium materials ensure comfort and style for your everyday needs.',
    button: 'Continue Reading →',
    span: true, // This will make it span 2 columns
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Our Portfolio</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-md">
            Lorem ipsum dolor sit amet elit. Eum nihil et molestiae ea perferendis.
            Voluptas dolorum maxime molestiae perferendis.
          </p>
        </div>
        <button className="border px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`relative group h-64 overflow-hidden rounded-xl shadow-md ${
              item.span ? 'md:col-span-2' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
              <button className="mt-2 text-sm underline">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
