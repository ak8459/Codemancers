import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { useContext, useEffect } from "react";
import Loading from "../components/Loading";
const SingleRecipe = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate()
  const { getRecipeInfo, recipeInfo, isLoading } = useContext(RecipeContext);

  useEffect(() => {
    if (recipeId) {
      getRecipeInfo(`${recipeId}`);
    }
  }, []);
  if (isLoading) {
    return <Loading />
  }
  console.log(recipeInfo);
  return (
    <div className='w-3/5 border-2 border-red-500 mx-auto'>
      <div className="flex">
        <img className="border rounded-3xl w-1/2 " src={recipeInfo?.images?.LARGE?.url} alt={recipeInfo?.label} />

        <div className="">
          <h2 className="text-3xl my-4 font-semibold  text-blue-700">{recipeInfo?.label}</h2>
          <h2 className="text-md my-4 font-semibold  text-blue-600">{recipeInfo?.label}</h2>

          <div className="whitespace-normal">
            <div >
              <span className="font-semibold text-gray-500">Diet:</span>
              <span className="ml-12 text-blue-700 font-semibold">{recipeInfo?.dietLabels?.[0]}</span>
            </div>
            <div >
              <span className="font-semibold text-gray-500">Category:</span>
              <span className="ml-3 text-blue-700 font-semibold">{recipeInfo?.dishType?.[0]}</span>
            </div>
          </div>

        </div>


      </div>


      <div className=" flex right-content justify-between border rounded-3xl   ">

        <div className="recipe-info ">
          <h2 className="text-3xl my-4 font-semibold font-mono text-blue-700">About this Recipe</h2>
          <div className="text-start font-semibold text-lg text-blue-800 w-full mx-auto">
            <p className="mb-2">This easy peasy recipe is perfect for the evening cravings, you know! when
              you want chocolate muffin and you want it now  but you also happen to be on keto diet!</p>
            <p className="mb-2">well no conflict here, this is easy, quick and keto(keto carb). It pairs nicely with tea, coffee or a cup of milk</p>
            <p className="mb-2">you may as well want to go go nuts and add some nuts in the batter :) I love to add walnuts or pecans.</p>
            <p className="mb-2">For muffins to go kind of time, you can make them muffin size but then the baking temperature time must be reduced.</p>
          </div>
          <div className="instructions">
            <h2 className="text-3xl mt-10 mb-4 font-semibold text-blue-700">Instructions</h2>
            <div className="text-start text-blue-600 whitespace-normal">
              {recipeInfo?.ingredientLines?.map((ingredient, index) => (
                <p className="mb-4 font-semibold text-lg text-blue-800 flex" key={index}>
                  <span>{index + 1}.</span>
                  <span className="ml-1">{ingredient}.</span>
                </p>
              ))}
            </div>
          </div>


          <hr className="border-gray-100 my-10" />

          <div className="notes">
            <h2 className="text-3xl mt-10 mb-4 font-semibold text-blue-700">Notes</h2>
            <div className="text-start ml-4 text-blue-600 whitespace-normal">
              <ul className="list-disc list-inside  font-semibold  text-blue-800">
                <li>Lorem ipsum dolor sit amet conseadipisci sapiente </li>
                <li>Lorem ipsum dolor sit amet conseadipisci sapiente</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100 my-8" />
          <p className="font-semibold text-base text-gray-300">Recipe By Sahar | Photo by Carolina Hernandez on Unsplash </p>

          <hr className="border-gray-100 my-8" />

          <button onClick={() => navigate('/')} className="text-blue-700 bg-blue-700 hover:bg-blue-50 focus:ring-4 focus:ring-blue-50 font-bold rounded-2xl text-sm px-6 py-2.5 text-center dark:bg-blue-50 dark:hover:bg-blue-100 dark:focus:ring-blue-800">&lt; All Recipes</button>
        </div>

        <div className="ingredients pl-4 bg-blue-50 border rounded-2xl ">
          <h2 className="text-2xl  mb-4 font-semibold text-blue-700">Ingredients</h2>
          <ul className="list-disc whitespace-normal  list-inside  font-semibold  text-blue-800">
            {
              recipeInfo?.ingredients?.map((ingredient, index) => {
                return <li className="text-blue-700 mb-2 font-semibold" key={index}>{ingredient.text}</li>
              })
            }
          </ul>
        </div>

      </div>
    </div >
  )
}

export default SingleRecipe

