import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        Todo App
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add">
            <div>Add ToDo</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
