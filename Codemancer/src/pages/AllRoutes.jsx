// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SingleRecipe from './SingleRecipe'
/**
 * A component that renders all the routes for the application
 *
 * @component
 * @param {object} props An empty object
 * @returns {JSX.Element} A JSX element containing all the routes
 */
const AllRoutes = () => {
    /**
     * The main component for rendering all the routes
     * It renders a Routes component from React Router DOM
     * and sets up the routes for the application
     */
    return (
        <>
            <Routes>
                {
                    /**
                     * The route for the home page
                     * It renders the Home component
                     */
                    <Route
                        path="/"
                        exact
                        element={<Home />} />
                }

                {
                    /**
                     * The route for the about page
                     * It renders the About component
                     */
                    <Route
                        path="/about"
                        element={<About />} />
                }

                {
                    /**
                     * The route for the single recipe page
                     * It renders the SingleRecipe component
                     * The :recipeId is a parameter that
                     * is passed to the SingleRecipe component
                     */
                    <Route
                        path="/recipe/:recipeId"
                        element={<SingleRecipe />} />
                }
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/recipe/:recipeId' element={<SingleRecipe />} />
            </Routes>
        </>
    )
}


export default AllRoutes