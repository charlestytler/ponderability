import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Ponderability</div>
      <nav>
        <ul>
          <li>
            <Link to="/ponderability">Home</Link>
          </li>
          <li>
            <Link to="/ponderability/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
