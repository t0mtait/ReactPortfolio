import { useEffect, useRef, useState } from 'react';

/**
 * Interactive ambient spotlight and fluid cursor trail.
 * Automatically disables on touch/mobile devices for optimal performance.
 */
function CursorFollower() {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);
    const spotlightRef = useRef(null);

    const [isPointerDevice, setIsPointerDevice] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const isVisibleRef = useRef(false);

    useEffect(() => {
        // Safe check for environments without window.matchMedia (e.g. jsdom / SSR)
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return;
        }

        // Detect fine pointer (mouse / trackpad) vs coarse (phone / tablet)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        setIsPointerDevice(mediaQuery.matches);

        const handleMediaChange = (e) => setIsPointerDevice(e.matches);
        mediaQuery.addEventListener('change', handleMediaChange);

        if (!mediaQuery.matches) {
            return () => mediaQuery.removeEventListener('change', handleMediaChange);
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let spotlightX = mouseX;
        let spotlightY = mouseY;
        let hasInitialized = false;
        let animationFrameId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!hasInitialized) {
                hasInitialized = true;
                ringX = mouseX;
                ringY = mouseY;
                spotlightX = mouseX;
                spotlightY = mouseY;
            }

            if (!isVisibleRef.current) {
                isVisibleRef.current = true;
                setIsVisible(true);
            }

            // Update inner dot immediately for zero latency
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);
        const onMouseLeave = () => {
            isVisibleRef.current = false;
            setIsVisible(false);
        };
        const onMouseEnter = () => {
            isVisibleRef.current = true;
            setIsVisible(true);
        };

        // Smooth physics loop for ambient spotlight and floating outer ring
        const render = () => {
            // Smooth lerp for outer ring
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;

            // Slightly slower, deeper float for ambient background spotlight
            spotlightX += (mouseX - spotlightX) * 0.09;
            spotlightY += (mouseY - spotlightY) * 0.09;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            if (spotlightRef.current) {
                spotlightRef.current.style.transform = `translate3d(${spotlightX}px, ${spotlightY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        // Detect hover over interactive elements
        const handleElementOver = (e) => {
            const target = e.target;
            if (
                target &&
                (target.closest('a') ||
                    target.closest('button') ||
                    target.closest('input') ||
                    target.closest('[role="button"]') ||
                    target.closest('.interactive-target'))
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseover', handleElementOver, { passive: true });

        animationFrameId = requestAnimationFrame(render);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseover', handleElementOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isPointerDevice) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
            {/* Ambient Dynamic Cursor Spotlight */}
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-500 ease-out"
                style={{
                    opacity: isVisible ? 1 : 0,
                    background:
                        'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(168, 85, 247, 0.09) 35%, rgba(6, 182, 212, 0.04) 60%, transparent 75%)',
                    willChange: 'transform',
                }}
            />

            {/* Outer Glowing Trailing Halo Ring */}
            <div
                ref={cursorRingRef}
                className="pointer-events-none absolute -top-5 -left-5 w-10 h-10 rounded-full border flex items-center justify-center"
                style={{
                    opacity: isVisible ? 1 : 0,
                    borderColor: isHovered
                        ? 'rgba(129, 140, 248, 0.9)'
                        : 'rgba(99, 102, 241, 0.45)',
                    backgroundColor: isHovered
                        ? 'rgba(99, 102, 241, 0.12)'
                        : 'rgba(99, 102, 241, 0.03)',
                    scale: isClicked ? '0.75' : isHovered ? '1.7' : '1',
                    boxShadow: isHovered
                        ? '0 0 20px 4px rgba(99, 102, 241, 0.35)'
                        : '0 0 10px 1px rgba(99, 102, 241, 0.15)',
                    transition:
                        'border-color 150ms ease-out, background-color 150ms ease-out, box-shadow 150ms ease-out, scale 150ms ease-out, opacity 150ms ease-out',
                    willChange: 'transform, scale',
                }}
            />

            {/* Inner Precision Dot */}
            <div
                ref={cursorDotRef}
                className="pointer-events-none absolute -top-1 -left-1 w-2 h-2 rounded-full bg-indigo-500 dark:bg-white shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                style={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicked ? '1.5' : isHovered ? '0.6' : '1',
                    transition: 'scale 150ms ease-out, opacity 150ms ease-out',
                    willChange: 'transform, scale',
                }}
            />
        </div>
    );
}

export default CursorFollower;
