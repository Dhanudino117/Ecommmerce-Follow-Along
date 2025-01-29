import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [email, setEmail] = useState("");
  const [previewImages, setPreviewImages] = useState([]); // Added state

  const categoriesData = [
    { title: "Electronics" },
    { title: "Fashion" },
    { title: "Books" },
    { title: "Home Appliances" },
  ];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => prevImages.concat(files));
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));
  };

  useEffect(() => {
    // Cleanup object URLs to avoid memory leaks
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      category,
      tags,
      price,
      stock,
      email,
      images,
    };
    console.log("Product Data:", productData);
    alert("Product created successfully!");
    setImages([]);
    setName("");
    setDescription("");
    setCategory("");
    setTags("");
    setPrice("");
    setStock("");
    setEmail("");
    setPreviewImages([]);
  };

  return (
    <div className="min-h screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="max-w-lg  m-5 p-4 text-center bg-white rounded-lg shadow-2xl shadow-black  h-0.5 w-screen">
        <h5 className="text-[24px] font-bold text-center mb-4 text-gray-700">
          Create Product
        </h5>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Name Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Category Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Choose a category</option>
              {categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
            </select>
          </div>

          {/* Tags Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">Tags</label>
            <input
              type="text"
              value={tags}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter product tags"
            />
          </div>

          {/* Price Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={price}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Stock Field */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={stock}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg transition-shadow duration-200"
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter stock quantity"
              required
            />
          </div>

          {/* Upload Images */}
          <div className="mt-4">
            <label className="pb-1 block text-gray-600 font-medium">
              Upload Images <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="upload"
              className="hidden"
              multiple
              onChange={handleImageChange}
              required
            />
            <label
              htmlFor="upload"
              className="cursor-pointer flex items-center justify-center w-[100px] h-[100px] bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              <AiOutlinePlusCircle size={30} color="#555" />
            </label>
            <div className="flex flex-wrap mt-2">
              {previewImages.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt="Preview"
                  className="w-[100px] h-[100px] object-cover m-2 rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
