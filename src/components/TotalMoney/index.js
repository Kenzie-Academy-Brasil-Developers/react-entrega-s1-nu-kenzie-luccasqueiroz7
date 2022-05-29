import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="totalMoney">
      <p>
        Valor Total:{" "}
        <span>
          ${" "}
          {listTransactions.reduce((acc, actualValue) => {
            if (actualValue.type === "Entrada") {
              return acc + Number(actualValue.value);
            } else {
              return acc - Number(actualValue.value);
            }
          }, 0)}
        </span>
      </p>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
