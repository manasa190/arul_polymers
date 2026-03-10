import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Products } from "./components/pages/Products";
import { Contact } from "./components/pages/Contact";
import { Quality } from "./components/pages/Quality";
import { RD } from "./components/pages/RD";
import { Infrastructure } from "./components/pages/Infrastructure";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", Component: Home },
      { path: "about", Component: About },
      { path: "quality", Component: Quality },
      { path: "rd", Component: RD },
      { path: "infrastructure", Component: Infrastructure },
      { path: "products", Component: Products },
      { path: "contact", Component: Contact },
    ],
  },
]);
