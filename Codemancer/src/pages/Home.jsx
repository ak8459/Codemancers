import { useContext, useEffect, useState } from "react";

import SearchBox from "../components/SearchBox"
import Recipes from "../components/Recipes";
import Loading from "../components/Loading";
import { RecipeContext } from "../context/RecipeContext";
const Home = () => {
    const [query, setQuery] = useState("");
    const [dishType, setDishType] = useState(['bread']);
    const [diet, setDiet] = useState(['kosher']);

    const { isLoading, fetchData, recipes } = useContext(RecipeContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData(query, dishType, diet)
        }, 500);
        return () => clearTimeout(timer);
    }, [query, dishType, diet]);



    if (isLoading) {
        return <Loading />
    }

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