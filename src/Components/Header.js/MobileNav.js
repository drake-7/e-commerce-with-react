import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./_MobileNav.module.scss";

const MobileNav = () => {
  const { userName, isMobileMenuActive, setIsMobileMenuActive } = useGlobalContext();


  return (
    <div className={`${styles.mobileMenu} ${isMobileMenuActive ? styles.active : ""}`}>
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <img src={require("../../assets/images/user-image.webp")} alt="" />
        </div>

        <p>
          Hey 🖐️, <span className={styles.userName}>{userName}</span>
        </p>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/#">
              <i class="fa-regular fa-user"></i>
              Profile
            </a>
          </li>
          <li>
            <a href="/#" className={styles.active}>
              <i class="bi bi-house"></i>
              Home Page
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="fa-regular fa-file-lines"></i>
              About
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-bag"></i>
              My Cart
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="fa-regular fa-heart"></i>
              Favorite
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="bi bi-bell"></i>
              Notifications
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.line}></div>

      <button className={styles.signOutButton} type="button">
        <i class="bi bi-box-arrow-right"></i>
        Sign Out
      </button>
    </div>
  );
};

export default MobileNav;
