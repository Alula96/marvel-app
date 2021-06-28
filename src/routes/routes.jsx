import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "../features/home/pages";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Redirect from="/**" exact to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
