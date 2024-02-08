import SignInForm from "./components/SignInForm";
import styles from "./SignIn.module.css"

export default function SignUpOrLogIn(){
    return (
        <div id={styles.body}>
        <h1>Sign In Page</h1>
        <SignInForm></SignInForm>
        </div>
    );
 }