import { useState, useEffect } from "react";

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Función para cargar los customers de una página específica.
    const loadCustomers = async (page) => {
      try {
        const response = await fetch(
          `https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=${pageSize}&page=${page}`
        );
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadCustomers(currentPage);
  }, [currentPage, pageSize]);

  
  return (
    <div>
      <ul className="users-list">
        {customers.map((customer) => {
          return (
            <div>
              <h4>{customer.username}</h4>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomerPage;
