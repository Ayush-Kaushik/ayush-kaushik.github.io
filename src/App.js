import './App.scss';
import { useEffect, useState, useCallback } from 'react';
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Aboutme from "./pages/Aboutme";
import Footer from "./pages/Footer";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Contact from './pages/Contact';

import FloatingSidebar from './components/FloatingSidebar';
import SidebarToggle from './components/SidebarToggle';

function App() {
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
            <Aboutme/>
            <Navbar/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Articles/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
