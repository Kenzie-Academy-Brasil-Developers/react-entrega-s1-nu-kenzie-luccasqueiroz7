import "./styles.css";

function HomePage({ setValidationHomePage, HomePageIMG }) {
  return (
    <div className="homePage">
      <div className="detailsHome">
        <p>
          Nu <span>Kenzie</span>
        </p>
        <p className="descriptionHome">
          Centralize o controle das suas finanças
        </p>
        <span>de forma rápida e segura</span>
        <button onClick={() => setValidationHomePage(false)}>Iniciar</button>
      </div>
      <img src={HomePageIMG} alt="HomePage" />
    </div>
  );
}

export default HomePage;
