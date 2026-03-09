import React from "react";
import { Icon } from "@coinbase/cds-web/icons/Icon";

interface MoverCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  iconColor: string;
}

function MoverCard({
  symbol,
  name,
  price,
  change,
  isPositive,
  iconColor,
}: MoverCardProps) {
  return (
    <div className="mover-card">
      <div className="mover-icon" style={{ backgroundColor: iconColor }}>
        <span className="mover-symbol">{symbol.charAt(0)}</span>
      </div>
      <div className="mover-info">
        <p className="mover-name">{name}</p>
        <div className={`mover-change ${isPositive ? "positive" : "negative"}`}>
          <Icon
            name={isPositive ? "diagonalUpArrow" : "diagonalDownArrow"}
            size="s"
          />
          <span>{change}</span>
        </div>
        <p className="mover-price">{price}</p>
      </div>
    </div>
  );
}

function TopMovers() {
  const movers = [
    {
      symbol: "PL",
      name: "PLUME",
      price: "GHS 0.15",
      change: "22.44%",
      isPositive: true,
      iconColor: "#FF4500",
    },
    {
      symbol: "AL",
      name: "ALCX",
      price: "GHS 65.24",
      change: "20.18%",
      isPositive: false,
      iconColor: "#2C2C2C",
    },
    {
      symbol: "BT",
      name: "BITCOIN",
      price: "GHS 45,230",
      change: "5.67%",
      isPositive: true,
      iconColor: "#F7931A",
    },
    {
      symbol: "ET",
      name: "ETHEREUM",
      price: "GHS 3,250",
      change: "8.23%",
      isPositive: true,
      iconColor: "#627EEA",
    },
    {
      symbol: "AD",
      name: "CARDANO",
      price: "GHS 0.85",
      change: "3.45%",
      isPositive: false,
      iconColor: "#0033AD",
    },
  ];

  return (
    <div className="top-movers">
      <div className="top-movers-header">
        <div>
          <h2>Top movers</h2>
          <p>24hr change</p>
        </div>
        <div className="navigation-arrows">
          <button className="nav-arrow left">
            <Icon name="arrowLeft" size="s" />
          </button>
          <button className="nav-arrow right">
            <Icon name="arrowRight" size="s" />
          </button>
        </div>
      </div>

      <div className="movers-row">
        {movers.map((mover, index) => (
          <MoverCard
            key={index}
            symbol={mover.symbol}
            name={mover.name}
            price={mover.price}
            change={mover.change}
            isPositive={mover.isPositive}
            iconColor={mover.iconColor}
          />
        ))}
      </div>
    </div>
  );
}

export default TopMovers;
