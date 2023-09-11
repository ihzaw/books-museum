"use client";

import { useState } from "react";
import { getTodos } from "../actions";
import { revalidateTag } from "next/cache";

const SearchBar = (props) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = {
      name
    }
    console.log('query :', query)
  };

  return (
    <div className="mb-3">
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <button
            className="relative z-[2] flex items-center bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-yellow-600 transition duration-150 ease-in-out hover:bg-primary-700 hover:scale-110 active:bg-primary-800"
            type="submit"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <input
            type="search"
            name="name"
            className="relative m-0 -mr-0.5 border-b border-slate-300 rounded block w-[1px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-b focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
            placeholder="Search (WIP)"
            aria-label="Search"
            aria-describedby="button-addon1"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
