import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

    const books = useSelector((state) => state.books.list);
  return (
    <div>
      <h1>Welcome to Online Library 📚</h1>

      <h2>Categories</h2>
      {categories.map((cat) => (
        <div key={cat}>
          <Link to={`/books/${cat}`}>{cat}</Link>
        </div>
      ))}

      <h2>Popular Books</h2>
      {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid", margin: "10px" }}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;