import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProjectsProvider } from "./context/ProjectsContext";
import { ArticleProvider } from "./context/ArticlesContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <ProjectsProvider>
                <ArticleProvider>
                    <App />
                </ArticleProvider>
            </ProjectsProvider>
        </UserProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
