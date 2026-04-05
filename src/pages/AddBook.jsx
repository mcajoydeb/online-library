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

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.rating ||
      !form.description
    ) {
      setError("All fields are required");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...form,
    };

    dispatch(addBook(newBook));

    // Redirect to browse page
    navigate("/books");
  };

  return (
    <div>
      <h2>Add Book</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />

        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <br />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <br />

        <input
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;