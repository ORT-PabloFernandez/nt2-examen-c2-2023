import { Link } from "react-router-dom";

const Customer = (props) => {
  return (
    <li>
      <div>
        <h2>Cliente:</h2>
        <p>
          {props.UserName}
          <br />
          {props.Name}
          <br />
          {props.Address}
          <br />
          {props.BirthDate}
          <br />
          {props.Email}
        </p>
        <h3>
          {props.Accounts.map((account) => {
            return (
              <button>
                <Link to={`/${account}`}>{account}</Link>
              </button>
            );
          })}
        </h3>
      </div>
    </li>
  );
};

export default Customer;
