import Costumer from "./Costumer";

const CostumerList = (props) => {
    return(
        <ul>
            {props.Costumers.map((costumer) => {
                return(
                    <div>
                        <Costumer
                        ID = {costumer._id}
                        Username = {costumer.username}
                        Name = {costumer.name}
                        Adress = {costumer.adress}
                        Birthdate = {costumer.birthdate}
                        Email = {costumer.email}
                        Accounts = {costumer.accounts}
                        />
                    </div>
                );
            })}
        </ul>
    );
}

export default CostumerList;
