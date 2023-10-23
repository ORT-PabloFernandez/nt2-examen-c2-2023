import { useState, useEffect } from "react";
import  Customer from './customer'

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
      <Customer customers={customers} />
    </div>
  );
};

export default CustomerPage;
