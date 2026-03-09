import "../../../styles/navbar.css";
import { Icon } from "@coinbase/cds-web/icons/Icon";

function DevelopersNavigation() {
  return (
    <div className="nav-bar-bottom inst-nav">
      <div className="inst-column">
        <span className="inst-column-header">
          Coinbase Developer Platform &nbsp; ›
        </span>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="pay" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Payments</h4>
            <p>Fast and global stablecoin payments with a single integration</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="advancedTradeProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Trading</h4>
            <p>Launch crypto trading and custody for your users</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="wallet" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Wallets</h4>
            <p>Deploy customizable and scalable wallets for your business</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="currencies" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Stablecoins</h4>
            <p>Access USDC and Coinbase Custom Stablecoins</p>
          </div>
        </a>
      </div>
      <div className="inst-column">
        <span className="inst-column-header">Solutions for any company</span>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="bank" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Banks &amp; Brokerages</h4>
            <p>
              Secure, regulated offerings for retail, private banking, &amp;
              institutional clients
            </p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="card" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Payment Firms</h4>
            <p>
              Near-instant, low-cost, global payment rails for modern providers
            </p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="api" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Startups</h4>
            <p>Launch your business with the world's leader in crypto</p>
          </div>
        </a>
      </div>
      <div className="nav-bottom-right">
        <div className="nav-bottom-featured-img">
          <img
            src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg"
            alt="Developer Platform"
          />
        </div>
        <div className="nav-bottom-featured-text">
          <h3>World class crypto infrastructure.</h3>
          <p>Discover Coinbase's complete crypto-as-a-service platform.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default DevelopersNavigation;
