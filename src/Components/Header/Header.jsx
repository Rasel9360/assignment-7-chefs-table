import Abater from '../../assets/image/Frame.svg'
import "./Header.css"
const Header = () => {
    return (
        <div className="container w-11/12 mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="text-xl lg:text-3xl font-bold">Recipe Calories</a>
                    </div>
                    <div className="justify-center flex-1">
                        <ul className="hidden lg:flex gap-20">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-[#0BE58A]">
                                    <img alt="Tailwind CSS Navbar component" src={Abater} />
                                </div>
                            </div>
                            <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Banner section */}
            <div className="hero  banner rounded-xl ">
                    <div className="hero-overlay bg-opacity-50 rounded-xl py-72"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:w-3/5 space-x-28">
                            <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5"> Our menu features a variety of flavorful dishes, each carefully crafted to provide detailed nutritional information, including calorie counts and macronutrient breakdowns</p>
                            <div className='space-x-4'>
                            <button className="btn btn-success rounded-full">Explore Now</button>
                            <button className="btn btn-outline rounded-full text-white">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Header;