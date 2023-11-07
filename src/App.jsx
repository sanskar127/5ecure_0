import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Form from "./Pages/Form/Form"

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
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
