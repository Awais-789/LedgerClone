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
import { Card, CardContent } from "./ui/card"

export default function LedgerLiveApp() {
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

  const renderContent = () => {
    switch (activeSection) {
      case "Portfolio":
        return renderPortfolio()
      case "Accounts":
        return renderAccounts()
      case "Market":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Market</h1>
            <p className="text-gray-400">Market data and trends coming soon...</p>
          </div>
        )
      case "Discover":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Discover</h1>
            <p className="text-gray-400">Discover new DApps and services...</p>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">{activeSection}</h1>
            <p className="text-gray-400">This section is under development...</p>
          </div>
        )
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
