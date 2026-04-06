import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="p-6 text-center">
      <h2>404</h2>
      <p>{location.pathname}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;