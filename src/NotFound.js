const { Link } = require("react-router-dom");

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The page cannot be found.</p>
      <Link to="/"> Back to the HomePage...</Link>
    </div>
  );
};

export default NotFound;
