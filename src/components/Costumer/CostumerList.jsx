import Costumer from "./Costumer";

export default function CostumerList(props) {
    return (
        <ul >
            <h1>Clientes</h1>
            {props.Costumers.map(costumer => {
                return <Costumer Id={costumer._id} Name ={costumer.name} />;     
         
            })}
        </ul>
    );
};





