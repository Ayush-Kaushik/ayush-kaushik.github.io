import { RESUME_LINK } from '../constants/MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={"layout-navigation"}>
            <ul>
                <li>
                    <Link to={'/'}>{"Home"}</Link>
                </li>
                <li>
                    <a href="#experience">{"Experience"}</a>
                </li>
                <li>
                    <a href="#projects">{"Projects"}</a>
                </li>
                <li>
                    <Link to="/articles">{"Blogs"}</Link>
                </li>
                <li>
                    <a href={RESUME_LINK} download>{"Resume"}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;