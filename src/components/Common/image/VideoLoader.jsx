import { useState, useEffect } from "react";
export default function VideoLoader({ src, ref }) {
    const [loading, setLoading] = useState(true);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (inView) {
            const video = document.createElement('video');
            video.onloadeddata = () => {
                setLoading(false);
            };
            video.src = src;
        }
    }, [src, inView]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return loading;
}
