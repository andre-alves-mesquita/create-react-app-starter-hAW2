import Teste from "../views/teste";
import Home from "../views/home";

const Routes = [
  {
    path: "/",
    element: <Teste></Teste>,
    breadcrumbName: "/404",
  },
  {
    path: "/home",
    element: <Home></Home>,
    breadcrumbName: "/404",
  },
];

export default Routes;
