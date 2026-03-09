import React from "react";
import { Icon } from "@coinbase/cds-web/icons/Icon";

interface NewCryptoCardProps {
  symbol: string;
  name: string;
  fullName: string;
  addedDate: string;
  iconColor: string;
}

function NewCryptoCard({
  symbol,
  name,
  fullName,
  addedDate,
  iconColor,
}: NewCryptoCardProps) {
  return (
    <div className="new-crypto-card">
      <div className="new-crypto-icon" style={{ backgroundColor: iconColor }}>
        <span className="new-crypto-symbol">{symbol.charAt(0)}</span>
      </div>
      <div className="new-crypto-info">
        <p className="crypto-symbol-text">{symbol}</p>
        <p className="crypto-full-name">{fullName}</p>
        <p className="crypto-added-date">Added {addedDate}</p>
      </div>
    </div>
  );
}

function NewOnCoinbase() {
  const newCryptos = [
    {
      symbol: "HYPE",
      name: "HYPE",
      fullName: "Hyperliquid",
      addedDate: "Feb 5",
      iconColor: "#2C2C2C",
    },
    {
      symbol: "JUPITER",
      name: "JUPITER",
      fullName: "Jupiter",
      addedDate: "Dec 9",
      iconColor: "#00D4FF",
    },
    {
      symbol: "SOL",
      name: "SOL",
      fullName: "Solana",
      addedDate: "Jan 15",
      iconColor: "#9945FF",
    },
    {
      symbol: "AVAX",
      name: "AVAX",
      fullName: "Avalanche",
      addedDate: "Jan 8",
      iconColor: "#E84142",
    },
    {
      symbol: "MATIC",
      name: "MATIC",
      fullName: "Polygon",
      addedDate: "Dec 20",
      iconColor: "#8247E5",
    },
  ];

  return (
    <div className="new-on-coinbase">
      <div className="new-on-coinbase-header">
        <div>
          <h2>New on Coinbase</h2>
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

      <div className="new-cryptos-row">
        {newCryptos.map((crypto, index) => (
          <NewCryptoCard
            key={index}
            symbol={crypto.symbol}
            name={crypto.name}
            fullName={crypto.fullName}
            addedDate={crypto.addedDate}
            iconColor={crypto.iconColor}
          />
        ))}
      </div>
    </div>
  );
}

export default NewOnCoinbase;
