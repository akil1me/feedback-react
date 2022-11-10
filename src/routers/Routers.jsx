import { useRoutes } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import Detail from "../pages/Detail/Detail";
import { EditeFeedBack } from "../pages/EiteFeedback/EditeFeedback";
import NewFeedBack from "../pages/NewFeedback/NewFeedback";
import Suggestions from "../pages/Suggestions/Suggestions";

const routes = [
  {
    path: "/",
    element: <Suggestions />,
  },

  {
    path: "*",
    element: <NotFound />,
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
    children: [
      {
        path: "",
        element: <Detail />,
      },

      {
        path: "edite-feedback",
        element: <EditeFeedBack />
      }
    ]
  }
]

const Routers = () => {
  const elements = useRoutes(routes);

  return elements;
}

export default Routers;