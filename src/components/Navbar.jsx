import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/books" style={{ marginRight: "10px" }}>Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;