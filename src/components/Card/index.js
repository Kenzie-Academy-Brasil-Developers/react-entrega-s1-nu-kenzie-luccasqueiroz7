import "./styles.css";

function Card({ transaction, index, setListTransactions, listTransactions }) {
  function removeTransaction(removeIndex) {
    setListTransactions(
      listTransactions.filter((elem, index) => {
        return index !== Number(removeIndex);
      })
    );
  }

  return (
    <li>
      {transaction.type === "Entrada" ? (
        <div className="detailsCard entradaCard">
          <p className="descriptionCard">{transaction.description}</p>
          <p className="typeCard">{transaction.type}</p>
        </div>
      ) : (
        <div className="detailsCard despesaCard">
          <p className="descriptionCard">{transaction.description}</p>
          <p className="typeCard">{transaction.type}</p>
        </div>
      )}

      <p className="valueCard">R$ {transaction.value}</p>
      <button
        className="deleteCard"
        id={index}
        onClick={(event) => {
          removeTransaction(event.target.id);
        }}
      ></button>
    </li>
  );
}

export default Card;
