import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <center>
      <h1>Through the Roof!</h1>
      <Link to="/">Home </Link>
      
      <Link to="/about">About</Link>
      
      <Link to="/login">Login </Link>
      
      <Link to="/register">Register </Link>
      </center>
    </header>
  );
};

export default Header;
