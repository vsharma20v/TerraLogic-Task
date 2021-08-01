import styles from "./Header.module.css";
import tataSmallLogo from "../../assets/tata-small-logo.png";
import tataLogo from "../../assets/tata-logo.png";
import CartIcon from "../Icons/CartIcon";
import HeartIcon from "../Icons/HeartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import ArrowIcon from "../Icons/ArrowIcon";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <img src={tataLogo} alt="tata" className={styles["header-logo"]} />
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar-main-menu-lists"]}>
          <li className={styles["main-menu-list-item"]}>
            <span>Explore Designs</span>
            <span>
              <ArrowIcon />
            </span>
          </li>
          <li className={styles["main-menu-list-item"]}>
            <span>Estimate Materials</span>
            <span>
              <ArrowIcon />
            </span>
          </li>
          <li className={styles["main-menu-list-item"]}>
            <span>Find Serivce Providers</span>
            <span>
              <ArrowIcon />
            </span>
          </li>
          <li className={styles["main-menu-list-item"]}>
            <span>Buy Out Products</span>
          </li>
        </ul>
        <ul className={styles["navbar-icon-menu-lists"]}>
          <li className={styles["icon-menu-list-item"]}>
            <a href="/">
              <CartIcon />
            </a>
          </li>
          <li className={styles["icon-menu-list-item"]}>
            <a href="/">
              <HeartIcon />
            </a>
          </li>
          <li className={styles["icon-menu-list-item"]}>
            <a href="/">
              <ProfileIcon />
            </a>
          </li>
          <li className={styles["icon-menu-list-item"]}>
            <a href="/">
              <img src={tataSmallLogo} alt="tata small" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
