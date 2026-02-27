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
                <a href="blog.html" class="nav-link-top">BLOG</a>
                <a href="FQS.html" class="nav-link-top">FAQ</a>

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
                <button id="mobile-login-btn" style="color: var(--morix-navy); font-weight: 700;">Guest Handover</button>
            </div>
            <div class="mobile-group-2">
                <a href="zanzibar.html">Zanzibar Experiences</a>
                <a href="tanzania.html">Tanzania Safaris</a>
                <a href="media.html">Media Services</a>
                <a href="gallery.html">Gallery</a>
                <a href="booking.html" class="mobile-btn-book">Book Now</a>
            </div>
        </div>
    </div>

    <div class="hidden lg:block second-nav-bar">
        <div class="container mx-auto flex justify-center items-center py-3 space-x-12">
            <a href="zanzibar.html" class="nav-link-main">Zanzibar Experiences</a>
            <a href="tanzania.html" class="nav-link-main">Tanzania Safaris</a>
            <a href="media.html" class="nav-link-main">Media Services</a>
            <a href="gallery.html" class="nav-link-main">Gallery</a>
            <a href="booking.html" class="btn-booking">Book Now</a>
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


//GALLERY PAGE//


// --- 1. PHOTO DATA (Images Only) ---
const photoData = [
    // Safari
    { src: "image/1 (13).jpg", cat: "safari", title: "Lion King" },
    { src: "image/1 (10).jpg", cat: "safari", title: "Ngorongoro Crater" },
    { src: "image/1 (15).jpg", cat: "safari", title: "The Great Migration" },
    { src: "image/1 (19).jpg", cat: "safari", title: "Elephants at Sunset" },
    
    // Beach
    { src: "image/1 (1).jpg", cat: "beach", title: "Nungwi Turquoise" },
    { src: "image/1 (2).jpg", cat: "beach", title: "Sandbank Relax" },
    { src: "image/1 (9).jpg", cat: "beach", title: "Traditional Dhow" },

    // Culture
    { src: "image/1 (7).jpg", cat: "culture", title: "Stone Town Alleys" },
    { src: "image/1 (6).jpg", cat: "culture", title: "Spice Farm Colors" }
];

