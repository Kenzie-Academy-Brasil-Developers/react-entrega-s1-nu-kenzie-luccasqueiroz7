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

        /* Buscar uma logica pra evitar valores vazios */
        addTransaction(objetoTransaction);
      }}
    >
      {/* VER ESTILIZAÇÃO DEPOIS, COM LABEL E ETC*/}
      <input placeholder="Digite aqui sua descrição"></input>
      <input placeholder="valor"></input>
      <select>
        <option value="entrada">Entrada</option>
        {/* Conferir se vai dar conflito em algum lugar por conta de ter mudado "saida" */}
        <option value="despesas">Despesas</option>
      </select>
      <button type="submit"></button>
    </form>
  );
}

export default Form;
