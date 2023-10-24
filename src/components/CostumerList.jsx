import CostumerGeneral from "./CostumerGeneral";

const CostumerList = (props) => {
  return (
    <ul>
      <h1>Listado de clientes</h1>
      {props.Costumers.map((costumer) => {
        return <CostumerGeneral Id={costumer._id} Name={costumer.name} />;
      })}
    </ul>
  );
};

export default CostumerList;
