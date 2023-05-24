import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Account = () => {
  const { id } = useParams();
  /* console.log("IDDDDDDDDDDDD");
  console.log(id); */
  const [account, setAccount] = useState({});

  useEffect(() => {
    //const urlApiMovies =
    //"https://tp2-analytics.azurewebsites.net/api/accounts?pageSize=100&page=1";
    const urlApiMovies = "https://tp2-analytics.azurewebsites.net/api/accounts";
    fetch(urlApiMovies)
      .then((response) => response.json())
      .then((data) =>
        setAccount(data.find((account) => account.account_id == id))
      );
  }, []);

  return (
    <div>
      {console.log(id)}
      {console.log(account)}
      <div>
        <h3> Account: {account.account_id} </h3>
      </div>
      <div>
        <h3> Limit: {account.limit} </h3>
      </div>
      <div>
        <h3>
          Products:
          {account.products?.map((product) => {
            return (
              <div>
                {"►►►►"}
                {product}
              </div>
            );
          })}
        </h3>
        <div></div>
      </div>
    </div>
  );
};

export default Account;
