import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProjectsProvider } from "./context/ProjectsContext";
import { ArticleProvider } from "./context/ArticlesContext";
import { UserProvider } from "./context/UserContext";
import { ContactProvider } from './context/ContactContext';

ReactDOM.render(
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
    ,
    document.getElementById('root')
);

reportWebVitals();
