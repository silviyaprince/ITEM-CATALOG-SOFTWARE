import React from "react";
import { FaSearch } from "react-icons/fa";

export function Header() {
  return (
    <div class="flex  mt-10">
      <div className="relative">
        <span className="flex items-center space-x-3">
          <input
            type="text"
            class="w-full w-9/12 ml-96  p-2 border border-primary1 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary2 focus:border-transparent"
            placeholder=" Search..."
          />
          <span className="text-2xl">
            <FaSearch />
          </span>
        </span>
      </div>
    </div>
  );
}
