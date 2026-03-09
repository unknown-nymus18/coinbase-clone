import { LogoMark } from "@coinbase/cds-web/icons/LogoMark";
import { Icon } from "@coinbase/cds-web/icons/Icon";
import "../../styles/navbar.css";
import AuthBtn from "../common/AuthBtn";
import { useState } from "react";
import IndividualNavigation from "./navigation/IndividualNavigaiton";
import BusinessNavigation from "./navigation/BusinessNavigation";
import InstitutionNavigation from "./navigation/InstitutionNavigation";
import DevelopersNavigation from "./navigation/DevelopersNavigaiton";
import CompanyNavigation from "./navigation/CompanyNavigation";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../common/SearchBar";

interface Props {
  input?:
    | ""
    | "individuals"
    | "businesses"
    | "institutions"
    | "developers"
    | "company";
}

type MobileSection = Exclude<Props["input"], "">;

interface MobileRootItem {
  label: string;
  href?: string;
  section?: MobileSection;
}

interface MobileSubmenuItem {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

const MOBILE_ROOT_LINKS: MobileRootItem[] = [
  { label: "Cryptocurrencies", href: "/cryptocurrencies" },
  { label: "Individuals", section: "individuals" },
  { label: "Businesses", section: "businesses" },
  { label: "Institutions", section: "institutions" },
  { label: "Developers", section: "developers" },
  { label: "Company", section: "company" },
];

const MOBILE_SUBMENU_CONTENT: Record<MobileSection, MobileSubmenuItem[]> = {
  individuals: [
    {
      title: "Buy and sell",
      description: "Buy, sell, and use crypto",
      icon: "coinbase",
    },
    {
      title: "Advanced",
      description: "Professional-grade trading tools",
      icon: "advancedTradeProduct",
    },
    {
      title: "Base App",
      description: "Post, earn, trade, and chat, all in one place",
      icon: "baseSquare",
    },
    {
      title: "Earn",
      description: "Stake your crypto and earn rewards",
      icon: "percentage",
    },
    {
      title: "Coinbase One",
      description: "Get zero trading fees and more",
      icon: "coinbaseOne",
    },
    {
      title: "Coinbase Wealth",
      description: "Institutional-grade services for UHNW",
      icon: "diamond",
    },
    {
      title: "Private Client",
      description: "For trusts, family offices, UHNWIs",
      icon: "diamond",
    },
    {
      title: "Credit Card",
      description: "Earn up to 4% bitcoin back",
      icon: "paymentCard",
    },
  ],
  businesses: [
    {
      title: "Business",
      description: "Crypto trading and payments for startups and SMBs",
      icon: "coinbase",
    },
    {
      title: "Payments",
      description: "The stablecoin payments stack for commerce platforms",
      icon: "card",
    },
    {
      title: "Asset Listings",
      description: "List your asset on Coinbase",
      icon: "assetHubProduct",
    },
    {
      title: "Token Manager",
      description: "The platform for token distributions, vesting, and lockups",
      icon: "assetManagementProduct",
    },
  ],
  institutions: [
    {
      title: "Trading and Financing",
      description: "Professional prime brokerage services",
      icon: "primePoduct",
    },
    {
      title: "Custody",
      description: "Securely store all your digital assets",
      icon: "custodyProduct",
    },
    {
      title: "Staking",
      description: "Explore staking across our products",
      icon: "percentage",
    },
    {
      title: "Onchain Wallet",
      description: "Institutional-grade wallet to get onchain",
      icon: "blockchain",
    },
    {
      title: "Exchange",
      description: "Spot markets for high-frequency trading",
      icon: "exchangeProduct",
    },
    {
      title: "International Exchange",
      description: "Access perpetual futures markets",
      icon: "globe",
    },
    {
      title: "Derivatives Exchange",
      description: "Trade an accessible futures market",
      icon: "derivativesProduct",
    },
    {
      title: "Verified Pools",
      description: "Transparent, verified liquidity pools",
      icon: "verifiedPools",
    },
  ],
  developers: [
    {
      title: "Payments",
      description: "Fast and global stablecoin payments with a single integration",
      icon: "pay",
    },
    {
      title: "Trading",
      description: "Launch crypto trading and custody for your users",
      icon: "advancedTradeProduct",
    },
    {
      title: "Wallets",
      description: "Deploy customizable and scalable wallets for your business",
      icon: "wallet",
    },
    {
      title: "Stablecoins",
      description: "Access USDC and Coinbase Custom Stablecoins",
      icon: "currencies",
    },
    {
      title: "Banks & Brokerages",
      description: "Secure, regulated offerings for retail and institutional clients",
      icon: "bank",
    },
    {
      title: "Payment Firms",
      description: "Near-instant, low-cost, global payment rails",
      icon: "card",
    },
    {
      title: "Startups",
      description: "Launch your business with the world's leader in crypto",
      icon: "api",
    },
  ],
  company: [
    {
      title: "About",
      description: "Powering the crypto economy",
      icon: "error",
    },
    {
      title: "Affiliates",
      description: "Help introduce the world to crypto",
      icon: "affiliates",
    },
    {
      title: "Blog",
      description: "Read the latest from Coinbase",
      icon: "blog",
    },
    {
      title: "Careers",
      description: "Work with us",
      icon: "briefcase",
    },
    {
      title: "Support",
      description: "Find answers to your questions",
      icon: "chatBubble",
    },
    {
      title: "Security",
      description: "The most trusted and secure platform",
      icon: "shield",
    },
  ],
};

function NavigationBar() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [link, setLink] = useState<Props["input"]>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection | null>(null);
  const navigate = useNavigate();

