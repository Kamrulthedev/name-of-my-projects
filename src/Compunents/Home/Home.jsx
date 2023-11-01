import { Outlet } from "react-router-dom";
import Hader from "./Hader/Hader";
import Forter from "../../Forter";


const Home = () => {
    return (
        <div>
        
            <Hader></Hader>
            <Outlet></Outlet>
            <Forter></Forter>
            
        </div>

    );
};

export default Home;