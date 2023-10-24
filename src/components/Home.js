import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>¡Bienvenidos!</h1>
            <h2>Para ver el listado de clientes</h2>
            <Link to={"/customers"}>Ver listado</Link>
        </div>
    );
}

export default Home;