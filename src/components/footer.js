import React from 'react'
import '../styles/layout.css'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div className="wrapper row5">
            <div id="copyright" className="hoc clear">
                <p className="fl_left">Copyright &copy; 2016 - All Rights Reserved - <Link href="#">Domain Name</Link></p>
                <p className="fl_right">Template by <a target="_blank" rel="noreferrer" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
            </div>
        </div>
    )
}

export default Footer