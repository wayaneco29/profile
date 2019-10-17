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
                            My name is Wayan Danyael Eco. Currently, I'm a trainee in Web Development at 98 labs located at Mandaue, Cebu City.  I, myself specialized in creating dynamic and amazing web pages. Since I really don't have an experience about this job, but still it's my pleasure to be part of this team. I've been a Front-end Web developer at CodeChiq company --sadly, the company is not available right now.
                    </p>
                        <p className="description-subtext">
                            Since I only have a little experience about this job.I am that person who is dedicated and loyal. Since my internship, I was amazed in making websites or in other words as a web developer. I attended several meet ups, seminar at Cebu City like GDG CEBU held in Manduae, Cebu. Being a web developer it helps me build my self confidence and self esteem. It's because not all people can code and make websites on its own. I feel incomplete when I didn't finish making websites that's why even holidays, I do coding because I do Iike it . The more I make websites, the colorful my life is. And it becomes my hobby. Thank you so much.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MySelf;