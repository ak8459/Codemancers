import axios from "axios"

const BASE_URL = "https://api.edamam.com/"
const APP_ID = "3a5a18f4";
const APP_KEY = "77c18a6a8ac66519bf3123a8b6604ec9";
export async function getRecipes(query, healthLabel) {
    try {
        const response = await axios.get(`${BASE_URL}search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`)
        return response.data
    } catch (error) {
        return error
    }
}

