import AuthBtn from "../common/AuthBtn";

function Hero4() {
  return (
    <div className="hero3">
      <section className="hero3-section-2">
        <h1 className="hero3-title">Zero trading fees, more rewards.</h1>
        <p className="hero1-subtitle">
          Get more out of crypto with one membership: zero trading fees, boosted
          rewards, priority support, and more.
        </p>
        <AuthBtn variant="black">Claim free trial</AuthBtn>
      </section>
      <section className="hero3-section-1">
        <img
          src="https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/f0fa52750499d9b1691f62880906ff3e/zero_fees_us.png?fm=avif&w=1320&h=1320&q=65"
          alt="Advanced trading tools"
        />
      </section>
    </div>
  );
}

export default Hero4;
