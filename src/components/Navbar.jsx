import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex justify-between shadow">
      <h1 className="text-xl font-bold">Online Library System</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/books">Browse</Link>
        <Link to="/add-book" className="bg-white text-blue-600 px-3 py-1 rounded">
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;