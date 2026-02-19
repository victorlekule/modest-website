// 1. BRAND CONFIGURATION
const branding = {
    colors: {
        navy: "#003C63",    
        orange: "#F27D57",  
        white: "#FFFFFF"
    },
    fonts: {
        heading: "'Playfair Display', serif", 
        body: "'Inter', sans-serif"           
    }
};

// 2. INJECT CSS
const style = document.createElement('style');
style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
    
    :root {
        --morix-navy: ${branding.colors.navy};
        --morix-orange: ${branding.colors.orange};
    }

    header { font-family: ${branding.fonts.heading}; }

    /* Desktop Navigation Links */
    .nav-link-top {
        color: var(--morix-navy);
        font-family: ${branding.fonts.body};
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.3s;
        position: relative;
        text-weight:400;
    }
    .nav-link-top:hover { color: var(--morix-orange); }

    /* SECOND NAV BAR: Solid Blue Background */
    .second-nav-bar { background-color: var(--morix-navy); }

    .nav-link-main {
        color: white;
        font-size: 1.05rem;
        font-weight: 600;
        transition: 0.3s;
        position: relative;
    }
    .nav-link-main:hover { color: var(--morix-orange); }

    /* BOOKING BUTTON STYLE (Desktop) */
    .btn-booking {
        background-color: var(--morix-orange);
        color: white ;
        padding: 8px 24px;
        border-radius: 30px;
        font-weight: bold;
        font-style: italic;
        transition: transform 0.3s;
    }
    .btn-booking:hover { 
        transform: scale(1.05);
        background-color:white;
        color: var(--morix-orange); }

    /* MOBILE MENU STYLES */
    #mobile-menu {
        position: absolute;
        top: 100%;
        left: 1rem;
        width: auto;
        min-width: 260px; /* Slightly wider to fit buttons */
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px rgba(0,0,0,0.2);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 100;
    }

    .mobile-group-1 { padding: 8px 0; }
    .mobile-group-1 a, .mobile-group-1 button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 12px 24px;
        color: var(--morix-navy);
        font-family: ${branding.fonts.body};
        font-weight: 500;
        border-bottom: 1px solid #f3f4f6;
        background: none;
    }
    
    .mobile-group-2 { background-color: var(--morix-navy); padding: 8px 0; }
    .mobile-group-2 a {
        display: block;
        padding: 12px 24px;
        color: white;
        font-weight: 600;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    /* Mobile Booking Button */
    .mobile-btn-book {
        background-color: var(--morix-orange) !important;
        color: white !important;
        text-align: center;
        margin: 10px 20px; /* Add margin to make it look like a button */
        border-radius: 4px;
        width: auto !important;
        border: none !important;
    }

    /* AUTH MODAL */
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.7);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .modal-box {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        width: 90%;
        max-width: 450px;
        text-align: center;
    }
`;
document.head.appendChild(style);

// 3. THE HEADER TEMPLATE
const headerTemplate = `
<nav class="fixed top-0 w-full bg-white shadow-sm z-50">
    <div class="container mx-auto px-4 relative">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
            <img src="/image/MORIX WEB SECOND-01.png.png" 
            alt="Morix Beyond" 
            class="h-10 md:h-14 logo-img" 
            style="display: block !important; opacity: 1 !important; visibility: visible !important;"
            onerror="this.src='image/MORIX WEB-01.png';">
            </div>

            <div class="hidden lg:flex space-x-6 items-center">
                <a href="index.html" class="nav-link-top ">Home</a>
                <a href="about us.html" class="nav-link-top">About Us</a>
                <a href="why us.html" class="nav-link-top">Why Us</a>
                <a href="contact.html" class="nav-link-top">Contact</a>
                <a href="FQS.html" class="nav-link-top">FAQ</a>
                <button id="login-btn" class="nav-link-top border border-morix-navy px-4 py-1 rounded hover:bg-morix-navy hover:text-white transition">Log in</button>
            </div>

            <button id="menu-btn" class="lg:hidden text-morix-navy focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>

        <div id="mobile-menu">
            <div class="mobile-group-1">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact</a>
                <a href="faq.html">FAQ</a>
                <button id="mobile-login-btn" style="color: var(--morix-navy); font-weight: 700;">Log in / Sign up</button>
            </div>
            <div class="mobile-group-2">
                <a href="zanzibar.html">Zanzibar Experiences</a>
                <a href="tanzania.html">Tanzania Safaris</a>
                <a href="media.html">Media Services</a>
                <a href="gallery.html">Gallery</a>
                <a href="book.html" class="mobile-btn-book">Book Now</a>
            </div>
        </div>
    </div>

    <div class="hidden lg:block second-nav-bar">
        <div class="container mx-auto flex justify-center items-center py-3 space-x-12">
            <a href="zanzibar.html" class="nav-link-main">Zanzibar Experiences</a>
            <a href="tanzania.html" class="nav-link-main">Tanzania Safaris</a>
            <a href="media.html" class="nav-link-main">Media Services</a>
            <a href="gallery.html" class="nav-link-main">Gallery</a>
            <a href="book.html" class="btn-booking">Book Now</a>
        </div>
    </div>
