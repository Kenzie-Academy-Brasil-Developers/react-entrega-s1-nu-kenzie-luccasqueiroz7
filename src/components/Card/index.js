function Card({ transaction, index, setListTransactions, listTransactions }) {
  /* Repare que se for entrada terá um detalhe verde no card, e caso seja saída esse detalhe será cinza. */
  /* Talvez exista um border left para fazer isso */

  function removeTransaction(removeIndex) {
    setListTransactions(
      listTransactions.filter((elem, index) => {
        return index !== Number(removeIndex);
      })
    );
  }

  return (
    <li>
      <div className="detailsCard">
        <p className="descriptionCard">{transaction.description}</p>
        <p className="typeCard">{transaction.type}</p>
      </div>
      <p className="valueCard">{transaction.value}</p>
      {/* Adicionar imagem do lixo no css ou aqui */}
      <button
        className="deleteCard"
        id={index}
        onClick={(event) => {
          removeTransaction(event.target.id);
        }}
      >
        lixo
      </button>
    </li>
  );
}

export default Card;
