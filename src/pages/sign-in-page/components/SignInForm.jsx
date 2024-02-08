import styles from "./SignInForm.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";



export default function SignInForm() {
  return (
    <div id={styles["sign-in-form-container"]} className={styles.wrapper}>
      <form action="">
        <h1>Sign In</h1>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="email" />
          <FaRegUser className={styles.icon}/>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="password" />
          <RiLockPasswordLine className={styles.icon}/>
        </div>

        <div className={styles.forgotPasswordContainer}>
            <a href="">Forgot Password?</a>
        </div>

        <button type="submit">Log In</button>
        <div className={styles.registerLinkContainer}>
            <p>Don't have an account? <a href="">Register</a></p>
        </div>
      </form>
    </div>
  );
}
