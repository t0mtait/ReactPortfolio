import { useEffect, useState } from 'react';

/**
 * Ambient interactive sparks and floating light motes.
 * Uses CSS keyframes with randomized positions for ultra-lightweight GPU performance.
 */
function BackgroundEffects() {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        // Generate a small, lightweight set of floating dust motes
        const newSparks = Array.from({ length: 14 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 95}%`,
            left: `${Math.random() * 95}%`,
            size: Math.random() * 4 + 2, // 2px to 6px
            delay: Math.random() * 8,
            duration: Math.random() * 12 + 10, // 10s to 22s
            color:
                i % 3 === 0
                    ? 'rgba(99, 102, 241, 0.4)'
                    : i % 3 === 1
                    ? 'rgba(168, 85, 247, 0.35)'
                    : 'rgba(6, 182, 212, 0.3)',
        }));
        setSparks(newSparks);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {sparks.map((spark) => (
                <div
                    key={spark.id}
                    className="absolute rounded-full floating-spark"
                    style={{
                        top: spark.top,
                        left: spark.left,
                        width: `${spark.size}px`,
                        height: `${spark.size}px`,
                        backgroundColor: spark.color,
                        boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`,
                        animation: `floatingSpark ${spark.duration}s ease-in-out ${spark.delay}s infinite alternate`,
                    }}
                />
            ))}
        </div>
    );
}

export default BackgroundEffects;
