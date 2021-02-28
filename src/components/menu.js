import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
// import { Link } from 'gatsby'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import '../styles/menu.css'

const Menu = ({intl}) => {
    return (
        <div>
            <div className="nav-wrapper">
                <Navbar collapseOnSelect expand="md">
                    <Navbar.Brand style={{ fontFamily: "Josefin Sans" }}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse style={{ color: 'black' }} id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{ fontSize: '16px', fontFamily: "Josefin Sans" }}>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/"><FormattedMessage id="home"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/kitap"><FormattedMessage id="book"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/makale" ><FormattedMessage id="article"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/sinema"><FormattedMessage id="cinema"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/zizek"><FormattedMessage id="zizek"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/bagimsiz-edebiyat"><FormattedMessage id="bagimsiz-edebiyat"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/politika"><FormattedMessage id="politics"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/video"><FormattedMessage id="podcast"/></Nav.Link>
                            <Nav.Link className="nav-element" style={{ color: 'black' }} href="/podcast"><FormattedMessage id="video"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default injectIntl(Menu)

    // < Nav.Link as={ NavLink } className = "nav-element" style = {{ color: 'black' }} to = "/" exact > Anasayfa</Nav.Link >
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/kitap">Kitap</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/makale" >Makale</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/sinema">Sinema</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/zizek">Zizek Calismalari</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/bagimsiz-edebiyat">Bagimsiz Edebiyat</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/politika">Politika</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/video">Video</Nav.Link>
    //                         <Nav.Link as={NavLink} className="nav-element" style={{color:'black'}} to="/podcast">Podcast</Nav.Link>