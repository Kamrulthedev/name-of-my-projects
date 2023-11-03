import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate (); 
    // eslint-disable-next-line no-unused-vars
    const {id, title, body} = post
   
    const GobackhandlerClik = () =>{
     navigate(-1)
    }

    return (
        <div>
           <h2>MY POST DETAILS</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={GobackhandlerClik}> GO back</button>

        </div>
    );
};

export default PostDetails;