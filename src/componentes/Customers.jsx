import React, { useEffect, useState } from 'react';
import Customer from './Customer';


export default function Customers(props) {

  return (
    
      <ul className='customers-list'>
        {props.Customers.map(customer => {
               return(
                <Customer
                Id = {customer._id}
                Username = {customer.username}
                Name = {customer.name}
                Address = {customer.address}
                Birthdate = {customer.birthdate}
                Email = {customer.email}
                Accounts = {customer.accounts}
                />
               );

        })}
          

      </ul>
   
  );
}


