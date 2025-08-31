export default function FilterTabs() {
  return (
    <div className="flex flex-wrap items-center gap-1 overflow-hidden">
      <button className="px-10 py-2 rounded-lg whitespace-nowrap  bg-pink-500 text-white transition-all duration-500">
        Cook
      </button>
      <button className="px-10 py-2 rounded-lg whitespace-nowrap border border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-500">
        Self Help
      </button>
      <button className="px-10 py-2 rounded-lg whitespace-nowrap border border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-500">
        History
      </button>
    </div>
  );
}
