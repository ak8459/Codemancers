import { useContext, useEffect, useState } from "react";

import SearchBox from "../components/SearchBox"
import Recipes from "../components/Recipes";
import Loading from "../components/Loading";
import { RecipeContext } from "../context/RecipeContext";
const Home = () => {
    const [query, setQuery] = useState("");
    const [dishType, setDishType] = useState(['bread']);
    const [diet, setDiet] = useState(['kosher']);

    const { data, fetchData } = useContext(RecipeContext)

    const { recipes, loading } = data

    useEffect(() => {
        const timer = setTimeout(() => {
          
            fetchData(query, dishType, diet)
        }, 500); // Adjust the delay time as needed (e.g., 500 milliseconds)

        // Cleanup function to clear the timeout when the component re-renders or unmounts
        return () => clearTimeout(timer);
    }, [query, dishType, diet]);

    if (loading) {
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
            <Recipes recipes={recipes} />

        </>
    )
}

export default Home