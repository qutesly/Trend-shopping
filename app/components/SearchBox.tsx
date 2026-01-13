import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md">
      <Search className="w-4 h-4 text-grey-500"/>
      <input type="text" id="search" placeholder="Search..." className="text-sm outline-0" />
    </div>
  );
};

export default SearchBox;
