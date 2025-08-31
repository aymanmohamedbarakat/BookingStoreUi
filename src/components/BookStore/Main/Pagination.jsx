import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-15">
      <button className="px-3 py-2 hover:text-gray-700 flex items-center text-pink-500 font-medium">
        <ChevronLeft /> Previous
      </button>
      <button className="w-8 h-8 bg-pink-500 text-white rounded">1</button>
      <button className="w-8 h-8 text-gray-700 hover:bg-gray-100 rounded">
        2
      </button>
      <button className="w-8 h-8 text-gray-700 hover:bg-gray-100 rounded">
        3
      </button>
      <span className="text-gray-500">...</span>
      <button className="px-3 py-2 hover:text-gray-700 flex items-center text-pink-500 font-medium">
        Next <ChevronRight />
      </button>
    </div>
  );
}
