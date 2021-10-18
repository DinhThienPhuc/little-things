interface RoutesProps {
  [key: string]: {
    title?: string;
    path: string;
    isNavigator: boolean;
  };
}

const ROUTES: RoutesProps = {
  HOME: {
    title: "Home",
    path: "/",
    isNavigator: true,
  },
  LOGIN: {
    title: "Login",
    path: "/log-in",
    isNavigator: false,
  },
  ABOUT: {
    title: "About",
    path: "/about",
    isNavigator: true,
  },
  NOTFOUND: {
    path: "/*",
    isNavigator: false,
  },
};

export default ROUTES;
