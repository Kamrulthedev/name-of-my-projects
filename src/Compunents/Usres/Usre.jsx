import { useLoaderData } from "react-router-dom";
import User from "../../assets/User/Users/User";


const Usre = () => {
    const users = useLoaderData ()
 
    return (
        <div>
          
            <h1>My website users</h1>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Usre;