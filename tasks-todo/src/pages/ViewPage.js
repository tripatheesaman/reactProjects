import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ViewPage = () => {
  let history = useHistory();
  return (
    <>
      <NavBar></NavBar>
      <h1>Details about your task:</h1>
      <br />
      <button
        style={{ backgroundColor: "red", height: "50px", width: "100px" }}
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </button>
    </>
  );
};
export default ViewPage;
