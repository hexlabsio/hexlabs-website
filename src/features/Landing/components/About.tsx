import * as React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './About-styles.sass';

const aboutImage = require('./../../../assets/images/about.png');

export interface AboutProps {
}

const about = ({}: AboutProps) => (
    <div id="about" className="about">
        <div className="container">
            <div className="image">
                <img src={aboutImage} alt="About"/>
            </div>
            <div className="prose">
                <div className="statement">
                    Crafting impact through software
                </div>
                <div className="core">
                    We craft intelligent, intuitive web applications,
                    desktop applications and mobile apps. We have helped
                    businesses ranging from start ups to large public
                    organisations. We help our clients lead innovation &
                    make the complex simple. Our company creates products
                    that matter, empowering our clients to dream big and do
                    big, bringing business ideas into a reality is what we
                    are passionate about and this is what motivates us every
                    day.
                </div>
                <NavLink
                    className="action"
                    to="#contact"
                    smooth={true}
                >
                    Contact us
                </NavLink>
            </div>
        </div>
    </div>
);

export default about;
