import styles from "./SignInForm.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";



export default function SignInForm() {
  return (
    <div id={styles.wrapper}>
      <form action="">
        <h1>Sign In</h1>
        <div className={styles["input-container"]}>
          <input type="text" placeholder="username" />
          <FaRegUser className={styles.icon}/>
        </div>

        <div className={styles["input-container"]}>
          <input type="password" placeholder="password" />
          <RiLockPasswordLine className={styles.icon}/>
        </div>

        <div className={styles["forgot-password-container"]}>
            <a href="">Forgot Password?</a>
        </div>

        <button type="submit">Log In</button>
        <div className={styles["register-link-container"]}>
            <p>Don't have an account? <a href="">Register</a></p>
        </div>
      </form>
    </div>
  );
}
