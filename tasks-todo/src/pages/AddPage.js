import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

const AddPage = () => {
  const history = useHistory();
  const todoText = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const allValues = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    let value = todoText.current.value;
    allValues.push(value);
    localStorage.setItem("todo", JSON.stringify(allValues ? allValues : []));
    history.replace("/");
  };
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h1>Add ToDo:</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter Your Task Here"
            ref={todoText}
          />
          <button>Save ToDo</button>
        </form>
      </div>
    </>
  );
};
export default AddPage;
