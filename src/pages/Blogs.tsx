import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import { FaPenFancy, FaArrowRight, FaLinkedinIn } from 'react-icons/fa';
import './Blogs.css';

export default function Blogs() {
    return (
        <>
            <SEOHead
                title="Blog — Manufacturing Insights & Industry Best Practices"
                description="Stay updated with the latest insights on manufacturing best practices, MSME growth strategies, process optimization, and industry trends from Aaroh Manufacturing Consultancy."
                keywords="manufacturing blog, MSME insights, process planning articles, ERP implementation tips, inventory management, industry best practices"
                canonical="/blogs"
            />

            {/* Hero */}
            <section className="blogs-hero bg-gradient">
                <div className="container">
                    <AnimatedSection className="blogs-hero__content">
                        <span className="section-label">Insights & Articles</span>
                        <h1 className="blogs-hero__title">
                            Manufacturing <span className="text-gradient">Insights</span>
                        </h1>
                        <p className="blogs-hero__subtitle">
                            Expert perspectives on process optimization, quality standards, and MSME growth strategies
                            to help you stay ahead in the manufacturing world.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="section">
                <div className="container">
                    <AnimatedSection className="blogs-coming-soon">
                        <div className="blogs-coming-soon__icon">
                            <FaPenFancy />
                        </div>
                        <h2>Fresh Content Coming Soon</h2>
                        <p>
                            We're preparing insightful articles on manufacturing best practices,
                            process optimization techniques, and MSME growth strategies. Stay tuned!
                        </p>

                        <div className="blogs-topics">
                            <h3>Topics We'll Cover</h3>
                            <div className="blogs-topics__grid">
                                {[
                                    'Process Planning Best Practices',
                                    'ERP Implementation Guide for MSMEs',
                                    'Quality Documentation Standards',
                                    'Inventory Optimization Strategies',
                                    'Line Balancing Techniques',
                                    'PPAP Documentation Essentials',
                                ].map((topic) => (
                                    <span key={topic} className="blogs-topic-tag">{topic}</span>
                                ))}
                            </div>
                        </div>

                        <div className="blogs-actions">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark btn-lg"
                            >
                                <FaLinkedinIn /> Follow Us on LinkedIn
                            </a>
                            <Link to="/#contact" className="btn btn-secondary btn-lg">
                                Subscribe for Updates <FaArrowRight />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
