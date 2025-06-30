"use client"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedCategory } from "../store/slices/productsSlice"

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  const categories = [
    { id: "hardware", name: "Hardware Wallets", icon: "📱" },
    { id: "bundles", name: "Bundles & Packs", icon: "📦" },
    { id: "accessories", name: "Accessories", icon: "🔧" },
    { id: "limited", name: "Limited Editions", icon: "⭐" },
    { id: "all", name: "See all products", icon: "👁️" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-8">Discover our devices</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-center">{product.name}</h3>
                </div>
              ))}
            </div>

            {/* Compare Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Compare Ledger wallets</h2>
                  <p className="text-orange-100">Find the perfect wallet for your needs</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="/assets/LedgerDevices.jpg" alt="Ledger devices" className="h-20" />
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Compare →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Shop all</h2>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => dispatch(setSelectedCategory(category.id))}
                    className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
