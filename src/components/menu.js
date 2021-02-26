import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
// import { LinkContainer } from "react-router-bootstrap"
import '../styles/menu.css'

const Menu = () => {
    return (
        <div>
            <div className="nav-wrapper">
                <Navbar collapseOnSelect expand="md">
                    <Navbar.Brand style={{ fontFamily: "Josefin Sans" }}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse style={{ color: 'black' }} id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{ fontSize: '16px', fontFamily: "Josefin Sans" }}>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/">Anasayfa</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/kitap">Kitap</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/makale" >Makale</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/sinema">Sinema</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/zizek">Zizek Calismalari</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/bagimsiz-edebiyat">Bagimsiz Edebiyat</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/politika">Politika</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/video">Video</Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/podcast">Podcast</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Menu

    // < Nav.Link as={ NavLink } className = "nav-element" style = {{ color: 'black' }} to = "/" exact > Anasayfa</Nav.Link >
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/kitap">Kitap</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/makale" >Makale</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/sinema">Sinema</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/zizek">Zizek Calismalari</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/bagimsiz-edebiyat">Bagimsiz Edebiyat</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/politika">Politika</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/video">Video</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/podcast">Podcast</Nav.Link>