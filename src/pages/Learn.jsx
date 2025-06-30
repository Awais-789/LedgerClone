const Learn = () => {
  const learningResources = [
    {
      title: 'Ledger Academy',
      description: 'Learn about crypto and web3 safely',
      image: '/assets/LedgerAcademy.jpg',
      gradient: 'from-orange-400 to-pink-400'
    },
    {
      title: 'Ledger Quest',
      description: 'Take web3 quests and get NFTs',
      image: '/assets/ledgerquest.jpg',
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      title: 'Blog',
      description: 'All web3 and Ledger news',
      image: '/assets/Blog.jpg',
      gradient: 'from-purple-400 to-indigo-400'
    }
  ];

  const usefulResources = [
    'What happens if I lose my Ledger?',
    'Not your keys, not your coins',
    'What is a cold wallet?',
    'What is a private key?'
  ];

  const featuredArticles = [
    {
      title: "DON'T GET REKT: SECURITY EDUCATION WITH A SOUL",
      description: "Today, Ledger premieres Don't Get Rekt, a stop-motion animation series where Ledger wallets sing, dance, and occasionally throw themselves into the fiery pits of security education with a goal: To make learning about crypto security fun and playful o...",
      image: '/placeholder.svg?height=300&width=400',
      category: 'Security',
      readTime: '5 min read'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 lg:p-12 text-white">
                  <h1 className="text-4xl font-bold mb-4">
                    DON'T GET REKT: SECURITY EDUCATION WITH A SOUL
                  </h1>
                  <p className="text-lg mb-6 text-orange-100">
                    Today, Ledger premieres Don't Get Rekt, a stop-motion animation series where Ledger wallets sing, dance, and occasionally throw themselves into the fiery pits of security education with a goal: To make learning about crypto security fun and playful o...
                  </p>
                  <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Read more →
                  </button>
                </div>
                <div className="p-8">
                  <img
                    src="/assets/Recovery_Key_16x9.webp"
                    alt="Don't Get Rekt Animation"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold mb-8">Learn Web3</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {learningResources.map((resource, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className={`bg-gradient-to-br ${resource.gradient} rounded-lg p-6 mb-4 h-48 flex items-center justify-center`}>
                      <img
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        className="w-48 h-40 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}
  export default Learn;