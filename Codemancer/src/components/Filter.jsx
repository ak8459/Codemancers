import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import { Category, Diet } from '../context/RecipeContext'

const Filter = ({ toggleFilter }) => {
    const { clearFilter, setDishType, setDiet } = useContext(RecipeContext)




    return (
        <div className='w-2/4 mx-auto bg-blue-50 px-10 py-7 mt-10 rounded rounded-xl'>
            <div className='flex items-center justify-between'>
                <button type="button" onClick={toggleFilter} className="text-blue-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  dark:hover:bg-blue-100 " data-modal-hide="default-modal">
                    <svg className="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className='text-xl font-bold text-gray-400 text-center mb-5'>
                Filter Selection
            </div>
            <div className='categories diet flex flex-col gap-5'>
                <p className='text-xl text-blue-700 font-bold'>Category</p>
                <div className='flex flex-wrap gap-2  '>
                    {
                        Category.map((category) => {
                            return (
                                <div key={category.id}>
                                    <button type="button" onClick={() => setDishType(category.value)} className="py-3 px-4 inline-flex  items-center text-sm font-medium rounded-lg border border-gray-200 bg-blue-700 text-blue-700  hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                                        {category.name}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='Diet '>
                    <p className='text-xl text-blue-700 font-bold text-xl'>Diet</p>
                    <div className='flex flex-wrap gap-2 mt-4'>
                        {
                            Diet.map((category) => {
                                return (
                                    <div key={category.id}>
                                        <button type="button" onClick={() => setDiet(category.value)} className="py-3 px-4 inline-flex  items-center text-sm font-medium rounded-lg border border-gray-200 bg-blue-700 text-blue-700  hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                                            {category.name}
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-end mt-10'>
                <div className="mr-2">
                    <button type="button" onClick={clearFilter} className="py-2 px-5 inline-flex  items-center text-sm font-bold rounded-2xl border-2 border-blue-700 bg-blue-700 text-blue-700 hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                        Clear Filter
                    </button>
                </div>
                <div>
                    <button onClick={toggleFilter} type="button" className="py-2 px-6 inline-flex items-center text-sm font-bold rounded-2xl border-2 border-blue-700 bg-blue-700 text-blue-700 hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter