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
  // console.log(recipeInfo);
  return (
    <div className='w-3/5 grid grid-cols-2 gap-5 md:grid-cols-2 mt-16 mx-auto '>

      <div ><img className="w-full border h-auto sm:object-fit  rounded-3xl" src={recipeInfo.image} alt={recipeInfo?.label} /></div>

      <div className="mt-5 w-5/6">
        <h2 className="text-3xl my-4 font-semibold sm:text-3xl  text-blue-700">{recipeInfo?.label}</h2>
        <h2 className="text-md my-4 font-semibold  sm:text-lg text-blue-600">{recipeInfo?.label}</h2>

        <hr className="border-gray-200 my-3" />
        <div className="flex justify-evenly">
          <p className="text-blue-600 font-semibold">4 Portions</p>
          <p className="text-blue-600 h-2">|</p>
          <p className="text-blue-600 font-semibold">{recipeInfo?.totalTime} min</p>
        </div>
        <hr className="border-gray-200 my-3" />
        <div className="whitespace-normal">
          <div className="mt-6">
            <span className="font-semibold text-gray-500">Diet:</span>
            <span className="ml-12 text-blue-700 font-semibold">{recipeInfo?.dietLabels?.[0]}</span>
          </div>
          <div >
            <span className="font-semibold text-gray-500">Category:</span>
            <span className="ml-3 text-blue-700 font-semibold">{recipeInfo?.dishType?.[0]}</span>
          </div>
        </div>

      </div>

      <div className="py-2 " >
        <h2 className="text-2xl my-4 font-semibold font-mono text-blue-700">About this Recipe</h2>
        <div className="text-start font-semibold text-lg text-blue-800 w-full mx-auto">
          <p className="mb-2">This easy peasy recipe is perfect for the evening cravings, you know! when
            you want chocolate muffin and you want it now  but you also happen to be on keto diet!</p>
          <p className="mb-2">well no conflict here, this is easy, quick and keto(keto carb). It pairs nicely with tea, coffee or a cup of milk</p>
          <p className="mb-2">you may as well want to go go nuts and add some nuts in the batter :) I love to add walnuts or pecans.</p>
          <p className="mb-2">For muffins to go kind of time, you can make them muffin size but then the baking temperature time must be reduced.</p>
        </div>

        <div className="flex-grow  ">
          <h2 className="text-2xl sm:text-2xl mt-10 mb-4 font-semibold text-blue-700">Instructions</h2>
          <div className="text-start p-4 text-blue-500 whitespace-normal">
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
          <h2 className="text-2xl mt-10 mb-4 font-semibold text-blue-700">Notes</h2>
          <div className="text-start ml-4 text-blue-600 whitespace-normal">
            <ul style={{ listStyleType: "square" }} className=" list-inside  font-semibold  text-blue-800">
              <li>Lorem ipsum dolor sit amet conseadipisci sapiente </li>
              <li>Lorem ipsum dolor sit amet conseadipisci sapiente</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-100 my-8" />
        <p className="font-semibold text-base text-gray-300">Recipe By Sahar | Photo by Carolina Hernandez on Unsplash </p>

        <hr className="border-gray-100 my-8" />

        <button onClick={() => navigate('/')} className="text-blue-700 bg-blue-700 hover:bg-blue-50 focus:ring-2 focus:ring-blue-50 font-bold rounded-2xl text-sm px-6 py-2.5 text-center dark:bg-blue-50 dark:hover:bg-blue-100 dark:focus:ring-blue-100">&lt; All Recipes</button>

      </div>

      <div className="px-8 py-6 bg-blue-50  h-fit w-5/6  rounded-2xl ">
        <h2 className="text-2xl mb-4 font-semibold text-blue-700">Ingredients</h2>
        <ul style={{ listStyleType: "square" }} className="whitespace-normal pl-8 font-semibold text-blue-800">
          {
            recipeInfo?.ingredients?.map((ingredient, index) => {
              return (
                <li className=" text-blue-800 mb-2 font-semibold" key={index}>
                  {ingredient.text}
                </li>
              );
            })
          }
        </ul>
      </div>

    </div >
  )
}

export default SingleRecipe

