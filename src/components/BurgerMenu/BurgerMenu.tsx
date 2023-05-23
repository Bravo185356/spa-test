import classes from "./BurgerMenu.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface BurgerMenuProps {
  isActive: Boolean;
}

export default function BurgerMenu({ isActive }: BurgerMenuProps) {
  const burgerClass = classNames({
    [classes.burgerMenu]: true,
    [classes.active]: isActive,
  });
  return (
    <div className={burgerClass}>
      <ul>
        <li>
          <Link to={"/"}>Список постов</Link>
        </li>
        <li>
          <Link to={"/about-me"}>Обо мне</Link>
        </li>
      </ul>
    </div>
  );
}
