import RecipeCard from './RecipeCard';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';



const Recipes = ({ recipes }) => {
    return (
        <div className='w-5/6 grid  sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto  mt-14'>{
            recipes?.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />
            })
        }</div>
    )
}

export default Recipes