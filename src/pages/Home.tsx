import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import { blogPosts } from '../blogs/blogData';
import heroBg from '../assets/hero-home-bg.jpg';
import industryVisit from '../assets/industry_visit.png';
import processPlanning from '../assets/Services/planning.jpg';
import processDocumentation from '../assets/Services/process_documentation.png';
import erpAssistance from '../assets/Services/erp_assistance.png';
import inventoryControl from '../assets/Services/inventory_control.png';
import './Home.css';

const services = [
    {
        image: processPlanning,
        title: 'Process Planning Solutions',
        desc: 'Comprehensive process plans that optimize every step of your manufacturing workflow.',
        link: '/services#process-planning',
    },
    {
        image: processDocumentation,
        title: 'Process Documentation',
        desc: 'SOPs, flowcharts, PFMEA, and control charts for clarity and compliance.',
        link: '/services#process-documentation',
    },
    {
        image: erpAssistance,
        title: 'ERP Implementation',
        desc: 'Expert guidance in ERP selection and seamless integration for your operations.',
        link: '/services#erp-implementation',
    },
    {
        image: inventoryControl,
        title: 'Inventory Control',
        desc: 'Complete support in stock classification, stock taking, and evaluation.',
        link: '/services#inventory-control',
    },
];

const differentiators = [
    { num: '01', text: 'Hands-on experience with MSMEs and startups across diverse manufacturing sectors' },
    { num: '02', text: 'Practical, shop-floor-tested solutions, not theoretical frameworks' },
    { num: '03', text: 'Cost-effective consulting designed for resource-constrained businesses' },
    { num: '04', text: 'End-to-end support from assessment to implementation to training' },
];

export default function Home() {
    const [heroLoaded, setHeroLoaded] = useState(false);

    // Preload the hero background image
    useEffect(() => {
        const img = new Image();
        img.src = heroBg;
        if (img.complete) {
            setHeroLoaded(true);
        } else {
            img.onload = () => setHeroLoaded(true);
            img.onerror = () => setHeroLoaded(true);
            // Fallback — never block for more than 5s
            const t = setTimeout(() => setHeroLoaded(true), 5000);
            return () => clearTimeout(t);
        }
    }, []);

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

            {/* ── Hero — blur-to-sharp ── */}
            <section
                className={`hero ${heroLoaded ? 'hero--loaded' : 'hero--loading'}`}
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="hero__overlay" />
                <div className="container hero__inner">
                    <AnimatedSection className="hero__content">
                        <h1 className="hero__title">
                            Consulting Excellence for Manufacturing Growth
                        </h1>
                        <p className="hero__subtitle">
                            We offer the most suitable solutions for challenges in the manufacturing field
                            particularly for the MSME sector helping organizations achieve their goals
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

            {/* ── Who We Are ── */}
            <section className="section" id="about-intro">
                <div className="container">
                    <div className="about-intro">
                        <AnimatedSection className="about-intro__content" direction="left">
                            <h2 className="section-title">Simplifying Manufacturing Operations for MSMEs</h2>
                            <p className="about-intro__text">
                                Aaroh Manufacturing Consultancy partners with MSMEs and startups in the manufacturing
                                sector to streamline operations, optimize processes, and drive sustainable growth.
                            </p>
                            <p className="about-intro__text">
                                With hands-on experience across diverse manufacturing environments, we deliver practical,
                                cost-effective solutions — from process planning and documentation to ERP implementation
                                and inventory control.
                            </p>
                            <Link to="/about" className="btn btn-dark">
                                More About Us <FaArrowRight />
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection className="about-intro__image-wrap" delay={0.15} direction="right">
                            <img src={industryVisit} alt="Aaroh consultant during an industry visit" className="about-intro__image" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Trust Metrics ── */}
            <section className="metrics-strip">
                <div className="container">
                    <AnimatedSection className="metrics-grid">
                        <div className="metric">
                            <span className="metric__number">15+</span>
                            <span className="metric__label">Years of Industry Experience</span>
                        </div>
                        <div className="metric">
                            <span className="metric__number">50+</span>
                            <span className="metric__label">Manufacturing Units Supported</span>
                        </div>
                        <div className="metric">
                            <span className="metric__number">200+</span>
                            <span className="metric__label">Processes Documented</span>
                        </div>
                        <div className="metric">
                            <span className="metric__number">100%</span>
                            <span className="metric__label">Client Satisfaction</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Core Services — 2x2 Grid with hover gradient ── */}
            <section className="section bg-cream" id="services">
                <div className="container">
                    <AnimatedSection className="services-header">
                        <h2 className="section-title">Our Core Services</h2>
                        <p className="section-subtitle">
                            Practical, tailored solutions that drive efficiency and growth for manufacturing businesses at every stage.
                        </p>
                    </AnimatedSection>

                    <div className="services-grid">
                        {services.map((service, i) => (
                            <AnimatedSection key={service.title} delay={i * 0.1}>
                                <Link to={service.link} className="service-card">
                                    <img src={service.image} alt={service.title} className="service-card__img" />
                                    <div className="service-card__overlay" />
                                    <div className="service-card__content">
                                        <h3 className="service-card__title">{service.title}</h3>
                                        <p className="service-card__desc">{service.desc}</p>
                                        <span className="service-card__link">
                                            Read More <FaArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why MSMEs Trust Us ── */}
            <section className="section" id="why-us">
                <div className="container">
                    <AnimatedSection className="why-header">
                        <h2 className="section-title">Why MSMEs Trust Aaroh</h2>
                        <p className="section-subtitle">
                            We don't offer cookie-cutter advice. Every engagement starts with understanding
                            your shop floor, your team, and your specific challenges.
                        </p>
                    </AnimatedSection>

                    <div className="why-card-grid">
                        {differentiators.map((d, i) => (
                            <AnimatedSection key={d.num} delay={i * 0.1}>
                                <div className="why-card">
                                    <span className="why-card__num">{d.num}</span>
                                    <p>{d.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="why-cta" delay={0.3}>
                        <Link to="/mission" className="btn btn-dark">
                            Our Mission & Vision <FaArrowRight />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Insights & Articles ── */}
            <section className="section bg-cream" id="insights">
                <div className="container">
                    <AnimatedSection className="insights-header">
                        <h2 className="section-title">Insights & Articles</h2>
                        <p className="section-subtitle">
                            Expert perspectives on manufacturing challenges, process optimization, and MSME growth strategies.
                        </p>
                    </AnimatedSection>

                    <div className="insights-grid">
                        {blogPosts.slice(0, 2).map((post, i) => (
                            <AnimatedSection key={post.slug} delay={i * 0.12}>
                                <Link to={`/blogs/${post.slug}`} className="insight-card">
                                    <div className="insight-card__img-wrap">
                                        <img src={post.image} alt={post.title} className="insight-card__img" />
                                    </div>
                                    <div className="insight-card__body">
                                        <div className="insight-card__tags">
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="insight-card__tag">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="insight-card__title">{post.title}</h3>
                                        <p className="insight-card__desc">{post.description}</p>
                                        <span className="insight-card__link">
                                            Read Article <FaArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="insights-linkedin" delay={0.25}>
                        <p>Follow us for regular updates on manufacturing best practices and industry trends.</p>
                        <a
                            href="https://www.linkedin.com/company/aaroh-manufacturing-consultancy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark"
                        >
                            <FaLinkedinIn /> Follow Us on LinkedIn
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Contact ── */}
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
