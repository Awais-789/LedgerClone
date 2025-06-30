import React from 'react'

const ForBusiness = () => {
  return (
    <div>
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">For Business</h1>
            <p className="text-lg text-gray-700 mb-6">
                Discover how Ledger can help your business secure digital assets and manage crypto transactions efficiently.
            </p>
            
            {/* Business Solutions Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600">Tailored solutions for large organizations to manage and secure their crypto assets.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Crypto Custody</h3>
                <p className="text-gray-600">Secure custody services for institutional investors and businesses.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">API Integration</h3>
                <p className="text-gray-600">Seamless API integration for businesses to interact with blockchain networks.</p>
                </div>
            </div>
    
            {/* Contact Us Section */}
            <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Contact Our Business Team</h2>
                <p className="text-gray-600 mb-4">For more information on our business solutions, please reach out to our team.</p>
                <button className="bg-ledger-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Contact Us
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ForBusiness