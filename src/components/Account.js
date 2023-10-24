import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Customers.css"

const Account = (props) => {
  const { id } = useParams();

  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {
    

    fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts/`)
      .then((response) => response.json())
      .then((data) => 
      setAccountDetails(data.find(account => account.account_id == id)),
      console.log(accountDetails));
  }, []);

  return (


    <div className="content-customer-simple">
         <h1>Información de la cuenta del cliente</h1>
         <div >  
         <h2>Límite: {accountDetails.limit}</h2>
         <h2>Productos: {accountDetails.products?.map((p) => {
            return (
              <h3>{p}</h3>
            )
          })
        }</h2>

       </div> 

    </div>
  );
};

export default Account;