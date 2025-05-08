
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="flex-grow bg-betgray flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-betblue mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="bg-betblue text-white py-3 px-8 rounded-md font-bold hover:bg-betblue-light transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
