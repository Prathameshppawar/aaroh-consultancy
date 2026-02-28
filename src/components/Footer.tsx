import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src="/logo.jpg" alt="Aaroh Manufacturing Consultancy" className="footer__logo-img" />
                        </Link>
                        <p className="footer__tagline">
                            Consulting excellence for manufacturing growth. Tailored solutions for MSMEs to ascend towards operational efficiency.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/mission">Our Mission</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__list">
                            <li><Link to="/services#process-planning">Process Planning</Link></li>
                            <li><Link to="/services#process-documentation">Process Documentation</Link></li>
                            <li><Link to="/services#erp-implementation">ERP Implementation</Link></li>
                            <li><Link to="/services#inventory-control">Inventory Control</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact</h4>
                        <ul className="footer__contact">
                            <li>
                                <FaEnvelope />
                                <a href="mailto:director@aarohmc.com">director@aarohmc.com</a>
                            </li>
                            <li>
                                <FaPhoneAlt />
                                <a href="tel:+919822295398">+91-9822295398</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                        </ul>

                        <div className="footer__hours">
                            <p><strong>Working Hours</strong></p>
                            <p>Mon – Sat: 9:30 AM – 6:30 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} Aaroh Manufacturing Consultancy. All rights reserved.</p>
                    <div className="footer__socials">
                        <a
                            href="https://wa.me/919822295398?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="footer__social footer__social--whatsapp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/aaroh-manufacturing-consultancy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="footer__social"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61587200074215"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="footer__social"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="mailto:director@aarohmc.com"
                            aria-label="Email"
                            className="footer__social"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
