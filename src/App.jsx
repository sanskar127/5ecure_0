import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Form from "./Pages/Form/Form"
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Form/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
