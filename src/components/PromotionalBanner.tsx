import React from 'react'

const PromotionalBanner = () => {
    return (
        <div className="bg-gray-800 py-3 sticky bottom-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Rummy Nabob Apk</h3>
                        <p className="text-yellow-400 text-sm">₹100 Bonus | Instant Withdrawal</p>
                    </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition-colors">
                    Download
                </button>
            </div>
        </div>
    )
}

export default PromotionalBanner