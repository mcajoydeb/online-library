import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");
    const booksData = useSelector((state) => state.books.list);
  // Filter by category
  let filteredBooks = category
    ? booksData.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      )
    : booksData;

  // Filter by search
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Browse Books</h2>

      {category && <h3>Category: {category}</h3>}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book List */}
      {filteredBooks.map((book) => (
        <div key={book.id} style={{ border: "1px solid", margin: "10px" }}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}

      {filteredBooks.length === 0 && <p>No books found</p>}
    </div>
  );
}

export default BrowseBooks;