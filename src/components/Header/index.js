import "./styles.css";

function Header({ NuKenzieIMG }) {
  return (
    <header className="headerNuKenzie">
      <img src={NuKenzieIMG} alt="Nu Kenzie"></img>
      <button>Inicio</button>
    </header>
  );
}

export default Header;
