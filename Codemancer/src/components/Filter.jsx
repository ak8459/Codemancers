import React from 'react'

const Category = [{
    id: 1,
    name: "Bread",
    value: "bread",
    checked: false
}, {
    id: 2,
    name: "Salad",
    value: "salad",
    checked: false
}, {
    id: 3,
    name: "Dessert",
    value: "dessert",
    checked: false
}, {
    id: 4,
    name: "Drink",
    value: "drink",
    checked: false
}
    , {
    id: 5,
    name: "Main",
    value: "main course",
    checked: false
}, {
    id: 6,
    name: "Snack",
    value: "snack",
    checked: false
}, {
    id: 7,
    name: "Soup",
    value: "soup",
    checked: false
}, {
    id: 8,
    name: "Pastry",
    value: "pastry",
    checked: false
}
]

const Diet = [
    {
        id: 3,
        name: "Keto",
        value: "keto",
        checked: false
    },

    {
        id: 2,
        name: "Vegetarian",
        value: "vegetarian",
        checked: false
    },
    {
        id: 1,
        name: "Vegan",
        value: "vegan",
        checked: false
    }
    , {
        id: 4,
        name: "Other",
        value: "other",
        checked: false
    }
]

const Filter = ({ toggleFilter }) => {



    return (
        <div className='w-2/4 mx-auto bg-blue-50 px-10 py-6 mt-10 rounded rounded-xl'>
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
            <div className='categories '>
                <p className='text-xl text-blue-700 font-bold'>Category</p>
                <div className='flex flex-wrap gap-2 mt-4 '>
                    {
                        Category.map((category) => {
                            return (
                                <div key={category.id}>
                                    <button type="button" className="py-3 px-4 inline-flex  items-center text-sm font-medium rounded-lg border border-gray-200 bg-blue-700 text-blue-700  hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                                        {category.name}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='Diet mt-4'>
                <p className='text-xl text-blue-700 font-bold text-xl'>Diet</p>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {
                        Diet.map((category) => {
                            return (
                                <div key={category.id}>
                                    <button type="button" className="py-3 px-4 inline-flex  items-center text-sm font-medium rounded-lg border border-gray-200 bg-blue-700 text-blue-700  hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                                        {category.name}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex items-center justify-end mt-10'>
                <div className="mr-2">
                    <button type="button" className="py-2 px-5 inline-flex  items-center text-sm font-bold rounded-2xl border border-blue-700 bg-blue-700 text-blue-700 hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                        Clear Filter
                    </button>
                </div>
                <div>
                    <button onClick={toggleFilter} type="button" className="py-2 px-6 inline-flex items-center text-sm font-bold rounded-2xl border border-blue-700 bg-blue-700 text-blue-700 hover:bg-blue-50 disabled:opacity-50 dark:bg-blue-50 dark:text-blue-700 dark:hover:bg-blue-100">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter