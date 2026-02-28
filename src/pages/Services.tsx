import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import {
    FaCogs, FaFileAlt, FaDesktop, FaBoxes, FaArrowRight,
    FaCheckCircle, FaProjectDiagram, FaSync, FaClipboardList,
    FaCertificate, FaCarAlt, FaCompass, FaHandshake, FaClock,
} from 'react-icons/fa';
import './Services.css';

const serviceGroups = [
    {
        id: 'process-planning',
        icon: <FaCogs />,
        title: 'Process Planning Solutions',
        description: 'From concept to execution, we craft tailored process plans that optimize every step of your manufacturing workflow.',
        services: [
            {
                icon: <FaClipboardList />,
                title: 'Comprehensive Process Planning',
                desc: 'We craft detailed, tailored process plans backed by precise documentation to ensure smooth execution and compliance.',
            },
            {
                icon: <FaProjectDiagram />,
                title: 'Smart Line Balancing Solutions',
                desc: 'We deliver customized projects that optimize production flow, reduce bottlenecks, and maximize efficiency.',
            },
            {
                icon: <FaSync />,
                title: 'Continuous Improvement Support',
                desc: 'We partner with you to drive ongoing improvements, boosting productivity and sustaining long-term growth.',
            },
        ],
    },
    {
        id: 'process-documentation',
        icon: <FaFileAlt />,
        title: 'Process Documentation',
        description: 'Transform operational knowledge into structured, ISO-compliant documentation that ensures clarity and consistency across your teams.',
        services: [
            {
                icon: <FaClipboardList />,
                title: 'Structured Process Tools',
                desc: 'We develop SOPs, flowcharts, PFMEA, and control charts to ensure clarity and consistency in operations.',
            },
            {
                icon: <FaCertificate />,
                title: 'Quality & Compliance',
                desc: 'We provide ISO-compliant process documentation and employee training to strengthen standards and build workforce capability.',
            },
            {
                icon: <FaCarAlt />,
                title: 'Automotive Excellence',
                desc: 'We deliver PPAP support for automotive suppliers, combining expert training with hands-on execution.',
            },
        ],
    },
    {
        id: 'erp-implementation',
        icon: <FaDesktop />,
        title: 'Assistance in ERP Implementation',
        description: 'Navigate the complex world of ERP with a trusted partner who bridges the gap between your business needs and technology solutions.',
        services: [
            {
                icon: <FaCompass />,
                title: 'Expert ERP Guidance',
                desc: 'We provide clear, tailored guidance in ERP selection to match your business needs and goals.',
            },
            {
                icon: <FaHandshake />,
                title: 'Seamless Integration Support',
                desc: 'We act as a bridge between the client and ERP providers, ensuring smooth communication and alignment.',
            },
            {
                icon: <FaClock />,
                title: 'Efficient Implementation',
                desc: 'We drive timely, efficient ERP implementation to minimize delays and maximize productivity.',
            },
        ],
    },
    {
        id: 'inventory-control',
        icon: <FaBoxes />,
        title: 'Assistance in Inventory Control',
        description: 'Gain complete visibility and control over your inventory with our comprehensive stock management support.',
        services: [
            {
                icon: <FaCheckCircle />,
                title: 'Accurate Stock Verification',
                desc: 'We provide complete support in stock classification, stock taking, and stock evaluation to ensure precise inventory management and informed decision-making.',
            },
        ],
    },
];

export default function Services() {
    return (
        <>
            <SEOHead
                title="Manufacturing Consulting Services — Process Planning, ERP, Documentation"
                description="Explore Aaroh's comprehensive manufacturing consulting services: process planning, documentation, ERP implementation, and inventory control for MSMEs."
                keywords="process planning, process documentation, ERP implementation, inventory control, manufacturing consulting, MSME services, SOP, PFMEA, PPAP, line balancing"
                canonical="/services"
            />

            {/* Hero */}
            <section className="services-hero bg-gradient">
                <div className="container">
                    <AnimatedSection className="services-hero__content">
                        <span className="section-label">Our Expertise</span>
                        <h1 className="services-hero__title">
                            Comprehensive <span className="text-gradient">Manufacturing</span> Solutions
                        </h1>
                        <p className="services-hero__subtitle">
                            From process planning to inventory control, we offer end-to-end consulting services
                            that empower MSMEs to achieve operational excellence and sustained growth.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Service Groups */}
            {serviceGroups.map((group, gi) => (
                <section
                    key={group.id}
                    id={group.id}
                    className={`section ${gi % 2 === 1 ? 'bg-cream' : ''}`}
                >
                    <div className="container">
                        <AnimatedSection className="service-group__header">
                            <div className="service-group__icon">{group.icon}</div>
                            <h2 className="service-group__title">{group.title}</h2>
                            <p className="service-group__desc">{group.description}</p>
                        </AnimatedSection>

                        <div className={`service-group__grid service-group__grid--${group.services.length}`}>
                            {group.services.map((s, si) => (
                                <AnimatedSection key={s.title} delay={si * 0.1} className="service-detail-card card">
                                    <div className="service-detail-card__icon">{s.icon}</div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="section bg-dark" id="contact">
                <div className="container">
                    <AnimatedSection className="services-cta">
                        <h2>Ready to Optimize Your Manufacturing Operations?</h2>
                        <p>
                            Let's discuss your specific requirements and create a tailored plan for your business growth.
                        </p>
                        <div className="services-cta__actions">
                            <a href="/#contact" className="btn btn-primary btn-lg">
                                Get a Free Consultation <FaArrowRight />
                            </a>
                            <Link to="/mission" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                                Learn About Our Mission
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
