import NavBar from "../components/NavBar";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  let allValues = JSON.parse(
    localStorage.getItem("todo") ? localStorage.getItem("todo") : []
  );
  return (
    <>
      <NavBar />
      <div className="todo_container">
        {allValues.map((value, index) => (
          <div className="single_todo">
            {value}
            <Link to={`/view/${index}`}>
              <AiFillEye
                size={"20px"}
                style={{ cursor: "pointer", color: "black" }}
              ></AiFillEye>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default HomePage;