// --- 2. VIDEO DATA (Videos Only) ---
const videoData = [
    { src: "image/video.mp4", title: "Safari Adventure" },
    { src: "image/video.mp4", title: "Nungwi Vibes" },
    { src: "image/video.mp4", title: "Nightlife & Music" },
    { src: "image/video.mp4", title: "Romantic Getaway" },
    { src: "image/video.mp4", title: "Aerial Drone View" },
    { src: "image/video.mp4", title: "Luxury Resort Tour" }
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



//booking now//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    
    // Safety check in case the script runs on a page without the booking form
    if(!form) return; 

    const servicePackage = document.getElementById('servicePackage');
    const paymentRadios = document.querySelectorAll('input[name="paymentType"]');
    const amountDisplay = document.getElementById('amountDisplay');
    const calculationDetails = document.getElementById('calculationDetails');
    const btnAmount = document.getElementById('btnAmount');
    
    const proceedBtn = document.getElementById('proceedBtn');
    const proceedBtnContainer = document.getElementById('proceedBtnContainer');
    const paymentSection = document.getElementById('paymentSection');

    // Elements for Guest Logic
    const guestCounterWrapper = document.getElementById('guestCounterWrapper');
    const guestCountInput = document.getElementById('guestCount');
    const btnMinus = document.getElementById('btnMinus');
    const btnPlus = document.getElementById('btnPlus');
    const guestNotice = document.getElementById('guestNotice');

    // Set Minimum Date to Today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').setAttribute('min', today);

    // --- 1. UNLOCK GUEST COUNTER WHEN PACKAGE IS SELECTED ---
    servicePackage.addEventListener('change', () => {
        if(servicePackage.value !== "0") {
            guestCounterWrapper.classList.remove('opacity-60', 'cursor-not-allowed', 'bg-gray-100');
            guestCounterWrapper.classList.add('bg-gray-50');
            
            btnMinus.removeAttribute('disabled');
            btnPlus.removeAttribute('disabled');
            
            btnMinus.classList.add('hover:bg-gray-200', 'hover:text-[#F27D57]', 'text-gray-500');
            btnPlus.classList.add('hover:bg-gray-200', 'hover:text-[#F27D57]', 'text-gray-500');
            
            guestNotice.classList.add('hidden'); 
            updatePricing(); 
        }
    });

    // --- 2. +/- GUEST COUNTER MATH ---
    btnMinus.addEventListener('click', () => {
        let currentVal = parseInt(guestCountInput.value);
        if (currentVal > 1) {
            guestCountInput.value = currentVal - 1;
            updatePricing();
        }
    });

    btnPlus.addEventListener('click', () => {
        let currentVal = parseInt(guestCountInput.value);
        if (currentVal < 10) { 
            guestCountInput.value = currentVal + 1;
            updatePricing();
        }
    });

    // --- 3. DYNAMIC PRICING ENGINE ---
    const updatePricing = () => {
        const packagePrice = parseFloat(servicePackage.value) || 0;
        
        if(packagePrice === 0) {
            amountDisplay.textContent = "$0.00";
            btnAmount.textContent = "$0.00";
            calculationDetails.textContent = "0 Guest(s) × 100%";
            return;
        }

        const guests = parseInt(guestCountInput.value) || 1;
        
        let paymentMultiplier = 1; 
        let scheduleText = "100%";
        paymentRadios.forEach(radio => {
            if (radio.checked) {
                paymentMultiplier = parseFloat(radio.value);
                if(paymentMultiplier === 0.5) scheduleText = "50% Deposit";
            }
        });

        const finalAmount = (packagePrice * guests) * paymentMultiplier;
        const formattedAmount = `$${finalAmount.toFixed(2)}`;
        
        amountDisplay.textContent = formattedAmount;
        btnAmount.textContent = formattedAmount;
        calculationDetails.textContent = `${guests} Guest(s) × ${scheduleText}`;
    };

    paymentRadios.forEach(radio => radio.addEventListener('change', updatePricing));

    // --- 4. REVEAL SECURE CHECKOUT ---
    proceedBtn.addEventListener('click', () => {
        if(servicePackage.value === "0") {
            alert("Please select a Service Package to proceed.");
            servicePackage.focus();
            return;
        }

        if (form.checkValidity()) {
            proceedBtnContainer.style.display = 'none';
            paymentSection.classList.add('active');
            setTimeout(() => {
                paymentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        } else {
            form.reportValidity(); 
        }
    });

    // --- 5. PAYMENT TAB & PROVIDER LOGIC ---
    const tabCard = document.getElementById('tabCard');
    const tabMobile = document.getElementById('tabMobile');
    const cardProviders = document.getElementById('cardProviders');
    const cardTypeBtns = document.querySelectorAll('.card-type-btn');
    const mobileTypeBtns = document.querySelectorAll('.mobile-type-btn');
    
    const ccFields = document.getElementById('ccFields');
    const paypalFields = document.getElementById('paypalFields');
    const mobileFields = document.getElementById('mobileFields');

    // Swap to Card
    tabCard.addEventListener('click', () => {
        tabCard.classList.add('active');
        tabMobile.classList.remove('active');
        
        cardProviders.classList.remove('hidden'); 
        mobileFields.classList.add('hidden'); 
        mobileFields.classList.remove('block');
        
        const activeCard = document.querySelector('.card-type-btn.active');
        if(activeCard) activeCard.click(); 
    });

    // Swap to Mobile Money
    tabMobile.addEventListener('click', () => {
        tabMobile.classList.add('active');
        tabCard.classList.remove('active');
        
        cardProviders.classList.add('hidden'); 
        ccFields.classList.add('hidden'); 
        ccFields.classList.remove('block');
        paypalFields.classList.add('hidden'); 
        paypalFields.classList.remove('block');
        
        mobileFields.classList.remove('hidden'); 
        mobileFields.classList.add('block');
    });

    // Select Specific Card Type
    cardTypeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            cardTypeBtns.forEach(b => b.classList.remove('active'));
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.add('active');
            
            const type = clickedBtn.getAttribute('data-type');
            
            if (type === 'paypal') {
                ccFields.classList.add('hidden');
                ccFields.classList.remove('block');
                paypalFields.classList.remove('hidden');
                paypalFields.classList.add('block');
            } else {
                paypalFields.classList.add('hidden');
                paypalFields.classList.remove('block');
                ccFields.classList.remove('hidden');
                ccFields.classList.add('block');
            }
        });
    });

    // Select Specific Mobile Network
    mobileTypeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            mobileTypeBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });
});


//guest//