</nav>

<div id="auth-modal" class="modal-overlay">
    <div class="modal-box">
        <h2 class="text-3xl font-bold mb-6 text-morix-navy" style="font-family: 'Playfair Display'">Join Morix Beyond</h2>
        <div class="space-y-4 font-sans">
            <input type="email" placeholder="Email Address" class="w-full border p-3 rounded text-left">
            <input type="password" placeholder="Password" class="w-full border p-3 rounded text-left">
            <button class="w-full bg-morix-navy text-white py-3 rounded-lg font-semibold hover:opacity-90">Log In</button>
            <div class="text-gray-400">or</div>
            <button class="w-full border-2 border-morix-navy text-morix-navy py-3 rounded-lg font-semibold hover:bg-gray-50">Sign Up</button>
            <button id="close-auth" class="mt-4 text-sm text-gray-500 underline">Close</button>
        </div>
    </div>
</div>
`;

document.getElementById('main-header').innerHTML = headerTemplate;

// 4. INTERACTION LOGIC
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const authModal = document.getElementById('auth-modal');
const loginTriggers = [document.getElementById('login-btn'), document.getElementById('mobile-login-btn')];
const closeAuth = document.getElementById('close-auth');

// Toggle Mobile Menu
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Open Modal (Works for both Desktop and Mobile buttons)
loginTriggers.forEach(trigger => {
    if(trigger) {
        trigger.addEventListener('click', () => {
            authModal.style.display = 'flex';
            mobileMenu.style.display = 'none'; // Close mobile menu when opening modal
        });
    }
});

// Close Modal
closeAuth.addEventListener('click', () => authModal.style.display = 'none');

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.style.display = 'none';
    if (!mobileMenu.contains(e.target) && e.target !== menuBtn) mobileMenu.style.display = 'none';
});


//about us page//
console.log("Morix Beyond Zanzibar - About Us Loaded");

// Optional: Add hover 3D effect only on desktop
// This adds a premium feel without affecting mobile performance
if (window.matchMedia("(min-width: 1024px)").matches) {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle movement
            const xMove = (x - rect.width / 2) / 20;
            const yMove = (y - rect.height / 2) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${yMove * -1}deg) rotateY(${xMove}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// why choose us//
console.log("Morix Beyond Zanzibar - Why Choose Us Loaded");

// Optional: Smooth scroll adjustment for anchor links if you have a fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            // Offset for fixed header (approx 80px)
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

//contact us//
console.log("Morix Beyond Zanzibar - Contact Page Loaded");

// Smooth scroll handler for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

//zanzibar//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTERING LOGIC ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.exp-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active style from all
            filterBtns.forEach(b => {
                b.classList.remove('bg-[#003C63]', 'text-white', 'shadow-lg');
                b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            });

            // Add active style to clicked
            btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            btn.classList.add('bg-[#003C63]', 'text-white', 'shadow-lg');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    gsap.to(card, { display: "block", opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => card.style.display = "none" });
                }
            });
        });
    });

    // --- 2. MODAL LOGIC ---
    const modal = document.getElementById('experience-modal');
    const modalCard = document.getElementById('modal-card');
    const closeBtn = document.getElementById('close-modal');
    const closeBtnBottom = document.getElementById('close-modal-bottom');
    const backdrop = document.getElementById('modal-backdrop');
    
    // Elements to update inside modal
    const mTitle = document.getElementById('modal-title');
    const mTitleMobile = document.getElementById('modal-title-mobile');
    const mImg = document.getElementById('modal-img');
    const mDesc = document.getElementById('modal-desc');
    const mTime = document.getElementById('modal-time');
    const mPrice = document.getElementById('modal-price');
    const mWhatsapp = document.getElementById('modal-whatsapp');

    // Open Modal
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Get Data
            const title = btn.getAttribute('data-title');
            const img = btn.getAttribute('data-image');
            const desc = btn.getAttribute('data-desc');
            const time = btn.getAttribute('data-time');
            const price = btn.getAttribute('data-price');
            const waText = btn.getAttribute('data-whatsapp');

            // Populate Modal
            mTitle.innerText = title;
            if(mTitleMobile) mTitleMobile.innerText = title;
            mImg.src = img;
            mDesc.innerText = desc;
            mTime.innerText = time;
            mPrice.innerText = price; // Set Price at bottom
            
            const phoneNumber = "255746319059"; 
            mWhatsapp.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;

            // Show
            modal.classList.remove('hidden');
            gsap.to(modalCard, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" });
        });
    });

    // Close Modal Function
    const closeModal = () => {
        gsap.to(modalCard, { 
            scale: 0.9, 
            opacity: 0, 
            duration: 0.3, 
            ease: "power2.in", 
            onComplete: () => modal.classList.add('hidden')
        });
    };

    // Attach Close Events
    closeBtn.addEventListener('click', closeModal);
    closeBtnBottom.addEventListener('click', closeModal); // Bottom Button
    backdrop.addEventListener('click', closeModal);
    
    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

});

//tanznaia//
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTERING LOGIC ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.package-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active styles from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');
                b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
            });

            // Add active styles to clicked button
            btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
            btn.classList.add('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Filtering Logic:
                // If filter is 'all', show everything.
                // If filter is 'safari', show cards with data-category="safari".
                // If filter is 'trekking', show cards with data-category="trekking".
                if (filter === 'all' || filter === category) {
                    gsap.to(card, { 
                        display: "block", 
                        opacity: 1, 
                        scale: 1, 
                        duration: 0.4, 
                        ease: "power2.out" 
                    });
                } else {
                    gsap.to(card, { 
                        opacity: 0, 
                        scale: 0.8, 
                        duration: 0.3, 
                        onComplete: () => card.style.display = "none" 
                    });
                }
            });
        });
    });

    // --- 2. MODAL LOGIC ---
    const modal = document.getElementById('itinerary-modal');
    const mContent = document.getElementById('modal-content');
    const mTitle = document.getElementById('modal-title');
    const mType = document.getElementById('modal-type');
    const mItinerary = document.getElementById('modal-itinerary');
    const mIncludes = document.getElementById('modal-includes');
    const mPrice = document.getElementById('modal-price');
    const mWhatsapp = document.getElementById('modal-whatsapp');

    // Open Modal
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const type = btn.getAttribute('data-type');
            const itinerary = btn.getAttribute('data-itinerary');
            const includes = btn.getAttribute('data-inclusions');
            const price = btn.getAttribute('data-price');
            
            mTitle.innerText = title;
            mType.innerText = type;
            mItinerary.innerHTML = itinerary; // Renders HTML line breaks
            mIncludes.innerText = includes;
            mPrice.innerText = price;
            
            const phone = "255746319059"; 
            mWhatsapp.href = `https://wa.me/${phone}?text=I'm interested in the ${encodeURIComponent(title)} - Price: ${price}`;

            modal.classList.remove('hidden');
            gsap.to(mContent, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" });
        });
    });

    // Close Modal Functions
    const closeModal = () => {
        gsap.to(mContent, { 
            scale: 0.9, 
            opacity: 0, 
            duration: 0.3, 
            ease: "power2.in", 
            onComplete: () => modal.classList.add('hidden') 
        });
    };

    document.getElementById('close-modal-bg').addEventListener('click', closeModal);
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('close-modal-x').addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
});


