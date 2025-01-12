import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { SHOW_PROJECTS } from "../constants/Project";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await axios.get("https://api.github.com/users/Ayush-Kaushik/repos?sort=created");

            setProjects(response.data.filter(item => {
                if (SHOW_PROJECTS.includes(item.id)) {
                    let date = new Date(item.created_at);
                    item['created_at'] = date.toISOString().substring(0, 10);
                    return item;
                }

                return [];
            }));
        }

        getProjects();
    }, []);

    return (
        <ProjectsContext.Provider value={{
            projects: projects
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}