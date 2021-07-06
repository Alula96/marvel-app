import { Redirect, Route, Switch } from "react-router-dom";
import ComicsPage from "@features/comics/pages/ComicsPage";
import HomePage from "@features/home/pages/HomePage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/comics" component={ComicsPage}/>
      <Redirect from="/**" exact to="/home" />
    </Switch>
  );
};

export default Routes;
