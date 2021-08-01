import styles from "./HomeHeader.module.css";
import PhoneIcon from "../Icons/PhoneIcon";
import LocationIcon from "../Icons/LocationIcon";
import SearchBar from "../SearchBar/SearchBar";

const HomeHeader = () => {
  return (
    <div className={styles["homeheader"]}>
      <div className={styles["homeheader-address-container"]}>
        <small className={styles["homeheader-address-icon"]}>
          <span>
            <LocationIcon />
          </span>
          <span>Deliver to</span>
        </small>
        <p className={styles["homeheader-address"]}>
          <a href="/">Bangalore, Karnataka, India - 682030</a>
        </p>
      </div>
      <div className={styles["homeheader-search-container"]}>
        <SearchBar />
      </div>
      <div className={styles["homeheader-contact-container"]}>
        <div className={styles["contact-icon"]}>
          <PhoneIcon />
        </div>
        <div className={styles["contact-details"]}>
          <small>Place Order Via Call</small>
          <p>1800 - 108 - 8282</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
