import './App.scss';

import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import SidebarToggle from './components/SidebarToggle';
import FloatingSidebar from './components/FloatingSidebar';
import BlogHandyIframe from './pages/BlogHandy';

function App() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSidebarOpen = useCallback(() => {
        setIsSidebarVisible(true);
    }, []);

    return (
        <BrowserRouter>
            <SidebarToggle onClick={handleSidebarOpen} />
            <FloatingSidebar
                isVisible={isSidebarVisible}
                onClose={() => setIsSidebarVisible(false)}
            />

            <header>
                <Navbar />
            </header>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<BlogHandyIframe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
