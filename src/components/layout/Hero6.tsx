import AuthBtn from "../common/AuthBtn";
import "../../styles/hero1.css";
import "../../styles/hero3.css";

function Hero6() {
  return (
    <div className="hero3">
      <section className="hero3-section-2">
        <h1 className="hero3-title">Take control of your money</h1>
        <p className="hero1-subtitle">
          Start your portfolio today and discover crypto
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
      </section>
      <section className="hero3-section-1">
        <img
          id="take-control-of-money"
          src="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png"
          alt="Advanced trading tools"
        />
      </section>
    </div>
  );
}

export default Hero6;
