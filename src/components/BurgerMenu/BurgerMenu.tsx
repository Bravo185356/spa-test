import classes from "./BurgerMenu.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import userImg from "../../assets/default-user-image.png";

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
      <div className={classes.userInfo}>
        <img className={classes.burgerAvatar} src={userImg} alt="img" />
        <div>Олег</div>
        <div>oleg.bravo1853@gmail.com</div>
      </div>
      <ul className={classes.links}>
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
