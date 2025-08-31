import { SlidersHorizontal } from "lucide-react";
import React from "react";

export default function HeaderFilter() {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      <span className="font-semibold text-gray-800 ">Filter</span>
    </div>
  );
}
