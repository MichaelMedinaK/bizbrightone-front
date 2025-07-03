import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ButtonRedirect.module.css";
interface NavItemProps {
  to: string;
  content: string;
  exact?: boolean;
}

const ButtonRedirect: React.FC<NavItemProps> = ({ to, content, exact }) => {
  return (
    <li className={styles.navItem}>
      <NavLink to={to} className={styles.navLink} end={exact}>
        {content}
      </NavLink>
    </li>
  );
};

export default ButtonRedirect;
