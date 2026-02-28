import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import whomWeServe from '../assets/whom_we_serve.png';
import './Mission.css';

const audiences = [
    'MSMEs in manufacturing & supply of mechanical products',
    'Entrepreneurs starting new ventures (setting up operations from inception)',
    'Entrepreneurs expanding existing businesses (new unit, new product, relocation)',
    'Industry leaders driving continuous improvement (cycle time reduction, line balancing)',
    'Industry leaders adopting standard practices & documentation (quality standards, PPAP)',
    'Innovators establishing manufacturing for new products',
    'ERP providers managing long implementation timelines (complex master data, multiple projects)',
];

const benefits = [
    'Improved productivity and quality standards',
    'Reduced project delays and costs',
    'Opportunity to focus on core business strategies',
    'Enhanced compliance with industry standards',
    'Long-term roadmap for continuous improvement',
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
                                <li>Maintaining consistent product quality</li>
                                <li>Implementing best manufacturing practices</li>
                                <li>Managing multiple business functions simultaneously</li>
                            </ul>
                            <p className="mission-statement__tagline">
                                Entrepreneurs from the MSME sector, facing these challenges regularly, may find us useful.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="mission-statement__mission" delay={0.15} direction="right">
                            <div className="mission-card">
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
                    <div className="whom-we-serve-layout">
                        <AnimatedSection className="whom-we-serve__image-wrap" direction="left">
                            <img src={whomWeServe} alt="Manufacturing and engineering teams" className="whom-we-serve__image" />
                        </AnimatedSection>

                        <AnimatedSection className="whom-we-serve__content" delay={0.15} direction="right">
                            <span className="section-label">Whom We Serve</span>
                            <h2 className="section-title">Industries & Entrepreneurs We Support</h2>
                            <ul className="whom-we-serve__list">
                                {audiences.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits + Why Us */}
            <section className="section" id="benefits">
                <div className="container">
                    <div className="benefits-layout">
                        <AnimatedSection className="benefits-content">
                            <span className="section-label">Client Outcomes</span>
                            <h2 className="section-title">Benefits to Our Clients</h2>
                            <div className="benefits-list">
                                {benefits.map((b) => (
                                    <div key={b} className="benefit-item">
                                        <FaCheckCircle className="benefit-item__icon" />
                                        <p>{b}</p>
                                    </div>
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
