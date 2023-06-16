import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ViewPage from "./pages/ViewPage";
const Routes = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/add" component={AddPage} exact></Route>
      <Route path="/view/:id" component={ViewPage} exact></Route>
    </>
  );
};
export default Routes;
