import Card from "../Card";

function List({ listTransactions, setListTransactions }) {
  return (
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
  );
}

export default List;
