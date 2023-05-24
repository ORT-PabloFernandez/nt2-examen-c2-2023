import { Link } from "react-router-dom";

const Accounts = (props) => {
  return (
    <ul>
      {props.Accounts.map((a) => {
        return (
          <li>
            <h1>{a.limit}</h1>
            <Link to={`/account/${a.id}`}> {a._id} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Accounts;
