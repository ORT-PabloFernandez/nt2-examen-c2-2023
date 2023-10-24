import { Link } from "react-router-dom";

const CostumerGeneral = (props) => {
  return (
    <div>
      <Link to={`/costumers/${props.Id}`}>
        <h2>{props.Name}</h2>
      </Link>
    </div>
  );
};

export default CostumerGeneral;
