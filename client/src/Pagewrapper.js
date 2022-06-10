const PageWrapper = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/games">
          Games
        </Link>
        <Link className="links" to="/character">
          Character
        </Link>
        <Link className="links" to="/wepons">
          Weapon
        </Link>
        <Link className="links" to="/bonus">
          Bonus
        </Link>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
