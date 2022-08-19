import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import { HomePage } from "../pages/Homepage";
import { ProductPage } from "../pages/Productpage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product" component={ProductPage} />

      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
