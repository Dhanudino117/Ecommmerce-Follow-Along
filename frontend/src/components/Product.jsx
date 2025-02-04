import PropTypes from "prop-types";
import { React, useState, useEffect } from "react";

const Product = ({ name, images, description, price }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    if (images.length === 1) {
      setCurrentIndex(0); // Ensure the first image is shown if there's only one
    } else {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [images]);

  const currentImage = images[currentIndex];
  let imageUrl = ''
  if (currentImage.includes('\\')) {
    imageUrl = `http://localhost:8000/${currentImage.replace(/\\/g, '/')}`; // Convert backslashes to forward slashes
  } else {
    imageUrl = `http://localhost:8000${currentImage}`; // For paths with forward slashes
  }
 

  console.log("Image URL being used:", imageUrl); // Debugging log

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 flex flex-col items-center">
      <div className="w-full">
        <img
          src={imageUrl} // Correctly formatted image URL
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-white mb-2 text-center">{name}</h2>
        <p className="text-sm text-white text-center mb-4">{description}</p>
      </div>
      <div className="w-full text-center">
        <p className="text-lg font-bold text-white mb-4">${price.toFixed(2)}</p>
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all">
          More Info
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired, // Updated to an array of strings
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;