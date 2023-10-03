"use client";
import React, { useState } from "react";

const Dropdown = ({ datas, onCategory, isOpen, setIsOpen }) => {
  const [names, setNames] = useState("All Categories");

  return (
    <div
      className={`relative inline-block text-left w-fit my-4 ${
        datas.isLoading ? "opacity-80" : "opacity-100"
      }`}
    >
      <div>
        <button
          type="button"
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
            datas.isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {names}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform ease-out duration-100 transform opacity-0 scale-95 ${
          isOpen
            ? "transform opacity-100 scale-100"
            : "transition ease-in duration-75 transform opacity-0 scale-0"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <p
            className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
            onClick={() => {
              onCategory("categories");
              setNames("All Categories");
            }}
          >
            All Categories
          </p>
          {datas?.data?.map(({ name, id }) => (
            <p
              key={id}
              className={` block px-4 py-2 text-sm cursor-pointer ${
                name === names ? "bg-gray-100 text-gray-900" : "text-gray-700"
              }`}
              onClick={() => {
                onCategory(id);
                setNames(name);
              }}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
