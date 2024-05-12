import { useContext } from "react";

import SearchBox from "../components/SearchBox"
import Recipes from "../components/Recipes";
import { RecipeContext } from "../context/RecipeContext";
const Home = () => {

    const { recipes, query, setQuery } = useContext(RecipeContext)
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