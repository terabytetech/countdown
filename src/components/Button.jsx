import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = ({ text, className }) => {
  return (
    <Link to="/">
      <button className={`${styles.btn} ${styles["btn-join"]}`}>{text}</button>
    </Link>
  );
};

export const BtnLogin = ({ text, className }) => {
  return (
    <Link to="/">
      <button className={`${styles.btn} ${styles["btn-login"]}`}>{text}</button>
    </Link>
  );
};

export const BtnMobile = ({ text, className }) => {
  return (
    <Link to="/">
      <button className={className}>{text}</button>
    </Link>
  );
};
