import { Link } from "react-router-dom";
import './Hader.css'


const Hader = () => {
    return (
        <div className="diver">
            <h2>Navber</h2>
            <nav>
             <Link to={'/'}>Home</Link>
             <Link to={'/About'}> About Us</Link>
             <Link to={'/Contect'}>Contect Us</Link>
            </nav>
        </div>
    );
};

export default Hader;