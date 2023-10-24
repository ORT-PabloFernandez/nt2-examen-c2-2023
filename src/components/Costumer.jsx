import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Costumer = () => {
  const { id } = useParams();
  const [costumer, setCostumer] = useState([]);

  useEffect(() => {
    fetch(`https://analyticsbackendort.azurewebsites.net/api/customers`)
      .then((response) => response.json())
      .then((data) => setCostumer(data.find((costumer) => costumer._id === id)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h3>{costumer.username}</h3>
      <h3>{costumer.name}</h3>
      <h3>{costumer.addres}</h3>
      <h3>{costumer.birthdate}</h3>
      <h3>{costumer.email}</h3>
      <h3>Accounts:</h3>/
      <ul>
        {costumer.accounts &&
          costumer.accounts.map((account, index) => (
            <Link to={`/account`}>
              <li key={index}>{account}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Costumer;

//Falta completar con ruteo y conección a la lista que muestra los detalles de la cuenta.
