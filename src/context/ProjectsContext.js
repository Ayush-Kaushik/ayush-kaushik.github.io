import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { projectList } from "../constants/Project";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await axios.get("https://api.github.com/users/Ayush-Kaushik/repos?sort=created");

            let data = response.data.filter(item => {
                if (projectList.includes(item.id)) {
                    let date = new Date(item.created_at);
                    item['created_at'] = date.toUTCString();
                    return item;
                }

                return "";
            })


            setProjects(data);
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