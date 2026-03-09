export type NavigationSectionKey =
  | "individuals"
  | "businesses"
  | "institutions"
  | "developers"
  | "company";

export type NavigationInput = "" | NavigationSectionKey;

export type NavigationVariant = "desktop" | "mobile";

export interface NavigationItem {
  title: string;
  description: string;
  icon: string;
  href?: string;
  to?: string;
}

export interface NavigationGroup {
  heading?: string;
  items: NavigationItem[];
}

export interface NavigationFeaturedCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkLabel: string;
  href?: string;
  to?: string;
}

export interface NavigationSectionData {
  label: string;
  layout: "grid" | "columns";
  groups: NavigationGroup[];
  featured?: NavigationFeaturedCard;
}

export interface NavigationRootLink {
  label: string;
  section?: NavigationSectionKey;
  href?: string;
}

export const NAVIGATION_ROOT_LINKS: NavigationRootLink[] = [
  { label: "Cryptocurrencies", href: "/cryptocurrencies" },
  { label: "Individuals", section: "individuals" },
  { label: "Businesses", section: "businesses" },
  { label: "Institutions", section: "institutions" },
  { label: "Developers", section: "developers" },
  { label: "Company", section: "company" },
];

export const NAVIGATION_SECTIONS: Record<
  NavigationSectionKey,
  NavigationSectionData
