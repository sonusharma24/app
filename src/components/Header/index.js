import profile from "../../assets/images/profile.png";
import "../Header/header.scss";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <h1 className="logo">Movies app</h1>
      </Link>

      <div className="user-image">
        <img src={profile} alt="user" />
      </div>
    </header>
  );
};

export default index;
