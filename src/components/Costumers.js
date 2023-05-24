import { Link } from "react-router-dom";

const Costumers = (props) => {
  return (
    <ul>
      {props.costumer.map((m) => {
        return (
          <li>
            <h1>{m.username}</h1>
            <h2>{m.name}</h2>
            <Link to={`/costumer/${m.id}`}> {m._id} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Costumers;
