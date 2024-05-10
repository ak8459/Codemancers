import RecipeCard from './RecipeCard';
const Recipes = ({ recipes }) => {
   
    return (
        <div className='w-5/6 grid  sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto  mt-14'>{
            recipes?.map((recipe) => {
                return <RecipeCard key={recipe?.uri} recipe={recipe} />
            })
        }</div>
    )
}

export default Recipes