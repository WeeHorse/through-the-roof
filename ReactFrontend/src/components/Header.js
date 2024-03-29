import { Link } from "react-router-dom";
import { FaHouseDamage } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <h1>
        <FaHouseDamage style={{ margin: "1em" }} />
        Through the Roof!
      </h1>
      <div className="header-route">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/makeauction">
          Submit Auction
        </Link>
      </div>
    </header>
  );
};

export default Header;
