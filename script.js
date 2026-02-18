// 1. BRAND CONFIGURATION
const branding = {
    colors: {
        navy: "#003358",    
        orange: "#FF8A5B",  
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
        font-size: 0.85rem;
        text-transform: uppercase;
        transition: 0.3s;
        position: relative;
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
        color: white !important;
        padding: 8px 24px;
        border-radius: 4px;
        font-weight: bold;
        font-style: italic;
        transition: transform 0.3s;
    }
    .btn-booking:hover { transform: scale(1.05); }

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
            <img src="/image/logo.jpg" 
            alt="Morix Beyond" 
            class="h-10 md:h-14 logo-img" 
            style="display: block !important; opacity: 1 !important; visibility: visible !important;"
            onerror="this.src='image/logo.jpg';">
            </div>

            <div class="hidden lg:flex space-x-6 items-center">
                <a href="index.html" class="nav-link-top">Home</a>
                <a href="about.html" class="nav-link-top">About Us</a>
                <a href="why-us.html" class="nav-link-top">Why Us</a>
                <a href="contact.html" class="nav-link-top">Contact</a>
                <a href="faq.html" class="nav-link-top">FAQ</a>
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
                <a href="safaris.html">Tanzania Safaris</a>
                <a href="media.html">Media Services</a>
                <a href="gallery.html">Gallery</a>
                <a href="book.html" class="mobile-btn-book">Book Now</a>
            </div>
        </div>
    </div>

    <div class="hidden lg:block second-nav-bar">
        <div class="container mx-auto flex justify-center items-center py-3 space-x-12">
            <a href="zanzibar.html" class="nav-link-main">Zanzibar Experiences</a>
            <a href="safaris.html" class="nav-link-main">Tanzania Safaris</a>
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