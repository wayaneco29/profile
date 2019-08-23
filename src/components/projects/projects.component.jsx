import React from 'react';

import project1 from '../../assests/projects/lizashop.webp';

import { GoMarkGithub } from "react-icons/go";

import './projects.styles.scss';

const Projects = () => (
    <div className="projects" name="project">
        <div className="container">
            <div className="projects-inner">
                <h1 className="title">Projects</h1>
                <div className="project-groups">
                    <div className="project">
                        <div className="project-image-container">
                            <img src={project1} alt="Liza Shop Online" className="project-image" />
                        </div>
                        <div className="view-container">
                            <a href="#" target="_blank" className="project-link"><GoMarkGithub size={40} /></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="" alt="" />
                        </div>
                        <div className="view-container">
                            <a href="#" target="_blank" className="project-link"><GoMarkGithub size={40} /></a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image-container">
                            <img src="" alt="" />
                        </div>
                        <div className="view-container">
                            <a href="#" target="_blank" className="project-link"><GoMarkGithub size={40} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Projects;