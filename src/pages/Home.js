import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from './Contact';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const targetId = location.hash.replace("#", "");
        const el = document.getElementById(targetId);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [location]);

    return (
        <div>
            <main>
                <section id="aboutme">
                    <Aboutme />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="projects">
                    <Contact />
                </section>


            </main>

            <Footer />
        </div>
    );
}

export default Home;
