import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles["searchbar-form"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className={styles["searchbar-icon"]}
      >
        <path
          fill="#b2b2b2"
          d="M6.077 10.217a4.144 4.144 0 0 1-4.14-4.14 4.144 4.144 0 0 1 4.14-4.14 4.144 4.144 0 0 1 4.14 4.14 4.144 4.144 0 0 1-4.14 4.14zm0-9.217A5.083 5.083 0 0 0 1 6.077c0 2.8 2.278 5.077 5.077 5.077 2.8 0 5.077-2.278 5.077-5.077C11.154 3.277 8.876 1 6.077 1z"
        />
        <path
          fill="none"
          stroke="#b2b2b2"
          strokeMiterlimit="20"
          strokeWidth=".4"
          d="M6.077 10.217a4.144 4.144 0 0 1-4.14-4.14 4.144 4.144 0 0 1 4.14-4.14 4.144 4.144 0 0 1 4.14 4.14 4.144 4.144 0 0 1-4.14 4.14zm0-9.217A5.083 5.083 0 0 0 1 6.077c0 2.8 2.278 5.077 5.077 5.077 2.8 0 5.077-2.278 5.077-5.077C11.154 3.277 8.876 1 6.077 1z"
        />
        <path
          fill="#b2b2b2"
          d="M12.862 12.187L10.125 9.45a.477.477 0 1 0-.675.675l2.737 2.737a.476.476 0 0 0 .675 0 .477.477 0 0 0 0-.675z"
        />
        <path
          fill="none"
          stroke="#b2b2b2"
          strokeMiterlimit="20"
          strokeWidth=".4"
          d="M12.862 12.187L10.125 9.45a.477.477 0 1 0-.675.675l2.737 2.737a.476.476 0 0 0 .675 0 .477.477 0 0 0 0-.675z"
        />
      </svg>
      <input
        className={styles["searchbar-input"]}
        type="search"
        placeholder="Search for products or services"
      />
    </form>
  );
};

export default SearchBar;
