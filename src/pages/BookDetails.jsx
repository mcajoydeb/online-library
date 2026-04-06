import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id == id);

  if (!book) return <h2>Not found</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>

      <Link to="/books">Back</Link>
    </div>
  );
}

export default BookDetails;