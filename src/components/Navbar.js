import { RESUME_LINK } from '../constants/MenuItems';

const Navbar = () => {
    return (
        <div className={"layout-navigation"}>
            <ul>
                <li>
                    <a href="#experience">{"Experience"}</a>
                </li>
                <li>
                    <a href="#projects">{"Projects"}</a>
                </li>
                <li>
                    <a href="#articles">{"Blogs"}</a>
                </li>
                <li>
                    <a href={RESUME_LINK} download>{"Resume"}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;