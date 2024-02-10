import RegisterForm from "./components/RegisterForm";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div id={styles.body}>
      {/* <h1>Register Page</h1> */}
      <RegisterForm></RegisterForm>
    </div>
  );
}
