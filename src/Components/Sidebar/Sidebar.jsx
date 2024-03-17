const Sidebar = ({recipeCart, handleCurrentCook}) => {
    return (
        <div>
           <table className="w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                {
                    recipeCart.map((recipe, index) =>
                        <tbody key='' >
                            <tr className="bg-base-200 mt-4">
                                <td>{index + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} <br /> min</td>
                                <td>{recipe.calories} <br /> calories</td>
                                <td><button onClick={() => handleCurrentCook(recipe)} className="btn btn-success rounded-full">Preparing</button></td>
                            </tr>
                        </tbody>)
                }

            </table> 
        </div>
    );
};

export default Sidebar;