import { useState, useRef } from 'react';

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText('mail@tomjt.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    const contactMethods = [
        {
            title: "Email",
            description: "Send me a message",
            value: "mail@tomjt.com",
            link: "mailto:mail@tomjt.com",
            isEmail: true,
            icon: (
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-email-fly" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 packet-node-1" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-emerald-400 packet-node-2" />
                </div>
            ),
            badgeAnimation: (
                <div className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200/70 dark:border-indigo-500/20 text-xs font-mono">
                    <span className="animate-email-fly inline-block text-sm" role="img" aria-label="flying envelope">✉️</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 packet-node-1" />
                    <span className="w-3 sm:w-5 h-0.5 border-t border-dashed border-indigo-400 dark:border-indigo-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 packet-node-2" />
                    <span className="w-3 sm:w-5 h-0.5 border-t border-dashed border-indigo-400 dark:border-indigo-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 packet-node-3" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 ml-1">Network Sent</span>
                </div>
            )
        },
        {
            title: "LinkedIn",
            description: "Let's connect professionally",
            value: "linkedin.com/in/tom-tait",
            link: "https://linkedin.com/in/tom-tait",
            icon: (
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="absolute -top-2 -right-2 text-base animate-wave" role="img" aria-label="Waving hand">👋</span>
                </div>
            ),
            badgeAnimation: (
                <div className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200/70 dark:border-indigo-500/20 text-xs font-mono">
                    <span className="animate-wave text-base inline-block" role="img" aria-label="waving hand">👋</span>
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">Say Hello & Connect</span>
                    <span className="text-sm" role="img" aria-label="handshake">🤝</span>
                </div>
            )
        },
        {
            title: "GitHub",
            description: "Check out my code",
            value: "github.com/t0mtait",
            link: "https://github.com/t0mtait",
            icon: (
                <div className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-mono font-bold text-emerald-500 dark:text-emerald-400 bg-zinc-100 dark:bg-zinc-950 px-1 rounded border border-zinc-300 dark:border-zinc-700 animate-code-cursor">
                        &lt;/&gt;
                    </span>
                </div>
            ),
            badgeAnimation: (
                <div className="w-full py-1.5 px-2.5 rounded-lg bg-zinc-950 dark:bg-black border border-zinc-800 text-left font-mono text-[11px] text-emerald-400 flex items-center justify-between shadow-inner">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="text-indigo-400 font-bold">$</span>
                        <span className="text-zinc-200">git commit -m</span>
                        <span className="text-emerald-400 font-bold animate-code-cursor">▋</span>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-mono">code</span>
                </div>
            )
        }
    ];

    const ContactCard = ({ method }) => {
        const cardRef = useRef(null);
        const isExternal = method.link.startsWith('http') || method.link.startsWith('mailto:');

        const handleMouseMove = (e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        return (
            <a
                href={method.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group block h-full focus:outline-none"
            >
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card relative h-full bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/90 rounded-2xl p-6 hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.35)] hover:-translate-y-1"
                >
                    <div className="flex flex-col items-center text-center space-y-3.5 relative z-10">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            {method.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                            {method.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {method.description}
                        </p>

                        {/* Value */}
                        <p className="text-sm font-mono font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                            {method.value}
                        </p>

                        {/* Custom Tile Animation */}
                        {method.badgeAnimation}

                        {/* Interactive Copy Button for Email */}
                        {method.isEmail && (
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="mt-1 px-3 py-1 text-xs font-mono font-medium rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200 flex items-center gap-1.5"
                                title="Copy email address"
                            >
                                {copied ? (
                                    <>
                                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </a>
        );
    };

    return (
        <section id="contact" className="scroll-mt-24 bg-transparent py-14 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-3">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I'm always open to new opportunities and conversations. 
                        Feel free to reach out through any of the channels below!
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {contactMethods.map((method, index) => (
                        <ContactCard key={index} method={method} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
