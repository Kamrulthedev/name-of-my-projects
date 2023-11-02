/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, name, phone, username, website, email} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '15px'
      
       
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h3>Contect No: {phone}</h3> <p>Username:{username}</p>
            <h4>User Website: {website}</h4>
            <p>Email:{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>

        </div>
    );
};

export default User;