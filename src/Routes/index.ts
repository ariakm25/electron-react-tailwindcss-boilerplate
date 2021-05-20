import { Home, About } from "../Pages";

export default [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
];