//media page//
/* =========================================
   PART 5: MEDIA PAGE INTERACTIONS
   ========================================= */

// --- 1. VIDEO PLAYLIST LOGIC ---
const videoPlaylist = [
    "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4", // Beach/Nature
    "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",       // Urban/Fashion
    "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" // Drone/City
];

function initVideoPlaylist() {
    const video = document.getElementById('main-reel');
    const wrapper = document.getElementById('video-wrapper');
    const icon = document.getElementById('play-icon');
    const badge = document.getElementById('video-badge');
    
    let currentVideoIndex = 0;
    let isSoundOn = false;

    if (!video) return;

    // Set initial source
    video.src = videoPlaylist[0];

    // Click to Toggle Sound & Playlist Mode
    wrapper.addEventListener('click', () => {
        isSoundOn = !isSoundOn;
        video.muted = !isSoundOn;
        
        if (isSoundOn) {
            // Unmuted State
            icon.className = "fa-solid fa-volume-high text-white text-xl pl-1";
            badge.textContent = "Now Playing";
            badge.className = "absolute top-4 left-4 bg-[#25D366] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider animate-pulse";
            document.getElementById('video-overlay').style.opacity = '0'; // Hide overlay when playing with sound
            video.play();
        } else {
            // Muted State
            icon.className = "fa-solid fa-volume-xmark text-white text-xl pl-1";
            badge.textContent = "Click to Unmute";
            badge.className = "absolute top-4 left-4 bg-[#F28E64] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider";
            document.getElementById('video-overlay').style.opacity = '1';
        }
    });

    // When video ends, play next
    video.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        video.src = videoPlaylist[currentVideoIndex];
        video.play();
    });
}


