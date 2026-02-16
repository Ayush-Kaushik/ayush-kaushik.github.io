import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { projectList } from "../constants/Project";

export const ProjectsContext = createContext();

const formatProjectName = (name) => {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await axios.get("https://api.github.com/users/Ayush-Kaushik/repos?sort=created");

            let data = response.data.filter(item => {
                if (projectList.includes(item.id)) {
                    let date = new Date(item.updated_at);
                    item['updated_at'] = "🗓️ Last Updated: " + date.toDateString();
                    item['name'] = formatProjectName(item.name);
                    return item;
                }

                return "";
            });

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