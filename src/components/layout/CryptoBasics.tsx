import "../../styles/cryptobasics.css";
import "../../styles/hero3.css";
import "../../styles/hero1.css";
import AuthBtn from "../common/AuthBtn";
import CryptoInfo from "../common/CryptoInfo";

function CryptoBasics() {
  return (
    <div className="cryptobasics">
      <section className="cryptobasics-section-1">
        <div>
          <h1 className="hero3-title">
            New to crypto?
            <br /> Learn some
            <br /> crypto basics
          </h1>
        </div>
        <div>
          <p className="hero1-subtitle">
            Beginner guides, practical tips, and market updates for
            first-timers, experienced investors, and everyone in between
          </p>
          <AuthBtn variant="black">Read More</AuthBtn>
        </div>
      </section>
      <section className="cryptobasics-section-1">
        <CryptoInfo
          title={"USDC: The digital dollar for the global crypto economy"}
          subtitle={
            "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable. We co-founded the Centre "
          }
          imgUrl={
            "https://images.ctfassets.net/o10es7wu5gm1/2tI0D7cX30gXudggzQc3tr/b6181107533f98f9dcc64da96efacff8/0_4mVyVaU6yLa--GR_"
          }
        ></CryptoInfo>
        <CryptoInfo
          title={"Can crypto really replace your bank account?"}
          subtitle={
            "If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or the term “bankless” — the idea being that crypto can offer more control over your financial future than traditional finance. But how much of your financial lif"
          }
          imgUrl={
            "https://images.ctfassets.net/o10es7wu5gm1/2hqtyQztrvrBKvIizPZxaJ/42ad48711067c7d0ea45476331c20798/Replace_Bank.png"
          }
        ></CryptoInfo>
        <CryptoInfo
          imgUrl={
            "https://images.ctfassets.net/o10es7wu5gm1/5mufjKMH84IDeb8A0EGrtH/0438eeae827ffef404b935407ae7d780/Learn_Illustration_Ultimate_Guide_Bitcoin.png"
          }
          title="What is the best time to invest in crypto?"
          subtitle="Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of missing out, or fear of participating at all. When prices are fluctuating, how do you know when to buy or sell? Is there a “best” time to invest in crypto?"
        ></CryptoInfo>
      </section>
    </div>
  );
}

export default CryptoBasics;