// --- 2. BEFORE/AFTER SLIDER LOGIC (WITH AUTO ROTATION) ---
const comparisonImages = [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800&auto=format&fit=crop", // Portrait
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop", // Landscape
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"  // Camera
];

function initComparisonSlider() {
    const sliderInput = document.getElementById('slider-input');
    const beforeWrapper = document.getElementById('before-image-wrapper');
    const imgBefore = document.getElementById('img-before');
    const imgAfter = document.getElementById('img-after');
    const sliderHandle = document.getElementById('slider-handle');

    if (!sliderInput) return;

    // A. Slider Drag Logic
    sliderInput.addEventListener('input', (e) => {
        const val = e.target.value;
        beforeWrapper.style.width = `${val}%`;
        sliderHandle.style.left = `${val}%`;
        
        const containerWidth = sliderInput.offsetWidth;
        if(imgBefore) imgBefore.style.width = `${containerWidth}px`;
    });

    // Resize Fix
    window.addEventListener('resize', () => {
         const newWidth = sliderInput.offsetWidth;
         if(imgBefore) imgBefore.style.width = `${newWidth}px`;
    });
    // Initial Fix
    setTimeout(() => {
        if(imgBefore) imgBefore.style.width = `${sliderInput.offsetWidth}px`;
    }, 100);


    // B. Auto-Rotate Images Logic
    let imgIndex = 0;
    
    // Set Initial
    imgAfter.src = comparisonImages[0];
    imgBefore.src = comparisonImages[0];

    setInterval(() => {
        imgIndex = (imgIndex + 1) % comparisonImages.length;
        
        // 1. Fade Out
        imgAfter.style.opacity = '0.5';
        imgBefore.style.opacity = '0.5';

        setTimeout(() => {
            // 2. Change Source
            imgAfter.src = comparisonImages[imgIndex];
            imgBefore.src = comparisonImages[imgIndex];
            
            // 3. Fade In
            imgAfter.style.opacity = '1';
            imgBefore.style.opacity = '1';
        }, 500);

    }, 5000); // Change every 5 seconds
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    initVideoPlaylist();
    initComparisonSlider();
});


//GALLERY PAGE//
/* =========================================
   GALLERY PAGE LOGIC
   ========================================= */

