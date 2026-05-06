import NavigationBar from "../components/layout/NavigationBar";
import "../styles/learn.css";
import "../styles/crypto-basics.css";
import "../styles/navbar.css";
import Footer from "../components/layout/Footer";
import CloneBanner from "../components/common/cloneBanner";

interface Props {
  user: any;
  onLogout: () => void;
}
function Learn({ user, onLogout }: Props) {
  const popularArticles = [
    {
      category: "BEGINNER'S GUIDE",
      title: "What is cryptocurrency?",
      categoryColor: "#6b7280",
    },
    {
      category: "GETTING STARTED",
      title: "How to earn crypto rewards",
      categoryColor: "#6b7280",
    },
    {
      category: "GETTING STARTED",
      title: "How to add crypto to your Coinbase Wallet",
      categoryColor: "#6b7280",
    },
    {
      category: "YOUR CRYPTO",
      title:
        "Tax forms, explained: A guide to U.S. tax forms and crypto reports",
      categoryColor: "#6b7280",
    },
    {
      category: "GETTING STARTED",
      title: "Beginner's guide to dapps",
      categoryColor: "#6b7280",
    },
    {
      category: "MARKET UPDATE",
      title:
        "Everything you need to know about the first-ever U.S. Bitcoin ETF",
      categoryColor: "#6b7280",
    },
  ];

  return (
    <>
      <NavigationBar user={user} onLogout={onLogout}></NavigationBar>
      <div className="navbar-spacer"></div>
      <CloneBanner
        text={"This is a student project and is not affiliated with Coinbase"}
      ></CloneBanner>
      <div className="learn">
        <div style={{ height: 50 }}></div>
        <section className="section-1">
          <h1>Crypto questions, answered</h1>
          <p>
            Beginner guides, practical tips, and market updates for
            first-timers, experienced investors, and everyone in between
          </p>
        </section>

        <section className="learn-content">
          <div className="featured-section">
            <h2>Featured</h2>
            <div className="featured-video">
              <div className="video-thumbnail">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png"
                  alt="Video thumbnail"
                />
                <div className="play-button">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-info">
                <span className="video-label">VIDEO TUTORIAL</span>
                <h3>When is the best time to invest in crypto?</h3>
                <p>
                  When prices are fluctuating, how do you know when to buy?
                  Learn more about using dollar-cost averaging to weather price
                  volatility.
                </p>
              </div>
            </div>
          </div>

          <div className="popular-section">
            <h2>Popular</h2>
            <div className="popular-articles">
              {popularArticles.map((article, index) => (
                <div key={index} className="article-item">
                  <div className="article-category">{article.category}</div>
                  <div className="article-title">{article.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="category-cards">
            <div className="category-card">
              <div className="category-icon ">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3y6qEXfZEKWUIFCXitE2CM/975c866ebacafdff5c23779fa2168c51/3.png"
                  alt="Crypto basics"
                />
              </div>
              <div className="category-info">
                <h3>Crypto basics</h3>
                <a href="#" className="see-more">
                  See more →
                </a>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon ">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/31wYl0Vic7W3ZktCPHMOQ8/472cc5a7d6220c2c852619898c12e1a8/4.png"
                  alt="Tips and tutorials"
                />
              </div>
              <div className="category-info">
                <h3>Tips and tutorials</h3>
                <a href="#" className="see-more">
                  See more →
                </a>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/55csxsO3KyYgwnwNQHXAXi/efeb47068c8c76d35e1e62df77638124/AdvancedTrading_ChartsIndicatorsCandlesEtc.png"
                  alt="Advanced trading"
                />
              </div>
              <div className="category-info">
                <h3>Advanced trading</h3>
                <a href="#" className="see-more">
                  See more →
                </a>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/6baYypQ3LKoYOzMQyRQusH/645784649490f41b75dca08f955369fe/futures_anchor.png"
                  alt="Futures"
                />
              </div>
              <div className="category-info">
                <h3>Futures</h3>
                <a href="#" className="see-more">
                  See more →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="crypto-basics">
          <h1>Crypto basics</h1>
          <p>
            New to crypto? Not for long — start with these guides and explainers
          </p>
          <div className="crypto-basics-content">
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png"
                alt="Bitcoin illustration"
              />
              <p>BEGINNER'S GUIDE</p>
              <h1>What is Bitcoin?</h1>
              <p>
                Bitcoin is the world's first widely adopted cryptocurrency — it
                allows for secure and seamless peer-to-peer transactions on the
                Internet.
              </p>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png?w=768&fm=png"
                alt="DeFi tokens illustration"
              />
              <p>BEGINNER'S GUIDE</p>
              <h1>Guide to DeFi tokens and altcoins</h1>
              <p>
                From Aave to Zcash, decide what to trade with our beginner's
                guide
              </p>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png"
                alt="Ethereum illustration"
              />
              <p>BEGINNER'S GUIDE</p>
              <h1>What is Ethereum?</h1>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png"
                alt="DeFi illustration"
              />
              <p>KEY TERM</p>
              <h1>What is DeFi?</h1>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg?w=768&fm=png"
                alt="Stablecoin illustration"
              />
              <p>KEY TERM</p>
              <h1>What is a stablecoin?</h1>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png?w=768&fm=png"
                alt="Crypto illustration"
              />
              <p>GETTING STARTED</p>
              <h1>Crypto security</h1>
            </div>
            <button className="see-more-crypto">
              See more crypto basics &nbsp; ›
            </button>
          </div>
        </section>
        <section className="what-is">
          <div className="what-is-tags">
            <a href="#" className="what-is-tag">
              Bitcoin
            </a>
            <a href="#" className="what-is-tag">
              Blockchain
            </a>
            <a href="#" className="what-is-tag">
              Cardano
            </a>
            <a href="#" className="what-is-tag">
              Crypto wallet
            </a>
            <a href="#" className="what-is-tag">
              DeFi
            </a>
            <a href="#" className="what-is-tag">
              Ethereum
            </a>
            <a href="#" className="what-is-tag">
              Fork
            </a>
            <a href="#" className="what-is-tag">
              Inflation
            </a>
            <a href="#" className="what-is-tag">
              Market cap
            </a>
            <a href="#" className="what-is-tag">
              NFT
            </a>
            <a href="#" className="what-is-tag">
              Private key
            </a>
            <a href="#" className="what-is-tag">
              Protocol
            </a>
            <a href="#" className="what-is-tag">
              Smart contract
            </a>
            <a href="#" className="what-is-tag">
              Token
            </a>
            <a href="#" className="what-is-tag">
              Volatility memecoin
            </a>
          </div>
          <button className="what-is-see-more">See more</button>
        </section>
        <section className="tips-and-tutorials">
          <h1>Tips and tutorials</h1>
          <p>Get practical, step-by-step answers to all things crypto</p>
          <div className="tips-content">
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <span className="tips-card-label">GETTING STARTED</span>
              <h3 className="tips-card-title">How to donate crypto</h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png"
                  alt="How to set up a crypto wallet"
                />
              </div>
              <span className="tips-card-label">VIDEO TUTORIAL</span>
              <h3 className="tips-card-title">How to setup a crypto wallet</h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png"
                  alt=""
                />
              </div>
              <span className="tips-card-label">VIDEO TUTORIAL</span>
              <h3 className="tips-card-title">
                When is the best time to invest in crypto?
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/5Crc40l3fe9Mm22C4HGRgx/71defd6861e1ee2c4927e709604ea099/Crypto___Retirement_Op2-D.png?w=768&fm=png"
                  alt=""
                />
              </div>
              <span className="tips-card-label">GETTING STARTED</span>
              <h3 className="tips-card-title">
                How to invest in crypto via your retirement account
              </h3>
            </div>
          </div>
          <button className="what-is-see-more">
            See more tips and tutorials
          </button>
        </section>
        <section className="tips-and-tutorials">
          <h1>Advanced trading</h1>
          <p>
            Ready to advance? Learn the tools and terminology you need to take
            control of your trades.
          </p>
          <div className="tips-content">
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <span className="tips-card-label">KEY TERM</span>
              <h3 className="tips-card-title">What is technical analysis</h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/4zm6shyv9LYK0W74kUrMQ4/2ecc82c8215405ecfba08f1f652095a6/charting-indicators.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <span className="tips-card-label">ADVANCED GUIDE</span>
              <h3 className="tips-card-title">
                How can i use crypto market data for spotting trade
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/1As6H6C4F2KcJsyLzzWPgX/7b13a011336a72f1f90f5d87bf32eee7/advance-trading.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <span className="tips-card-label">ADVANCED GUIDE</span>
              <h3 className="tips-card-title">
                How to read advanced trading charts
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/4q6K5epqo9YLwaQ79i1M5N/9693bdbae13fffb3c37406d71f294244/order-book__1_.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <span className="tips-card-label">KEY TERM</span>
              <h3 className="tips-card-title">What is an order book</h3>
            </div>{" "}
          </div>
          <button className="what-is-see-more">
            See more advanced trading
          </button>
        </section>
        <section className="tips-and-tutorials">
          <h1>Futures</h1>
          <p>New to futures trading? Get up to speed on the basics.</p>
          <div className="tips-content">
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/7mOyQ8m1ax3GFyzTSIENQy/2977ec18240fcc1851eb4a460a5915c3/Article_1_-_Visual_-_1.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">
                Futures: Introductions and origins
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/P1YwgqZX7jfnJ0l1xdbED/7a1d8654bf047462d68a377f7d21f39c/Article_2_-_Visual_-_1.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">
                Futures fundamentals: Understanding the basics
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3REMTvIb9OoMmr8EPya1zU/f06976781a368ab76f5fa4b3edfdcc66/Article_3_-_Visual_-_1.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">
                Opening, holding, and closing a position in the futures market
              </h3>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3REMTvIb9OoMmr8EPya1zU/f06976781a368ab76f5fa4b3edfdcc66/Article_3_-_Visual_-_1.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <h3 className="tips-card-title">
                Trading strategies: Speculating, hedging, and spreading in the
                futures market
              </h3>
            </div>{" "}
          </div>
          <button className="what-is-see-more">
            See more advanced trading
          </button>
        </section>
        <section className="tips-and-tutorials">
          <h1>All Things Wallet</h1>
          <p>
            Earn yield, dive into crypto apps, control your holdings, and much
            more
          </p>
          <div className="tips-content">
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3mfq3iIdYW3CDfWoh5vm9j/e79252903418650aa29f66ee313ef44e/How_to_Coinbase_Wallet_Op1-B.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">
                What is the difference between coinbase and coinbase wallet
              </h3>
              <span>
                And how can a wallet help me access NFTs or DeFi? Your
                self-custody wallet questions, answered
              </span>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">How to setup crypto wallet</h3>
              <span>
                Learn how to setup and get started with a crypto wallet.
              </span>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3G50jPNvtkBsSz7we9TaxK/a50e3a2103bad2af0355644349e57476/how_to_fund_coinbase_wallet.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>

              <h3 className="tips-card-title">
                How to add crypto to your Coinbase Wallet
              </h3>
              <span>
                A quick guide on how to add crypto to your Coinbase self-custody
                wallet.
              </span>
            </div>
            <div className="tips-card">
              <div className="tips-card-img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/4ktmMla57tgU3ZYleBOlLm/71ef298196ffcf1d1eb6d2b43abe49d4/Learn_Illustration_How_to_Send_Crypto.png?w=768&fm=png"
                  alt="How to donate crypto"
                />
              </div>
              <h3 className="tips-card-title">
                How to send or receive crypto using coinbase wallet
              </h3>
              <span>
                Coinbase Wallet helps you unlock one of the most significant
                features of crypto: the ability to send or receive peer-to-peer
                transfers without any financial intermediaries.
              </span>
            </div>{" "}
          </div>
          <button className="what-is-see-more">See more wallet articles</button>
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

export default Learn;
