
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Sidebars from './Components/Sidebars/Sidebars'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [recipeCart, setRecipeCart] = useState([]);

  const handleCook = (recipe) => {
    console.log(recipe)
    // setRecipeCart([...recipeCart, recipe])
    const isExist = recipeCart.find(item => item.id === recipe.id)
    if (!isExist) {
      setRecipeCart([...recipeCart, recipe])
    }
    else {
      toast.warning("This item is already selected")
    }
  }

  return (

    <>
      <Header></Header>
      <div className='mx-auto text-center my-[100px] space-y-5'>
        <h1 className='text-5xl font-semibold'>Our Recipes</h1>
        <div className='w-3/5 mx-auto'>
          <p>
            Explore our extensive collection of recipes spanning various cuisines, dietary preferences, and cooking skill levels. Whether you're a seasoned chef or a novice in the kitchen, you'll find something to tantalize your taste buds
          </p>
        </div>
      </div>
      <div className='container w-11/12 mx-auto lg:flex gap-10 '>
        <Recipes handleCook={handleCook}></Recipes>
        <Sidebars recipeCart={recipeCart}></Sidebars>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
