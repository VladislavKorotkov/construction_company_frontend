import { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AUTH_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { Button, NavLink } from "react-bootstrap";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

const Header = observer (()=>{
    const {userApp} = useContext(Context)
    const navigate = useNavigate()
    const redirectToAuth = ()=>{
        navigate(AUTH_ROUTE)
    }
    const redirectToProfile = ()=>{
        navigate(PROFILE_ROUTE)
    }
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                     <Link to={HOME_ROUTE} style={{ color: 'black', textDecoration: 'none' }}>
                        <strong>Стройся-ка</strong>
                     </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    {userApp.getIsAuth()?
                    <Button variant="primary"  onClick={redirectToProfile}>Личный аккаунт</Button>:
                    <Button variant="primary" onClick={redirectToAuth}>Авторизация</Button>
                }  
                </Nav>
        </Container>
    </Navbar>
    )
})

export default Header