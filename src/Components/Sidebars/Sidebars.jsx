// import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import CurrentCook from "../Currentcook/CurrentCook";


const Sidebars = ({ recipeCart, handleCurrentCook,search }) => {
    // const [currentCook, setCurrentCook] = useState([]);
    // const [deleteItem, setDeleteItem] = useState([]);

    // const handleCurrentCook = cook => {
    //     console.log(cook)
    //     setCurrentCook([...currentCook, cook])
    // }
    // console.log(currentCook)
    return (
        <div className="text-center lg:w-[32%] border-2 rounded-2xl">
            <h1 className="text-2xl font-semibold mt-5">Want to cook: {recipeCart.length}</h1>
            <div className="px-10 my-5 ">
                <hr />
            </div>

            <Sidebar handleCurrentCook={handleCurrentCook} recipeCart={recipeCart}></Sidebar>

            <h1 className="text-2xl font-semibold mt-5">Currently cooking: {search.length} </h1>
            <div className="px-10 my-5 ">
                <hr />
            </div>
            <CurrentCook search={search}></CurrentCook>
        </div>
    );
};

export default Sidebars;