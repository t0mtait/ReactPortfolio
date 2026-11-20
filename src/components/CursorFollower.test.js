import { render, fireEvent, act } from '@testing-library/react';
import CursorFollower from './CursorFollower';

describe('CursorFollower', () => {
    let matchMediaListeners = [];

    beforeEach(() => {
        matchMediaListeners = [];
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === '(pointer: fine)',
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn((event, cb) => {
                matchMediaListeners.push(cb);
            }),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('renders null when not a fine pointer device (e.g. mobile/touch)', () => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        }));

        const { container } = render(<CursorFollower />);
        expect(container.firstChild).toBeNull();
    });

    test('renders cursor elements for fine pointer devices', () => {
        const { container } = render(<CursorFollower />);
        expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });

    test('handles mousemove without resetting transforms to offset positions and ignores click animations', () => {
        const { container } = render(
            <div>
                <CursorFollower />
                <button data-testid="interactive-btn">Click me</button>
            </div>
        );

        const outerContainer = container.querySelector('[aria-hidden="true"]');
        expect(outerContainer).toBeInTheDocument();

        // Initially hidden before mouse moves
        const children = outerContainer.children;
        const spotlight = children[0];
        const ring = children[1];
        const dot = children[2];

        expect(spotlight.style.opacity).toBe('0');
        expect(ring.style.opacity).toBe('0');
        expect(dot.style.opacity).toBe('0');

        // Move mouse
        act(() => {
            fireEvent.mouseMove(window, { clientX: 250, clientY: 300 });
        });

        // Now visible
        expect(dot.style.opacity).toBe('1');
        expect(dot.style.transform).toBe('translate3d(250px, 300px, 0)');

        // On mousedown (click down) - should not glitch or reset transform
        act(() => {
            fireEvent.mouseDown(window);
        });

        expect(dot.style.transform).toBe('translate3d(250px, 300px, 0)');
        expect(ring.style.transform).not.toBe('translate3d(-100px, -100px, 0)');

        // On mouseup (release click)
        act(() => {
            fireEvent.mouseUp(window);
        });

        expect(dot.style.transform).toBe('translate3d(250px, 300px, 0)');
    });

    test('highlights when hovering over interactive elements without glitching transforms', () => {
        const { container, getByTestId } = render(
            <div>
                <CursorFollower />
                <button data-testid="btn">Test Button</button>
            </div>
        );

        const outerContainer = container.querySelector('[aria-hidden="true"]');
        const ring = outerContainer.children[1];
        const button = getByTestId('btn');

        act(() => {
            fireEvent.mouseOver(button);
        });

        expect(ring.style.borderColor).toBe('rgba(129, 140, 248, 0.95)');

        act(() => {
            fireEvent.mouseOver(document.body);
        });

        expect(ring.style.borderColor).toBe('rgba(99, 102, 241, 0.45)');
    });

    test('cleans up event listeners and animation frame on unmount', () => {
        const cancelSpy = jest.spyOn(window, 'cancelAnimationFrame');
        const { unmount } = render(<CursorFollower />);
        unmount();
        expect(cancelSpy).toHaveBeenCalled();
    });
});
