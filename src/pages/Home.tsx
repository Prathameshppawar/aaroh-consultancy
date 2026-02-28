import { Link } from 'react-router-dom';
import { FaArrowRight, FaCogs, FaFileAlt, FaDesktop, FaBoxes, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import './Home.css';

const services = [
    {
        icon: <FaCogs />,
        title: 'Process Planning Solutions',
        desc: 'Comprehensive process plans backed by precise documentation to ensure smooth execution, reduce bottlenecks, and maximize efficiency.',
        link: '/services#process-planning',
    },
    {
        icon: <FaFileAlt />,
        title: 'Process Documentation',
        desc: 'SOPs, flowcharts, PFMEA, and control charts developed to ensure clarity, consistency, and compliance across your operations.',
        link: '/services#process-documentation',
    },
    {
        icon: <FaDesktop />,
        title: 'ERP Implementation',
        desc: 'Expert guidance in ERP selection and implementation — bridging clients and providers for seamless integration and timely rollouts.',
        link: '/services#erp-implementation',
    },
    {
        icon: <FaBoxes />,
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
        sameAs: [],
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

            {/* ── Hero ── */}
            <section className="hero bg-gradient">
                <div className="container hero__inner">
                    <AnimatedSection className="hero__content">
                        <span className="hero__badge">
                            Manufacturing Consulting Excellence
                        </span>
                        <h1 className="hero__title">
                            Consulting Excellence for{' '}
                            <span className="text-gradient">Manufacturing Growth</span>
                        </h1>
                        <p className="hero__subtitle">
                            We are a business consulting entity that offers the most suitable solutions
                            for challenges in the manufacturing field — particularly for the MSME sector —
                            helping organizations achieve their goals and ascend towards operational excellence.
                        </p>
                        <div className="hero__actions">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                Explore Our Services <FaArrowRight />
                            </Link>
                            <a href="#contact" className="btn btn-secondary btn-lg">
                                <FaPhoneAlt /> Get in Touch
                            </a>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="hero__visual" delay={0.2} direction="right">
                        <div className="hero__stats-grid">
                            <div className="hero__stat-card">
                                <span className="hero__stat-number">4</span>
                                <span className="hero__stat-label">Core Services</span>
                            </div>
                            <div className="hero__stat-card hero__stat-card--accent">
                                <span className="hero__stat-number">MSME</span>
                                <span className="hero__stat-label">Focused Solutions</span>
                            </div>
                            <div className="hero__stat-card">
                                <span className="hero__stat-number">360°</span>
                                <span className="hero__stat-label">Manufacturing Support</span>
                            </div>
                            <div className="hero__stat-card">
                                <span className="hero__stat-number">ISO</span>
                                <span className="hero__stat-label">Compliant Practices</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Core Services ── */}
            <section className="section" id="services">
                <div className="container">
                    <AnimatedSection className="services-header">
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">Our Core Services</h2>
                        <p className="section-subtitle">
                            Practical, tailored solutions that drive efficiency and growth for manufacturing businesses at every stage.
                        </p>
                    </AnimatedSection>

                    <div className="services-grid">
                        {services.map((service, i) => (
                            <AnimatedSection key={service.title} delay={i * 0.1}>
                                <Link to={service.link} className="service-card card">
                                    <div className="service-card__icon">{service.icon}</div>
                                    <h3 className="service-card__title">{service.title}</h3>
                                    <p className="service-card__desc">{service.desc}</p>
                                    <span className="service-card__link">
                                        Learn More <FaArrowRight />
                                    </span>
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
                                <div className="why-card why-card--1">
                                    <span className="why-card__num">01</span>
                                    <p>Deep experience with startups & MSMEs</p>
                                </div>
                                <div className="why-card why-card--2">
                                    <span className="why-card__num">02</span>
                                    <p>Tailored solutions for resource-constrained businesses</p>
                                </div>
                                <div className="why-card why-card--3">
                                    <span className="why-card__num">03</span>
                                    <p>Cost-effective outsourcing for process planning</p>
                                </div>
                                <div className="why-card why-card--4">
                                    <span className="why-card__num">04</span>
                                    <p>Strengthened supply chains through improved productivity</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section className="section" id="contact">
                <div className="container">
                    <div className="contact-grid">
                        <AnimatedSection className="contact-info">
                            <span className="section-label">Reach Out</span>
                            <h2 className="section-title">Let's Discuss Your Requirements</h2>
                            <p className="section-subtitle">
                                In case of requirement, please feel free to contact us. We're looking forward to serving you!
                            </p>
                            <div className="contact-details">
                                <div className="contact-detail">
                                    <FaPhoneAlt className="contact-detail__icon" />
                                    <div>
                                        <strong>Phone / WhatsApp</strong>
                                        <p>+91-9822295398</p>
                                    </div>
                                </div>
                                <div className="contact-detail">
                                    <FaFileAlt className="contact-detail__icon" />
                                    <div>
                                        <strong>Email</strong>
                                        <p>director@aarohmc.com</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <ContactForm />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Map ── */}
            <section className="section-sm bg-cream" id="location">
                <div className="container">
                    <AnimatedSection>
                        <div className="map-section">
                            <div className="map-section__header">
                                <h3>Find Us</h3>
                                <p>Pune, Maharashtra, India</p>
                            </div>
                            <MapEmbed />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
