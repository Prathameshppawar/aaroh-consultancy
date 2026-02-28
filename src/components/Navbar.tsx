import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Mission', path: '/mission' },
    { label: 'Services', path: '/services' },
    { label: 'Blogs', path: '/blogs' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner container">
                    <Link to="/" className="navbar__logo" aria-label="Aaroh Manufacturing Consultancy Home">
                        <img src="/logo.jpg" alt="Aaroh Manufacturing Consultancy" className="navbar__logo-img" />
                    </Link>

                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link to="/#contact" className="navbar__cta btn btn-primary btn-sm">
                        Get in Touch
                    </Link>

                    <button
                        className="navbar__toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
                <div className="mobile-menu__content">
                    <ul className="mobile-menu__links">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.path}
                                className="mobile-menu__item"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                <Link
                                    to={link.path}
                                    className={`mobile-menu__link ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/#contact"
                        className="btn btn-primary btn-lg mobile-menu__cta"
                        onClick={() => setIsOpen(false)}
                    >
                        Get in Touch
                    </Link>
                    <div className="mobile-menu__footer">
                        <p>director@aarohmc.com</p>
                        <p>+91-9822295398</p>
                    </div>
                </div>
            </div>
        </>
    );
}
