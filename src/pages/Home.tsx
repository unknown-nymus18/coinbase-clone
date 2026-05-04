import { useEffect, useState } from "react";
import CryptoBasics from "../components/layout/CryptoBasics";
import Footer from "../components/layout/Footer";
import Hero1 from "../components/layout/Hero1";
import Hero2 from "../components/layout/Hero2";
import Hero3 from "../components/layout/Hero3";
import Hero4 from "../components/layout/Hero4";
import Hero5 from "../components/layout/Hero5";
import Hero6 from "../components/layout/Hero6";
import NavigationBar from "../components/layout/NavigationBar";
import "../styles/navbar.css";
import Api from "../services/api";

function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    Api.getProfile()
      .then((userData) => {
        setUser(userData);
        console.log(userData);
      })
      .catch(() => {
        setUser(null);
      });

    Api.fetchCrypto()
      .then((data) => {
        console.log("Crypto data:", data);
      })
      .catch((error) => {
        console.error("Error fetching crypto data:", error);
      });

    Api.fetchGainers().then((response) => {
      console.log("gainers", response);
    });
    Api.fetchNewCrypto().then((response) => {
      console.log("new", response);
    });
  }, []);
  return (
    <>
      <NavigationBar user={user} onLogout={() => setUser(null)}></NavigationBar>
      <div className="navbar-spacer"></div>
      {/* {user && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f0f2f5",
          }}
        >
          <h2>Welcome back, {user.name}!</h2>
        </div>
      )} */}
      <Hero1></Hero1>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Hero4></Hero4>
      <Hero5></Hero5>
      <CryptoBasics></CryptoBasics>
      <Hero6></Hero6>
      <Footer></Footer>
    </>
  );
}
export default Home;
