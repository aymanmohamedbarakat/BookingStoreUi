import React from 'react'
import coverImg from "../../../assets/images/cover.png"
import { Minus, Plus, Ticket, Trash2, Truck } from 'lucide-react'
export default function CartItems() {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            {/* Cart */}
            <div>
                {/* Header Cart */}
                <div className="grid grid-cols-6 border-b border-gray-200">
                    <div className="col-span-2 text-left py-4 px-4 text-sm font-medium text-gray-600">Item</div>
                    <div className="text-center py-4 px-4 text-sm font-medium text-gray-600">Quantity</div>
                    <div className="text-center py-4 px-4 text-sm font-medium text-gray-600">Price</div>
                    <div className="text-center py-4 px-4 text-sm font-medium text-gray-600">Total Price</div>
                    <div className="text-center py-4 px-4 text-sm font-medium text-gray-600">Action</div>
                </div>
                {/* Card */}
                <div className="grid grid-cols-6 gap-4 items-center py-6 border-b border-gray-300">
                    {/* Column 1 & 2: Product Info */}
                    <div className="col-span-2 flex gap-4">
                        <div className="w-25 h-32 bg-purple-600 rounded-lg flex-shrink-0 relative overflow-hidden">
                            <img
                                src={coverImg}
                                alt="Rich Dad Poor Dad Book Cover"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-xl mb-1">
                                Rich Dad And Poor Dad
                            </h3>
                            <p className="text-sm text-gray-500 font-medium mb-2">
                                Author: <span className="font-bold text-black">Robert T. Kiyosaki</span>
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,                        </p>
                            <div className="flex flex-col justify-center gap-4">
                                <div className="flex items-center border border-gray-300 rounded-xl w-fit p-2 gap-2 text-sm text-gray-600">
                                    <Truck size={16} />
                                    <span>Free Shipping</span>
                                </div>
                                <div className="text-xs text-gray-600">
                                    ASIN: <span className="font-mono text-gray-400">B01TVCMCB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Quantity */}
                    <div className="text-center">
                        <div className="inline-flex items-center overflow-hidden">
                            <button className="w-5 h-5 flex items-center justify-center border-2 border-pink-500 font-bold text-pink-600 hover:bg-pink-500 hover:text-white rounded-full">
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center font-semibold">1</span>
                            <button className="w-5 h-5 flex items-center justify-center text-pink-600 border-2 border-pink-500 hover:bg-pink-500 hover:text-white rounded-full">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Column 4: Price */}
                    <div className="text-center">
                        <span className="text-lg font-semibold text-gray-900">$40</span>
                    </div>

                    {/* Column 5: Total Price */}
                    <div className="text-center">
                        <span className="text-lg font-bold text-gray-900">$40</span>
                    </div>

                    {/* Column 6: Action (Delete) */}
                    <div className="text-center">
                        <button className="p-2 text-pink-500 hover:bg-pink-50 rounded-lg transition">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* OrderSummary */}
            <div className="mt-24 bg-gray-200 flex justify-between p-8">
                <div className="flex flex-col w-1/2 space-y-8">
                    <div>
                        <h1 className="text-xl font-bold text-black mb-2">Payment Summary</h1>
                        <p className="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                        </p>
                    </div>
                    {/* PromoCode */}
                    <div>
                        <h1 className="text-sm font-medium text-gray-400 mb-4">Have a discount code?</h1>
                        <div className="flex">
                            <div className="relative mr-3">
                                <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Enter Promo Code"
                                    className="px-10 py-3 border border-gray-300 rounded text-sm"
                                />
                            </div>
                            <button className="px-4 py-3 bg-gray-800 text-white rounded text-sm font-medium">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
                {/* Total */}
                <div className="w-1/3 space-y-4">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Subtotal</span>
                            <span className="text-black font-bold">$120</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Shipping</span>
                            <span className="text-black">Free Delivery</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Tax</span>
                            <span className="text-black font-bold">$4</span>
                        </div>

                        <div className="flex justify-between text-base font-medium">
                            <span className="text-black">Total</span>
                            <span className="text-pink-600 font-bold">$124</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-pink-700 text-white hover:bg-pink-800 py-3 rounded font-medium text-sm transition-all">
                            Check out
                        </button>

                        <button className="w-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-3 rounded transition-all font-medium text-sm">
                            Keep Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
