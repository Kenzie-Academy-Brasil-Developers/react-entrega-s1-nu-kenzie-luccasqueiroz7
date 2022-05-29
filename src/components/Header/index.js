import "./styles.css";

function Header({ NuKenzieIMG, setValidationHomePage }) {
  return (
    <header className="headerNuKenzie">
      <img src={NuKenzieIMG} alt="Nu Kenzie"></img>
      <button onClick={() => setValidationHomePage(true)}>Inicio</button>
    </header>
  );
}

export default Header;
