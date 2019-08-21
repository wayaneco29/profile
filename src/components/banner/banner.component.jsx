import React from 'react';
import { connect } from 'react-redux';

import { TiArrowDownThick } from "react-icons/ti";

import { Link } from 'react-scroll';

import { showNav, hideNav } from '../../redux/navigation/navigation.action';

import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";

import './banner.styles.scss';




class Banner extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const { showNav, hideNav } = this.props;
        const banner = document.getElementById('banner');
        const bannerHeight = banner.clientHeight;
        const calc = banner.getBoundingClientRect().top;

        if ((bannerHeight + calc) <= 0) {
            showNav()
        } else {
            hideNav()
        }
    }
    render() {
        return (
            <div className="banner" name="banner" id="banner">
                <div className="container">
                    <div className="banner-inner">
                        <h2 className="banner-text">I'm Wayan Danyael ...</h2>
                        <p>A Web Developer</p>
                    </div>

                    <div className="links">
                        <a href="https://github.com/wayaneco29" target="_blank" rel="noopener noreferrer"><GoMarkGithub className="contact" size={40} /></a>
                        <a href="https://www.facebook.com/wayandanyael" target="_blank" rel="noopener noreferrer"><FaFacebook className="contact" size={40} /></a>
                    </div>

                    <Link
                        to='about'
                        smooth={true}
                        duration={1000}
                        className="arrow"><TiArrowDownThick size={40} className="contact" /></Link>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    showNav: () => dispatch(showNav()),
    hideNav: () => dispatch(hideNav())
})

export default connect(null, mapDispatchToProps)(Banner);