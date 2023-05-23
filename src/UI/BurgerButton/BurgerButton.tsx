import classes from "./BurgerButton.module.css";

interface BurgerButtonProps {
  setBurgerActive: Function;
  burgerActive: Boolean;
}

export default function BurgerButton({ setBurgerActive, burgerActive }: BurgerButtonProps) {
  return (
    <div className={classes.burgerBody} onClick={() => setBurgerActive(!burgerActive)}>
      <div className={classes.burgerItem}></div>
      <div className={classes.burgerItem}></div>
      <div className={classes.burgerItem}></div>
    </div>
  );
}
