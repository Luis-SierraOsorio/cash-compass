import styles from "./RegisterForm.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function RegisterForm() {
  return (
    <div id={styles.wrapper}>
      <form action="">
        <h1>Register</h1>
        <div className={styles["input-container"]}>
          {/* <label htmlFor="email" aria-label="email" className={styles.noShow}>Email:</label> */}
          <input id="email" type="text" placeholder="username / email" />
          <FaRegUser className={styles.icon} />
        </div>

        <div className={styles["input-container"]}>
          <input type="password" placeholder="password" />
          <RiLockPasswordLine className={styles.icon} />
        </div>

        <div className={styles["input-container"]}>
          <input type="password" placeholder="confirm password" />
          <RiLockPasswordLine className={styles.icon} />
        </div>

        <div className={styles["input-container"]}>
          <input type="number" placeholder="age" />
        </div>

        <button type="submit">Register</button>
        <div className={styles["register-link-container"]}>
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
}
