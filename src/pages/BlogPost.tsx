import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowLeft } from 'react-icons/fa';
import { blogPosts } from '../blogs/blogData';
import './BlogPost.css';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blogs" replace />;
    }

    // Simple markdown-like renderer for paragraphs, headings, lists, bold, italic, links, hr
    const renderContent = (content: string) => {
        const lines = content.split('\n');
        const elements: React.JSX.Element[] = [];
        let i = 0;
        let key = 0;

        while (i < lines.length) {
            const line = lines[i];

            // Blank line
            if (line.trim() === '') {
                i++;
                continue;
            }

            // Horizontal rule
            if (line.trim() === '---') {
                elements.push(<hr key={key++} className="blog-post__hr" />);
                i++;
                continue;
            }

            // Headings
            if (line.startsWith('### ')) {
                elements.push(<h4 key={key++} className="blog-post__h4">{line.slice(4)}</h4>);
                i++;
                continue;
            }
            if (line.startsWith('## ')) {
                elements.push(<h3 key={key++} className="blog-post__h3">{line.slice(3)}</h3>);
                i++;
                continue;
            }
            if (line.startsWith('# ')) {
                elements.push(<h2 key={key++} className="blog-post__h2">{line.slice(2)}</h2>);
                i++;
                continue;
            }

            // List items
            if (line.startsWith('- ')) {
                const listItems: string[] = [];
                while (i < lines.length && lines[i].startsWith('- ')) {
                    listItems.push(lines[i].slice(2));
                    i++;
                }
                elements.push(
                    <ul key={key++} className="blog-post__list">
                        {listItems.map((item, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                        ))}
                    </ul>
                );
                continue;
            }

            // Numbered list
            if (/^\d+\.\s/.test(line)) {
                const listItems: string[] = [];
                while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
                    listItems.push(lines[i].replace(/^\d+\.\s/, ''));
                    i++;
                }
                elements.push(
                    <ol key={key++} className="blog-post__list blog-post__list--ordered">
                        {listItems.map((item, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                        ))}
                    </ol>
                );
                continue;
            }

            // Paragraph
            elements.push(
                <p key={key++} className="blog-post__p" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
            );
            i++;
        }

        return elements;
    };

    const formatInline = (text: string): string => {
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
    };

    return (
        <>
            <SEOHead
                title={post.title}
                description={post.description}
                keywords={post.tags.join(', ')}
                canonical={`/blogs/${post.slug}`}
                ogType="article"
            />

            <article className="blog-post">
                {/* Hero */}
                <section className="blog-post__hero">
                    <div className="container">
                        <AnimatedSection>
                            <Link to="/blogs" className="blog-post__back">
                                <FaArrowLeft /> All Articles
                            </Link>
                            <div className="blog-post__tags">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="blog-post__tag">{tag}</span>
                                ))}
                            </div>
                            <h1 className="blog-post__title">{post.title}</h1>
                            <div className="blog-post__meta">
                                <span>{post.author}</span>
                                <span>·</span>
                                <span>{post.date}</span>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Featured Image */}
                <div className="container">
                    <AnimatedSection>
                        <div className="blog-post__image-wrap">
                            <img src={post.image} alt={post.title} className="blog-post__image" />
                        </div>
                    </AnimatedSection>
                </div>

                {/* Content */}
                <section className="blog-post__content">
                    <div className="container-narrow">
                        <AnimatedSection>
                            {renderContent(post.content)}
                        </AnimatedSection>
                    </div>
                </section>
            </article>
        </>
    );
}
