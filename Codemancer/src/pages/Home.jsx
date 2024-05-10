import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipeApi";
import SearchBox from "../components/SearchBox"
import Recipes from "../components/Recipes";
import Loading from "../components/Loading";
const Home = () => {
    const [query, setQuery] = useState("");
    const [dishType, setDishType] = useState(['bread']);
    const [diet, setDiet] = useState(['vegan']);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getRecipes(query, dishType, diet).then((data) => {
            setRecipes(data?.hits);
            setLoading(false)
        })

    }, [query, dishType, diet]);


    const clearFilterHandler = () => {
        console.log("clear filter");
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }




    if (loading) {
        return <Loading />
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