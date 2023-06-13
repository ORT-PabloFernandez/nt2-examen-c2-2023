import React from "react";
import { Link } from "react-router-dom";

const Home = (props) =>{
return(
    <div>
        <ul>
            {props.customers.map((c,index)=>{
                return(
                    <>
                    <li>
                        <h4>{c.name}</h4>
                        <h5>{c.adress}</h5>
                        <h6>{c.bithdate}</h6>
                        <h7>{c.email}</h7>   
                        <Link to={`/${c._id}`}>
                            <button>Detalle</button>
                        </Link>                    
                    </li>
                    </>
                );
            })};
        </ul>
    </div>
);
};

export default Home;