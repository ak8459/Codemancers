import { useContext, useEffect, useState } from "react";

import SearchBox from "../components/SearchBox"
import Recipes from "../components/Recipes";
import Loading from "../components/Loading";
import { RecipeContext } from "../context/RecipeContext";
const Home = () => {
    // const [query, setQuery] = useState("");
    const [dishType, setDishType] = useState('');
    const [diet, setDiet] = useState('');

    const { isLoading, recipes, query, setQuery } = useContext(RecipeContext)



    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <SearchBox placeholderVal="Search item"
                Value={query}
                handleChange={handleChange}
            />
            
            <Recipes recipes={recipes.hits} />
        </>
    )
}

export default Home