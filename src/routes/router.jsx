import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../pages/ProductDetails";
import AddProducts from "../pages/Dashboard/AddProducts";
import ManageProducts from "../pages/Dashboard/ManageProducts";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Products />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AddProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
    ],
  },
]);
