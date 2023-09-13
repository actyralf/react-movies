import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Campus Movies</div>
        <div className="menu">
          <ul>
            <li>Movies</li>
            <li>Actors</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
