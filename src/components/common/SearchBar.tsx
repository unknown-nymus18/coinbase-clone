import { useEffect, useRef, useState } from "react";
import "../../styles/searchbar.css";

const CATEGORIES = [
  "Top",
  "Crypto",
  "Stocks",
  "Predictions",
  "Perpetuals",
  "Futures",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Asset {
  name: string;
  sub: string;
  vol: string;
  fund: string;
  price: string;
  change: string;
  color: string;
  symbol: string;
  categories: Category[];
}

const ASSETS: Asset[] = [
  {
    name: "BTC PERP",
    sub: "CDE",
    vol: "323.3M",
    fund: "-0.0003%",
    price: "66,110.00",
    change: "1.72%",
    color: "#f7931a",
    symbol: "B",
    categories: ["Top", "Crypto", "Perpetuals", "Futures"],
  },
  {
    name: "ETH PERP",
    sub: "CDE",
    vol: "75.3M",
    fund: "0.0003%",
    price: "1,946.00",
    change: "1.17%",
    color: "#627eea",
    symbol: "E",
    categories: ["Top", "Crypto", "Perpetuals", "Futures"],
  },
  {
    name: "SOL PERP",
    sub: "CDE",
    vol: "18.9M",
    fund: "0.0005%",
    price: "81.92",
    change: "1.00%",
    color: "#121212",
    symbol: "S",
    categories: ["Top", "Crypto", "Perpetuals"],
  },
  {
    name: "XRP PERP",
    sub: "CDE",
    vol: "12.3M",
    fund: "-0.0003%",
    price: "1.34",
    change: "1.00%",
    color: "#23292f",
    symbol: "X",
    categories: ["Top", "Crypto", "Perpetuals"],
  },
  {
    name: "PAXG PERP",
    sub: "CDE",
    vol: "4.7M",
    fund: "0.0084%",
    price: "5,093.50",
    change: "1.60%",
    color: "#e1c52f",
    symbol: "P",
    categories: ["Top", "Crypto", "Perpetuals"],
  },
  {
    name: "ADA PERP",
    sub: "CDE",
    vol: "1.6M",
    fund: "0.003%",
    price: "0.25",
    change: "1.77%",
    color: "#184ec9",
    symbol: "A",
    categories: ["Top", "Crypto", "Perpetuals"],
  },
  {
    name: "LINK PERP",
    sub: "CDE",
    vol: "1.3M",
    fund: "-0.0002%",
    price: "8.51",
    change: "1.60%",
    color: "#2f5bd2",
    symbol: "L",
    categories: ["Top", "Crypto", "Perpetuals"],
  },
];

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("Perpetuals");
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const filteredAssets = ASSETS.filter((asset) => {
    const matchesCategory =
      activeCategory === "Top" || asset.categories.includes(activeCategory);
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      asset.name.toLowerCase().includes(normalizedQuery) ||
      asset.sub.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div
      className={`search-system-container ${isOpen ? "is-open" : "is-closed"}`}
      ref={containerRef}
    >
      <div
        className={`search-bar ${isOpen ? "expanded" : "collapsed"}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="search-icon-wrapper" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7.5"></circle>
            <line x1="20" y1="20" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          autoFocus={isOpen}
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(event) => setQuery(event.target.value)}
          className="search-input-field"
          aria-label="Search markets"
        />
      </div>

      {isOpen && (
        <div className="search-dropdown-card">
          <div className="category-pills">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`pill ${category === activeCategory ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="asset-list-container">
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <div key={asset.name} className="asset-row">
                  <div className="asset-identity">
                    <div
                      className="asset-logo"
                      style={{ background: asset.color }}
                      aria-hidden="true"
                    >
                      <span>{asset.symbol}</span>
                    </div>

                    <div className="asset-names">
                      <div className="primary-name">{asset.name}</div>
                      <div className="secondary-name">{asset.sub}</div>
                    </div>
                  </div>

                  <div className="asset-market-data">
                    <div className="vol-text">GHS {asset.vol} vol</div>
                    <div className="fund-text">{asset.fund} fund</div>
                  </div>

                  <div className="asset-price-section">
                    <div className="price-text">GHS {asset.price}</div>
                    <div className="change-text">
                      <span className="trend-arrow" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 3H11V11"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.5 3.5L3 11"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {asset.change}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="search-empty-state">
                No markets match "{query.trim() || activeCategory}".
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
