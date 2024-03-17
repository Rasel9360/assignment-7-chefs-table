import Abater from '../../assets/image/Frame.svg'
import "./Header.css"
const Header = () => {
    return (
        <div className="container w-11/12 mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Search</a></li>
                            </ul>
                        </div>
                        <a href="#" className='text-lg lg:text-3xl lg:font-bold'>Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <div className="form-control hidden lg:flex">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
                        </div>
                        <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-[#0BE58A]">
                                <img alt="Tailwind CSS Navbar component" src={Abater} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Banner section */}
            <div className="hero  banner rounded-xl mt-5">
                <div className="hero-overlay bg-opacity-50 rounded-xl py-80"></div>
                <div className='flex justify-center items-center'>
                <div className='text-center lg:w-3/5'>
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-white">Discover an exceptional cooking className tailored for you!</h1>
                        <div className='text-center'>
                        <p className="mb-5 text-gray-50"> Our menu features a variety of flavorful dishes, each carefully crafted to provide detailed nutritional information, including calorie counts and macronutrient breakdowns</p>
                        <div className='space-x-4'>
                            <button className="btn btn-success rounded-full">Explore Now</button>
                            <button className="btn btn-outline rounded-full text-white">Our Feedback</button>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;