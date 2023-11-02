import { useLoaderData } from "react-router-dom";
import User from "../../assets/User/Users/User";
import "../../assets/User/Users/User.css";


const Usre = () => {
    const users = useLoaderData ()
 
    return (
        <div>
          
            <h1>My website users</h1>
            <div className="Users">o
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Usre;