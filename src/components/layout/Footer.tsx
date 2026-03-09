import { LogoMark } from "@coinbase/cds-web/icons";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <LogoMark size={32} />
        </div>
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
              <li>
                <a href="#">Legal & privacy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
              <li>
                <a href="#">Cookie preferences</a>
              </li>
              <li>
                <a href="#">Digital Asset Disclosures</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Individuals</h4>
            <ul>
              <li>
                <a href="#">Buy & sell</a>
              </li>
              <li>
                <a href="#">Earn free crypto</a>
              </li>
              <li>
                <a href="#">Base App</a>
              </li>
              <li>
                <a href="#">Coinbase One</a>
              </li>
              <li>
                <a href="#">Debit Card</a>
              </li>
            </ul>

            <h4>Businesses</h4>
            <ul>
              <li>
                <a href="#">Asset Listings</a>
              </li>
              <li>
                <a href="#">Coinbase Business</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Commerce</a>
              </li>
              <li>
                <a href="#">Token Manager</a>
              </li>
            </ul>

            <h4>Institutions</h4>
            <ul>
              <li>
                <a href="#">Prime</a>
              </li>
              <li>
                <a href="#">Staking</a>
              </li>
              <li>
                <a href="#">Exchange</a>
              </li>
              <li>
                <a href="#">International Exchange</a>
              </li>
              <li>
                <a href="#">Derivatives Exchange</a>
              </li>
              <li>
                <a href="#">Verfied Pools</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li>
                <a href="#">Developer Platform</a>
              </li>
              <li>
                <a href="#">Base</a>
              </li>
              <li>
                <a href="#">Server Wallets</a>
              </li>
              <li>
                <a href="#">Embedded Wallets</a>
              </li>
              <li>
                <a href="#">Base Accounts (Smart Wallets)</a>
              </li>
              <li>
                <a href="#">Onramp & Offramp</a>
              </li>
              <li>
                <a href="#">x402</a>
              </li>
              <li>
                <a href="#">Trade API</a>
              </li>
              <li>
                <a href="#">Paymaster</a>
              </li>
              <li>
                <a href="#">OnchainKit</a>
              </li>
              <li>
                <a href="#">Data API</a>
              </li>
              <li>
                <a href="#">Verifications</a>
              </li>
              <li>
                <a href="#">Node</a>
              </li>
              <li>
                <a href="#">AgentKit</a>
              </li>
              <li>
                <a href="#">Staking</a>
              </li>
              <li>
                <a href="#">Faucet</a>
              </li>
              <li>
                <a href="#">Exchange API</a>
              </li>
              <li>
                <a href="#">International Exchange API</a>
              </li>
              <li>
                <a href="#">Prime API</a>
              </li>
              <li>
                <a href="#">Derivatives API</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#">ID verification</a>
              </li>
              <li>
                <a href="#">Account information</a>
              </li>
              <li>
                <a href="#">Payment methods</a>
              </li>
              <li>
                <a href="#">Account access</a>
              </li>
              <li>
                <a href="#">Supported crypto</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>

            <h4>Asset prices</h4>
            <ul>
              <li>
                <a href="#">Bitcoin price</a>
              </li>
              <li>
                <a href="#">Ethereum price</a>
              </li>
              <li>
                <a href="#">Solana price</a>
              </li>
              <li>
                <a href="#">XRP price</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Learn</h4>
            <ul>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Market statistics</a>
              </li>
              <li>
                <a href="#">Coinbase Bytes newsletter</a>
              </li>
            </ul>

            <h4>Stock Prices</h4>
            <ul>
              <li>
                <a href="#">NVIDIA price</a>
              </li>
              <li>
                <a href="#">Apple Price</a>
              </li>
              <li>
                <a href="#">Microsoft price</a>
              </li>
              <li>
                <a href="#">Amazon price</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" className="social-link" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
        <div className="footer-bottom-content">
          <div className="footer-legal">
            <div className="footer-copyright">
              <span>© 2026 Coinbase</span>
              <span className="separator">•</span>
              <a href="#">Privacy</a>
              <span className="separator">•</span>
              <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer-language">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>Global</span>
              <span className="separator">•</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
