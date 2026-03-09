import { Icon } from "@coinbase/cds-web/icons/Icon";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "../../../styles/navbar.css";
import {
  NAVIGATION_SECTIONS,
  type NavigationFeaturedCard,
  type NavigationItem,
  type NavigationSectionKey,
  type NavigationVariant,
} from "./navigationData";

export interface NavigationSectionProps {
  section: NavigationSectionKey;
  variant?: NavigationVariant;
  onNavigate?: () => void;
}

function NavigationSection({
  section,
  variant = "desktop",
  onNavigate,
}: NavigationSectionProps) {
  const data = NAVIGATION_SECTIONS[section];

  if (variant === "mobile") {
    return (
      <div className="mobile-submenu-list">
        {data.groups.map((group) => (
          <div
            key={group.heading ?? group.items[0]?.title ?? data.label}
            className="mobile-submenu-group"
          >
            {group.heading && (
              <span className="mobile-submenu-group-label">{group.heading}</span>
            )}
            {group.items.map((item) => (
              <NavigationItemLink
                key={item.title}
                item={item}
                className="mobile-submenu-item"
                onNavigate={onNavigate}
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
              </NavigationItemLink>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`nav-bar-bottom${data.layout === "columns" ? " inst-nav" : ""}`}>
      {data.layout === "grid" ? (
        <div className="nav-bottom-left">
          {data.groups[0].items.map((item) => (
            <NavigationItemLink key={item.title} item={item} className="nav-bottom-item">
              <span className="nav-bottom-icon">
                <Icon name={item.icon as never} size="m" />
              </span>
              <div className="nav-bottom-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </NavigationItemLink>
          ))}
        </div>
      ) : (
        data.groups.map((group) => (
          <div key={group.heading ?? group.items[0]?.title ?? data.label} className="inst-column">
            {group.heading && (
              <span className="inst-column-header">{group.heading}</span>
            )}
            {group.items.map((item) => (
              <NavigationItemLink
                key={item.title}
                item={item}
                className="nav-bottom-item"
              >
                <span className="nav-bottom-icon">
                  <Icon name={item.icon as never} size="m" />
                </span>
                <div className="nav-bottom-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </NavigationItemLink>
            ))}
          </div>
        ))
      )}
      {data.featured && <NavigationFeatured featured={data.featured} />}
    </div>
  );
}

interface NavigationItemLinkProps {
  children: ReactNode;
  className: string;
  item: NavigationItem;
  onNavigate?: () => void;
}

function NavigationItemLink({
  children,
  className,
  item,
  onNavigate,
}: NavigationItemLinkProps) {
  if (item.to) {
    return (
      <Link to={item.to} className={className} onClick={onNavigate}>
        {children}
      </Link>
    );
  }

  return (
    <a href={item.href ?? "#"} className={className} onClick={onNavigate}>
      {children}
    </a>
  );
}

function NavigationFeatured({
  featured,
}: {
  featured: NavigationFeaturedCard;
}) {
  const action = featured.to ? (
    <Link to={featured.to}>{featured.linkLabel}</Link>
  ) : (
    <a href={featured.href ?? "#"}>{featured.linkLabel}</a>
  );

  return (
    <div className="nav-bottom-right">
      <div className="nav-bottom-featured-img">
        <img src={featured.imageSrc} alt={featured.imageAlt} />
      </div>
      <div className="nav-bottom-featured-text">
        <h3>{featured.title}</h3>
        <p>{featured.description}</p>
        {action}
      </div>
    </div>
  );
}

export default NavigationSection;
