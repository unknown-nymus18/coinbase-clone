import "../../../styles/navbar.css";
import { Icon } from "@coinbase/cds-web/icons/Icon";

function BusinessNavigation() {
  return (
    <div className="nav-bar-bottom">
      <div className="nav-bottom-left">
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="coinbase" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Business</h4>
            <p>Crypto trading and payments for startups and SMBs</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="card" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Payments</h4>
            <p>The stablecoin payments stack for commerce platforms</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="assetHubProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Asset Listings</h4>
            <p>List your asset on Coinbase</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="assetManagementProduct" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Token Manager</h4>
            <p>The platform for token distributions, vesting, and lockups</p>
          </div>
        </a>
      </div>
      <div className="nav-bottom-right">
        <div className="nav-bottom-featured-img">
          <img
            src="https://static-assets.coinbase.com/growth/acquisition/global-nav/onchain_payment_protocol.png"
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

export default BusinessNavigation;
