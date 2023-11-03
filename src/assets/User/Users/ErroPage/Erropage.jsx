import { Link, useRouteError } from "react-router-dom";


const Erropage = () => {
    const erro = useRouteError();
    console.log(erro);
    return (
        <div>
            <h1>Oops!!!</h1>
            
            {
                erro.status === 404 && <div>
                    <h2>Page not found</h2>
            <p>Go back where you from</p>
            <Link to={"/"}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Erropage;