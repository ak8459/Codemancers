// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SingleRecipe from './SingleRecipe'
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path='/recipe/:recipeId' element={<SingleRecipe />} />
            </Routes>
        </>
    )
}

export default AllRoutes