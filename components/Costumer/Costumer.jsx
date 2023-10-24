import './App.css';
import { useState } from 'react';


const Costumer = (props) => {

    return (
        <li>
            <div>

                <div>
                    <h2>{props.Costumer.username}</h2>
                    <h2>{props.Costumer.name}</h2>
                    <h2>{props.Costumer.username}</h2>
                    <h2>{props.Costumer.birthdate}</h2>
                    <h2>{props.Costumer.email}</h2>
                    <h2>{props.Costumer.accounts}</h2>
                </div>

            </div>


        </li>
    );
};

