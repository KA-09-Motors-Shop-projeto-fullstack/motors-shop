import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import LoginPage from "../pages/Login";
import Profile from "../pages/Profile";
import SignupPage from "../pages/Signup";
import { HomePage } from "../pages/Homepage";
import { ProductPage } from "../pages/Productpage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/advertisements/:advertisementId" component={ProductPage} />
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
