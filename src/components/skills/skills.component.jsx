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
                        <p>is a python framework for developing websites.</p>
                    </div>
                    <div className="skill">
                        <DiBootstrap size={50} />
                        <h3>Bootstrap</h3>
                        <p>is a css library made by Twitter. Make websites responsive and ready to use classes.</p>
                    </div>
                    <div className="skill">
                        <DiJqueryLogo size={50} />
                        <h3>Jquery</h3>
                        <p>a javascript library that helps minimize the code of javascript. Also known at event handling.</p>
                    </div>
                </div>
                <div className="skill-groups">
                    <div className="skill">
                        <DiJavascript1 size={50} />
                        <h3>ES6</h3>
                        <p>a latest way javascript. Strongly minimize the code, and gives new methods.</p>
                    </div>
                    <div className="skill">
                        <DiReact size={50} />
                        <h3>ReactJS</h3>
                        <p>a javascript library made by Facebook.</p>
                    </div>
                    <div className="skill">
                        <DiFirebase size={50} />
                        <h3>Firebase</h3>
                        <p>is google free opensource no-sql datases which also provides user authentication.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;