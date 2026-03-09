import { useState } from "react";
import { ThemeProvider } from "@coinbase/cds-web/system";
import { defaultTheme } from "@coinbase/cds-web/themes/defaultTheme";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore.js";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Learn from "./pages/Learn.tsx";

const route = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/learn", element: <Learn /> },
]);

function App() {
  return (
    <ThemeProvider theme={defaultTheme} activeColorScheme="light">
      <RouterProvider router={route}></RouterProvider>
    </ThemeProvider>
  );
}
export default App;
