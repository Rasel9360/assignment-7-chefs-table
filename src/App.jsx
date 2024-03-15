
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

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
      <div className='container w-11/12 mx-auto flex '>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
