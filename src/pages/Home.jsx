import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const books = useSelector((state) => state.books.list);
  const categories = ["Fiction", "Non-Fiction"];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome 📚</h1>

      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="bg-gray-200 px-4 py-2 rounded">
            {cat}
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {books.map((b) => (
          <div key={b.id} className="bg-white p-4 rounded shadow hover:scale-105 transition">
            <h3 className="font-bold">{b.title}</h3>
            <p>{b.author}</p>
            <Link to={`/book/${b.id}`} className="text-blue-500">View →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;