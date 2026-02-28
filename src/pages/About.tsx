import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

export default function About() {
    return (
        <>
            <SEOHead
                title="About Us"
                description="Learn about Aaroh Manufacturing Consultancy — a Sanskrit word meaning 'ascend'. We provide user-friendly solutions in the manufacturing sector, specifically to MSMEs."
                keywords="about aaroh, manufacturing consultancy, MSME solutions, aaroh meaning, business consulting, Pune"
                canonical="/about"
            />

            {/* Hero */}
            <section className="about-hero bg-gradient">
                <div className="container">
                    <AnimatedSection className="about-hero__content">
                        <span className="section-label">Who We Are</span>
                        <h1 className="about-hero__title">
                            About <span className="text-gradient">Aaroh</span>
                        </h1>
                        <div className="about-hero__etymology">
                            <p className="about-hero__quote">
                                <em>Aaroh</em> is a Sanskrit word meaning <strong>'ascend'</strong>.
                                As the name suggests, Aaroh Manufacturing Consultancy provides user-friendly
                                solutions in the manufacturing sector, specifically to MSMEs — ultimately
                                symbolizing the ascending sequence of business operations towards their growth.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <AnimatedSection className="about-values-header">
                        <span className="section-label">Our Values</span>
                        <h2 className="section-title">What Drives Us Forward</h2>
                        <p className="section-subtitle">
                            We believe that every manufacturer — no matter the size — deserves access to expert consulting that makes a real difference.
                        </p>
                    </AnimatedSection>

                    <div className="about-values-grid">
                        <AnimatedSection className="about-value-card card" delay={0}>
                            <h3>Practical Solutions</h3>
                            <p>
                                We don't believe in one-size-fits-all. Every recommendation is tailored to your unique manufacturing challenges, scale, and goals.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="about-value-card card" delay={0.1}>
                            <h3>Partnership Approach</h3>
                            <p>
                                We work alongside your team — not above it. Our consultants integrate deeply to understand your operations from within.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="about-value-card card" delay={0.2}>
                            <h3>MSME Commitment</h3>
                            <p>
                                The MSME sector is the backbone of India's manufacturing economy. We're committed to empowering this vital sector with world-class consulting.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-sm bg-dark">
                <div className="container">
                    <AnimatedSection className="about-cta">
                        <h2>Ready to Ascend?</h2>
                        <p>
                            Let's discuss how Aaroh can elevate your manufacturing operations to the next level.
                        </p>
                        <a href="/#contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
