import './App.scss';
import React, {useEffect} from 'react';
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Aboutme from "./pages/Aboutme";
import Footer from "./pages/Footer";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Contact from './pages/Contact';

function App() {

    useEffect(() => {
        document.title = "Ayush Kaushik";
    }, []);


    return (
        <div>
            <Aboutme/>
            <Navbar/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Articles/>
            <Contact />
            <Footer/>
        </div>
    );
}

export default App;
