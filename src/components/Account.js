import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Account = (props) => {
  const params = useParams();
  const [account, setAccount] = useState({});

  const getAccount = async () => {
    const resp = await axios.get(
      "http://tp2-analytics.azurewebsites.net/api/accounts"
    );

    console.log(resp.data[params.account_id]);
    setAccount(resp.data[params.account_id]);
  };
};

export default Account;
