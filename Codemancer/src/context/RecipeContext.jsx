import { createContext, useState } from "react";
import { getRecipes } from "../api/recipeApi";

export const RecipeContext = createContext(null)


export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false)

    const data = {
        recipes,
        loading,
    }

    const fetchData = (query = "", dishType, diet) => {

        setLoading(true)
        getRecipes(query, dishType, diet).then((data) => {
            setRecipes(data?.hits);
            setLoading(false)
        })
    }


    // const clearFilterHandler = () => {
    //     console.log("clear filter");
    // }



    return (
        <RecipeContext.Provider value={{ data, fetchData }}>
            {children}
        </RecipeContext.Provider>
    )
}



