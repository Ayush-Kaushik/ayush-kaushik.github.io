import { RESUME_LINK } from '../constants/MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={"layout-navigation"}>
            <ul>
                <li>
                    <Link to={'/#aboutme'}>{"Home"}</Link>
                </li>
                <li>
                    <Link to="/#experience">{"Experience"}</Link>
                </li>
                <li>
                    <Link to="/#projects">{"Projects"}</Link>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/bloghandy">{"Blogs"}</a>
                </li>
                <li>
                    <a href={RESUME_LINK} download>{"Resume"}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;