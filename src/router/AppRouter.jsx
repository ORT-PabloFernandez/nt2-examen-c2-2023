import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {CustomerList} from "../components/CustomerList";
import {Account} from "../components/Account";

export const AppRouter = () => {
    return (
        <main className={"container"}>
            <Routes>
                <Route path={"/"} element={<CustomerList />} ></Route>
                <Route path="/account/:accountId" element={<Account />} />
            </Routes>
        </main>
    )
}