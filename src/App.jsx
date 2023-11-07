import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Welcome from './Pages/Welcome'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
