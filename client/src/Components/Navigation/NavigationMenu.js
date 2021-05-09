import Login from "../../Views/Auth/Login";

const Menus = [
  {
    title: "Recipes",
    path: "/recipes",
    classname: "nav--link",
    component: <Login />,
  },
  {
    title: "Login",
    path: "/login",
    classname: "nav--link-btn",
    component: <Login />,
  },
  {
    title: "Register",
    path: "/register",
    classname: "nav--link-btn",
    component: <Login />,
  },
];

export default Menus;
