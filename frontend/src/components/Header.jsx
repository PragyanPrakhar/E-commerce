import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                {/* expand="lg" Makes the navbar expand to horizontal on large screens and collapse into a hamburger menu on smaller screens */}

                {/* Collapses the expanded navbar when a Nav.Link is clicked. */}

                <Container>
                    {/*  A Bootstrap component that provides a responsive fixed-width container */}
                    <Navbar.Brand href="/">
                        <img src={logo} alt="E-commerce" />
                        E-Commerce
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart">
                                <FaShoppingCart />
                                Cart
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <FaUser />
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
