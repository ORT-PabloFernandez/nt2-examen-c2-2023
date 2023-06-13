import React, {useEffect, useState} from 'react';
import {getAccount} from "../helpers/getAccount";

const useFetchAccount = (accountId) => {
    const [account, setAccount] = useState([]);

    const getAcc = async () => {
        const acc = await getAccount(accountId);
        setAccount(acc);
    }

    useEffect(() => {
        getAcc(accountId);
    }, [])

    return account;
};

export default useFetchAccount;