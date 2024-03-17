import { CiClock2 } from "react-icons/ci";
import Icon from '../../assets/image/Frame2.svg'

const Recipe = ({ recipe, handleCook }) => {
    // console.log(recipe)
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipe
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-2">
                <figure className="px-6 pt-6 ">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl w-full h-64 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <h3 className="text-lg font-medium">Ingredients: {ingredients.length} </h3>
                    <div className="ml-5">
                        <ul className="list-disc">
                            {
                                ingredients.map(ingredient => 
                                <li key=''>{ingredient}</li>)
                            }
                        </ul>
                        
                    </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2"><CiClock2></CiClock2> {preparing_time} minutes</p>
                        <p className="flex items-center gap-2"><img src={Icon} alt="" /> {calories} calories</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleCook(recipe)} className="btn btn-success rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;