import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import {
    FaArrowRight,
    FaIndustry,
    FaRocket,
    FaExpandArrowsAlt,
    FaChartLine,
    FaClipboardCheck,
    FaLightbulb,
    FaLaptopCode,
    FaCheckCircle,
    FaShieldAlt,
    FaMoneyBillWave,
    FaCrosshairs,
    FaAlignLeft,
    FaMapSigns,
} from 'react-icons/fa';
import './Mission.css';

const audiences = [
    { icon: <FaIndustry />, title: 'Manufacturing MSMEs', desc: 'MSMEs in manufacturing & supply of mechanical products' },
    { icon: <FaRocket />, title: 'New Ventures', desc: 'Entrepreneurs setting up operations from inception' },
    { icon: <FaExpandArrowsAlt />, title: 'Expanding Businesses', desc: 'New units, new products, relocation, resource changes' },
    { icon: <FaChartLine />, title: 'Continuous Improvement', desc: 'Cycle time reduction, line balancing, efficiency drives' },
    { icon: <FaClipboardCheck />, title: 'Standard Practices', desc: 'Quality standards adoption, PPAP documentation' },
    { icon: <FaLightbulb />, title: 'New Product Innovators', desc: 'Establishing manufacturing for new products' },
    { icon: <FaLaptopCode />, title: 'ERP Providers', desc: 'Managing complex master data and multiple projects' },
];

const benefits = [
    { icon: <FaChartLine />, text: 'Improved productivity and quality standards' },
    { icon: <FaMoneyBillWave />, text: 'Reduced project delays and costs' },
    { icon: <FaCrosshairs />, text: 'Opportunity to focus on core business strategies' },
    { icon: <FaShieldAlt />, text: 'Enhanced compliance with industry standards' },
    { icon: <FaMapSigns />, text: 'Long-term roadmap for continuous improvement' },
];

const whyUs = [
    'Deep experience with startups and MSMEs',
    'Tailored solutions designed for resource-constrained businesses',
    'Cost-effective outsourcing for process planning',
    'Strengthened supply chains through improved productivity',
    'Mutual benefit for client and business partners',
];

export default function Mission() {
    return (
        <>
            <SEOHead
                title="Our Vision & Mission"
                description="Discover Aaroh's mission to simplify the industrial journey for MSMEs with practical, tailored solutions driving efficiency and growth in manufacturing."
                keywords="manufacturing mission, MSME growth, business consulting vision, process planning, manufacturing efficiency, India"
                canonical="/mission"
            />

            {/* Hero */}
            <section className="mission-hero bg-gradient">
                <div className="container">
                    <AnimatedSection className="mission-hero__content">
                        <span className="section-label">Our Purpose</span>
                        <h1 className="mission-hero__title">
                            Our Vision, <span className="text-gradient">Our Mission</span>
                        </h1>
                        <p className="mission-hero__subtitle">
                            With rapidly changing & ever-evolving technology, many aspiring minds are entering
                            the world of business — contributing significantly towards the development of the MSME sector.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="section">
                <div className="container">
                    <div className="mission-statement">
                        <AnimatedSection className="mission-statement__challenges" direction="left">
                            <h2>The Challenges MSMEs Face</h2>
                            <p className="mission-statement__intro">
                                As an inevitable side effect of rapid technological changes, MSMEs often struggle with:
                            </p>
                            <ul className="mission-challenges-list">
                                <li>
                                    <span className="mission-challenges-list__marker" />
                                    Maintaining consistent product quality
                                </li>
                                <li>
                                    <span className="mission-challenges-list__marker" />
                                    Implementing best manufacturing practices
                                </li>
                                <li>
                                    <span className="mission-challenges-list__marker" />
                                    Managing multiple business functions simultaneously
                                </li>
                            </ul>
                            <p className="mission-statement__tagline">
                                Entrepreneurs from the MSME sector, facing these challenges regularly, may find us useful.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="mission-statement__mission" delay={0.15} direction="right">
                            <div className="mission-card">
                                <FaAlignLeft className="mission-card__icon" />
                                <h3>Our Mission</h3>
                                <p>
                                    To simplify this industrial journey by providing practical, tailored solutions
                                    that drive efficiency and growth.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Whom We Serve */}
            <section className="section bg-cream" id="whom-we-serve">
                <div className="container">
                    <AnimatedSection className="section-center-header">
                        <span className="section-label">Whom We Serve</span>
                        <h2 className="section-title">Industries & Entrepreneurs We Support</h2>
                    </AnimatedSection>

                    <div className="audience-grid">
                        {audiences.map((a, i) => (
                            <AnimatedSection key={a.title} delay={i * 0.07} className="audience-card card">
                                <div className="audience-card__icon">{a.icon}</div>
                                <h4 className="audience-card__title">{a.title}</h4>
                                <p className="audience-card__desc">{a.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section" id="benefits">
                <div className="container">
                    <div className="benefits-layout">
                        <AnimatedSection className="benefits-content">
                            <span className="section-label">Client Outcomes</span>
                            <h2 className="section-title">Benefits to Our Clients</h2>
                            <div className="benefits-list">
                                {benefits.map((b, i) => (
                                    <AnimatedSection key={b.text} delay={i * 0.08} className="benefit-item">
                                        <div className="benefit-item__icon">{b.icon}</div>
                                        <p>{b.text}</p>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="why-us-content" delay={0.15} direction="right">
                            <span className="section-label">Differentiators</span>
                            <h2 className="section-title">Why Choose Us</h2>
                            <ul className="why-us-list">
                                {whyUs.map((item, i) => (
                                    <li key={i}>
                                        <FaCheckCircle className="why-us-list__icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="btn btn-primary">
                                View Our Services <FaArrowRight />
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Working Hours + CTA */}
            <section className="section-sm bg-dark">
                <div className="container">
                    <AnimatedSection className="mission-cta">
                        <div className="mission-cta__hours">
                            <h3>Working Hours</h3>
                            <p>Monday to Saturday: 9:30 AM – 6:30 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="mission-cta__action">
                            <h2>We're Looking Forward to Serve You!</h2>
                            <p>
                                Contact or send a WhatsApp message: <strong>+91-9822295398</strong><br />
                                Email: <strong>director@aarohmc.com</strong>
                            </p>
                            <a href="/#contact" className="btn btn-primary btn-lg">
                                Get in Touch <FaArrowRight />
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
