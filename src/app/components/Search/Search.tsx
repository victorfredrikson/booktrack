"use client";
import React, { ChangeEvent, useState } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
};
const Search = (props: SearchProps) => {
  const placeholderValue = "Search for books...";
  const { onSearch } = props;
  const [value, setValue] = useState(placeholderValue);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
      console.log(value);
    }
  };
  return (
    <div className="relative w-full text-gray-600">
      <input
        type={"search"}
        name={"search"}
        placeholder={placeholderValue}
        className="bg-gray-100 h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />

      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
        </svg>
      </button>
    </div>
  );
};
export default Search;
