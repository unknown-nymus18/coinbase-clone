import { Link, useNavigate } from "react-router-dom";
import "../../../styles/navbar.css";
import { Icon } from "@coinbase/cds-web/icons/Icon";

function IndividualNavigation() {
  const navigate = useNavigate();
  return (
    <div className="nav-bar-bottom">
      <div className="nav-bottom-left">
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="coinbase" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Buy and sell</h4>
            <p>Buy sell and use crypto</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="baseSquare" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Base App</h4>
            <p>Post, earn, trade and chat, all in one place</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="coinbaseOne" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Coinbase One</h4>
            <p>Get zero trading fees and more</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="diamond" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Private client</h4>
            <p>For trusts, family offices, UHNWi's</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="chainLink" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Onchain</h4>
            <p>Dive into the world of onchain</p>
          </div>
        </a>
        <Link to="/learn" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="lightbulb" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Learn</h4>
            <p>Crytpo tips and guides</p>
          </div>
        </Link>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="advancedTradeProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Advanced</h4>
            <p>FProfessional grading tools</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="percentage" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Earn</h4>
            <p>Stake your crypto and earn rewards</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="diamond" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Coinbase Wealth</h4>
            <p>Insitutional grade services for UHNWi's</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="paymentCard" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Credit Card</h4>
            <p>Get up to 4% bitcoin back</p>
          </div>
        </a>
      </div>
      <div className="nav-bottom-right">
        <div className="nav-bottom-featured-img">
          <img
            src="https://static-assets.coinbase.com/marketing/2025-q4-event/navigation-upsell.png"
            alt="Commerce Payments Protocol"
          />
        </div>
        <div className="nav-bottom-featured-text">
          <h3>Commerce Payments Protocol</h3>
          <p>A new standard for onchain payments.</p>
          <a href="#">Go to Payments</a>
        </div>
      </div>
    </div>
  );
}

export default IndividualNavigation;
