import "../../../styles/navbar.css";
import { Icon } from "@coinbase/cds-web/icons/Icon";

function CompanyNavigation() {
  return (
    <div className="nav-bar-bottom inst-nav">
      <div className="inst-column">
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="error" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>About</h4>
            <p>Powering the crypto economy</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="affiliates" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Affiliates</h4>
            <p>Help introduce the world to crypto</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="blog" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Blog</h4>
            <p>Read the latest from Coinbase</p>
          </div>
        </a>
      </div>
      <div className="inst-column">
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="briefcase" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Careers</h4>
            <p>Work with us</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="chatBubble" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Support</h4>
            <p>Find answers to your questions</p>
          </div>
        </a>
        <a href="#" className="nav-bottom-item">
          <span className="nav-bottom-icon">
            <Icon name="shield" size="m" />
          </span>
          <div className="nav-bottom-text">
            <h4>Security</h4>
            <p>The most trusted &amp; secure</p>
          </div>
        </a>
      </div>
      <div className="nav-bottom-right">
        <div className="nav-bottom-featured-img">
          <img
            src="https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png"
            alt="Coinbase Company"
          />
        </div>
        <div className="nav-bottom-featured-text">
          <h3>Learn all about Coinbase:</h3>
          <p>We're building the open financial system.</p>
          <a href="#">Create your account</a>
        </div>
      </div>
    </div>
  );
}

export default CompanyNavigation;
