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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit neque magni cupiditate, laborum voluptates officiis dolorum consectetur temporibus dolores corporis illum sit cum sint deserunt delectus eveniet ipsum voluptate nemo!
                    </p>
                        <p className="description-subtext">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque id, culpa possimus non ratione voluptas quia assumenda quisquam commodi? Perferendis hic quidem ducimus sit impedit odit placeat reprehenderit, exercitationem aliquid dolorum nesciunt tempora natus qui doloremque voluptas porro vel voluptatem facere quos numquam. Molestiae itaque eaque ipsa esse eligendi?
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MySelf;