import React from 'react';

import './footer.styles.scss';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-inner">
                <div className="container-link">
                    <ul>
                        <li className="footer-link">Link 1</li>
                        <li className="footer-link">Link 1</li>
                        <li className="footer-link">Link 1</li>
                        <li className="footer-link">Link 1</li>
                    </ul>
                </div>
                <div className="container-link">
                    <ul>
                        <li className="footer-link">Link 2</li>
                        <li className="footer-link">Link 2</li>
                        <li className="footer-link">Link 2</li>
                        <li className="footer-link">Link 2</li>
                    </ul>
                </div>
            </div>
            <br />
            <hr />
            <div className="created">All rights reserved &copy; Wayan Danyael Eco</div>
        </div>
    </footer>
)

export default Footer;