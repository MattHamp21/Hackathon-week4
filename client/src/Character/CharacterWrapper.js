import { Link, Outlet } from "react-router-dom";

const CharacterWrapper = () => {
  return (
    <div>
      <div className="navbar">
        <hr />
        <Link to="/characters">Character List</Link>
        <Link to="/characters/new">New Character</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default CharacterWrapper;
