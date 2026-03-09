import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/hero2.css";
import AuthBtn from "../common/AuthBtn";

type Hero2Tab = "tradable" | "topGainers" | "newOnCoinbase";

interface AssetRow {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeType: "positive" | "neutral";
  color: string;
}

const HERO2_DATA: Record<Hero2Tab, AssetRow[]> = {
  tradable: [
    {
      name: "Bitcoin",
      symbol: "₿",
      price: "GHS 745,557.71",
      change: "↗ 2.59%",
      changeType: "positive",
      color: "#f7931a",
    },
    {
      name: "Ethereum",
      symbol: "Ξ",
      price: "GHS 21,817.67",
      change: "↗ 4.18%",
      changeType: "positive",
      color: "#627eea",
    },
    {
      name: "Tether",
      symbol: "₮",
      price: "GHS 10.78",
      change: "↗ 0.00%",
      changeType: "positive",
      color: "#26a17b",
    },
    {
      name: "BNB",
      symbol: "◇",
      price: "GHS 4,877.71",
      change: "↗ 3.41%",
      changeType: "positive",
      color: "#f0b90b",
    },
    {
      name: "XRP",
      symbol: "✕",
      price: "GHS 14.72",
      change: "↗ 1.39%",
      changeType: "positive",
      color: "#23292f",
    },
    {
      name: "USDC",
      symbol: "$",
      price: "GHS 10.78",
      change: "--",
      changeType: "neutral",
      color: "#2775ca",
    },
  ],
  topGainers: [
    {
      name: "Solana",
      symbol: "S",
      price: "GHS 2,118.24",
      change: "↗ 8.82%",
      changeType: "positive",
      color: "#14f195",
    },
    {
      name: "Chainlink",
      symbol: "L",
      price: "GHS 214.62",
      change: "↗ 7.31%",
      changeType: "positive",
      color: "#2a5ada",
    },
    {
      name: "Avalanche",
      symbol: "A",
      price: "GHS 462.10",
      change: "↗ 6.88%",
      changeType: "positive",
      color: "#e84142",
    },
    {
      name: "Dogecoin",
      symbol: "Ð",
      price: "GHS 2.84",
      change: "↗ 5.40%",
      changeType: "positive",
      color: "#c2a633",
    },
    {
      name: "Litecoin",
      symbol: "Ł",
      price: "GHS 1,268.71",
      change: "↗ 4.12%",
      changeType: "positive",
      color: "#345c9c",
    },
    {
      name: "Stellar",
      symbol: "*",
      price: "GHS 1.78",
      change: "↗ 3.65%",
      changeType: "positive",
      color: "#0c0d14",
    },
  ],
  newOnCoinbase: [
    {
      name: "Pyth",
      symbol: "P",
      price: "GHS 6.21",
      change: "↗ 12.11%",
      changeType: "positive",
      color: "#1b1b1b",
    },
    {
      name: "Wormhole",
      symbol: "W",
      price: "GHS 8.14",
      change: "↗ 9.24%",
      changeType: "positive",
      color: "#6d5dfc",
    },
    {
      name: "Saga",
      symbol: "S",
      price: "GHS 14.88",
      change: "↗ 7.92%",
      changeType: "positive",
      color: "#0ea5e9",
    },
    {
      name: "ZetaChain",
      symbol: "Z",
      price: "GHS 11.03",
      change: "↗ 6.77%",
      changeType: "positive",
      color: "#8b5cf6",
    },
    {
      name: "Tensor",
      symbol: "T",
      price: "GHS 4.90",
      change: "↗ 5.28%",
      changeType: "positive",
      color: "#f97316",
    },
    {
      name: "Jito",
      symbol: "J",
      price: "GHS 36.45",
      change: "↗ 4.06%",
      changeType: "positive",
      color: "#10b981",
    },
  ],
};

const TAB_LABELS: Record<Hero2Tab, string> = {
  tradable: "Tradable",
  topGainers: "Top gainers",
  newOnCoinbase: "New on Coinbase",
};

function Hero2() {
  const [activeTab, setActiveTab] = useState<Hero2Tab>("tradable");
  const navigate = useNavigate();

  const activeAssets = useMemo(() => HERO2_DATA[activeTab], [activeTab]);

  return (
    <section className="hero2">
      <div className="hero2-copy">
        <h2>Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h2>
        <p>
          Simply and securely buy, sell, and manage hundreds of
          cryptocurrencies.
        </p>
        <AuthBtn
          variant="black"
          className="hero2-button"
          onClick={() => navigate("/explore")}
        >
          <span className="hero2-button-label">See more assets</span>
          <span className="hero2-button-icon" aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 7H11.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M7.5 3L11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </AuthBtn>
      </div>

      <div className="hero2-market-card">
        <div className="hero2-tabs" role="tablist" aria-label="Market views">
          {(Object.keys(TAB_LABELS) as Hero2Tab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`hero2-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>

        <div className="hero2-list">
          {activeAssets.map((asset) => (
            <div key={`${activeTab}-${asset.name}`} className="hero2-row">
              <div className="hero2-asset">
                <span
                  className="hero2-asset-icon"
                  style={{ backgroundColor: asset.color }}
                  aria-hidden="true"
                >
                  {asset.symbol}
                </span>
                <span className="hero2-asset-name">{asset.name}</span>
              </div>

              <div className="hero2-price-block">
                <div className="hero2-price">{asset.price}</div>
                <div
                  className={`hero2-change ${
                    asset.changeType === "positive" ? "positive" : "neutral"
                  }`}
                >
                  {asset.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero2;
