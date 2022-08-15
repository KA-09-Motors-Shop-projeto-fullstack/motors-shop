import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import { HomePage } from "../pages/Homepage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
