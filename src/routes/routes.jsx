import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage}/>
      <Redirect from="/**" exact to="/home" />
    </Switch>
  );
};

export default Routes;
