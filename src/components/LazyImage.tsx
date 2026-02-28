import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * LazyImage — loads images only when they enter the viewport.
 * Uses IntersectionObserver for native lazy loading with a fade-in effect.
 */
export default function LazyImage({ src, alt, className = '', style }: LazyImageProps) {
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className} style={style}>
            {inView && (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    style={{
                        ...style,
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    }}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
}
