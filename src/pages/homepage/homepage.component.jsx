import React from 'react';

import Banner from '../../components/banner/banner.component';
import MySelf from '../../components/myself/myself.component';
import Skills from '../../components/skills/skills.component';
import Projects from '../../components/projects/projects.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';


const Homepage = ({ isHidden }) => (
    <div className="homepage">
        <Banner isHidden={isHidden} />
        <MySelf />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
)

export default Homepage;