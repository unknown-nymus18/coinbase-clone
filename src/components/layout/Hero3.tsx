import "../../styles/hero1.css";
import "../../styles/hero3.css";
import AuthBtn from "../common/AuthBtn";
function Hero3() {
  return (
    <div className="hero3">
      <section className="hero3-section-1">
        <img
          src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png?fm=avif&w=2014&h=1612&q=65"
          alt="Advanced trading tools"
        />
      </section>
      <section className="hero3-section-2">
        <h1 className="hero3-title">
          Powerful tools, designed for the advanced trader.
        </h1>
        <p className="hero1-subtitle">
          Powerful analytical tools with the safety and security of Coinbase
          deliver the ultimate trading experience. Tap into sophisticated
          charting capabilities, real-time order books, and deep liquidity
          across hundreds of markets.
        </p>
        <AuthBtn variant="black">Start trading</AuthBtn>
      </section>
    </div>
  );
}

export default Hero3;
