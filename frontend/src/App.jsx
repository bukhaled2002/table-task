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

/* <main className="max-w-[380px] sm:max-w-screen-sm md:max-w-screen-md m-auto h-[100vh] ">
      <div className="bg-zinc-800 w-full flex flex-row text-white ">
        <div className="flex flex-col flex-nowrap flex-1">
          <h5>name</h5>
          <h5 className="bg-zinc-600">name</h5>
          <h5>name</h5>
          <h5 className="bg-zinc-600">name</h5>
        </div>
        <div className="flex flex-col flex-nowrap flex-1 ">
          <h5>name</h5>
          <h5 className="bg-zinc-600">name</h5>

          <h5>name</h5>
          <h5 className="bg-zinc-600">name</h5>
        </div>
        <div className="flex flex-col flex-nowrap flex-1">
          <h5>name</h5>
          <h5>name</h5>
          <h5>name</h5>
          <h5>name</h5>
        </div>
        <div className="flex flex-col flex-nowrap flex-1">
          <h5>name</h5>
          <h5>name</h5>
          <h5>name</h5>
          <h5>name</h5>
        </div>
      </div>
    </main> */
