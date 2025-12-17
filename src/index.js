import React from 'react';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProjectsProvider } from "./context/ProjectsContext";
import { ArticleProvider } from "./context/ArticlesContext";
import { UserProvider } from "./context/UserContext";
import { ContactProvider } from './context/ContactContext';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ContactProvider>
            <UserProvider>
                    <ProjectsProvider>
                        <ArticleProvider>
                            <App />
                        </ArticleProvider>
                    </ProjectsProvider>
            </UserProvider>
        </ContactProvider>
    </React.StrictMode>
);

reportWebVitals();
