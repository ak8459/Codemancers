import { useState } from "react"
import Filter from "./Filter"

function SearchBox({ placeholderVal, Value, handleChange }) {
  const [showFilter, setShowFilter] = useState(false)

  const toggleFilter = () => {
    setShowFilter(false)
  }

  return (
    <>
      <div className="flex items-center w-1/2  mx-auto mt-10">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-1 flex items-center pl-3  pointer-events-none">
            <svg className="w-6 h-6  text-blue-500 dark:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="search" value={Value} onChange={handleChange} className="bg-gray-50 
          rounded-2xl
          text-gray-900 text-md pl-16 
          placeholder:font-semibold
          focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
          focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 
          dark:bg-blue-50 dark:placeholder-gray-400 dark:placeholder-font-bold  " placeholder={placeholderVal} />
        </div>
        <div>
          <button onClick={() => setShowFilter(!showFilter)} className="rounded-2xl items-center p-2.5 ms-5 w-32 text-base  font-bold text-blue-700    hover:bg-blue-800  focus:outline-none  dark:bg-blue-100 dark:hover:bg-blue-100 dark:focus:ring-blue-800 ">
            {showFilter ? "Hide Filter" : "Show Filter"}
          </button>
        </div>
      </div>
      {showFilter && <Filter toggleFilter={toggleFilter} />}
    </>
  )
}

export default SearchBox