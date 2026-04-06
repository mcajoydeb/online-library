import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id == id);

  if (!book) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Book Not Found </h2>
        <Link to="/books" className="text-blue-500 mt-4 inline-block">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        
        {/* Left - Image */}
        <div className="flex justify-center items-center">
          <div className="w-48 h-64 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
            📖 Book Cover
          </div>
        </div>

        {/* Right - Details */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>

          <p className="text-gray-600 mb-2">
            by <span className="font-medium">{book.author}</span>
          </p>

          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm mb-3">
            {book.category}
          </span>

          {/* Rating */}
          <div className="mb-3 text-yellow-500 text-lg">
            {"⭐".repeat(Math.round(book.rating))}
            <span className="text-gray-600 ml-2 text-sm">
              ({book.rating})
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {book.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              to="/books"
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              ← Back
            </Link>

            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              ⭐ Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;