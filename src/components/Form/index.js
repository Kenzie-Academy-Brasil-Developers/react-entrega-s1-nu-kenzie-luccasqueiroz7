import "./styles.css";

function Form({ listTransactions, setListTransactions }) {
  function addTransaction(newTransaction) {
    setListTransactions([newTransaction, ...listTransactions]);
  }
  return (
    <form
      id="formTransaction"
      onSubmit={(event) => {
        event.preventDefault();
        let formTransaction = event.target;
        formTransaction = [...formTransaction];

        let objetoTransaction = {
          description: formTransaction[0].value,
          type: formTransaction[2].value,
          value: formTransaction[1].value,
        };

        addTransaction(objetoTransaction);
      }}
    >
      <div className="descricaoTransacao">
        <label>Descrição</label>
        <input placeholder="Digite aqui sua descrição"></input>
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="valoresTransacao">
        <div>
          <label>Valor</label>
          <input placeholder="R$"></input>
        </div>
        <div>
          <label>Tipo de valor</label>
          <select>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
