import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useNavigate } from 'react-router-dom';

import {logout} from '../slices/authSlice'
import logo from "../assets/logo.png";
const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch=useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall]=useLogoutMutation();
    const logoutHandler=async()=>{
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login')

        } catch (err) {
            console.log(err)
        }
    }
    console.log(cartItems);
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
                                    {cartItems.length > 0 && (
                                        <Badge
                                            pill
                                            bg="success"
                                            style={{ marginLeft: "5px" }}
                                        >
                                            {cartItems.reduce(
                                                (a, c) => a + c.qty,
                                                0
                                            )}
                                        </Badge>
                                    )}
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown
                                    title={userInfo.name}
                                    id="username"
                                >
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <FaUser />
                                        Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
