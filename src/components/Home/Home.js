import styles from "./Home.module.css";
import Carousel from "../Carousel/Carousel";
import BuildingHomeIcon from "../Icons/BuildingHomeIcon";
import OtherConstructionIcon from "../Icons/OtherConstructionIcon";
import CheckedIcon from "../Icons/CheckedIcon";
import UncheckedIcon from "../Icons/UncheckedIcon";

const Home = () => {
  return (
    <main className={styles["home"]}>
      <section className={styles["home-form-section"]}>
        <h2 className={styles["form-heading"]}>Hi, What are you here for?</h2>
        <div className={styles["radio-container"]}>
          <CheckedIcon />
          <label htmlFor="building" className={styles["radio-label"]}>
            <span>
              <BuildingHomeIcon />
            </span>
            <span>Building Home</span>
          </label>
        </div>
        <div className={styles["radio-container"]}>
          <UncheckedIcon />
          <label className={styles["radio-label"]} htmlFor="other">
            <span>
              <OtherConstructionIcon />
            </span>
            <span>Other Constructions</span>
          </label>
        </div>
      </section>
      <section className={styles["home-dropdown-section"]}>
        <p>And in homebuilding, I am currently at: </p>
        <select className={styles["dropdown"]}>
          <option value="planning stage">Planning Stage</option>
          <option value="planning stage1">Planning Stage1</option>
          <option value="planning stage2">Planning Stage2</option>
          <option value="planning stage3">Planning Stage3</option>
        </select>
      </section>
      <Carousel />
    </main>
  );
};

export default Home;
