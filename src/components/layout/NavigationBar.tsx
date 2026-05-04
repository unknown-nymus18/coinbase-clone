import { LogoMark } from "@coinbase/cds-web/icons/LogoMark";
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
import {
  NAVIGATION_ROOT_LINKS,
  type NavigationInput,
  type NavigationSectionKey,
} from "./navigation/navigationData";
import Api from "../../services/api";

interface User {
  name: String;
  email: String;
}
interface Props {
  input?: NavigationInput;
  user?: User;
  onLogout?: () => void;
}

type MobileSection = NavigationSectionKey;

function NavigationBar({ user, onLogout }: Props) {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [link, setLink] = useState<Props["input"]>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection | null>(
    null,
  );
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
                {NAVIGATION_ROOT_LINKS.map((item) => (
                  <li
                    key={item.label}
                    onMouseOver={onHover}
                    value={item.section ?? ""}
                  >
                    <a href={item.href ?? "#"}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="auth-section">
            <SearchBar />
            {!user ? (
              <>
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
              </>
            ) : (
              <>
                <p>{user.name}</p>
                <AuthBtn
                  className="navbar-signup-btn"
                  onClick={async () => {
                    await Api.logout();
                    if (onLogout) {
                      onLogout();
                    }
                    navigate("/");
                  }}
                  variant="secondary"
                >
                  Logout
                </AuthBtn>
              </>
            )}
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
              <MobileNavigationSection
                section={mobileSection}
                onNavigate={closeMobileMenu}
              />
            ) : (
              <>
                <div className="mobile-nav-links">
                  {NAVIGATION_ROOT_LINKS.map((item) =>
                    item.section ? (
                      <button
                        key={item.label}
                        type="button"
                        className="mobile-nav-link"
                        onClick={() =>
                          openMobileSection(item.section as MobileSection)
                        }
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
                        href={item.href ?? "#"}
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

function MobileNavigationSection({
  section,
  onNavigate,
}: {
  section: MobileSection;
  onNavigate: () => void;
}) {
  switch (section) {
    case "individuals":
      return <IndividualNavigation variant="mobile" onNavigate={onNavigate} />;
    case "businesses":
      return <BusinessNavigation variant="mobile" onNavigate={onNavigate} />;
    case "institutions":
      return <InstitutionNavigation variant="mobile" onNavigate={onNavigate} />;
    case "developers":
      return <DevelopersNavigation variant="mobile" onNavigate={onNavigate} />;
    case "company":
      return <CompanyNavigation variant="mobile" onNavigate={onNavigate} />;
  }
}

export default NavigationBar;
