import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Account = () => {
    const {id} = useParams();

    const [account, setAccount] = useState([]);

    useEffect(() => {
        fetch("https://analyticsbackendort.azurewebsites.net/api/accounts")
        .then((response) => response.json)
        .then((data) => setAccount(data.find((account) => account.account_id == id)))
        .catch((error) => console.log(error));
    }, []);
    
    return(
        <div>
            <h2>Account: {account.account_id}</h2>
            <h3>
                Limit: {account.limit}
            </h3>
            <h4>
                Products: {account.products?.map((product) => {
                    return(
                        <div>
                            {product}
                        </div>
                    )
                })}
            </h4>
        </div>
    );
}

export default Account;