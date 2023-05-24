import { useState, useEffect } from "react";

export default function Limit(props) {
  const [account, setAccount] = useState({});

  useEffect(() => {
    //const urlApiMovies =
    //"https://tp2-analytics.azurewebsites.net/api/accounts?pageSize=100&page=1";
    const urlApiMovies = "https://tp2-analytics.azurewebsites.net/api/accounts";
    fetch(urlApiMovies)
      .then((response) => response.json())
      .then((data) =>
        setAccount(
          data.find(
            (account) =>
              account.account_id == props.account && account.limit < 10000
          )
        )
      );
  }, []);

  if (account) {
    return (
      <div>
        <h2>[Cuenta con limite menor a 10000]</h2>
      </div>
    );
  } else {
    return "";
  }
}
