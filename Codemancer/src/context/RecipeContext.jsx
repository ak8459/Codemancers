import { createContext, useEffect, useState } from "react";
import { getRecipes } from "../api/recipeApi";
import axios from "axios";

export const Category = [{
    id: 1,
    name: "Bread",
    value: "bread",
    checked: false
}, {
    id: 2,
    name: "Salad",
    value: "salad",
    checked: false
}, {
    id: 3,
    name: "Dessert",
    value: "desserts",
    checked: false
}, {
    id: 4,
    name: "Drink",
    value: "drinks",
    checked: false
}
    , {
    id: 5,
    name: "Main",
    value: "main course",
    checked: false
}, {
    id: 6,
    name: "Snack",
    value: "biscuits and cookies",
    checked: false
}, {
    id: 7,
    name: "Soup",
    value: "soup",
    checked: false
}, {
    id: 8,
    name: "Pastry",
    value: "pancake",
    checked: false
}
]

export const Diet = [
    {
        id: 3,
        name: "Keto",
        value: "keto-friendly",
        checked: false
    },

    {
        id: 2,
        name: "Vegetarian",
        value: "vegetarian",
        checked: false
    },
    {
        id: 1,
        name: "Vegan",
        value: "vegan",
        checked: false
    }
    , {
        id: 4,
        name: "Other",
        value: "other",
        checked: false
    }
]

const RecipeContextValues = {
    getRecipeInfo: () => { },
    toggleFilter: () => { },
    fetchData: () => { },
    clearFilter: () => { },
    queryList: [],
    searchQuery: "",
    dishType: "",
    diets: "",
    isLoading: false,
    recipeInfo: {},
    recipes: { hits: [], _links: {} },

}
const BASE_URL = "https://api.edamam.com/api/recipes/v2"
export const API_KEY = import.meta.env.VITE_APP_KEY
export const API_ID = import.meta.env.VITE_APP_ID
// export const RecipeContext = createContext(null)
export const RecipeContext = createContext(RecipeContextValues)


export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState({ hits: [], _links: {} });
    const [isLoading, setIsLoading] = useState(false)
    const [recipeInfo, setRecipeInfo] = useState(RecipeContextValues.recipeInfo);
    const [dishType, setDishType] = useState('');
    const [diet, setDiet] = useState('');
    const [query, setQuery] = useState("");

    const getRecipeInfo = async (recipeId) => {
        try {
            setIsLoading(true);
            const request = `${BASE_URL}/${recipeId}?type=public&app_id=${API_ID}&app_key=${API_KEY}&imageSize=LARGE`;
            const response = await axios(request);
            setRecipeInfo(response.data.recipe);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    function clearFilter() {
        setDishType('');
        setDiet('');
    }

    const fetchData = (query, dishType, diet,) => {
        setIsLoading(true)
        query = query || "chicken";
        dishType = dishType || "starter";
        diet = diet || "vegan";
        getRecipes(query, dishType, diet).then((data) => {
            setRecipes({ hits: data.hits, _links: data._links });
            setIsLoading(false)
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData(query, dishType, diet)
        }, 500);
        return () => clearTimeout(timer);
    }, [query, dishType, diet]);

    // console.log(dishType);

    return (
        <RecipeContext.Provider value={{
            fetchData, isLoading, recipes, getRecipeInfo, recipeInfo,
            setRecipeInfo, dishType, setDishType, diet, setDiet,
            clearFilter, query, setQuery
        }}>
            {children}
        </RecipeContext.Provider>
    )



}












