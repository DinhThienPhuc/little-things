import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from "./auth/AuthRoute";
import LoginLayout from "./layouts/Login";
import DefaultLayout from "./layouts/Default";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import NotfoundPage from "./pages/Notfound";
import AboutPage from "./pages/About";
import ROUTES from "./auth/routes";

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute
          exact
          path={ROUTES.LOGIN.path}
          Component={() => (
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          )}
        />
        <AuthRoute
          path={ROUTES.HOME.path}
          exact
          Component={() => (
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          )}
        />
        <AuthRoute
          path={ROUTES.ABOUT.path}
          exact
          Component={() => (
            <DefaultLayout>
              <AboutPage />
            </DefaultLayout>
          )}
        />
        <Route path={ROUTES.NOTFOUND.path} component={NotfoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
