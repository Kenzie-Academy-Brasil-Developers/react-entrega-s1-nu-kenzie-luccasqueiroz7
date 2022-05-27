import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  /* EXEMPLO:
  useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ]) */

  return (
    <div className="App">
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <TotalMoney listTransactions={listTransactions} />
      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
}

export default App;
