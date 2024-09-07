import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout";
import TablePage, { loader } from "./pages/TablePage";
import HomePage from "./pages/HomePage";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        index: true,
        element: <TablePage />,
        loader: loader(store),
      },
      { path: "home", element: <HomePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
