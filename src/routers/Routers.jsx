import { useRoutes } from "react-router-dom";
import Detail from "../pages/Detail/Detail";
import NewFeedBack from "../pages/NewFeedback/NewFeedback";
import Suggestions from "../pages/Suggestions/Suggestions";

const routes = [
  {
    path: "/",
    element: <Suggestions />,
  },

  {
    path: "/:key",
    element: <h3 className="text-center">404 page not Found</h3>,
  },

  {
    path: "/suggestions",
    children: [
      {
        path: "",
        element: <Suggestions />,
      },
      {
        path: "new-feedback",
        element: <NewFeedBack />,
      }
    ]
  },

  {
    path: "detail/:id",
    element: <Detail />
  }
]

const Routers = () => {
  const elements = useRoutes(routes);

  return elements;
}

export default Routers;