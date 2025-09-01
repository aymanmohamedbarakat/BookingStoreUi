import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

export default function CategoryFilter() {
  return (
    <div>
      <div className="mb-8">
        <h3 className="font-semibold mb-4 flex items-center justify-between text-pink-500">
          Categories <ChevronDown />
        </h3>
        <div className="flex flex-col justify-center gap-5 text-2xl">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700 flex-1">All Categories</span>
            <span className="text-xs text-gray-500">(1450)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700 flex-1">All Categories</span>
            <span className="text-xs text-gray-500">(1450)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700 flex-1">All Categories</span>
            <span className="text-xs text-gray-500">(1450)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700 flex-1">All Categories</span>
            <span className="text-xs text-gray-500">(1450)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-sm text-gray-700 flex-1">All Categories</span>
            <span className="text-xs text-gray-500">(1450)</span>
          </label>
        </div>
        <p className="text-center mt-5 text-pink-500">Load More</p>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 flex items-center justify-between text-black">
          Publisher <ChevronRight />
        </h3>
        {/* same logic list of Category */}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 flex items-center justify-between text-black">
          Year <ChevronRight />
        </h3>
        {/* same logic list of Category */}
      </div>
    </div>
  );
}
