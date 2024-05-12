
import { Link } from "react-router-dom";
function recipeId(uri) {
    return uri.split("#")[1];
}
// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
/**
 * Component for rendering individual recipe cards
 * @param {Object} props Component props
 * @param {Object} props.recipe Recipe object
 * @returns {JSX.Element} Rendered component
 */
const RecipeCard = ({ recipe }) => {

    /**
     * Extracts image, label and uri from recipe object
     */
    const { image, label, uri } = recipe?.recipe


    /**
     * Render recipe card
     * @returns {JSX.Element} Rendered component
     */
    return (
        <div className="rounded font-roboto rounded-3xl bg-blue-50  overflow-hidden ">
            <Link to={`/recipe/${recipeId(uri)}`} >
                <img className="w-full h-80 sm:object-cover md:object-cover " src={image} alt="Sunset in the mountains" />
                <div className="px-6 my-10">
                    <div className="font-bold text-xl mb-2 text-blue-600">{label}</div>
                    <p className="text-gray-600 text-base">
                        Lorem ipsum dolor sit amet, erferendis eaque
                    </p>
                </div>
            </Link>
        </div>
    )
}


export default RecipeCard