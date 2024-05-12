import RecipeCard from './RecipeCard';



/**
+ * Component that renders a grid of recipe cards
+ * @param {object} props - Object containing the recipes to be rendered
+ * @param {array} props.recipes - An array of recipe objects
+ * @returns {JSX.Element} - A React component that renders a grid of recipe cards
+ */
const Recipes = ({ recipes }) => {
    // Map the array of recipes to a JSX.Element
    // Render a RecipeCard component for each recipe
    return (
        <>
            <div className='w-5/6 grid  sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto  mt-14'>
                {
                    // Map the array of recipes to a JSX.Element
                    recipes?.map((recipe, index) => {
                        // Render a RecipeCard component for each recipe
                        return <RecipeCard key={index} recipe={recipe} />
                    })}
            </div>
            <div className='w-5/6 grid  sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto  mt-14'>
                {recipes?.map((recipe, index) => {
                    return <RecipeCard key={index} recipe={recipe} />
                })
                }</div>
        </>
    )
}


export default Recipes