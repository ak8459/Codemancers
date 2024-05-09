import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipeApi";
import { SearchBox } from "../components/SearchBox"
const Home = () => {
    const [query, setQuery] = useState("");
    const [healthLabel, setHealthLabel] = useState("vegetarian");
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        getRecipes(query, healthLabel).then((data) => {
            console.log(data);
        })

    }, [query, healthLabel]);





    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes(query, healthLabel);
        // console.log(recipes);
    };

    return (
        <div>
            {/* <SearchBox /> */}
            <form className="app__searchForm" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Type the Ingredient"
                    autoComplete="Off"
                    className="app__input"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <select className="app__healthLabels">
                    <option
                        value="vegan"
                        onClick={() => {
                            setHealthLabel("vegan");
                        }}
                    >
                        vegan
                    </option>
                    <option
                        value="vegetarian"
                        onClick={() => {
                            setHealthLabel("vegetarian");
                        }}
                    >
                        vegetarian
                    </option>
                    <option
                        value="low-sugar"
                        onClick={() => {
                            setHealthLabel("low-sugar");
                        }}
                    >
                        low-sugar
                    </option>
                    <option
                        value="dairy-free"
                        onClick={() => {
                            setHealthLabel("dairy-free");
                        }}
                    >
                        dairy-free
                    </option>
                    <option
                        value=" immuno-supportive "
                        onClick={() => {
                            setHealthLabel(" immuno-supportive ");
                        }}
                    >
                        immuno-supportive
                    </option>
                    <option
                        value="wheat-free"
                        onClick={() => {
                            setHealthLabel("wheat-free");
                        }}
                    >
                        wheat-free
                    </option>
                </select>
                <input type="submit" value="Get Recipe" className="app__submit" />
            </form>
        </div>
    )
}

export default Home