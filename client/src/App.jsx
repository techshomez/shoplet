import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductPage from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
