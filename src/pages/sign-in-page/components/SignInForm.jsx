import styles from "./SignInForm.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

export default function SignInForm() {

  // creating form register for validation
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  function onSubmit(data) {
    console.log(data)
  }

  // email regex code if needed
 const emailTest = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  return (
    <div id={styles.wrapper}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <div className={styles["input-container"]}>
          {/* <label htmlFor="email" aria-label="email" className={styles.noShow}>Email:</label> */}
          <input {...register("username_email", {
            required: "Username/Email is required.",
            validate: (value) => {
              // if the user is entering an email , validate
              if (value.includes("@")) {
                if(!emailTest.test(value)) {
                  return "Email not valid."
                }
              }
              return true
            },
            })} type="text" placeholder="username / email" />
          <FaRegUser className={styles.icon}/>
        </div>
          {
            errors.username_email && (
              <div className={styles["validation-error"]}>{errors.username_email.message}</div>
            )
          }
        <div className={styles["input-container"]}>
          <input {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters."
            }
            })} type="password" placeholder="password" />
          <RiLockPasswordLine className={styles.icon}/>
        </div>

          {
            errors.password && (
              <div className={styles["validation-error"]}>{errors.password.message}</div>
            )
          }

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