// --- 1. PHOTO DATA (Images Only) ---
const photoData = [
    // Safari
    { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", cat: "safari", title: "Lion King" },
    { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800", cat: "safari", title: "Ngorongoro Crater" },
    { src: "https://images.unsplash.com/photo-1534438062562-5813589c37ce?q=80&w=800", cat: "safari", title: "The Great Migration" },
    { src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=800", cat: "safari", title: "Elephants at Sunset" },
    
    // Beach
    { src: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c78?q=80&w=800", cat: "beach", title: "Nungwi Turquoise" },
    { src: "https://images.unsplash.com/photo-1586861635167-e5223aeb4227?q=80&w=800", cat: "beach", title: "Sandbank Relax" },
    { src: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=800", cat: "beach", title: "Traditional Dhow" },

    // Culture
    { src: "https://images.unsplash.com/photo-1534764878233-1466795f543e?q=80&w=800", cat: "culture", title: "Stone Town Alleys" },
    { src: "https://images.unsplash.com/photo-1623164282064-071c3682979e?q=80&w=800", cat: "culture", title: "Spice Farm Colors" }
];

// --- 2. VIDEO DATA (Videos Only) ---
const videoData = [
    { src: "https://assets.mixkit.co/videos/preview/mixkit-lion-walking-in-the-savannah-4061-large.mp4", title: "Safari Adventure" },
    { src: "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4", title: "Nungwi Vibes" },
    { src: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4", title: "Nightlife & Music" },
    { src: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-by-the-beach-at-sunset-4020-large.mp4", title: "Romantic Getaway" },
    { src: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4", title: "Aerial Drone View" },
    { src: "https://assets.mixkit.co/videos/preview/mixkit-pool-at-a-luxury-hotel-resort-4171-large.mp4", title: "Luxury Resort Tour" }
];

// STATE TRACKING
let activeLightboxList = []; 
let activeIndex = 0; 

// --- 3. RENDER PHOTOS (Masonry) ---
function renderPhotos(filter = 'all') {
    const container = document.getElementById('photo-masonry');
    if (!container) return;

    let filteredData = photoData;
    if (filter !== 'all') {
        filteredData = photoData.filter(item => item.cat === filter);
    }

    container.innerHTML = filteredData.map((item, index) => `
        <div class="gallery-item break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-md fade-up" onclick="openLightbox('photo', ${index}, '${filter}')">
            <img src="${item.src}" alt="${item.title}" class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-[#003C63]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span class="text-[#F27D57] text-xs font-bold uppercase tracking-widest">${item.cat}</span>
                <h3 class="text-white text-lg font-bold">${item.title}</h3>
            </div>
        </div>
    `).join('');
    
    // Trigger GSAP entrance animation for new items
    if(typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
        gsap.fromTo(".gallery-item", {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out"});
    }
}

// --- 4. RENDER VIDEOS (Grid) ---
function renderVideos() {
    const container = document.getElementById('video-grid');
    if (!container) return;

    container.innerHTML = videoData.map((item, index) => `
        <div class="relative rounded-3xl overflow-hidden group cursor-pointer fade-up bg-black h-64" onclick="openLightbox('video', ${index})">
            <video src="${item.src}" class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
            
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-[#F27D57]/90 rounded-full flex items-center justify-center text-white text-2xl pl-1 group-hover:scale-110 transition-transform shadow-lg">
                    <i class="fi fi-sr-play"></i>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 class="text-white text-lg font-bold">${item.title}</h3>
            </div>
        </div>
    `).join('');
}

// --- 5. LIGHTBOX LOGIC ---
function openLightbox(type, index, filter = 'all') {
    const modal = document.getElementById('lightbox-modal');
    const content = document.getElementById('lightbox-content');
    
    // 1. Determine which list we are navigating
    if (type === 'photo') {
        if (filter === 'all') {
            activeLightboxList = photoData.map(item => ({...item, type: 'photo'}));
        } else {
            activeLightboxList = photoData.filter(item => item.cat === filter).map(item => ({...item, type: 'photo'}));
        }
    } else {
        activeLightboxList = videoData.map(item => ({...item, type: 'video'}));
    }

    activeIndex = index;
    updateLightboxView();

    // Show Modal with Animation
    modal.classList.remove('hidden');
    setTimeout(() => { 
        modal.style.opacity = '1'; 
        content.style.transform = 'scale(1)';
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function updateLightboxView() {
    const item = activeLightboxList[activeIndex];
    const imgEl = document.getElementById('lightbox-img');
    const videoEl = document.getElementById('lightbox-video');
    const captionEl = document.getElementById('lightbox-caption');

    captionEl.textContent = item.title;

    if (item.type === 'video') {
        imgEl.classList.add('hidden');
        videoEl.classList.remove('hidden');
        videoEl.src = item.src;
        videoEl.play();
    } else {
        videoEl.classList.add('hidden');
        videoEl.pause();
        imgEl.classList.remove('hidden');
        // Load higher resolution version if using Unsplash
        imgEl.src = item.src.replace('&w=800', '&w=1600'); 
    }
}

function navigateLightbox(direction) {
    activeIndex += direction;
    // Loop navigation
    if (activeIndex >= activeLightboxList.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = activeLightboxList.length - 1;
    
    updateLightboxView();
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const content = document.getElementById('lightbox-content');
    
    document.getElementById('lightbox-video').pause();
    
    modal.style.opacity = '0';
    content.style.transform = 'scale(0.95)';
    
    setTimeout(() => { 
        modal.classList.add('hidden'); 
    }, 300);
    
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function filterPhotos(category) {
    // Update active button state
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');
        btn.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
        
        if(btn.dataset.filter === category) {
            btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
            btn.classList.add('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');
        }
    });
    // Re-render
    renderPhotos(category);
}

// --- 6. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderPhotos('all');
    renderVideos();
});

// Keyboard Navigation for Lightbox
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
});












/* =========================================
   GLOBAL FOOTER GENERATOR
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Create the footer element
    const siteFooter = document.createElement("footer");
    siteFooter.className = "bg-[#003C63] text-white pt-16 pb-6 mt-auto";
    
    // 2. Add all your footer HTML inside it
    siteFooter.innerHTML = `
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
            
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                
                <div class="space-y-4 lg:col-span-1">
                    <h2 class="font-serif text-3xl font-bold tracking-wide">
                        MORIX <span class="text-[#F27D57]">BEYOND</span>
                    </h2>
                    <p class="text-gray-400 text-sm leading-relaxed font-light mt-4 lg:pr-4">
                        Morix Beyond Zanzibar is a premium tourism and visual storytelling brand based in Zanzibar. We create unforgettable travel experiences across Zanzibar and mainland Tanzania while capturing them through cinematic photography and videography.

                    </p>
                </div>    

                <div class="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2 lg:gap-12">
                    
                    <div>
                        <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-xs mb-5 md:mb-6">Quick Links</h3>
                        <ul class="space-y-4 text-sm">
                            <li><a href="zanzibar.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">Home</a></li>
                            <li><a href="tanzania.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">About Us</a></li>
                            <li><a href="why-us.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">Why Us</a></li>
                            <li><a href="gallery.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">Contact</a></li>
                            <li><a href="contact.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-xs mb-5 md:mb-6">Follow Us</h3>
                        
                        <div class="flex flex-col gap-4 text-sm">                            
                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-instagram text-xl w-8"></i>
                                <span>Instagram</span>
                            </a>                            
                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-twitter-alt text-xl w-8"></i> 
                                <span>X (Twitter)</span>
                            </a>                            
                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-facebook text-xl w-8"></i>
                                <span>Facebook</span>
                            </a>
                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-tik-tok text-xl w-8"></i>
                                <span>TikTok</span>
                            </a>                            
                        </div>
                    </div>

                </div>          

                <div class="lg:col-span-1 mt-4 lg:mt-0">
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-xs mb-5 md:mb-6">Get In Touch</h3>             
                    
                    <div class="flex flex-row flex-wrap gap-4 md:flex-col md:gap-5"> 
                        
                        <a href="https://wa.me/255746319059" target="_blank" class="flex items-center group transition-all duration-300" title="WhatsApp">
                            <div class="w-12 h-12 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center bg-[#25D366]/10 text-[#25D366] rounded-xl group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                                <i class="fi fi-brands-whatsapp text-xl"></i>
                            </div>
                            <div class="hidden md:flex flex-col ml-4">
                                <span class="text-[10px] font-bold uppercase text-gray-500 tracking-wider">WhatsApp</span>
                                <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">(+255) 746 319 059</span>
                            </div>
                        </a>

                        <a href="mailto:morixbeyond@gmail.com" class="flex items-center group transition-all duration-300" title="Email Us">
                            <div class="w-12 h-12 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center bg-[#F27D57]/10 text-[#F27D57] rounded-xl group-hover:bg-[#F27D57] group-hover:text-white transition-all shadow-sm">
                                <i class="fi fi-rr-envelope text-lg mt-1"></i>
                            </div>
                            <div class="hidden md:flex flex-col ml-4">
                                <span class="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Email Us</span>
                                <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">morixbeyond@gmail.com</span>
                            </div>
                        </a>

                        <a href="#" target="_blank" class="flex items-center group transition-all duration-300" title="Location">
                            <div class="w-12 h-12 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-xl group-hover:bg-blue-400 group-hover:text-white transition-all shadow-sm">
                                <i class="fi fi-rr-marker text-lg mt-1"></i>
                            </div>
                            <div class="hidden md:flex flex-col ml-4">
                                <span class="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Location</span>
                                <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Zanzibar, Tanzania</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div> 
            
            <div class="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>© ${new Date().getFullYear()} MORIX BEYOND ZANZIBAR. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="terms.html" class="hover:text-[#F27D57] transition-colors">Terms & Conditions</a>
                    <a href="privacy.html" class="hover:text-[#F27D57] transition-colors">Privacy Policy</a>
                </div>
            </div>
        </div>
    `;

    // 3. Automatically attach it to the bottom of the page
    document.body.appendChild(siteFooter);

});