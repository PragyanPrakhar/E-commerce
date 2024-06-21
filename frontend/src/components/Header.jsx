import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                {/* expand="lg" Makes the navbar expand to horizontal on large screens and collapse into a hamburger menu on smaller screens */}

                {/* Collapses the expanded navbar when a Nav.Link is clicked. */}

                <Container>
                    {/*  A Bootstrap component that provides a responsive fixed-width container */}
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} alt="E-commerce" />
                            E-Commerce
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                            <Nav.Link>
                                <FaShoppingCart />
                                Cart
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                            <Nav.Link>
                                <FaUser />
                                Sign In
                            </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
