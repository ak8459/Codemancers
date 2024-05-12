import { useEffect } from "react";
import { Link } from "react-router-dom";
function recipeId(uri) {
    return uri.split("#")[1];
}
const RecipeCard = ({ recipe }) => {

    const { image, label, uri } = recipe?.recipe
    // console.log(uri);

    return (
        <div className="max-w-sm rounded rounded-3xl bg-blue-50  overflow-hidden shadow-lg">
            <Link to={`/recipe/${recipeId(uri)}`} >
                <img className="w-full h-80" src={image} alt="Sunset in the mountains" />
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