import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "../pages/CriarConta";
import ErrendsList from "../pages/ListaRecados";

import Login from "../pages/Login";
import ErrandsFile from "../pages/RecArquivado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/errends",
    element: <ErrendsList />,
  },
  { path: "/arquivarecados", element: <ErrandsFile /> },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
