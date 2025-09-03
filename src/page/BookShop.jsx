import BookItems from "../components/BookStore/Main/BookItems";
import FilterTabs from "../components/BookStore/Main/FilterTabs";
import Pagination from "../components/BookStore/Main/Pagination";
import SearchSorting from "../components/BookStore/Main/SearchSorting";
import CategoryFilter from "../components/BookStore/SideBar/CategoryFilter";
import HeaderFilter from "../components/BookStore/SideBar/HeaderFilter";

export default function BookShop() {
  return (
    <div className="flex justify-center ">
      <div className="w-1/4 border-r border-gray-200">
        <div className="max-w-7xl mx-auto p-4 flex gap-6 bg-gray-100 h-full">
          {/* Sidebar */}
          <div className="w-full bg-white rounded-lg p-6 h-fit">
            <HeaderFilter />
            {/* Categories */}
            <CategoryFilter />
          </div>
        </div>
      </div>
      <div className="flex-1 gap-6">
        <div className="min-h-screen bg-gray-50 p-4">
          {/* Header Search & Sort */}
          <div className="max-w-7xl mx-auto">
            <SearchSorting />
          </div>
          {/* Tabs */}
          <FilterTabs />

          <div className="mt-15">
            {/* mapping items */}
            <BookItems />

            {/* Pagination */}
            <Pagination />

            <div className="text-center text-sm text-gray-500 mt-2">
              1-20 of 5000+ Book available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
