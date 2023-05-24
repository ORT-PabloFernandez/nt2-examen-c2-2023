import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Account = (props) => {
  const { id } = useParams();

  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlAccount =
    `http://tp2-analytics.azurewebsites.net/api/accounts/${id}`;

    fetch(urlAccount)
      .then((response) => response.json())
      .then((data) => setAccountDetails(data));
  }, []);
   
  
 

  return (
    

    <div>
         <h1>info de la cuenta {id}</h1>
         <div >  
         <h2>Id: {accountDetails._id}</h2>
         <h2>Límite: {accountDetails.limit}</h2>
         <h2>Productos: {accountDetails.products?.map((p) => {
            return (
              <h4>{p}</h4>
            )
          })
        }</h2>

       </div> 
         
    </div>
  );
};

export default Account;