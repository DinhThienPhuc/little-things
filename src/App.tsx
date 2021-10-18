import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginLayout from "./layouts/Login";
import DefaultLayout from "./layouts/Default";
import ROUTES from "./auth/routes";
import AuthRoute from "./auth/AuthRoute";

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute path={ROUTES.LOGIN.path} exact Component={LoginLayout} />
        <Route path={ROUTES.HOME.path} component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;
