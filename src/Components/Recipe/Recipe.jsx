import { CiClock2 } from "react-icons/ci";
import Icon from '../../assets/image/Frame2.svg'

const Recipe = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spaghetti Bolognese</h2>
                    <p>Classic Italian pasta dish with savory meat sauce.</p>
                    <hr />
                    <ul className="list-disc">
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                        <li>500g ground beef</li>
                    </ul>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2"><CiClock2></CiClock2> 30 minutes</p>
                        <p className="flex items-center gap-2"><img src={Icon} alt="" /> 30 minutes</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-success rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;