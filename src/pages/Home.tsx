import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import heroBg from '../assets/services_heroBg.jpg';
import processPlanning from '../assets/Services/process_planning.png';
import processDocumentation from '../assets/Services/process_documentation.png';
import erpAssistance from '../assets/Services/erp_assistance.png';
import inventoryControl from '../assets/Services/inventory_control.png';
import './Home.css';

const services = [
    {
        image: processPlanning,
        title: 'Process Planning Solutions',
        desc: 'Comprehensive process plans backed by precise documentation to ensure smooth execution, reduce bottlenecks, and maximize efficiency.',
        link: '/services#process-planning',
    },
    {
        image: processDocumentation,
        title: 'Process Documentation',
        desc: 'SOPs, flowcharts, PFMEA, and control charts developed to ensure clarity, consistency, and compliance across your operations.',
        link: '/services#process-documentation',
    },
    {
        image: erpAssistance,
        title: 'ERP Implementation',
        desc: 'Expert guidance in ERP selection and implementation — bridging clients and providers for seamless integration and timely rollouts.',
        link: '/services#erp-implementation',
    },
    {
        image: inventoryControl,
        title: 'Inventory Control',
        desc: 'Complete support in stock classification, stock taking, and evaluation to ensure precise inventory management and informed decisions.',
        link: '/services#inventory-control',
    },
];

const benefits = [
    'Improved productivity and quality standards',
    'Reduced project delays and costs',
    'Focus on your core business strategies',
    'Enhanced compliance with industry standards',
    'Long-term roadmap for continuous improvement',
];

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Aaroh Manufacturing Consultancy',
        description: 'Business consulting for manufacturing MSMEs — process planning, documentation, ERP implementation, and inventory control.',
        url: 'https://aarohmc.com',
        telephone: '+91-9822295398',
        email: 'director@aarohmc.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 18.509034,
            longitude: 73.806925,
        },
        openingHours: 'Mo-Sa 09:30-18:30',
        sameAs: [
            'https://www.linkedin.com/company/aaroh-manufacturing-consultancy/',
            'https://www.facebook.com/profile.php?id=61587200074215',
        ],
    };

    return (
        <>
            <SEOHead
                title="Aaroh Manufacturing Consultancy — Expert Solutions for MSME Growth"
                description="Aaroh Manufacturing Consultancy offers tailored process planning, documentation, ERP implementation, and inventory control solutions for MSMEs in the manufacturing sector."
                keywords="manufacturing consulting, MSME consulting, process planning, ERP implementation, inventory control, process documentation, Pune, India"
                canonical="/"
                jsonLd={jsonLd}
            />

            {/* ── Hero with background image ── */}
            <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero__overlay" />
                <div className="container hero__inner">
                    <AnimatedSection className="hero__content">
                        <h1 className="hero__title">
                            Consulting Excellence for Manufacturing Growth
                        </h1>
                        <p className="hero__subtitle">
                            We offer the most suitable solutions for challenges in the manufacturing field —
                            particularly for the MSME sector — helping organizations achieve their goals
                            and ascend towards operational excellence.
                        </p>
                        <div className="hero__actions">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                Explore Our Services <FaArrowRight />
                            </Link>
                            <a href="#contact" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                                Get in Touch
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Core Services — vertical cards ── */}
            <section className="section" id="services">
                <div className="container">
                    <AnimatedSection className="services-header">
                        {/* <span className="section-label">What We Offer</span> */}
                        <h2 className="section-title">Our Core Services</h2>
                        <p className="section-subtitle">
                            Practical, tailored solutions that drive efficiency and growth for manufacturing businesses at every stage.
                        </p>
                    </AnimatedSection>

                    <div className="services-grid">
                        {services.map((service, i) => (
                            <AnimatedSection key={service.title} delay={i * 0.1}>
                                <Link to={service.link} className="service-card">
                                    <div className="service-card__img-wrap">
                                        <img src={service.image} alt={service.title} className="service-card__img" />
                                    </div>
                                    <div className="service-card__body">
                                        <h3 className="service-card__title">{service.title}</h3>
                                        <p className="service-card__desc">{service.desc}</p>
                                        <span className="service-card__link">
                                            Learn More <FaArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="section bg-cream" id="why-us">
                <div className="container">
                    <div className="why-grid">
                        <AnimatedSection className="why-content" direction="left">
                            <span className="section-label">Why Aaroh</span>
                            <h2 className="section-title">Benefits to Our Clients</h2>
                            <p className="section-subtitle">
                                We bring deep experience with startups and MSMEs, delivering cost-effective solutions designed for resource-constrained businesses.
                            </p>
                            <ul className="why-list">
                                {benefits.map((b) => (
                                    <li key={b} className="why-list__item">
                                        <FaCheckCircle className="why-list__icon" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/mission" className="btn btn-dark">
                                Our Mission & Vision <FaArrowRight />
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection className="why-visual" delay={0.2} direction="right">
                            <div className="why-card-stack">
                                <div className="why-card">
                                    <span className="why-card__num">01</span>
                                    <p>Deep experience with startups & MSMEs</p>
                                </div>
                                <div className="why-card">
                                    <span className="why-card__num">02</span>
                                    <p>Tailored solutions for resource-constrained businesses</p>
                                </div>
                                <div className="why-card">
                                    <span className="why-card__num">03</span>
                                    <p>Cost-effective outsourcing for process planning</p>
                                </div>
                                <div className="why-card">
                                    <span className="why-card__num">04</span>
                                    <p>Strengthened supply chains through improved productivity</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Contact — title + desc on top, map + form side by side ── */}
            <section className="section bg-cream" id="contact">
                <div className="container">
                    <AnimatedSection className="contact-header">
                        <span className="section-label">Reach Out</span>
                        <h2 className="section-title">Let's Discuss Your Requirements</h2>
                        <p className="contact-header__desc">
                            In case of any requirement, please feel free to contact us. Whether you're setting up
                            a new manufacturing unit or looking to optimize existing operations — we're here to help.
                        </p>
                        <div className="contact-header__info">
                            <span>Phone / WhatsApp: <strong>+91-9822295398</strong></span>
                            <span>Email: <strong>director@aarohmc.com</strong></span>
                            <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
                        </div>
                        <div className="contact-socials">
                            <a href="https://wa.me/919822295398?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="contact-social contact-social--whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
                            <a href="https://www.linkedin.com/company/aaroh-manufacturing-consultancy/" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://www.facebook.com/profile.php?id=61587200074215" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--facebook" aria-label="Facebook"><FaFacebookF /></a>
                        </div>
                    </AnimatedSection>

                    <div className="contact-row">
                        <AnimatedSection className="contact-row__form" direction="left">
                            <ContactForm />
                        </AnimatedSection>
                        <AnimatedSection className="contact-row__map" delay={0.15} direction="right">
                            <MapEmbed />
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
