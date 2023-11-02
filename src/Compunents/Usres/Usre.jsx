import { useLoaderData } from "react-router-dom";


const Usre = () => {
    const usres = useLoaderData ()
    return (
        <div>
            <h1>Usre:{usres.length}</h1>
            <h2>My website users</h2>
        </div>
    );
};

export default Usre;