import Costumer from "./Costumer";

export default function CostumerList(props) {
    return (
        <ul >
            {props.Costumer.map(costumer => {
                return (
                    <Costumer
                        Id={costumer["_id"]}
                        CostumerName={costumer.name}

                    />

                );
            })}
        </ul>
    );
}