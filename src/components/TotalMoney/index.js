import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="totalMoney">
      {/* tentar aplicar space-between aqui */}
      <p>
        Valor Total:{" "}
        <span>
          ${" "}
          {listTransactions.reduce((acc, actualValue) => {
            return acc + Number(actualValue.value);
          }, 0)}
        </span>
      </p>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
