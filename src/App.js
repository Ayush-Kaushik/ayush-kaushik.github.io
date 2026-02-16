import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import SidebarToggle from './components/SidebarToggle';
import FloatingSidebar from './components/FloatingSidebar';
import Articles from './pages/Articles';
import Article from './components/Article';

function App() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSidebarOpen = useCallback(() => {
        setIsSidebarVisible(true);
    }, []);

    useEffect(() => {
        document.title = "Ayush Kaushik";
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

            <main className="pt-20 sm:pt-24">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Articles />} />
                    <Route path="/blog/:postId" element={<Article />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
