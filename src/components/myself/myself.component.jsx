import React from 'react';

import myself from '../../assests/images/myself.webp';

import './myself.styles.scss';

const MySelf = () => (
    <div className="about-me" name="about">
        <div className="container">
            <div className="about-me-inner">
                <h1 className="title">About Me</h1>
                <div className="sub-inner">
                    <div className="myself-image-container">
                        <img src={myself} alt="Wayan Danyael Eco" className="myself-image" loading="lazy" />
                    </div>
                    <div className="myself-description">
                        <p className="description-subtext">
                            My name is Wayan Danyael Eco. Seeking a job oppurtunity of Front-end Web Developer. And having specialization in creating dynamic and beautiful web pages. I have been no experience yet of this job but my internship does. I've been a Fron-end Web developer at CodeChiq company --start up company which is closed by now.
                    </p>
                        <p className="description-subtext">
                            Im a person the is dedicated in this path. Since that internship i've been amaze in web developer world. I been attended several meet ups like GDG CEBU held in Manduae, Cebu. Being a web developer gives me self confedence. Its because not all people can code and build websites on its own effort. I dont know why i feel incomplete when i didnt finish making websites thats why even holidays always coding and i like it . The more I do it the more I enjoys and for me it becomes my hubby. Thats all :-D
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MySelf;