import { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HOME_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const Header = observer (()=>{
    const {userApp} = useContext(Context)
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href={HOME_ROUTE}><strong>Стройся-ка</strong></Navbar.Brand>
                <Nav className="ml-auto">
                    {userApp._isAuth?
                    <Button variant="primary">Личный аккаунт</Button>:
                    <Button variant="primary" href="/login">Авторизация</Button>

                }
                   
                </Nav>
        </Container>
    </Navbar>
    )
})

export default Header