  function onHover(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const value = event.currentTarget.getAttribute("value") as Props["input"];
    setLink(value);
    setShowBottomNav(value !== "");
  }

  function onNotHover() {
    setShowBottomNav(false);
    setLink("");
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((previous) => {
      if (previous) {
        setMobileSection(null);
      }
      return !previous;
    });
    setShowBottomNav(false);
    setLink("");
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileSection(null);
  }

  function openMobileSection(section: MobileSection) {
    setMobileSection(section);
  }

  function goBackToMobileRoot() {
    setMobileSection(null);
  }

  return (
    <>
      <div onMouseLeave={onNotHover}>
        <div className="navbar">
          <div className="navbar-left">
            {mobileMenuOpen && mobileSection ? (
              <button
                type="button"
                className="mobile-nav-back"
                aria-label="Back"
                onClick={goBackToMobileRoot}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <div className="navbar-brand">
                <LogoMark size={32} />
              </div>
            )}
            <nav>
              <ul>
                <li onMouseOver={onHover} value={""}>
                  <a href="#">Cryptocurrencies</a>
                </li>
                <li onMouseOver={onHover} value="individuals">
                  <a href="#">Individuals</a>
                </li>
                <li onMouseOver={onHover} value="businesses">
                  <a href="#">Businesses</a>
                </li>
                <li onMouseOver={onHover} value="institutions">
                  <a href="#">Institutions</a>
                </li>
                <li onMouseOver={onHover} value="developers">
                  <a href="#">Developers</a>
                </li>
                <li onMouseOver={onHover} value="company">
                  <a href="#">Company</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="auth-section">
            <SearchBar></SearchBar>
            <AuthBtn
              className="navbar-signin-btn"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign in
            </AuthBtn>
            <AuthBtn
              className="navbar-signup-btn"
              onClick={() => {
                navigate("/signin");
              }}
              variant="secondary"
            >
              Sign up
            </AuthBtn>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {showBottomNav && <NavigationBarBottom input={link} />}
        {mobileMenuOpen && (
          <div className="mobile-nav-menu">
            {mobileSection ? (
              <div className="mobile-submenu-list">
                {MOBILE_SUBMENU_CONTENT[mobileSection].map((item) => (
                  <a
                    key={item.title}
                    href={item.href ?? "#"}
                    className="mobile-submenu-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-submenu-icon">
                      <Icon name={item.icon as never} size="m" />
                    </span>
                    <span className="mobile-submenu-copy">
                      <span className="mobile-submenu-title">{item.title}</span>
                      <span className="mobile-submenu-description">
                        {item.description}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <>
                <div className="mobile-nav-links">
                  {MOBILE_ROOT_LINKS.map((item) =>
                    item.section ? (
                      <button
                        key={item.label}
                        type="button"
                        className="mobile-nav-link"
                        onClick={() => openMobileSection(item.section!)}
                      >
                        <span>{item.label}</span>
                        <span className="mobile-nav-chevron" aria-hidden="true">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 6L15 12L9 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="mobile-nav-link no-chevron"
                        onClick={closeMobileMenu}
                      >
                        <span>{item.label}</span>
                      </a>
                    ),
                  )}
                </div>
                <div className="mobile-nav-footer">
                  <button
                    type="button"
                    className="mobile-nav-globe"
                    aria-label="Language"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M4.5 9H19.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4.5 15H19.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 4C14.3 6.2 15.5 9 15.5 12C15.5 15 14.3 17.8 12 20"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 4C9.7 6.2 8.5 9 8.5 12C8.5 15 9.7 17.8 12 20"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="mobile-nav-signin"
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/signin");
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {(showBottomNav || mobileMenuOpen) && (
        <div
          className="nav-overlay"
          onClick={() => {
            onNotHover();
            closeMobileMenu();
          }}
        ></div>
      )}
    </>
  );
}

function NavigationBarBottom({ input }: Props) {
  switch (input) {
    case "":
      return null;
    case "individuals":
      return <IndividualNavigation />;

    case "businesses":
      return <BusinessNavigation />;

    case "institutions":
      return <InstitutionNavigation />;

    case "developers":
      return <DevelopersNavigation />;

    case "company":
      return <CompanyNavigation />;
  }
}

export default NavigationBar;