> = {
  individuals: {
    label: "Individuals",
    layout: "grid",
    groups: [
      {
        items: [
          {
            title: "Buy and sell",
            description: "Buy sell and use crypto",
            icon: "coinbase",
            href: "#",
          },
          {
            title: "Base App",
            description: "Post, earn, trade and chat, all in one place",
            icon: "baseSquare",
            href: "#",
          },
          {
            title: "Coinbase One",
            description: "Get zero trading fees and more",
            icon: "coinbaseOne",
            href: "#",
          },
          {
            title: "Private client",
            description: "For trusts, family offices, UHNWi's",
            icon: "diamond",
            href: "#",
          },
          {
            title: "Onchain",
            description: "Dive into the world of onchain",
            icon: "chainLink",
            href: "#",
          },
          {
            title: "Learn",
            description: "Crytpo tips and guides",
            icon: "lightbulb",
            to: "/learn",
          },
          {
            title: "Advanced",
            description: "FProfessional grading tools",
            icon: "advancedTradeProduct",
            href: "#",
          },
          {
            title: "Earn",
            description: "Stake your crypto and earn rewards",
            icon: "percentage",
            href: "#",
          },
          {
            title: "Coinbase Wealth",
            description: "Insitutional grade services for UHNWi's",
            icon: "diamond",
            href: "#",
          },
          {
            title: "Credit Card",
            description: "Get up to 4% bitcoin back",
            icon: "paymentCard",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      imageSrc:
        "https://static-assets.coinbase.com/marketing/2025-q4-event/navigation-upsell.png",
      imageAlt: "Commerce Payments Protocol",
      title: "Commerce Payments Protocol",
      description: "A new standard for onchain payments.",
      linkLabel: "Go to Payments",
      href: "#",
    },
  },
  businesses: {
    label: "Businesses",
    layout: "grid",
    groups: [
      {
        items: [
          {
            title: "Business",
            description: "Crypto trading and payments for startups and SMBs",
            icon: "coinbase",
            href: "#",
          },
          {
            title: "Payments",
            description: "The stablecoin payments stack for commerce platforms",
            icon: "card",
            href: "#",
          },
          {
            title: "Asset Listings",
            description: "List your asset on Coinbase",
            icon: "assetHubProduct",
            href: "#",
          },
          {
            title: "Token Manager",
            description:
              "The platform for token distributions, vesting, and lockups",
            icon: "assetManagementProduct",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      imageSrc:
        "https://static-assets.coinbase.com/growth/acquisition/global-nav/onchain_payment_protocol.png",
      imageAlt: "Commerce Payments Protocol",
      title: "Commerce Payments Protocol",
      description: "A new standard for onchain payments.",
      linkLabel: "Go to Payments",
      href: "#",
    },
  },
  institutions: {
    label: "Institutions",
    layout: "columns",
    groups: [
      {
        heading: "Prime >",
        items: [
          {
            title: "Trading and Financing",
            description: "Professional prime brokerage services",
            icon: "primePoduct",
            href: "#",
          },
          {
            title: "Custody",
            description: "Securely store all your digital assets",
            icon: "custodyProduct",
            href: "#",
          },
          {
            title: "Staking",
            description: "Explore staking across our products",
            icon: "percentage",
            href: "#",
          },
          {
            title: "Onchain Wallet",
            description: "Institutional-grade wallet to get onchain",
            icon: "blockchain",
            href: "#",
          },
        ],
      },
      {
        heading: "Markets",
        items: [
          {
            title: "Exchange",
            description: "Spot markets for high-frequency trading",
            icon: "exchangeProduct",
            href: "#",
          },
          {
            title: "International Exchange",
            description: "Access perpetual futures markets",
            icon: "globe",
            href: "#",
          },
          {
            title: "Derivatives Exchange",
            description: "Trade an accessible futures market",
            icon: "derivativesProduct",
            href: "#",
          },
          {
            title: "Verified Pools",
            description: "Transparent, verified liquidity pools",
            icon: "verifiedPools",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      imageSrc:
        "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png",
      imageAlt: "Our clients",
      title: "Our clients",
      description: "Trusted by institutions and government.",
      linkLabel: "Learn more",
      href: "#",
    },
  },
  developers: {
    label: "Developers",
    layout: "columns",
    groups: [
      {
        heading: "Coinbase Developer Platform >",
        items: [
          {
            title: "Payments",
            description:
              "Fast and global stablecoin payments with a single integration",
            icon: "pay",
            href: "#",
          },
          {
            title: "Trading",
            description: "Launch crypto trading and custody for your users",
            icon: "advancedTradeProduct",
            href: "#",
          },
          {
            title: "Wallets",
            description:
              "Deploy customizable and scalable wallets for your business",
            icon: "wallet",
            href: "#",
          },
          {
            title: "Stablecoins",
            description: "Access USDC and Coinbase Custom Stablecoins",
            icon: "currencies",
            href: "#",
          },
        ],
      },
      {
        heading: "Solutions for any company",
        items: [
          {
            title: "Banks & Brokerages",
            description:
              "Secure, regulated offerings for retail, private banking, & institutional clients",
            icon: "bank",
            href: "#",
          },
          {
            title: "Payment Firms",
            description:
              "Near-instant, low-cost, global payment rails for modern providers",
            icon: "card",
            href: "#",
          },
          {
            title: "Startups",
            description:
              "Launch your business with the world's leader in crypto",
            icon: "api",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      imageSrc:
        "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg",
      imageAlt: "Developer Platform",
      title: "World class crypto infrastructure.",
      description:
        "Discover Coinbase's complete crypto-as-a-service platform.",
      linkLabel: "Learn more",
      href: "#",
    },
  },
  company: {
    label: "Company",
    layout: "columns",
    groups: [
      {
        items: [
          {
            title: "About",
            description: "Powering the crypto economy",
            icon: "error",
            href: "#",
          },
          {
            title: "Affiliates",
            description: "Help introduce the world to crypto",
            icon: "affiliates",
            href: "#",
          },
          {
            title: "Blog",
            description: "Read the latest from Coinbase",
            icon: "blog",
            href: "#",
          },
        ],
      },
      {
        items: [
          {
            title: "Careers",
            description: "Work with us",
            icon: "briefcase",
            href: "#",
          },
          {
            title: "Support",
            description: "Find answers to your questions",
            icon: "chatBubble",
            href: "#",
          },
          {
            title: "Security",
            description: "The most trusted & secure",
            icon: "shield",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      imageSrc:
        "https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png",
      imageAlt: "Coinbase Company",
      title: "Learn all about Coinbase:",
      description: "We're building the open financial system.",
      linkLabel: "Create your account",
      href: "#",
    },
  },
};
