import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import MarketCapCard from "../components/crypto/MarketCapCard";
import TopMovers from "../components/crypto/TopMovers";
import "../styles/explore.css";
import "../styles/navbar.css";
import { SearchInput } from "@coinbase/cds-web/controls/SearchInput";

import SortingTable from "../components/crypto/SortingTable";
import { HeroSquare } from "@coinbase/cds-web/illustrations/HeroSquare";
import AuthBtn from "../components/common/AuthBtn";
import { Pictogram } from "@coinbase/cds-web/illustrations/Pictogram";
import CloneBanner from "../components/common/cloneBanner";

interface Props {
  user: any;
  onLogout: () => void;
}
function Explore({ user, onLogout }: Props) {
  const marketStats = [
    {
      title: "Total market cap",
      value: "GHS 24.08T",
      change: "1.21%",
      isNegative: true,
    },
    {
      title: "Trade value",
      value: "GHS 1.25T",
      change: "3.17%",
      isNegative: false,
    },
    {
      title: "BTC dominance",
      value: "45.3%",
      change: "0.5%",
      isNegative: true,
    },
    {
      title: "ETH dominance",
      value: "18.2%",
      change: "0.2%",
      isNegative: true,
    },
    {
      title: "DeFi market cap",
      value: "GHS 1.25T",
      change: "3.17%",
      isNegative: false,
    },
    {
      title: "NFT market cap",
      value: "GHS 1.25T",
      change: "3.17%",
      isNegative: false,
    },
    {
      title: "Stablecoin market cap",
      value: "GHS 1.25T",
      change: "3.17%",
      isNegative: false,
    },
  ];
  return (
    <>
      <NavigationBar user={user} onLogout={onLogout}></NavigationBar>
      <div className="navbar-spacer"></div>
      <CloneBanner
        text={"This is a student project and is not affiliated with Coinbase"}
      ></CloneBanner>
      <div className="explore">
        <section className="section-1">
          <div className="crypto">
            <div className="explore-intro">
              <h1>Explore Crypto</h1>
              <p>Coinbase 50 Index is down 󰌲 1.13% (24hrs)</p>
            </div>
            <div className="crypto-search">
              <SearchInput
                value={""}
                onChangeText={() => {}}
                placeholder="Search for an asset"
                startIcon="search"
              />
            </div>
          </div>
          <div className="Market-stats">
            <h1>Market Stats</h1>
            <p>
              The overall crypto market is shrinking this week. As of today, the
              total crypto market capitalization is 24.09 trillion, representing
              a 0.05% decrease from last week.
            </p>

            <div className="market-cap-row">
              {marketStats.map((stat, index) => (
                <MarketCapCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  isNegative={stat.isNegative}
                />
              ))}
            </div>
          </div>
          <div className="market-prices">
            <h1>Crypto market prices</h1>
            <p>
              The overall crypto market is shrinking this week. As of today, the
              total crypto market capitalization is 24.08 trillion, representing
              a 0.09% decrease from last week.
            </p>
            <div className="market-prices-table">
              <SortingTable></SortingTable>
            </div>
          </div>
          <div className="create-account">
            <div className="create-account-copy">
              <h2>
                Create a Coinbase account to trade <br />
                crypto. It’s quick, easy, and secure.
              </h2>
              <AuthBtn>Start trading</AuthBtn>
            </div>
            <div className="create-account-visual">
              <HeroSquare
                name="accessToAdvancedCharts"
                dimension="200x200"
                scaleMultiplier={0.9}
              />
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="get-started">
            <div className="get-started-card">
              <div>
                <p>
                  <strong>Get started</strong>
                </p>
                <p>Create your account today</p>
                <button className="sign-up-btn">Sign up</button>
              </div>
              <div className="get-started-icons">
                <Pictogram name="avatarJa"></Pictogram>
              </div>
            </div>
          </div>
          <TopMovers />
        </section>
      </div>
      <Footer></Footer>
      <CloneBanner
        text={
          "This is a demo project and users should not enter real personal info"
        }
      ></CloneBanner>
    </>
  );
}

export default Explore;
