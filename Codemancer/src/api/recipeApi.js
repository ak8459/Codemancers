import axios from "axios"

const BASE_URL = "https://api.edamam.com/api/recipes/v2"

/**
+ * Fetches data from the Edamam API based on the query, dishType and diet.
+ * @function getRecipes
+ * @description Fetches data from the Edamam API based on the query, dishType and diet.
+ * @param {string} [query] - The query to search for. Defaults to "".
+ * @param {string} [dishType] - The type of dish to search for. Defaults to "".
+ * @param {string} [diet] - The diet of the dish to search for. Defaults to "".
+ * @returns {Promise<Object>} - The response from the API.
+ */

export async function getRecipes(query, dishType, diet) {
    const request = dishType && diet
        ? `${BASE_URL}?type=public&q=${query}&dishType=${dishType}&health=${diet}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`
        : `${BASE_URL}?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`;

    try {
        const response = await axios.get(request)
        // console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
}

