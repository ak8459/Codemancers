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
    value: "dessert",
    checked: false
}, {
    id: 4,
    name: "Drink",
    value: "drink",
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
    value: "snack",
    checked: false
}, {
    id: 7,
    name: "Soup",
    value: "soup",
    checked: false
}, {
    id: 8,
    name: "Pastry",
    value: "pastry",
    checked: false
}
]

export const Diet = [
    {
        id: 3,
        name: "Keto",
        value: "keto",
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
    queryList: [],
    searchQuery: "",
    dishType: "",
    diets: "",
    isLoading: false,
    recipeInfo: {},
    recipes: { hits: [], _links: {} },

}
const BASE_URL = "https://api.edamam.com/api/recipes/v2"
const API_KEY = import.meta.env.VITE_APP_KEY
const API_ID = import.meta.env.VITE_APP_ID
// export const RecipeContext = createContext(null)
export const RecipeContext = createContext(RecipeContextValues)


export function RecipeProvider({ children }) {
    // const [searchQuery, setSearchQuery] = useState("");
    // const [dishType, setDishType] = useState('');
    // const [diets, setDiets] = useState('');
    // const [recipes, setRecipes] = useState(RecipeContextValues.recipes)
    // const [isLoading, setIsLoading] = useState(false);
    // // const [queryList, setQueryList] = useState([])

    const [recipes, setRecipes] = useState({ hits: [], _links: {} });
    const [isLoading, setIsLoading] = useState(false)
    const [recipeInfo, setRecipeInfo] = useState(RecipeContextValues.recipeInfo);


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


    const fetchData = (query = "", dishType, diet) => {
        setIsLoading(true)
        getRecipes(query, dishType, diet).then((data) => {
            console.log(data);
            setRecipes({ hits: data.hits, _links: data._links });
            setIsLoading(false)
        })
    }

    return (
        <RecipeContext.Provider value={{
            fetchData, isLoading, recipes, getRecipeInfo, recipeInfo
        }}>
            {children}
        </RecipeContext.Provider>
    )



}












