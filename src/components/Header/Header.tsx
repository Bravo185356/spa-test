import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import BurgerButton from "../../UI/BurgerButton/BurgerButton";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link className="link" to={"/"}>
            SPA
          </Link>
        </Navbar.Brand>
        <BurgerButton burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
        <BurgerMenu isActive={burgerActive} />
      </Container>
    </Navbar>
  );
}
