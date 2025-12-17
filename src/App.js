import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogHandy from './pages/BlogHandy';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<BlogHandy />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
