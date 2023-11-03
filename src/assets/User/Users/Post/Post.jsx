/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, title, body, userId} = post;

  const navigate = useNavigate();

    const userStyle = {
        border: '2px solid lime',
        padding: '5px',
        borderRadius: '15px',
        
      
       
    }
    const Clikhandler = () =>{
      navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
               <p>post  of id:{userId}</p>
            <h3>Name:{title}</h3>
           <Link to={`/post/${id}`}>Post Details</Link>
           <br></br>
           <button onClick={Clikhandler}>see Details</button>

        </div>
    );
};

export default Post;