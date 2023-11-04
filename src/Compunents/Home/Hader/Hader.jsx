// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";
import './Hader.css'



const Hader = () => {
    return (
        <div >
            <h2>Navber</h2>
            <nav>
             <NavLink to={'/'}>Home</NavLink>
             <NavLink to={'/About'}>About</NavLink>
             <NavLink to={'/Contect'}>Constsct </NavLink>
           
             
             <NavLink to={'/Users'}>Users</NavLink>

            
             <NavLink to={'/Posts'}>Posts</NavLink>
             
            </nav>
        </div>
    );
};

export default Hader;