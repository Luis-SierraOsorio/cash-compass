import styles from "./RegisterForm.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const specialCharacters = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

const schema = z
  .object({
    email: z.string({
      required_error: "Email is required",
    }).email(),
    password: z.string().min(2),
    confirmPassword: z.string(),
    username: z.string().min(8, { message: "must be at least 8 characters" }),
    age: z
      .number({
        invalid_type_error: "Age is required",
      })
      .gte(18, { message: "Must be 18 or older" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => !specialCharacters.test(data.username), {
    message: "username can not container special characters",
    path: ["usernameSpecialCharacterInvalid"],
  });
// form component being rendered on the register page
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    // div containing the whole form
    <div id={styles.wrapper}>
      {/* html form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        {/* form input - email */}
        <div className={styles["input-container"]}>
          <input type="text" placeholder="email" {...register("email")} />
          <FaRegUser className={styles.icon} />
        </div>
        {errors.email && (
          <div className={styles["error-message"]}>{errors.email.message}</div>
        )}

        {/* form input - username */}
        <div className={styles["input-container"]}>
          <input type="text" placeholder="username" {...register("username")} />
          <FaRegUser className={styles.icon} />
        </div>
        {errors.username && (
          <div className={styles["error-message"]}>
            {errors.username.message}
          </div>
        )}
        {errors.usernameSpecialCharacterInvalid && (
          <div className={styles["error-message"]}>
            {errors.usernameSpecialCharacterInvalid.message}
          </div>
        )}

        {/* form input - password */}
        <div className={styles["input-container"]}>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <RiLockPasswordLine className={styles.icon} />
        </div>

        {/* form input - confirm password */}
        <div className={styles["input-container"]}>
          <input
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <RiLockPasswordLine className={styles.icon} />
        </div>
        {errors.confirmPassword && (
          <div className={styles["error-message"]}>
            {errors.confirmPassword.message}
          </div>
        )}

        {/* form input - age */}
        <div className={styles["input-container"]}>
          <input
            type="number"
            placeholder="age"
            {...register("age", {
              valueAsNumber: true,
            })}
          />
        </div>
        {errors.age && (
          <div className={styles["error-message"]}>{errors.age.message}</div>
        )}

        {/* form input - submit button */}
        <button disabled={isSubmitting} type="submit">
          Register
        </button>

        {/* form input - register link container */}
        <div className={styles["register-link-container"]}>
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
}
