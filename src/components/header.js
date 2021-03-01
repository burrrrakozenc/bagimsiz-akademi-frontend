import React from "react";
import { Link } from 'gatsby'
import '../styles/layout.css'
import '../styles/framework.css'
import Menu from './menu'
import Language from './language'

const Header = () => {

  return (
    <body id="top">
      <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <div className="fl_right">
          {/* style={{ paddingRight: '1em', paddingLeft: '1em' }} */}
            <ul>
              <li><Link to="/search"><i className="fa fa-lg fa-search"></i></Link></li>
              <li><Link to="/"><i className="fa fa-lg fa-home"></i></Link></li>
              <li><Language/></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left">
            <h1><Link to="/">BAĞIMSIZ AKADEMİ</Link></h1>
            <p>Sed imperdiet lectus</p>
          </div>
        </header>
      </div>
      <div className="wrapper row2">
        <div id="mainav">
          <Menu />
        </div>
      </div>
    </body>
  )
}

export default Header   