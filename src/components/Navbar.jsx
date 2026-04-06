import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">📚 Library</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Browse</Link>
        <Link to="/add-book" className="hover:underline">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;