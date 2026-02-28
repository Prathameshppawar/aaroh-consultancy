import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowRight, FaLinkedinIn } from 'react-icons/fa';
import { blogPosts } from '../blogs/blogData';
import heroBg from '../assets/hero_blogs.png';
import './Blogs.css';

export default function Blogs() {
    const hasPosts = blogPosts.length > 0;

    return (
        <>
            <SEOHead
                title="Blog — Manufacturing Insights & Industry Best Practices"
                description="Stay updated with the latest insights on manufacturing best practices, MSME growth strategies, process optimization, and industry trends from Aaroh Manufacturing Consultancy."
                keywords="manufacturing blog, MSME insights, process planning articles, ERP implementation tips, inventory management, industry best practices"
                canonical="/blogs"
            />

            {/* Hero */}
            <section className="blogs-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="blogs-hero__overlay" />
                <div className="container">
                    <AnimatedSection className="blogs-hero__content">
                        <h1 className="blogs-hero__title">
                            Manufacturing Insights
                        </h1>
                        <p className="blogs-hero__subtitle">
                            Expert perspectives on process optimization, quality standards, and MSME growth strategies
                            to help you stay ahead in the manufacturing world.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Blog Posts */}
            {hasPosts ? (
                <section className="section">
                    <div className="container">
                        <div className="blogs-grid">
                            {blogPosts.map((post, i) => (
                                <AnimatedSection key={post.slug} delay={i * 0.1}>
                                    <Link to={`/blogs/${post.slug}`} className="blog-card">
                                        <div className="blog-card__img-wrap">
                                            <img src={post.image} alt={post.title} className="blog-card__img" />
                                        </div>
                                        <div className="blog-card__body">
                                            <div className="blog-card__tags">
                                                {post.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="blog-card__tag">{tag}</span>
                                                ))}
                                            </div>
                                            <h2 className="blog-card__title">{post.title}</h2>
                                            <p className="blog-card__desc">{post.description}</p>
                                            <div className="blog-card__meta">
                                                <span>{post.date}</span>
                                                <span className="blog-card__read-more">
                                                    Read Article <FaArrowRight />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* LinkedIn CTA */}
            <section className="section-sm bg-cream">
                <div className="container">
                    <AnimatedSection className="blogs-linkedin-cta">
                        <h3>More insights on LinkedIn</h3>
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
        </>
    );
}
