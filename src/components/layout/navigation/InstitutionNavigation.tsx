import "../../../styles/navbar.css";
import { Icon } from "@coinbase/cds-web/icons/Icon";

function InstitutionNavigation() {
  return (
    <div className="nav-bar-bottom inst-nav">
      <div className="inst-column">
        <span className="inst-column-header">Prime &nbsp; ›</span>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="primePoduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Trading and Financing</h4>
            <p>Professional prime brokerage services</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="custodyProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Custody</h4>
            <p>Securely store all your digital assets</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="percentage" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Staking</h4>
            <p>Explore staking across our products</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="blockchain" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Onchain Wallet</h4>
            <p>Institutional-grade wallet to get onchain</p>
          </div>
        </a>
      </div>
      <div className="inst-column">
        <span className="inst-column-header">Markets</span>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="exchangeProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Exchange</h4>
            <p>Spot markets for high-frequency trading</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="globe" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>International Exchange</h4>
            <p>Access perpetual futures markets</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="derivativesProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Derivatives Exchange</h4>
            <p>Trade an accessible futures market</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="verifiedPools" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Verified Pools</h4>
            <p>Transparent, verified liquidity pools</p>
          </div>
        </a>
      </div>
      <div className="nav-bottom-right">
        <div className="nav-bottom-featured-img">
          <img
            src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png"
            alt="Our clients"
          />
        </div>
        <div className="nav-bottom-featured-text">
          <h3>Our clients</h3>
          <p>Trusted by institutions and government.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default InstitutionNavigation;
