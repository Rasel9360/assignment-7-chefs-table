import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCook}) => {

    const [recipeList, setRecipeList] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then((response) => response.json())
        .then((data) => setRecipeList(data))
    }, []); 
    

    return (
        <div className="lg:w-[65%] grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
                recipeList.map(recipe=><Recipe
                    handleCook={handleCook}
                    key={recipe.id}
                    recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;