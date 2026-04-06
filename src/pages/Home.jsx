import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const books = useSelector((state) => state.books.list);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Library 📚</h1>

      {/* Categories */}
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Books */}
      <h2 className="text-xl font-semibold mb-2">Popular Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>

            <Link
              to={`/book/${book.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;