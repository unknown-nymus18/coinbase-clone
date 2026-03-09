import "../../styles/hero1.css";
import AuthBtn from "../common/AuthBtn";

function Hero1() {
  return (
    <div className="hero1">
      <section className="hero1-left">
        <div className="phone-mockup">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=avif&w=1800&h=1800&q=65"
            alt="Coinbase mobile app interface"
            className="phone-image"
          />
          <p>
            Stocks and prediction markets not available in your jurisdiction.
          </p>
        </div>
      </section>
      <section className="hero1-right">
        <div className="hero1-content">
          <h1 className="hero1-title">The future of finance is here.</h1>
          <p className="hero1-subtitle">
            Trade crypto and more on a platform you can trust.
          </p>
          <div className="hero1-signup">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="hero1-email-input"
            />
            <AuthBtn variant="secondary" className="hero1-signup-btn">
              Sign up
            </AuthBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero1;
