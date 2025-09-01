import { Heart, ShoppingCart, Star } from "lucide-react";
import coverBook from "../../../assets/images/cover.png";

export default function BookItems() {
  return (
    <div className="flex gap-10">
      <div className="w-1/4">
        <img src={coverBook} className="object-cover" alt="" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Rich Dad And Poor Dad</h1>
          <span className="bg-white p-2 rounded-lg border text-yellow-300 border-yellow-200">
            25% Discount code: Ne212
          </span>
        </div>
        <p className="text-sm max-w-sm text-gray-600 mb-3 leading-relaxed">
          Adipisit ete Ligpism Lrsuada tincidunt mi ut venilbus antique est
          vehicula orci, scelerisque vut. Aliquam in lacinia tellus, sagittis
          rhoncus et, rhoncus sit. Sed rutrum blandit porta vehicula ex ligistm
          quis.
        </p>
        <div className="flex flex-col gap-1.5 space-x-4 mb-3 max-w-3xl">
          {/* Star & price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-gray-300 fill-current" />
              <p className="text-sm text-gray-600 ml-3">(210 Review)</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$40.00</p>
            </div>
          </div>
          {/* Rate */}
          <div className="flex">
            <h1 className="text-gray-400 font-bold">Rate:</h1>
            <p className="font-bold">4.2</p>
          </div>
          {/* Author year */}
          <div className="flex items-center justify-between">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h1 className="text-sm text-gray-400">Author</h1>
                <p className="text-base">Robert T. Kiyosaki</p>
              </div>
              <div>
                <h1 className="text-sm text-gray-400">Year</h1>
                <p className="text-base">1997</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <span>Add To Cart</span>
                <ShoppingCart className="w-4 h-4" />
              </button>
              <button className="text-pink-500 bg-white border hover:bg-pink-500 hover:text-white  px-3 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
