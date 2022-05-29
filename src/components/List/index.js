import "./styles.css";
import { useState } from "react";
import Card from "../Card";

function List({ listTransactions, setListTransactions, NoCardIMG }) {
  const [filtersTransictions, setFiltersTransictions] = useState([]);
  const [validation, setValidation] = useState("Todos");

  function ShowFilter(chosenFilter) {
    setFiltersTransictions(
      listTransactions.filter((elem) => {
        return elem.type === chosenFilter;
      })
    );
    setValidation("Filtros");
  }

  return (
    <div className="listTransactions">
      <header>
        <h3>Resumo Financeiro</h3>
        <div className="filtrosCard">
          <button
            value="Todos"
            onClick={() => {
              setValidation("Todos");
              let botoesfiltro = document.querySelectorAll(
                ".filtrosCard > button"
              );
              botoesfiltro[0].style.background = "#FD377E";
              botoesfiltro[0].style.color = "#FFFFFF";
              botoesfiltro[1].style.background = "#e9ecef";
              botoesfiltro[1].style.color = "#5B6166";
              botoesfiltro[2].style.background = "#e9ecef";
              botoesfiltro[2].style.color = "#5B6166";
            }}
          >
            Todos
          </button>
          <button
            value="Entrada"
            onClick={(event) => {
              ShowFilter("Entrada");

              // BUSCAR PELO ELEMENTO PAI DELES
              /*               let filtros = document.querySelector('.filtrosCard') */
              /* filtros = [...filtros] */
              let botoesfiltro = document.querySelectorAll(
                ".filtrosCard > button"
              );
              botoesfiltro[0].style.background = "#e9ecef";
              botoesfiltro[0].style.color = "#5B6166";
              botoesfiltro[1].style.background = "#FD377E";
              botoesfiltro[1].style.color = "#FFFFFF";
              botoesfiltro[2].style.background = "#e9ecef";
              botoesfiltro[2].style.color = "#5B6166";
            }}
          >
            Entradas
          </button>
          <button
            value="Despesa"
            onClick={() => {
              ShowFilter("Despesa");
              let botoesfiltro = document.querySelectorAll(
                ".filtrosCard > button"
              );
              botoesfiltro[0].style.background = "#e9ecef";
              botoesfiltro[0].style.color = "#5B6166";
              botoesfiltro[1].style.background = "#e9ecef";
              botoesfiltro[1].style.color = "#5B6166";
              botoesfiltro[2].style.background = "#FD377E";
              botoesfiltro[2].style.color = "#FFFFFF";
            }}
          >
            Despesas
          </button>
        </div>
      </header>
      {listTransactions.length > 0 ? (
        <div className="transactions">
          {validation === "Todos" ? (
            <ul>
              {listTransactions.map((transaction, index) => (
                <Card
                  transaction={transaction}
                  setListTransactions={setListTransactions}
                  listTransactions={listTransactions}
                  index={index}
                />
              ))}
            </ul>
          ) : (
            <ul>
              {filtersTransictions.map((transaction) => (
                <Card
                  transaction={transaction}
                  setListTransactions={setFiltersTransictions}
                  listTransactions={filtersTransictions}
                />
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="noTransactions">
          <p>Você ainda não possui nenhum lançamento</p>
          <img src={NoCardIMG} alt="NoCard" />
        </div>
      )}
    </div>
  );
}

export default List;
