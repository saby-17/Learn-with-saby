import { Link } from "react-router-dom";
import "../styles/navbar.css";



function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-brand">
        <img src="https://imgs.search.brave.com/T8eaPMfRR5uXjsc-sbilZeVfsihpRg5UJbOosRGqZO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NDI2Mzg1MjEvZmls/ZS9vcmlnaW5hbC04/Y2E0MGIyNzZhYjAw/MTE3YTkxNWYxM2Y1/NmM5NzQ5Yi5qcGc_/Y3JvcD03M3g1NS0x/NTIzeDExNDUmZm9y/bWF0PXdlYnAmcmVz/aXplPTQwMHgzMDAm/dmVydGljYWw9Y2Vu/dGVy"
alt="logo"/>
        <div className="brand">Learn With Saby</div>
      </div>

      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
