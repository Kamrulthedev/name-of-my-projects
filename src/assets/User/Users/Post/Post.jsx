/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Post = ({post}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, title, body, userId} = post;
    const userStyle = {
        border: '2px solid lime',
        padding: '5px',
        borderRadius: '15px',
        
      
       
    }
    return (
        <div style={userStyle}>
               <p>post  of id:{userId}</p>
            <h3>Name:{title}</h3>
           <Link to={`/post/${id}`}>Post Details</Link>

        </div>
    );
};

export default Post;