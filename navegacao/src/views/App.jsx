import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from '../components/layout/Menu';
import About from '../views/examples/About';
import Home from '../views/examples/Home';
import NotFound from '../views/examples/NotFound';
import Param from '../views/examples/Param';
import './App.css';

export default function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/param/:id", element: <Param /> },
    { path: "*", element: <NotFound /> },
  ]);


  return (
    <div className='App'>
      {/* <BrowserRouter> */}
      <Menu />

      <RouterProvider router={router} />
      {/* <Content />
      </BrowserRouter> */}
    </div>
  );
}