//zanzibar//
// 1. Database of Experiences (Now with multiple images for slideshows)
const experiencesDB = [
    {
        id: "kendwa",
        title: "Kendwa Beach",
        category: "water",
        badge: "Watersports",
        images: [
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Enjoy Zanzibar’s most famous beach with exciting water activities.",
        mainDesc: "A world-famous stretch of white sand and crystal-clear turquoise waters. Kendwa Beach blends natural beauty with vibrant energy, making it a prime destination for water sports and ocean experiences.",
        services: [
            { name: "Zanzibar Clear Kayak", icon: "fi fi-rr-water", price: 150, desc: "Paddle across transparent waters while professional drone footage captures your journey from above.", includes: ["Posing guidance", "Photo assistance"], excludes: ["Drone footage"] },
            { name: "Jet Car Experience", icon: "fi fi-rr-ship", price: 200, desc: "Enjoy a thrilling ride on a luxury jet car while our drone records dynamic aerial shots.", includes: ["Posing guidance", "Photo assistance", "Safety briefing"], excludes: ["Drone footage"] },
            { name: "Jet Ski Adventure", icon: "fi fi-rr-dashboard", price: 180, desc: "Race across the ocean with powerful drone footage tracking your movement.", includes: ["Posing guidance", "Photo assistance", "Safety training", "Life jacket"], excludes: ["Drone footage"] },
            { name: "Drone Photography", icon: "fi fi-rr-camera", price: 120, desc: "Professional aerial photos and cinematic videos of your beach experience.", includes: ["Premium full package", "Edited & Raw footage"], excludes: [] }
        ]
    },
    {
        id: "safariblue",
        title: "Island Cruise (Safari Blue)",
        category: "water",
        badge: "Cruise",
        images: [
            "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Cruise across turquoise waters to hidden sandbanks.",
        mainDesc: "Enjoy a full-day island adventure across Zanzibar’s turquoise waters, exploring pristine sandbanks, hidden lagoons, and colorful coral reefs.",
        services: [
            { name: "Safari Blue Adventure", icon: "fi fi-rr-ship", price: 100, desc: "Classic ocean experience including swimming, snorkeling, relaxing on natural islands, and baobab tree exploration.", includes: ["Drinking water & Fruits", "BBQ seafood lunch", "Snorkelling tools", "All entry fees", "Guide", "Dhow"], excludes: ["Tips", "Items of personal nature", "Transport"] }
        ]
    },
    {
        id: "navigator",
        title: "The Navigator",
        category: "culture",
        badge: "Culture",
        images: [
            "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543051932-6ef9f5f15e51?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Explore Zanzibar’s history, iconic landmarks, and vibrant markets.",
        mainDesc: "A carefully curated journey through Zanzibar’s most iconic cultural and island attractions, blending history, nature, and local lifestyle.",
        services: [
            { name: "Prison Island Tour", icon: "fi fi-rr-island", price: 80, desc: "Discover the famous island sanctuary home to giant tortoises and historic ruins.", includes: ["Guide", "All entry fees", "Boat/Dhow"], excludes: ["Transport", "Tips"] },
            { name: "Nakupenda Sandbank", icon: "fi fi-rr-sun", price: 90, desc: "Relax on a pristine white sandbank in the middle of turquoise waters.", includes: ["Drinking water & Fruits", "BBQ seafood lunch", "Boat/Dhow"], excludes: ["Transport", "Tips"] },
            { name: "Stone Town Tour", icon: "fi fi-rr-building", price: 50, desc: "Walk through Zanzibar’s UNESCO-listed old town with a professional guide.", includes: ["Professional tour guide", "All entry fees"], excludes: ["Transport", "Tips"] },
            { name: "Forodhani Night Market", icon: "fi fi-rr-moon", price: 30, desc: "End your day tasting local street food and experiencing the lively oceanfront.", includes: ["Professional tour guide"], excludes: ["Transport", "Street food costs"] }
        ]
    },
    {
        id: "botanist",
        title: "The Botanist",
        category: "nature",
        badge: "Nature",
        images: [
            "https://images.unsplash.com/photo-1543051932-6ef9f5f15e51?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Discover spice farms, tropical forests, and unique swimming caves.",
        mainDesc: "A nature-rich journey through Zanzibar’s most beautiful landscapes, blending spice culture, wildlife encounters, and natural swimming caves.",
        services: [
            { name: "Spice Farm Tour", icon: "fi fi-rr-leaf", price: 40, desc: "Explore famous spice plantations and discover cloves, vanilla, and tropical fruits.", includes: ["Professional tour guide"], excludes: ["Transport", "Tips"] },
            { name: "Jozani Chwaka Bay", icon: "fi fi-rr-tree", price: 60, desc: "Encounter rare red colobus monkeys in their natural habitat.", includes: ["Guide", "All entry fees"], excludes: ["Transport", "Tips"] },
            { name: "Cave Swimming", icon: "fi fi-rr-water", price: 55, desc: "Swim in a crystal-clear underground cave pool formed over thousands of years.", includes: ["Guide", "All entry fees"], excludes: ["Transport", "Tips"] },
            { name: "The Rock Restaurant", icon: "fi fi-rr-restaurant", price: 75, desc: "Enjoy a meal at Zanzibar’s most iconic oceanfront restaurant.", includes: ["All entry fees", "Guide"], excludes: ["Transport", "Buffet", "Tips"] }
        ]
    },
    {
        id: "mariner",
        title: "The Mariner",
        category: "water",
        badge: "Wildlife",
        images: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Set sail with dolphin encounters and turtle swimming experiences.",
        mainDesc: "An ocean-inspired journey that brings you closer to Zanzibar’s marine life and coastal traditions.",
        services: [
            { name: "Dolphin Adventure", icon: "fi fi-rr-fish", price: 90, desc: "Early-morning boat trip to spot and swim near dolphins in their natural environment.", includes: ["All entry fees", "Snorkelling tools", "Guide", "Boat"], excludes: ["Transport", "Tips"] },
            { name: "Swim with Turtles", icon: "fi fi-rr-water", price: 50, desc: "Special swimming experience with sea turtles in calm waters.", includes: ["All entry fees", "Guide"], excludes: ["Transport", "Tips"] },
            { name: "Sunset Dhow Cruise", icon: "fi fi-rr-ship", price: 80, desc: "Glide across the ocean aboard a traditional wooden dhow as the sun sets.", includes: ["Guide", "Dhow/Boat", "Entry fees", "Fruits/Water"], excludes: ["Transport", "Tips"] }
        ]
    },
    {
        id: "romantic",
        title: "Romantic",
        category: "couples",
        badge: "Love",
        images: [
            "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Celebrate love with cinematic photoshoots and private sunset dinners.",
        mainDesc: "A thoughtfully curated collection of intimate and unforgettable moments for couples seeking romance in breathtaking settings.",
        services: [
            { name: "Beach Proposal", icon: "fi fi-rr-heart", price: 350, desc: "A private, decorated beach setting created especially for your proposal.", includes: ["Beach setup", "Decoration", "Photo assistance"], excludes: ["Transport", "Videography"] },
            { name: "Flying Dress Photoshoot", icon: "fi fi-rr-camera", price: 250, desc: "Cinematic photoshoot featuring flowing designer dresses.", includes: ["Dresses", "Posing guidance", "Photo assistance"], excludes: ["Transport", "Videography"] },
            { name: "Sunset Yacht", icon: "fi fi-rr-ship", price: 600, desc: "Sail into the golden hour aboard a luxury yacht.", includes: ["Drinks", "Buffet", "Music"], excludes: ["Transport", "Photography"] },
            { name: "Honeymoon Dinner", icon: "fi fi-rr-restaurant", price: 200, desc: "Exclusive candlelit dining experience on the beach.", includes: ["Setup", "Decoration"], excludes: ["Transport", "Photography"] }
        ]
    }
];

// Global trackers for slideshow intervals so we don't cause memory leaks
let gridIntervals = [];
let modalInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    
    const grid = document.getElementById('experiences-grid');
    
    function renderCards(filter = 'all') {
        grid.innerHTML = '';
        
        // Clear existing grid image intervals when re-rendering filters
        gridIntervals.forEach(clearInterval);
        gridIntervals = [];

        experiencesDB.forEach(exp => {
            if(filter === 'all' || exp.category === filter) {
                
                // Generate HTML for all images in the array
                const imageLayers = exp.images.map((img, idx) => 
                    `<img src="${img}" class="slide-${exp.id} absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-110 ${idx === 0 ? 'opacity-100' : 'opacity-0'}">`
                ).join('');

                grid.innerHTML += `
                    <div class="exp-card group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer" onclick="openModal('${exp.id}')">
                        
                        ${imageLayers}
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-[#003C63] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        <div class="absolute top-6 left-6 flex gap-2">
                            <span class="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 flex items-center">
                                <i class="fi fi-rr-star mr-1.5"></i> ${exp.badge}
                            </span>
                        </div>
                        <div class="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-3xl font-bold text-white mb-2">${exp.title}</h3>
                            <p class="text-gray-300 text-sm mb-6 line-clamp-2">${exp.shortDesc}</p>
                            <button class="w-full bg-white text-[#003C63] font-bold py-3 rounded-xl hover:bg-[#F27D57] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg">
                                View Details <i class="fi fi-rr-eye"></i>
                            </button>
                        </div>
                    </div>
                `;
            }
        });

        // Initialize Grid Image Slideshows
        setTimeout(() => {
            experiencesDB.forEach(exp => {
                if(filter === 'all' || exp.category === filter) {
                    const images = document.querySelectorAll(`.slide-${exp.id}`);
                    if (images.length > 1) {
                        let currentIndex = 0;
                        // Randomize start times slightly so they don't all change at the exact same millisecond
                        const delay = 3000 + (Math.random() * 1000); 
                        
                        const interval = setInterval(() => {
                            images[currentIndex].classList.remove('opacity-100');
                            images[currentIndex].classList.add('opacity-0');
                            
                            currentIndex = (currentIndex + 1) % images.length;
                            
                            images[currentIndex].classList.remove('opacity-0');
                            images[currentIndex].classList.add('opacity-100');
                        }, delay);
                        
                        gridIntervals.push(interval);
                    }
                }
            });
        }, 100);
    }

    renderCards();

    // 3. Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-[#003C63]', 'text-white', 'shadow-lg');
                b.classList.add('bg-white', 'text-gray-600');
            });
            const target = e.currentTarget;
            target.classList.remove('bg-white', 'text-gray-600');
            target.classList.add('bg-[#003C63]', 'text-white', 'shadow-lg');
            
            renderCards(target.getAttribute('data-filter'));
        });
    });

    // 4. Modal & Booking Logic
    const modal = document.getElementById('experience-modal');
    const modalCard = document.getElementById('modal-card');
    const modalImgEl = document.getElementById('modal-img');
    
    window.openModal = function(id) {
        const data = experiencesDB.find(x => x.id === id);
        
        // Setup Modal Image and start Modal Slideshow
        modalImgEl.style.transition = 'opacity 0.5s ease-in-out';
        modalImgEl.src = data.images[0];
        
        if (data.images.length > 1) {
            let currentModalImgIndex = 0;
            modalInterval = setInterval(() => {
                modalImgEl.style.opacity = '0';
                setTimeout(() => {
                    currentModalImgIndex = (currentModalImgIndex + 1) % data.images.length;
                    modalImgEl.src = data.images[currentModalImgIndex];
                    modalImgEl.style.opacity = '1';
                }, 500); // Wait for fade out to finish before swapping src
            }, 3500);
        }

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-badge').textContent = data.badge;
        document.getElementById('modal-desc').textContent = data.mainDesc;

        let servicesHTML = '';

        // 1. GENERATE INDIVIDUAL SERVICE CARDS
        servicesHTML += data.services.map(srv => {
            const incHTML = srv.includes.map(i => `<li class="flex items-start gap-1"><span class="text-green-500">✓</span> ${i}</li>`).join('');
            const excHTML = srv.excludes.map(i => `<li class="flex items-start gap-1 text-gray-400"><span>×</span> ${i}</li>`).join('');
            const singleBookMessage = `Hi Morix, I want to book the ${srv.name} at ${data.title}.`;
            const singleBookUrl = `https://wa.me/0746319059?text=${encodeURIComponent(singleBookMessage)}`;
            
            return `
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-4">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#003C63] flex items-center justify-center text-xl shrink-0">
                            <i class="${srv.icon}"></i>
                        </div>
                        <h5 class="font-bold text-[#003C63] text-lg leading-tight">${srv.name}</h5>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-5">${srv.desc}</p>
                    
                    <div class="grid grid-cols-2 gap-4 text-xs mb-5">
                        ${srv.includes.length ? `<div>
                            <strong class="block text-gray-800 mb-1">Includes</strong>
                            <ul class="space-y-1 text-gray-600">${incHTML}</ul>
                        </div>` : ''}
                        
                        ${srv.excludes.length ? `<div>
                            <strong class="block text-gray-800 mb-1">Excludes</strong>
                            <ul class="space-y-1">${excHTML}</ul>
                        </div>` : ''}
                    </div>
                    
                    <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div class="text-2xl font-black text-[#003C63]">$${srv.price}</div>
                        <a href="${singleBookUrl}" target="_blank" class="bg-[#F8FAFC] border border-gray-200 text-[#003C63] hover:bg-[#F27D57] hover:border-[#F27D57] hover:text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                            Book Service <i class="fi fi-rr-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // 2. CALCULATE FULL PACKAGE TOTALS
        const totalPrice = data.services.reduce((sum, srv) => sum + srv.price, 0);
        const allServiceNames = data.services.map(s => s.name).join(', ');
        const bookAllMessage = `Hi Morix, I want to book the FULL ${data.title} package including: ${allServiceNames}.`;
        const bookAllUrl = `https://wa.me/0746319059?text=${encodeURIComponent(bookAllMessage)}`;

        // 3. RE-DESIGNED FULL PACKAGE CARD (Fixed Button Layout)
        if (data.services.length > 1) {
            servicesHTML += `
                <div class="bg-[#003C63] text-white p-6 md:p-8 rounded-2xl mt-8 shadow-xl relative overflow-hidden border border-[#003C63]/50">
                    <div class="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                        <i class="fi fi-rr-star text-9xl"></i>
                    </div>
                    
                    <div class="relative z-10 block w-full">
                        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 pb-6 border-b border-white/20">
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold mb-2">Book the Full Package</h4>
                                <p class="text-white/80 text-sm leading-relaxed max-w-lg">
                                    Experience everything ${data.title} has to offer in one ultimate booking. Includes all services listed above.
                                </p>
                            </div>
                            <div class="text-left md:text-right shrink-0">
                                <span class="block text-xs uppercase tracking-widest text-white/60 mb-1">Total Value</span>
                                <span class="text-4xl font-black text-[#F27D57]">$${totalPrice}</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 w-full">
                            <a href="${bookAllUrl}" target="_blank" class="flex-1 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20">
                                <i class="fi fi-brands-whatsapp text-xl"></i> Chat via WhatsApp
                            </a>
                            <a href="booking.html?package=${data.id}" class="flex-1 bg-[#F27D57] hover:bg-white hover:text-[#003C63] text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F27D57]/20">
                                <i class="fi fi-rr-ticket text-xl"></i> Book via System
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        document.getElementById('modal-services-list').innerHTML = servicesHTML;

        // Show Modal
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalCard.classList.remove('scale-90', 'opacity-0');
            modalCard.classList.add('scale-100', 'opacity-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    function closeModal() {
        // Stop modal image from changing when closed
        if(modalInterval) clearInterval(modalInterval);
        
        modalCard.classList.remove('scale-100', 'opacity-100');
        modalCard.classList.add('scale-90', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modalImgEl.style.opacity = '1'; // Reset opacity for next open
        }, 300);
        document.body.style.overflow = 'auto';
    }

    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('close-modal-bottom').addEventListener('click', closeModal);
    document.getElementById('modal-backdrop').addEventListener('click', closeModal);
});


//tranferr//
// ==========================================
// ZANZIBAR TRANSFERS TAB LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const transferTabs = document.querySelectorAll('.transfer-tab');
    const transferGrids = document.querySelectorAll('.transfer-grid');

    transferTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Reset all tabs to inactive styles
            transferTabs.forEach(t => {
                t.classList.remove('bg-[#003C63]', 'text-white', 'shadow-lg');
                t.classList.add('bg-gray-50', 'text-[#003C63]');
            });

            // 2. Set clicked tab to active styles
            tab.classList.remove('bg-gray-50', 'text-[#003C63]');
            tab.classList.add('bg-[#003C63]', 'text-white', 'shadow-lg');

            // 3. Hide all grids
            transferGrids.forEach(grid => {
                grid.classList.add('hidden');
                grid.classList.remove('grid'); // Tailwind fix for toggling display:grid
            });

            // 4. Show the target grid
            const targetId = tab.getAttribute('data-target');
            const targetGrid = document.getElementById(targetId);
            if (targetGrid) {
                targetGrid.classList.remove('hidden');
                targetGrid.classList.add('grid');
                
                // Add a quick fade-in animation
                targetGrid.style.animation = 'fadeInTab 0.4s ease-out forwards';
            }
        });
    });
});
