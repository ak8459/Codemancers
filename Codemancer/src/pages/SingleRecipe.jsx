import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { useContext, useEffect } from "react";
import Loading from "../components/Loading";
const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { getRecipeInfo, recipeInfo, isLoading } = useContext(RecipeContext);
  console.log(recipeInfo);
  useEffect(() => {
    if (recipeId) {
      getRecipeInfo(`${recipeId}`);
    }
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='w-3/5 border-2 border-red-500 mx-auto'>
      <h1>{recipeInfo?.label}</h1>
    </div>
  )
}

export default SingleRecipe