import { useEffect, useState, useCallback } from 'react';
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Experience from "./Experience";
import Navbar from "../components/Navbar";
import Skills from "./Skills";
import Contact from './Contact';

import FloatingSidebar from '../components/FloatingSidebar';
import SidebarToggle from '../components/SidebarToggle';

const Home = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        document.title = "Ayush Kaushik";
    }, []);

    const handleSidebarOpen = useCallback(() => {
        setIsSidebarVisible(true);
    }, []);

    return (
        <div>
            <SidebarToggle onClick={handleSidebarOpen} />
            <FloatingSidebar
                isVisible={isSidebarVisible}
                onClose={() => setIsSidebarVisible(false)}
            />

            <main>
                <Aboutme />

                <header>
                    <Navbar />
                </header>


                <Skills />
                <Experience />
                <Projects />
                <Contact />

            </main>

            <Footer />
        </div>
    );
}

export default Home;
