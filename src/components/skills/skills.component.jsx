import React from 'react';

import { DiDjango, DiJavascript1, DiFirebase, DiJqueryLogo, DiReact, DiBootstrap } from "react-icons/di";


import './skills.styles.scss';

const Skills = () => (
    <div className="skills" name="skill">
        <div className="container">
            <div className="skills-inner">
                <h1 className="title">Skills</h1>
                <div className="skill-groups">
                    <div className="skill">
                        <DiDjango size={50} />
                        <h3>Django</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                    <div className="skill">
                        <DiBootstrap size={50} />
                        <h3>Bootstrap</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                    <div className="skill">
                        <DiJqueryLogo size={50} />
                        <h3>Jquery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                </div>
                <div className="skill-groups">
                    <div className="skill">
                        <DiJavascript1 size={50} />
                        <h3>ES6</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                    <div className="skill">
                        <DiReact size={50} />
                        <h3>ReactJS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                    <div className="skill">
                        <DiFirebase size={50} />
                        <h3>Firebase</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;