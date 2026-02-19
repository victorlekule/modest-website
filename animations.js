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

//about us page//
// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LOADING ANIMATION
    // Fades out the white loader overlay
    const loaderTl = gsap.timeline();
    loaderTl.to("#loader", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => {
            // Remove from DOM to allow clicking elements underneath
            document.querySelector("#loader").style.display = "none";
        }
    });

    // 2. PARALLAX ANIMATION (SCROLLING UP/DOWN)
    // Moves the hero image slightly slower than scroll speed to create depth
    if (document.querySelector('.parallax-img')) {
        gsap.to(".parallax-img", {
            yPercent: 20, // Moves down 20% while scrolling
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-wrapper",
                start: "top bottom", // Start when top of section hits bottom of viewport
                end: "bottom top",
                scrub: true // Smoothly scrubs with scrollbar
            }
        });
    }

    // 3. FADE UP ANIMATION (Text elements)
    // Uses 'batch' to efficiently animate groups of items
    ScrollTrigger.batch(".fade-up", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 1, 
            ease: "power2.out"
        }),
        start: "top 85%" // Triggers when element is 85% down the screen
    });
    
    // Set initial state for fade-up items (Hidden & moved down)
    gsap.set(".fade-up", { opacity: 0, y: 50 });


    // 4. SCALE ANIMATION (Cards & Images)
    // Zooms in slightly
    ScrollTrigger.batch(".scale-in", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            scale: 1, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 0.8, 
            ease: "back.out(1.2)" // Slight bounce effect
        }),
        start: "top 85%"
    });

    // Set initial state for scale-in items (Hidden & smaller)
    gsap.set(".scale-in", { opacity: 0, scale: 0.9 });
});

//why choose us //
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HERO PARALLAX (Subtle movement)
    gsap.to(".parallax-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-wrapper",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 2. FADE UP ANIMATION (General Text)
    // Moves up from 50px and fades in
    ScrollTrigger.batch(".fade-up", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 1, 
            ease: "power2.out"
        }),
        start: "top 85%"
    });
    
    // Set initial state for fade-up
    gsap.set(".fade-up", { opacity: 0, y: 50 });

    // 3. SCALE IN ANIMATION (Cards & CTA)
    // Scales up from 90% size with a bounce
    ScrollTrigger.batch(".scale-in", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            scale: 1, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 0.8, 
            ease: "back.out(1.2)"
        }),
        start: "top 85%"
    });

    // Set initial state for scale-in
    gsap.set(".scale-in", { opacity: 0, scale: 0.9 });
});

// zanzibar//
 