import { FunctionComponent } from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";

interface RoutesProps {
  [key: string]: {
    title?: string;
    path: string;
    isNavigator: boolean;
    isAuthenticated?: boolean;
    alias: string;
    exact?: boolean;
    component: FunctionComponent;
  };
}

const ROUTES: RoutesProps = {
  HOME: {
    title: "Home",
    path: "/",
    isNavigator: true,
    isAuthenticated: true,
    alias: "HOME",
    exact: true,
    component: Home,
  },
  LOGIN: {
    title: "Login",
    path: "/log-in",
    isNavigator: false,
    alias: "HOME",
    component: Login,
  },
  ABOUT: {
    title: "About",
    path: "/about",
    isNavigator: true,
    isAuthenticated: true,
    alias: "HOME",
    exact: true,
    component: About,
  },
  NOTFOUND: {
    path: "/*",
    isNavigator: false,
    isAuthenticated: true,
    alias: "HOME",
    component: Notfound,
  },
};

export default ROUTES;
