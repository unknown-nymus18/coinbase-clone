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

function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="navbar-spacer"></div>
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
