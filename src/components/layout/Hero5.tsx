import AuthBtn from "../common/AuthBtn";

function Hero5() {
  return (
    <div className="hero3">
      <section className="hero3-section-1">
        <img
          src="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=avif&w=1200&h=960&q=65"
          alt="Advanced trading tools"
        />
      </section>
      <section className="hero3-section-2">
        <h1 className="hero3-title">
          Countless ways to earn crypto with the Base App.
        </h1>
        <p className="hero1-subtitle">
          An everything app to trade, create, discover, and chat, all in one
          place.
        </p>
        <AuthBtn variant="black">Learn More</AuthBtn>
      </section>
    </div>
  );
}

export default Hero5;
