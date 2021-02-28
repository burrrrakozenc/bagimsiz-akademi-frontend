import React from 'react'
import '../styles/layout.css'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div className="row4">
            <footer id="footer">
                {/* <div className="one_third first" style={{margin: '0 auto'}}> */}
                {/* <h6 className="heading">Id porttitor enim elit</h6> */}
                {/* <ul className="nospace btmspace-30 linklist contact">
                  <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
                  <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
                </ul> */}
                <ul className="faico clear">
                    <li><Link className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></Link></li>
                    <li><Link className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></Link></li>
                    <li><Link className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link className="faicon-vk" href="#"><i className="fa fa-vk"></i></Link></li>
                </ul>
            </footer>
            {/* <div id="copyright" className="hoc clear">
                <p className="fl_left">Copyright &copy; 2016 - All Rights Reserved - <Link href="#">Domain Name</Link></p>
                <p className="fl_right">Template by <a target="_blank" rel="noreferrer" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
            </div> */}
        </div>
    )
}

export default Footer