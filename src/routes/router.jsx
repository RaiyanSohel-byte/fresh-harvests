import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../pages/ProductDetails";
import AddProducts from "../pages/Dashboard/AddProducts";
import ManageProducts from "../pages/Dashboard/ManageProducts";

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
