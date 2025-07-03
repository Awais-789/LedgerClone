"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Compass,
  Send,
  Download,
  ShoppingCart,
  ArrowLeftRight,
  CreditCard,
  TrendingUp,
  Settings,
  Wifi,
  Bell,
  Shield,
  HelpCircle,
  Search,
  Plus,
  Star,
  CheckCircle,
  Clock,
  Eye,
  EyeOff,
  MoreHorizontal,
} from "lucide-react"
import { Card, CardContent } from "../components/ui/card"

export default function LedgerFile() {
  const [activeSection, setActiveSection] = useState("Portfolio")
  const [privacyMode, setPrivacyMode] = useState(false)

  const sidebarItems = [
    { name: "Portfolio", icon: BarChart3, active: true },
    { name: "Market", icon: TrendingUp },
    { name: "Accounts", icon: Users },
    { name: "Discover", icon: Compass },
    { name: "Send", icon: Send },
    { name: "Receive", icon: Download },
    { name: "Buy / Sell", icon: ShoppingCart },
    { name: "Swap", icon: ArrowLeftRight, badge: "Popular" },
    { name: "Lend", icon: TrendingUp },
    { name: "Card", icon: CreditCard },
    { name: "Earn", icon: TrendingUp, badge: "New" },
    { name: "Refer a friend", icon: Users, badge: "$10" },
    { name: "[L] Recover", icon: Shield, badge: "New" },
    { name: "My Ledger", icon: Settings },
  ]

  const cryptoAccounts = [
    {
      name: "Solana",
      symbol: "SOL",
      amount: "13.922",
      value: "$337.90",
      change: "+5.2%",
      positive: true,
      icon: "🟣",
      verified: true,
      starred: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      amount: "0.15242",
      value: "$244.26",
      change: "+3.1%",
      positive: true,
      icon: "💎",
      verified: true,
      starred: false,
    },
    {
      name: "Cosmos LNX",
      symbol: "ATOM",
      amount: "5.828",
      value: "$76.94",
      change: "+10891%",
      positive: true,
      icon: "⚛️",
      verified: true,
      starred: false,
    },
    {
      name: "Bitcoin LNX",
      symbol: "BTC",
      amount: "0.003324",
      value: "$76.26",
      change: "—",
      positive: null,
      icon: "₿",
      verified: false,
      starred: false,
      badge: "NATIVE SEGWIT",
    },
    {
      name: "Elrond",
      symbol: "EGLD",
      amount: "1.1598",
      value: "$50.77",
      change: "—",
      positive: null,
      icon: "🔷",
      verified: true,
      starred: false,
    },
    {
      name: "Dogecoin 1",
      symbol: "DOGE",
      amount: "316.9",
      value: "$27.22",
      change: "—",
      positive: null,
      icon: "🐕",
      verified: true,
      starred: false,
    },
  ]

  const portfolioData = {
    totalBalance: "$16.68",
    change: "+542% (+$14.08)",
    positive: true,
    assetAllocation: [
      { name: "Solana", symbol: "SOL", allocation: 97.6, amount: "0.111955", value: "$16.28", price: "$145.42" },
      { name: "Bitcoin", symbol: "BTC", allocation: 2.39, amount: "0.000006", value: "$0.40", price: "$67,377.86" },
    ],
  }

  const renderPortfolio = () => (
    <div className="p-6 space-y-6">
      {/* Action Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Buy / Sell</h3>
                <p className="text-sm text-gray-400">Buy and sell with trusted providers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Swap <span className="text-xs bg-blue-600 px-1 rounded ml-1">Popular</span>
                </h3>
                <p className="text-sm text-gray-400">Convert crypto to crypto securely</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Stake</h3>
                <p className="text-sm text-gray-400">Grow your crypto with Ledger</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Balance */}
      <Card className="bg-[#2a2a2a] border-gray-700">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{portfolioData.totalBalance}</div>
              <div className="text-sm text-gray-400 mb-1">total balance</div>
              <div className={`text-sm ${portfolioData.positive ? "text-green-400" : "text-red-400"}`}>
                ↗ {portfolioData.change}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-6xl font-bold text-blue-400">4</div>
              <div className="flex space-x-1">
                <button className="px-2 py-1 text-xs bg-gray-700 rounded">1D</button>
                <button className="px-2 py-1 text-xs bg-gray-700 rounded">1W</button>
                <button className="px-2 py-1 text-xs bg-gray-700 rounded">1M</button>
                <button className="px-2 py-1 text-xs bg-blue-600 rounded text-white">1Y</button>
                <button className="px-2 py-1 text-xs bg-gray-700 rounded">ALL</button>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-48 bg-[#1a1a1a] rounded-lg flex items-end justify-center mb-6 relative overflow-hidden">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M 0 180 Q 100 160 200 150 T 400 120 T 600 80 T 800 60 L 800 200 L 0 200 Z"
                fill="url(#portfolioGradient)"
              />
              <path
                d="M 0 180 Q 100 160 200 150 T 400 120 T 600 80 T 800 60"
                stroke="#8b5cf6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-500">
              <span>Mar 19</span>
              <span>May 9</span>
              <span>Jun 29</span>
              <span>Aug 19</span>
              <span>Oct 9</span>
              <span>Nov 29</span>
              <span>Jan 19</span>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Asset allocation (2)</h3>
            <div className="space-y-3">
              {portfolioData.assetAllocation.map((asset, index) => (
                <div key={asset.symbol} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{asset.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{asset.name}</div>
                      <div className="text-sm text-gray-400">{asset.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{asset.allocation}%</div>
                      <div className="w-32 h-2 bg-gray-700 rounded-full">
                        <div
                          className={`h-full rounded-full ${index === 0 ? "bg-orange-500" : "bg-yellow-500"}`}
                          style={{ width: `${asset.allocation}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {asset.amount} {asset.symbol}
                      </div>
                      <div className="font-medium text-white">{asset.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Operations */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Latest operations</h3>
            <div className="text-sm text-gray-400">3/7/2024 - Today</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAccounts = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Accounts</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add account
          </button>
          <button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-white">
            <option>Range All</option>
          </select>
          <select className="bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-white">
            <option>Sort by Highest Balance</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {cryptoAccounts.map((account, index) => (
          <Card key={index} className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">
                    {account.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400 uppercase">{account.symbol}</span>
                      {account.badge && <span className="text-xs bg-gray-600 px-2 py-1 rounded">{account.badge}</span>}
                    </div>
                    <div className="font-medium text-white">{account.name}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    {account.verified ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>

                  <div className="text-right">
                    <div className="font-medium text-white">
                      {account.amount} {account.symbol}
                    </div>
                    <div className="text-sm text-gray-400">{account.value}</div>
                  </div>

                  <div className="text-right min-w-[80px]">
                    {account.change !== "—" ? (
                      <div className={`text-sm ${account.positive ? "text-green-400" : "text-red-400"}`}>
                        {account.change}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-400">—</div>
                    )}
                  </div>

                  <div className="flex items-center">
                    {account.starred ? (
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    ) : (
                      <Star className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show tokens section */}
      <div className="mt-6 text-center">
        <button variant="ghost" className="text-blue-400 hover:text-blue-300">
          Show tokens (2) ↓
        </button>
      </div>

      {/* Starred Accounts */}
      <div className="mt-8">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-6 text-center">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-white mb-2">STARRED ACCOUNTS</h3>
            <p className="text-gray-400 text-sm">Star an account to display it here for easy access.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const marketData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$67,377.86",
      change: "+2.45%",
      positive: true,
      marketCap: "$1.33T",
      volume: "$28.5B",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,245.67",
      change: "+1.82%",
      positive: true,
      marketCap: "$390.2B",
      volume: "$15.2B",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$145.42",
      change: "+5.67%",
      positive: true,
      marketCap: "$68.5B",
      volume: "$3.8B",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$0.4521",
      change: "-1.23%",
      positive: false,
      marketCap: "$15.8B",
      volume: "$892M",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      price: "$7.89",
      change: "+3.45%",
      positive: true,
      marketCap: "$9.2B",
      volume: "$456M",
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      price: "$14.67",
      change: "-0.89%",
      positive: false,
      marketCap: "$8.1B",
      volume: "$234M",
    },
  ]

  const renderMarket = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Market</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-white">
            <option>All Cryptocurrencies</option>
            <option>Favorites</option>
            <option>DeFi</option>
          </select>
          <button variant="ghost" size="icon">
            <Star className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">Total Market Cap</div>
            <div className="text-2xl font-bold text-white">$2.45T</div>
            <div className="text-sm text-green-400">+2.34%</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">24h Volume</div>
            <div className="text-2xl font-bold text-white">$89.2B</div>
            <div className="text-sm text-green-400">+5.67%</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">BTC Dominance</div>
            <div className="text-2xl font-bold text-white">54.2%</div>
            <div className="text-sm text-red-400">-0.12%</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">Active Cryptos</div>
            <div className="text-2xl font-bold text-white">2,847</div>
            <div className="text-sm text-gray-400">+12</div>
          </CardContent>
        </Card>
      </div>

      {/* Market Table */}
      <Card className="bg-[#2a2a2a] border-gray-700">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr className="text-left">
                  <th className="p-4 text-gray-400 font-medium">#</th>
                  <th className="p-4 text-gray-400 font-medium">Name</th>
                  <th className="p-4 text-gray-400 font-medium">Price</th>
                  <th className="p-4 text-gray-400 font-medium">24h Change</th>
                  <th className="p-4 text-gray-400 font-medium">Market Cap</th>
                  <th className="p-4 text-gray-400 font-medium">Volume</th>
                  <th className="p-4 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((crypto, index) => (
                  <tr key={crypto.symbol} className="border-b border-gray-700/50 hover:bg-[#333333]">
                    <td className="p-4 text-gray-400">{index + 1}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">{crypto.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">{crypto.name}</div>
                          <div className="text-sm text-gray-400">{crypto.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-white">{crypto.price}</td>
                    <td className="p-4">
                      <span className={`${crypto.positive ? "text-green-400" : "text-red-400"}`}>{crypto.change}</span>
                    </td>
                    <td className="p-4 text-gray-300">{crypto.marketCap}</td>
                    <td className="p-4 text-gray-300">{crypto.volume}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Buy
                        </button>
                        <button size="sm" variant="outline">
                          Trade
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const web3Apps = [
    { name: "Uniswap", category: "DEX", description: "Decentralized exchange protocol", icon: "🦄", verified: true },
    { name: "Aave", category: "Lending", description: "Decentralized lending protocol", icon: "👻", verified: true },
    { name: "Compound", category: "Lending", description: "Algorithmic money markets", icon: "🏛️", verified: true },
    { name: "1inch", category: "DEX", description: "DEX aggregator", icon: "1️⃣", verified: true },
    { name: "Yearn", category: "Yield", description: "Yield farming optimizer", icon: "🌾", verified: true },
    { name: "SushiSwap", category: "DEX", description: "Community-driven DEX", icon: "🍣", verified: true },
  ]

  const renderDiscover = () => (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Discover</h1>
          <p className="text-gray-400">Browse our Web3 apps directly from Live's catalog</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-white">
            <option>All Categories</option>
            <option>DEX</option>
            <option>Lending</option>
            <option>Yield</option>
          </select>
        </div>
      </div>

      {/* Featured Apps */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Featured Apps</h2>
        <div className="grid grid-cols-3 gap-4">
          {web3Apps.slice(0, 3).map((app) => (
            <Card
              key={app.name}
              className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{app.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-white">{app.name}</h3>
                      {app.verified && <CheckCircle className="w-4 h-4 text-blue-400" />}
                    </div>
                    <div className="text-sm text-gray-400">{app.category}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{app.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700">Open App</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Apps */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">All Apps</h2>
        <div className="grid grid-cols-2 gap-4">
          {web3Apps.map((app) => (
            <Card
              key={app.name}
              className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{app.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-white">{app.name}</h3>
                        {app.verified && <CheckCircle className="w-4 h-4 text-blue-400" />}
                      </div>
                      <div className="text-sm text-gray-400">{app.category}</div>
                    </div>
                  </div>
                  <button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Open
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSend = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Send</h1>
        <p className="text-gray-400">Send crypto assets at any time</p>
      </div>

      <div className="max-w-2xl">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-6 space-y-6">
            {/* Account Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">From Account</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white">
                <option>Bitcoin (0.003324 BTC) - $76.26</option>
                <option>Ethereum (0.15242 ETH) - $244.26</option>
                <option>Solana (13.922 SOL) - $337.90</option>
              </select>
            </div>

            {/* Recipient Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Recipient Address</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter recipient address or scan QR code"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 pr-12 text-white placeholder-gray-400"
                />
                <button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600"
                >
                  QR
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400"
                />
                <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white">
                  <option>BTC</option>
                  <option>USD</option>
                </select>
                <button variant="outline" size="sm" className="px-4 bg-transparent">
                  Max
                </button>
              </div>
              <div className="text-sm text-gray-400 mt-1">≈ $0.00 USD</div>
            </div>

            {/* Network Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Network Fee</label>
              <div className="flex space-x-2">
                <button variant="outline" size="sm">
                  Slow
                </button>
                <button size="sm" className="bg-blue-600">
                  Standard
                </button>
                <button variant="outline" size="sm">
                  Fast
                </button>
              </div>
              <div className="text-sm text-gray-400 mt-1">Fee: ~$2.50 • Est. time: 10-30 min</div>
            </div>

            {/* Send button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3">Continue</button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderReceive = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Receive</h1>
        <p className="text-gray-400">Receive crypto assets at any time</p>
      </div>

      <div className="max-w-2xl">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-6 space-y-6">
            {/* Account Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Select Account</label>
              <select className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white">
                <option>Bitcoin (Native SegWit)</option>
                <option>Ethereum</option>
                <option>Solana</option>
              </select>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="text-black text-xs">QR Code</div>
              </div>
              <div className="text-sm text-gray-400">Scan this QR code to get the address</div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Bitcoin Address</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                  readOnly
                  className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700">Copy</button>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Verify on device</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                For security, verify this address on your Ledger device before sharing it.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const stakingOptions = [
    {
      name: "Ethereum 2.0",
      symbol: "ETH",
      apy: "3.2%",
      minAmount: "0.01 ETH",
      description: "Stake ETH and earn rewards",
    },
    { name: "Solana", symbol: "SOL", apy: "6.8%", minAmount: "1 SOL", description: "Delegate SOL to validators" },
    { name: "Cardano", symbol: "ADA", apy: "4.5%", minAmount: "10 ADA", description: "Stake ADA in pools" },
    { name: "Polkadot", symbol: "DOT", apy: "12.5%", minAmount: "1 DOT", description: "Nominate DOT validators" },
  ]

  const renderEarn = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Earn</h1>
        <p className="text-gray-400">Stake your crypto assets to earn rewards</p>
      </div>

      {/* Earning Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">Total Staked</div>
            <div className="text-2xl font-bold text-white">$1,234.56</div>
            <div className="text-sm text-green-400">+$45.67 this month</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">Total Rewards</div>
            <div className="text-2xl font-bold text-white">$89.23</div>
            <div className="text-sm text-green-400">+$12.34 this week</div>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-4">
            <div className="text-sm text-gray-400">Avg. APY</div>
            <div className="text-2xl font-bold text-white">5.8%</div>
            <div className="text-sm text-gray-400">Across all positions</div>
          </CardContent>
        </Card>
      </div>

      {/* Available Staking Options */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Available Staking Options</h2>
        <div className="grid grid-cols-2 gap-4">
          {stakingOptions.map((option) => (
            <Card key={option.symbol} className="bg-[#2a2a2a] border-gray-700 hover:bg-[#333333] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">{option.symbol[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{option.name}</h3>
                      <div className="text-sm text-gray-400">{option.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{option.apy}</div>
                    <div className="text-sm text-gray-400">APY</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">Min. Amount:</span>
                  <span className="text-sm text-white">{option.minAmount}</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700">Start Staking</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderBuySell = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Buy / Sell</h1>
        <p className="text-gray-400">Buy and sell crypto assets with trusted providers</p>
      </div>

      <div className="flex space-x-2 mb-6">
        <button className="bg-blue-600 hover:bg-blue-700">Buy</button>
        <button variant="outline">Sell</button>
      </div>

      <div className="max-w-2xl">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-6 space-y-6">
            {/* Currency Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">You Pay</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="100"
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400"
                  />
                  <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">You Get</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="0.00148"
                    className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400"
                  />
                  <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>SOL</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <CreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>
                <button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <span>🏦</span>
                  <span>Bank</span>
                </button>
                <button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <span>💳</span>
                  <span>PayPal</span>
                </button>
              </div>
            </div>

            {/* Provider Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Choose Provider</label>
              <div className="space-y-2">
                {["MoonPay", "Ramp", "Banxa"].map((provider) => (
                  <div
                    key={provider}
                    className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{provider[0]}</span>
                      </div>
                      <span className="text-white">{provider}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white">$100.00</div>
                      <div className="text-sm text-gray-400">Fee: $2.99</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3">Continue with MoonPay</button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderSwap = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold text-white">Swap</h1>
        <span className="bg-blue-600 text-xs px-2 py-1 rounded text-white">Popular</span>
      </div>
      <p className="text-gray-400">Swap crypto assets securely</p>

      <div className="max-w-2xl">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-6 space-y-6">
            {/* From */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="0.0"
                  className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400"
                />
                <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white min-w-[120px]">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>SOL</option>
                </select>
              </div>
              <div className="text-sm text-gray-400 mt-1">Balance: 0.003324 BTC</div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center">
              <button size="icon" variant="outline" className="rounded-full bg-transparent">
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="0.0"
                  className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white placeholder-gray-400"
                />
                <select className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-3 text-white min-w-[120px]">
                  <option>ETH</option>
                  <option>SOL</option>
                  <option>ADA</option>
                </select>
              </div>
              <div className="text-sm text-gray-400 mt-1">≈ $0.00 USD</div>
            </div>

            {/* Exchange Rate */}
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Exchange Rate</span>
                <span className="text-white">1 BTC = 20.75 ETH</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Network Fee</span>
                <span className="text-white">~$15.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Provider</span>
                <span className="text-white">1inch</span>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3">Review Swap</button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderReferFriend = () => (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Refer a Friend</h1>
        <p className="text-gray-400">Invite others to join Ledger Live and earn rewards together</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-[#2a2a2a] border-gray-700">
          <CardContent className="p-8 text-center space-y-6">
            <div className="text-6xl">🎁</div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Earn $10 for each friend</h2>
              <p className="text-gray-400">Your friends get $10 too when they make their first purchase</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Your referral code</div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value="LEDGER2024XYZ"
                  readOnly
                  className="flex-1 bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white text-center font-mono"
                />
                <button className="bg-blue-600 hover:bg-blue-700">Copy</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">Friends Invited</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$80</div>
                <div className="text-sm text-gray-400">Earned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">8</div>
                <div className="text-sm text-gray-400">Successful</div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700">Share Link</button>
              <button variant="outline" className="flex-1 bg-transparent">
                Invite via Email
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCard = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Card</h1>
        <p className="text-gray-400">Easily spend crypto with a Ledger-compatible card</p>
      </div>

      <div className="max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          {/* Card Preview */}
          <div>
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-2xl font-bold">LEDGER</div>
                  <div className="text-right">
                    <div className="text-sm opacity-80">CRYPTO CARD</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xl font-mono">**** **** **** 1234</div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs opacity-80">VALID THRU</div>
                      <div className="font-mono">12/27</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-80">CVV</div>
                      <div className="font-mono">***</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">CARDHOLDER</div>
                    <div className="font-semibold">JOHN DOE</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Details */}
          <div className="space-y-6">
            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Card Balance</h3>
                <div className="text-3xl font-bold text-white mb-2">$1,234.56</div>
                <div className="text-sm text-gray-400">Available to spend</div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700">Top Up Card</button>
                  <button variant="outline" className="w-full bg-transparent">
                    View Transactions
                  </button>
                  <button variant="outline" className="w-full bg-transparent">
                    Card Settings
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {["Starbucks Coffee", "Amazon Purchase", "Gas Station"].map((merchant, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="text-white">{merchant}</div>
                        <div className="text-sm text-gray-400">Today</div>
                      </div>
                      <div className="text-white">-$12.50</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const renderLedgerRecover = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold text-white">Ledger Recover</h1>
        <span className="bg-green-600 text-xs px-2 py-1 rounded text-white">New</span>
      </div>
      <p className="text-gray-400">Securely back up your Secret Recovery Phrase</p>

      <div className="max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Secure Backup</h3>
                    <p className="text-sm text-gray-400">Your recovery phrase is encrypted and split</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Ledger Recover splits your recovery phrase into three encrypted fragments and stores them with trusted
                  partners.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Easy Recovery</h3>
                    <p className="text-sm text-gray-400">Restore access with identity verification</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  If you lose your device, recover your wallet using two of the three fragments after identity
                  verification.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Full Control</h3>
                    <p className="text-sm text-gray-400">Cancel anytime, keep your keys</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  You maintain full control. Cancel the service anytime and your recovery phrase remains secure on your
                  device.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-8 text-center space-y-6">
                <div className="text-6xl">🔐</div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Backup Your Recovery Phrase</h2>
                  <p className="text-gray-400">Never lose access to your crypto assets</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <div className="text-left space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Military-grade encryption</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Distributed across 3 partners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Identity verification required</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-white">Cancel anytime</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$9.99/month</div>
                  <div className="text-sm text-gray-400">First month free</div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 py-3">Start Free Trial</button>

                <div className="text-xs text-gray-400">By continuing, you agree to the Terms of Service</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMyLedger = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My Ledger</h1>
        <p className="text-gray-400">Manage your Ledger device</p>
      </div>

      <div className="max-w-4xl">
        {/* Device Status */}
        <Card className="bg-[#2a2a2a] border-gray-700 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-2xl">📱</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Ledger Nano X</h3>
                  <div className="text-sm text-gray-400">Firmware version 2.2.1</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-400">Connected</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Battery</div>
                <div className="text-lg font-semibold text-white">85%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          {/* Device Manager */}
          <Card className="bg-[#2a2a2a] border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Installed Apps</h3>
              <div className="space-y-3">
                {["Bitcoin", "Ethereum", "Solana", "Cardano"].map((app, index) => (
                  <div key={app} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{app[0]}</span>
                      </div>
                      <span className="text-white">{app}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">v2.1.0</span>
                      <button size="sm" variant="outline">
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Install New App</button>
            </CardContent>
          </Card>

          {/* Device Settings */}
          <Card className="bg-[#2a2a2a] border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Device Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Auto-lock</span>
                  <select className="bg-[#1a1a1a] border border-gray-700 rounded px-2 py-1 text-white text-sm">
                    <option>1 minute</option>
                    <option>5 minutes</option>
                    <option>10 minutes</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Screen brightness</span>
                  <input type="range" className="w-24" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Bluetooth</span>
                  <button size="sm" className="bg-green-600">
                    On
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <button variant="outline" className="w-full bg-transparent">
                  Reset Device
                </button>
                <button variant="outline" className="w-full bg-transparent">
                  Update Firmware
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage Usage */}
        <Card className="bg-[#2a2a2a] border-gray-700 mt-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Storage Usage</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Used</span>
                  <span className="text-white">6 of 11 apps</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "55%" }}></div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">55%</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "Portfolio":
        return renderPortfolio()
      case "Accounts":
        return renderAccounts()
      case "Market":
        return renderMarket()
      case "Discover":
        return renderDiscover()
      case "Send":
        return renderSend()
      case "Receive":
        return renderReceive()
      case "Earn":
        return renderEarn()
      case "Buy / Sell":
        return renderBuySell()
      case "Swap":
        return renderSwap()
      case "Refer a friend":
        return renderReferFriend()
      case "Card":
        return renderCard()
      case "[L] Recover":
        return renderLedgerRecover()
      case "My Ledger":
        return renderMyLedger()
      default:
        return renderPortfolio()
    }
  }

  return (
    <div className="h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Mac-style title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="text-green-400">Synchronized</span>
          </div>
          <Bell className="w-4 h-4" />
          <button onClick={() => setPrivacyMode(!privacyMode)}>
            {privacyMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <Shield className="w-4 h-4" />
          <Settings className="w-4 h-4" />
          <HelpCircle className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-[#2a2a2a] border-r border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-300">MENU</h2>
          </div>

          <nav className="flex-1 p-2">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.name
                    ? "bg-[#3a3a3a] text-white"
                    : "text-gray-400 hover:bg-[#333333] hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1">{item.name}</span>
                {item.badge && <span className="bg-blue-600 text-xs px-2 py-1 rounded text-white">{item.badge}</span>}
              </button>
            ))}
          </nav>

          {/* Starred Accounts Section */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="text-sm font-semibold text-gray-300 mb-1">STARRED ACCOUNTS</h3>
              <p className="text-xs text-gray-500">Star an account to display it here for easy access.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">{renderContent()}</div>
      </div>
    </div>
  )
}
