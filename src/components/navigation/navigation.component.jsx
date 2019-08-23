import React from 'react';
import { connect } from 'react-redux';

import { toggleNav, hideToggleNav } from '../../redux/navigation/navigation.action';

import { Link } from 'react-scroll';

import './navigation.styles.scss';


const Navigation = ({ toggleNav, toggleNavList, toggledNav, hideToggleNav }) => (
    <nav className={`${toggleNav ? 'hide' : 'show'} nav`}>
        <div className="container">
            <div className="logo-container">
                <Link
                    to='banner'
                    smooth={true}
                    duration={1000}
                    className="logo"
                    onClick={hideToggleNav}>LOGO</Link>
            </div>

            <ul className={`${toggleNavList ? 'show' : 'hide'} navbar`}>
                <Link
                    to='about'
                    activeClass="active"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    className="nav-item"
                    onClick={hideToggleNav}>About</Link >
                <Link
                    to='skill'
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    duration={1000}
                    className="nav-item"
                    onClick={hideToggleNav}>Skills</Link >
                <Link
                    to='project'
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    duration={1000}
                    className="nav-item"
                    onClick={hideToggleNav}>Projects</Link >
                <Link
                    to='contact'
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    duration={1000}
                    className="nav-item"
                    onClick={hideToggleNav}>Contact</Link >
            </ul>

            <div className="hamburger" onClick={toggledNav}>
                <span className={`${toggleNavList ? 'cross' : 'line'} bar`}></span>
                <span className={`${toggleNavList ? 'cross' : 'line'} bar`}></span>
                <span className={`${toggleNavList ? 'cross' : 'line'} bar`}></span>
                <span className={`${toggleNavList ? 'cross' : 'line'} bar`}></span>
            </div>
        </div>
    </nav >
)

const mapStateToProps = ({ navigation }) => ({
    toggleNav: navigation.isHidden,
    toggleNavList: navigation.isToggled
})

const mapDispatchToProps = dispatch => ({
    toggledNav: () => dispatch(toggleNav()),
    hideToggleNav: () => dispatch(hideToggleNav())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);