import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  // Filter by category
  let filtered = category
    ? books.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      )
    : books;

  // Search filter
  filtered = filtered.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Browse Books</h2>
      {category && (
        <p className="text-gray-500 mb-4">Category: {category}</p>
      )}

      {/* Search */}
      <input
        className="w-full md:w-1/2 border p-2 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-4"
          >
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <p className="text-gray-500">{b.author}</p>

            <p className="text-sm text-gray-600 mt-2">
              ⭐ {b.rating}
            </p>

            <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {b.category}
            </span>

            <Link
              to={`/book/${b.id}`}
              className="block mt-4 text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No books found 😔
        </p>
      )}
    </div>
  );
}

export default BrowseBooks;