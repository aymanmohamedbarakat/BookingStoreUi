import React from 'react'
import { Check, Trash2Icon } from "lucide-react";
export default function Order() {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow border border-pink-200 rounded-2xl">
            {/* Header with close button */}
            <div className="flex justify-end mb-6">
                <button className="w-8 h-8 flex items-center justify-center text-pink-400 hover:bg-pink-50">
                    <span className="text-sm"><Trash2Icon /></span>
                </button>
            </div>

            {/* Order Details */}
            <div className="space-y-4 mb-12">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Order No.</span>
                    <span className="text-gray-900 font-medium">#123456</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Status</span>
                    <span className="text-gray-900 font-medium">In progress</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Date</span>
                    <span className="text-gray-900 font-medium">Jul, 31 2024</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Address</span>
                    <span className="text-gray-900 font-medium">Maadi, Cairo, Egypt.</span>
                </div>
            </div>

            {/* Progress Tracker */}
            <div className="relative flex-1 w-1/2 justify-center mx-auto">                {/* Progress Line */}
                <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200">
                    <div className="h-full bg-gray-300 w-1/2"></div>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between items-start relative z-10">
                    {/* Order Placed */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-3">
                            <Check className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-pink-500 text-sm font-medium">Order placed</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-3">
                            <Check className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm">Shipping</span>
                    </div>

                    {/* Completed */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-3">
                            <Check className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm">Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

