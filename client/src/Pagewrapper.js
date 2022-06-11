import { Link, Outlet } from "react-router-dom";

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
        <Link className="links" to="/characters">
          Characters
        </Link>
        <Link className="links" to="/weapons">
          Weapon
        </Link>
        <Link className="links" to="/bonus">
          Bonus
        </Link>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
