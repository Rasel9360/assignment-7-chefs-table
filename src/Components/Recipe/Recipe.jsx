import { FaClock } from "react-icons/fa6";

const Recipe = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spaghetti Bolognese</h2>
                    <p>Classic Italian pasta dish with savory meat sauce.</p>
                    <ul className="list-disc">
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                    </ul>
                    <div>
                        <p><FaClock></FaClock> </p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;