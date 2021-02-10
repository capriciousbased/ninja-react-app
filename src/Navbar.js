const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/" target="_blank">
          Home
        </a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
