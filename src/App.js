import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import NoCardIMG from "./components/assets/NoCard.png";
import NuKenzieIMG from "./components/assets/Nu Kenzie.png";
import HomePageIMG from "./components/assets/HomePage.svg";
import HomePage from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [validationHomePage, setValidationHomePage] = useState(true);

  return (
    <>
      {validationHomePage === true ? (
        <>
          <HomePage
            setValidationHomePage={setValidationHomePage}
            HomePageIMG={HomePageIMG}
          />
        </>
      ) : (
        <>
          {" "}
          <Header
            NuKenzieIMG={NuKenzieIMG}
            setValidationHomePage={setValidationHomePage}
          />
          <div className="App">
            <div>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              {listTransactions.length > 0 && (
                <TotalMoney listTransactions={listTransactions} />
              )}
            </div>

            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              NoCardIMG={NoCardIMG}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
