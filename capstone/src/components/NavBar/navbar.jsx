import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'; // Import GSAP
import '../NavBar/navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const waveEffect = (element) => {
        gsap.to(element, {
            scaleY: 1.5,
            yoyo: true,
            repeat: 1,
            duration: 0.25,
            ease: 'power2.out'
        });
    };

    return (
        <div>
            <div id="main_menu" className={isMenuOpen ? 'open' : ''}>
                <div className="logo_area">
                    <Link to="/home" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })} className="logo_link">
                        <h1 className="logo_text">Auckland Zoo</h1>
                    </Link>
                    <Link to="/home"  onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })} className="logo_link">
                        <h2 className="logo_subtitle">Education</h2>
                    </Link>
                </div>
                <div className="inner_main_menu">
                    <ul>
                        <li><Link to="/wildlife" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Wildlife</Link></li>
                        <li><Link to="/services" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Services</Link></li>
                        <li><Link to="/story" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Our Story</Link></li>
                        <li><Link to="/cam" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Animal Cam</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
