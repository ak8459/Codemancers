import axios from "axios"

const BASE_URL = "https://api.edamam.com/api/recipes/v2"
export async function getRecipes(query, dishType, diet ) {
    //    convert dishType arr for q
    console.log(query, dishType, diet);
    const dishTypeStr = dishType.join(",")
    console.log(dishTypeStr);

    try {
        const response = await axios.get(`${BASE_URL}?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&dishType=${dishTypeStr}&health=${diet}`)
        return response.data
    } catch (error) {
        return error
    }
}

