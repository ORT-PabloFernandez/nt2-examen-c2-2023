import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    const resp = await axios.get(
      "http://tp2-analytics.azurewebsites.net/api/customers?pageSize=9&page=1"
    );
    console.log(resp.data);
    setCustomers(resp.data);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="App-header">
      {customers.length != 0 && (
        <h5 style={{ marginTop: "5px" }}>List of customers</h5>
      )}

      <table style={{ width: 900 }}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Profile</th>
        </tr>

        {customers.map((c, index) => {
          return (
            <>
              <tr style={{ fontSize: "18px", height: "10px" }}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <Link to={`/${c._id}`}>
                  <button style={{ height: 60, width: 110 }}>
                    Go to profile
                  </button>
                </Link>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Home;
