import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.rating ||
      !form.description
    ) {
      setError("All fields are required ⚠️");
      return;
    }

    dispatch(addBook({ id: Date.now(), ...form }));
    navigate("/books");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
           Add New Book
        </h2>

        {/* Error */}
        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Book Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className="w-full mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Author */}
          <div>
            <label className="text-sm font-medium">Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm font-medium">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              value={form.rating}
              onChange={handleChange}
              placeholder="Enter rating"
              min="1"
              max="5"
              className="w-full mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full mt-1 border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              rows="3"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;