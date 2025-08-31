import { Mic, Search } from "lucide-react";
import React from "react";

export default function SearchSorting() {
  return (
    <div className="flex items-center justify-between mb-4 gap-4">
      <div className="relative flex-1 ">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <div className="flex items-center gap-3 absolute end-0 top-1/2 -translate-y-1/2  text-gray-400 p-2">
          <Mic
            size={22}
            className="hover:text-pink-500 transition-all duration-300"
          />
          <Search
            size={40}
            className="border-l border-gray-300 p-2 text-pink-500 cursor-pointer focus:ring-pink-300"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
}
