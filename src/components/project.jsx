import React from "react";


const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div className="project">
            <img src={image} alt={`${title} screenshot`} />
            <h3>{title}</h3>
            <div className="project-links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Page</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
        </div>
    );
};

export default Project;