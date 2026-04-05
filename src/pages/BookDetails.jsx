import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();

  // Find book by ID
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <Link to="/books">⬅ Back to Browse</Link>
    </div>
  );
}

export default BookDetails;