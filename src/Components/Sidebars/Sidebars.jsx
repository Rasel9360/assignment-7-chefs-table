

const Sidebars = ({ recipeCart }) => {
    return (
        <div className="text-center lg:w-[32%] border-2 rounded-2xl">
            <h1 className="text-2xl font-semibold mt-5">Want to cook: {recipeCart.length}</h1>
            <div className="px-10 my-5 ">
                <hr />
            </div>

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
                                <td><button className="btn btn-success rounded-full">Preparing</button></td>
                            </tr>
                        </tbody>)
                }

            </table>

            
        </div>
    );
};

export default Sidebars;