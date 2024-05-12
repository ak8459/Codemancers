import axios from "axios"

const BASE_URL = "https://api.edamam.com/api/recipes/v2"
export async function getRecipes(query = "chicken", dishType = "starter", diet = "vegan") {

    const request = dishType && diet ? `${BASE_URL}?type=public&q=${query}&dishType=${dishType}&health=${diet}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}` :
        `${BASE_URL}?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`;

    

    try {
        const response = await axios.get(request)
        console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
}

