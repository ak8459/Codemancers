import { useState } from "react"

function SearchBox({ placeholderVal, Value, handleChange }) {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <>
      <div className="flex items-center w-2/4 mx-auto mt-10">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg className="w-6 h-6  text-blue-500 dark:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="search" value={Value} onChange={handleChange} className="bg-gray-50 rounded-2xl
          border-gray-300 text-gray-900 text-md pl-14 
          placeholder:font-semibold
          focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3  
          dark:bg-blue-50 dark:placeholder-gray-400 dark:placeholder-font-bold 
           dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholderVal} />
        </div>
        <button onClick={() => setShowFilter(!showFilter)} className="rounded-2xl items-center py-2.5 px-3 ms-5 text-sm font-medium text-[#1D4ED8]   hover:bg-blue-800  focus:outline-none  dark:bg-blue-100 dark:hover:bg-blue-100 dark:focus:ring-blue-800 ">
          {showFilter ? "Hide Filter" : "Show Filter"}
        </button>
      </div>

    </>
  )
}

export default SearchBox