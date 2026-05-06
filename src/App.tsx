import { ThemeProvider } from "@coinbase/cds-web/system";
import { defaultTheme } from "@coinbase/cds-web/themes/defaultTheme";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Learn from "./pages/Learn";
import { useEffect, useState } from "react";
import Api from "./services/api";

function App() {
  const [user, setUser] = useState<any>(null);

  async function logout() {
    const response = Api.logout().then((response) => {
      setUser(null);
      // return response;
    });
  }

  function fetchUser() {
    Api.getProfile()
      .then((userData) => {
        if (userData?.error) {
          setUser(null);
          return;
        }
        setUser(userData);
        console.log(userData);
      })
      .catch(() => {
        setUser(null);
      });
  }

  const route = createBrowserRouter([
    { path: "/", element: <Home user={user} onLogout={() => logout()} /> },
    {
      path: "/explore",
      element: <Explore user={user} onLogout={() => logout()} />,
    },
    { path: "/signin", element: <SignIn onLogin={fetchUser} /> },
    { path: "/signup", element: <SignUp onLogin={fetchUser} /> },
    {
      path: "/learn",
      element: <Learn user={user} onLogout={() => logout()} />,
    },
  ]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme} activeColorScheme="light">
      <RouterProvider router={route}></RouterProvider>
    </ThemeProvider>
  );
}
export default App;
