import SignInForm from "./components/SignInForm";
import styles from "./SignIn.module.css"

export default function SignInPage(){
    return (
        <div id={styles.body}>
        <SignInForm ></SignInForm>
        </div>
    );
 }