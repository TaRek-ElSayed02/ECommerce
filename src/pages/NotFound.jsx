import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
};

export default NotFound;
