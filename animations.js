// animations.js

document.addEventListener("DOMContentLoaded", (event) => {
    
    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // =========================================================
    // 2. HERO SECTION (Loads immediately)
    // =========================================================
    const initHero = () => {
        const tl = gsap.timeline();

        // Animate H1
        tl.from("h1", {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        })
        // Animate Paragraph
        .from("p.text-lg", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8") // Overlap by 0.8s
        // Animate Buttons
        .from(".flex.gap-4 a", {
            y: 30,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.2, // Animate one after another
            ease: "back.out(1.7)"
        }, "-=0.6");
    };

    // =========================================================
    // 3. SCROLL REVEAL (Bi-Directional)
    // =========================================================
    const initScrollReveal = () => {
        // We select standard elements in every section except the first one
        const targets = document.querySelectorAll("section:not(:first-child) h2, section:not(:first-child) p, section:not(:first-child) .grid > *, section:not(:first-child) span.block, section:not(:first-child) .group");

        targets.forEach(el => {
            gsap.fromTo(el, 
                { 
                    y: 60, 
                    autoAlpha: 0 // autoAlpha handles visibility:hidden automatically
                },
                {
                    y: 0, 
                    autoAlpha: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%", // Start animation when top of element hits 88% of viewport
                        end: "bottom 15%",
                        // Play when scrolling down, Reverse when scrolling up
                        toggleActions: "play none none reverse" 
                    }
                }
            );
        });
    };

    // =========================================================
    // 4. PARALLAX IMAGES (Physics Effect)
    // =========================================================
    const initParallax = () => {
        // Select images inside sections (excluding the hero background)
        const images = document.querySelectorAll("section:not(:first-child) img");

        images.forEach(img => {
            gsap.to(img, {
                yPercent: -15, // Moves image UP 15% as you scroll DOWN
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2 // 1.2 second lag for smooth "weight"
                }
            });
        });
    };

    // =========================================================
    // 5. 3D HOVER TILT (Interactive)
    // =========================================================
    const initTilt = () => {
        const cards = document.querySelectorAll(".group.relative, .rounded-2xl");

        cards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Calculate tilt angle
                const rotateX = ((y - centerY) / centerY) * -5; // -5 deg max
                const rotateY = ((x - centerX) / centerX) * 5;  // 5 deg max

                gsap.to(card, {
                    duration: 0.5,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale: 1.02,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    duration: 0.8,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        });
    };

    // Run Animations
    initHero();
    initScrollReveal();
    initParallax();
    initTilt();
});