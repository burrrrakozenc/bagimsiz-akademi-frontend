import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/menu.css'

const Menu = () => {
    return (
        <>
            <div className="nav-wrapper">
                <Navbar collapseOnSelect expand="lg" bg="white">
                    <Navbar.Brand style={{ fontFamily: "Josefin Sans" }}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse style={{ color: 'black' }} id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{ fontSize: '16px', fontFamily: "Josefin Sans" }}>
                            <Nav.Link className="nav-element" href="/">Anasayfa</Nav.Link>
                            <Nav.Link className="nav-element" href="/kitap">Kitap</Nav.Link>
                            <Nav.Link className="nav-element" href="/makale" >Makale</Nav.Link>
                            <Nav.Link className="nav-element" href="/sinema">Sinema</Nav.Link>
                            <Nav.Link className="nav-element" href="/zizek">Zizek Calismalari</Nav.Link>
                            <Nav.Link className="nav-element" href="/bagimsiz-edebiyat">Bagimsiz Edebiyat</Nav.Link>
                            <Nav.Link className="nav-element" href="/politika">Politika</Nav.Link>
                            <Nav.Link className="nav-element" href="/video">Video</Nav.Link>
                            <Nav.Link className="nav-element" href="/podcast">Podcast</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Menu