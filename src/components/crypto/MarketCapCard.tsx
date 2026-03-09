import React from "react";

interface MarketCapCardProps {
  title: string;
  value: string;
  change: string;
  isNegative?: boolean;
}

function MarketCapCard({
  title,
  value,
  change,
  isNegative = false,
}: MarketCapCardProps) {
  return (
    <div className="market-cap-card">
      <div className="market-cap-header">
        <h3 className="market-cap-title">{title}</h3>
      </div>

      <div className="market-cap-content">
        <div className="market-cap-value">
          <span className="value-text">{value}</span>
          <div
            className={`change-indicator ${isNegative ? "negative" : "positive"}`}
          >
            <span className="arrow">{isNegative ? "↓" : "↑"}</span>
            <span className="change-text">{change}</span>
          </div>
        </div>

        <div className="market-cap-chart">
          <svg
            width="100%"
            height="60"
            viewBox="0 0 200 60"
            className="chart-svg"
          >
            <polyline
              fill="none"
              stroke={isNegative ? "#ef4444" : "#10b981"}
              strokeWidth="2"
              points="10,45 25,40 40,35 55,38 70,30 85,25 100,28 115,20 130,35 145,30 160,25 175,20 190,25"
            />
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="0.5" fill="#e5e7eb" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MarketCapCard;
