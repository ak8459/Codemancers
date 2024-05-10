
const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const { image, label } = recipe?.recipe
    return (
        <div className="max-w-sm rounded rounded-3xl bg-blue-50  overflow-hidden shadow-lg">
            <img className="w-full h-80" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2 text-blue-700">{label}</div>
                <p className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, erferendis eaque
                </p>
            </div>
        </div>
    )
}

export default RecipeCard