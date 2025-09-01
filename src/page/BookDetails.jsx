import React, { useState } from 'react'
import coverBook from "../assets/images/cover.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import whatsapp from "../assets/images/whatsapp.png";
import twitter from "../assets/images/twitter.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { BadgeCheck, Heart, Minus, Plus, ShoppingCart, Star, Truck } from 'lucide-react';
export default function BookDetails() {
  const [activeTab, setActiveTab] = useState('Product Details');
  return (
    <div className='min-h-screen  bg-white p-6 '>
      <div className='max-w-6xl mx-auto flex justify-center gap-3'>

        <div className='w-1/5 flex flex-col py-2'>
          <img src={coverBook} alt="" />
          <div className='flex w-1/5 mt-1 gap-3 '>
            <img src={coverBook} className='border p-1' alt="" />
            <img src={coverBook} className='border p-1' alt="" />
            <img src={coverBook} className='border p-1' alt="" />
          </div>
        </div>

        <div className='flex-1  px-4 py-2'>
          {/* Title */}
          <div className='flex justify-between'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h1 className='text-xl font-bold tracking-wide'>Rich Dad And Poor Dad</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
            <div className='flex gap-2'>
              <a href=""><img src={facebook} alt="" /></a>
              <a href=""><img src={instagram} alt="" /></a>
              <a href=""><img src={twitter} alt="" /></a>
              <a href=""><img src={whatsapp} alt="" /></a>
              <FiShare2 size={26} className='text-gray-500' />
            </div>
          </div>
          {/* About Book */}
          <div className="inline-grid grid-cols-5 gap-4 mt-3">
            <div>
              <h1 className="text-sm text-gray-400">Author</h1>
              <p className="text-base">Robert T. Kiyosaki</p>
            </div>
            <div>
              <h1 className="text-sm text-gray-400">Publication Year</h1>
              <p className="text-base">1997</p>
            </div>
            <div>
              <h1 className="text-sm text-gray-400">Book</h1>
              <p className="text-base"> 1 Of 1</p>
            </div>
            <div>
              <h1 className="text-sm text-gray-400">Pages</h1>
              <p className="text-base">336</p>
            </div>
            <div>
              <h1 className="text-sm text-gray-400">Language</h1>
              <p className="text-base">English</p>
            </div>
          </div>
          {/* Rating & Shipping */}
          <div className='grid grid-cols-2 mb-6 mt-9 w-full'>
            <div className='flex flex-col'>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-blue-600">(210 Review)</span>
              </div>
              <p className='text-gray-500'>Rate: <span className='font-bold text-black'>4.2</span></p>
            </div>

            <div className='grid grid-cols-1 gap-2'>
              <div className="flex justify-end items-center gap-4">
                <span className="flex items-center gap-1 text-green-600 text-sm bg-white p-2 border border-gray-300 rounded-lg">
                  <BadgeCheck size={18} />
                  In Stock
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-sm bg-white p-2 border border-gray-300 rounded-lg">
                  <Truck />                  Free Shipping Today
                </span>
              </div>
              <div className="flex justify-end gap-4">
                <span className="flex items-center gap-1 text-yellow-400 text-sm bg-white p-2 border border-gray-300 rounded-lg">
                  Discount code: Ne212
                </span>
              </div>
            </div>
          </div>

          {/* Price & action Button */}
          <div className="flex items-center justify-between">
            {/*Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">$40.00</span>
              <span className="text-xl text-gray-400 line-through">$40.00</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center">
                <button className="w-5 h-5 flex items-center justify-center border-2 border-pink-500 font-bold text-pink-600 hover:bg-gray-100 rounded-full">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 h-8 flex items-center justify-center font-semibold">1</span>
                <button className="w-5 h-5 flex items-center justify-center text-pink-600 border-2 border-pink-500 hover:bg-gray-100 rounded-full">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-pink-600 text-white text-sm px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2">
                Add To Cart
                <ShoppingCart size={20} />
              </button>

              {/* Heart Icon */}
              <button className="w-10 h-10 border border-pink-300 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Heart className="w-5 h-5 text-pink-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 pt-8">

        {/* Tab Navigation */}
        <div className="flex ">
          {['Product Details', 'Customer Reviews', 'Recomended For You'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold transition-colors ${activeTab === tab
                ? 'text-black border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'Product Details' && (
            <div className="space-y-4 px-5">
              <div className="flex">
                <span className="font-semibold w-40">Book Title :</span>
                <span>Rich Dad And Poor Dad</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Author :</span>
                <span>Robert T. Kiyosaki</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Publication Date :</span>
                <span>1997</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">ASIN :</span>
                <span>B09TWSRMCB</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Language :</span>
                <span>English</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Publisher :</span>
                <span>Plinter</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Pages :</span>
                <span>336</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Book Format :</span>
                <span>Hard Cover</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Best Seller Rank :</span>
                <span>#3</span>
              </div>
            </div>
          )}

          {activeTab === 'Customer Reviews' && (
            <div className="text-gray-600">
              <h3 className="font-semibold text-lg mb-4 text-black">Customer Reviews</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold">Amazing book!</span>
                  </div>
                  <p className="text-sm">This book completely changed my perspective on money and investing. Highly recommended for anyone looking to improve their financial literacy.</p>
                  <p className="text-xs text-gray-500 mt-2">- John D., Verified Purchase</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Recomended For You' && (
            <div className="text-gray-600">
              <h3 className="font-semibold text-lg mb-4 text-black">Recommended Books</h3>
              <div className="grid grid-cols-4 gap-2 place-items-center">
                {/* Content */}
                <div>
                  <div className="w-1/2 rounded mb-2 ">
                    <img src={coverBook} alt="" />
                  </div>
                  <p className="text-sm font-semibold text-black">The Millionaire Next Door</p>
                  <p className="text-xs">$29.99</p>
                </div>

                <div>
                  <div className="w-1/2 rounded mb-2 ">
                    <img src={coverBook} alt="" />
                  </div>
                  <p className="text-sm font-semibold text-black">The Millionaire Next Door</p>
                  <p className="text-xs">$29.99</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}
