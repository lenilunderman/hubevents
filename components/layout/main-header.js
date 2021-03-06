import Link from "next/link";

// import the css
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/"> Hub Events </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events"> Check all events </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
