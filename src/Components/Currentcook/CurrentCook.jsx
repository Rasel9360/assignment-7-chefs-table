
const CurrentCook = ({ search }) => {
    const totalTime = search.reduce((total, recipe) => total + recipe.preparing_time, 0);
    const totalCalories = search.reduce((total, recipe) => total + recipe.calories, 0);


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
                <tbody>
                    {
                        search.map((recipe, index) =>
                            <tr className="bg-base-200 mt-4" key=''>
                                <td>{index + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} min</td>
                                <td>{recipe.calories} calories</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total Time = <br /> {totalTime} minutes</td>
                        <td>Total Calories = <br /> {totalCalories} calories</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default CurrentCook;