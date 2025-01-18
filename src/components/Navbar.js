import React from 'react';
import {Link} from "react-scroll";
import {RESUME_LINK} from '../constants/MenuItems';

const Navbar = () => {
    return (
        <div className={"layout-navigation"}>
            <ul>
                <li>
                    <Link activeClass="active" to="projects" smooth={true} duration={1000}>{"Projects"}</Link>
                </li>
                <li>
                    <Link activeClass="active" to="experience" spy={true} smooth={true}
                          duration={1000}>{"Experience"}</Link>
                </li>
                <li>
                    <Link activeClass="active" to="articles" spy={true} smooth={true}
                          duration={2000}>{"Blogs"}</Link>
                </li>
                <li>
                    <a href={RESUME_LINK} download>{"Resume"}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;