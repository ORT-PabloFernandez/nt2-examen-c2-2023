import CostumerList from "./CostumerList";
import { useState, useEffect } from "react";

const CostumerPage = () => {
  const [costumers, setCostumers] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch(
      ` https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=${pageSize}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setCostumers(data))
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <CostumerList Costumers={costumers} />
      <button
        className="page-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Página anterior
      </button>
      <button className="page-button" onClick={() => setPage(page + 1)}>
        Página siguiente
      </button>
    </div>
  );
};

export default CostumerPage;
