import React from 'react'
import RecipeCard from './RecipeCard';
const Recipes = ({ recipes }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center mt-14'>{
            recipes?.map((recipe) => {
                return <RecipeCard key={recipe?.uri} recipe={recipe} />
            })
        }</div>
    )
}

export default Recipes