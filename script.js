// 1. BRANDING CONFIGURATION 
const branding = {
    colors: {
        navy: '#003C63',
        orange: '#F27D57'
    },
    fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif"
    }
};

// 2. INJECT FONTS AND ICON STYLES
const style = document.createElement('style');
style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
    @import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
    @import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
`;
document.head.appendChild(style);

const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
fontAwesomeLink.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeLink);

// 3. THE HEADER TEMPLATE
const headerTemplate = `
<!-- TOP INFO HEADER - Fixed at Top -->
<div id="info-header" style="background-color: ${branding.colors.navy}; font-family: 'Inter', sans-serif; position: fixed; top: 0; left: 0; right: 0; z-index: 60;">
    <div class="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div class="flex justify-between items-center py-2 lg:py-2.5">
            <!-- LEFT: WhatsApp + Email -->
            <div class="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2 sm:gap-4 lg:gap-6">
                <!-- WhatsApp -->
                <a href="https://wa.me/+255746319059" target="_blank" 
                   class="flex items-center gap-1.5 sm:gap-2 text-white transition-all duration-300 group flex-1 sm:flex-none justify-center sm:justify-start">
                    <i class="fi fi-brands-whatsapp text-base sm:text-lg" style="color: #25D366;"></i>
                    <span class="text-xs sm:text-sm font-medium truncate" 
                          style="color: white;"
                          onmouseover="this.style.color='${branding.colors.orange}'" 
                          onmouseout="this.style.color='white'">
                        +255 746 319 059
                    </span>
                </a>
                
                <!-- Separator -->
                <span class="text-gray-500 text-sm hidden sm:block">|</span>
                
                <!-- Email -->
                <a href="mailto:hello@morixbeyond.com" 
                   class="flex items-center gap-1.5 sm:gap-2 text-white transition-all duration-300 group flex-1 sm:flex-none justify-center sm:justify-start">
                    <i class="fi fi-rr-envelope text-base sm:text-lg" style="color: ${branding.colors.orange};"></i>
                    <span class="text-xs sm:text-sm font-medium truncate" 
                          style="color: white;"
                          onmouseover="this.style.color='${branding.colors.orange}'" 
                          onmouseout="this.style.color='white'">
                        hello@morixbeyond.com
                    </span>
                </a>
            </div>
            
            <!-- RIGHT: Navigation Links (Desktop) -->
            <div class="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
                <a href="about us.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    About Us
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="why us.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    Why Morix
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="contact.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    Contact
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="blog.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    Blog
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="fqs.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    FAQ
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <span class="text-gray-500 text-sm">|</span>
                
                <a href="privacy.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    Privacy
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="terms.html" 
                   class="relative text-white text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 pb-1 group"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='white'">
                    Terms
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- MAIN HEADER - Fixed below info header -->
<nav id="main-nav" style="font-family: 'Inter', sans-serif; background-color: white; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1); position: fixed; top: 0; left: 0; right: 0; z-index: 50;">
    <div class="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div class="flex justify-between items-center py-2 lg:py-3">
            <!-- LEFT: Logo -->
            <a href="index.html" class="flex-shrink-0">
                <img src="/image/MORIX WEB SECOND-01.png.png" 
                     alt="Morix Beyond" 
                     class="h-7 sm:h-10 lg:h-12 xl:h-14 w-auto" 
                     onerror="this.src='image/MORIX WEB-01.png';">
            </a>

            <!-- RIGHT: Main Navigation (Desktop) -->
            <div class="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
                <a href="index.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Home
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="watersport.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Water Sports
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="zanzibar.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Zanzibar Tours
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="transfer.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Transfers
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="tanzania.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Tanzania Safaris
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="media.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Media Services
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="stay.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Stays
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="gallery.html" 
                   class="relative text-sm xl:text-base font-medium transition-all duration-300 pb-1 group"
                   style="color: ${branding.colors.navy};"
                   onmouseover="this.style.color='${branding.colors.orange}'" 
                   onmouseout="if(!this.classList.contains('active')) this.style.color='${branding.colors.navy}'">
                    Gallery
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                          style="background-color: ${branding.colors.orange};"></span>
                </a>
                
                <a href="booking.html" 
                   class="inline-flex items-center gap-2 px-4 xl:px-6 py-2 lg:py-2.5 text-sm xl:text-base font-bold italic rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
                   style="background-color: ${branding.colors.orange}; color: white;"
                   onmouseover="this.style.backgroundColor='white'; this.style.color='${branding.colors.orange}'; this.style.borderColor='${branding.colors.orange}'"
                   onmouseout="this.style.backgroundColor='${branding.colors.orange}'; this.style.color='white'; this.style.borderColor='transparent'">
                    <i class="fi fi-rr-shopping-bag"></i> Book Experiences
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="menu-btn" class="lg:hidden p-2 focus:outline-none transition-all duration-300"
                    style="color: ${branding.colors.navy};"
                    onmouseover="this.style.color='${branding.colors.orange}'" 
                    onmouseout="this.style.color='${branding.colors.navy}'">
                <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu Dropdown -->
    <div id="mobile-menu" 
         class="absolute left-4 bg-white hidden overflow-hidden rounded-lg"
         style="z-index: 49; top: 100%; width: auto; min-width: 200px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); border: 1px solid #e5e7eb;">
        <div class="divide-y divide-gray-100">
            <a href="index.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Home
            </a>
            <a href="watersport.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Water Sports
            </a>
            <a href="zanzibar.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Zanzibar Tours
            </a>
            <a href="transfers.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Transfers
            </a>
            <a href="tanzania.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Tanzania Safaris
            </a>
            <a href="media.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Media Services
            </a>
            <a href="stays.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Stays
            </a>
            <a href="gallery.html" 
               class="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
               style="color: ${branding.colors.navy};"
               onmouseover="this.style.color='${branding.colors.orange}'; this.style.paddingLeft='24px'" 
               onmouseout="if(!this.classList.contains('active')) { this.style.color='${branding.colors.navy}'; this.style.paddingLeft='20px'; }">
                Gallery
            </a>
            <div class="p-3 bg-gray-50">
                <a href="booking.html" 
                   class="block text-center py-3 px-4 text-sm font-bold italic rounded-lg transition-all duration-300 transform active:scale-95 border-2 border-transparent whitespace-nowrap"
                   style="background-color: ${branding.colors.orange}; color: white;"
                   onmouseover="this.style.backgroundColor='white'; this.style.color='${branding.colors.orange}'; this.style.borderColor='${branding.colors.orange}'"
                   onmouseout="this.style.backgroundColor='${branding.colors.orange}'; this.style.color='white'; this.style.borderColor='transparent'">
                    <i class="fi fi-rr-shopping-bag"></i> Book Experiences
                </a>
            </div>
        </div>
    </div>
</nav>
`;

// 4. INJECT HTML INTO THE PAGE
document.getElementById('main-header').innerHTML = headerTemplate;

// 5. INITIALIZE ALL FUNCTIONALITY
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeaderSystem);
} else {
    initializeHeaderSystem();
}

function initializeHeaderSystem() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const infoHeader = document.getElementById('info-header');
    const mainNav = document.getElementById('main-nav');

    // ===== POSITION MAIN NAV BELOW INFO HEADER & ADD PAGE MARGIN =====
    function updateHeaderPositions() {
        if (infoHeader && mainNav) {
            const infoHeight = infoHeader.offsetHeight;
            mainNav.style.top = infoHeight + 'px';
            document.body.style.paddingTop = (infoHeight + mainNav.offsetHeight) + 'px';
        }
    }

    // Run on load and resize
    setTimeout(updateHeaderPositions, 50);
    window.addEventListener('resize', updateHeaderPositions);

    // ===== CREATE BLUR OVERLAY =====
    let contentOverlay = document.createElement('div');
    contentOverlay.id = 'content-overlay';
    contentOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 30;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(contentOverlay);

    // ===== ACTIVE LINK HIGHLIGHTER =====
    function setActiveLink() {
        let path = decodeURIComponent(window.location.pathname);
        let page = path.split('/').pop().split('?')[0];

        if (page === '' || page === '/') {
            page = 'index.html';
        }

        const allNavLinks = document.querySelectorAll('a[href]');

        allNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            link.classList.remove('active');
            link.style.fontWeight = '';

            if (linkHref) {
                const linkPage = linkHref.split('/').pop();

                if (linkPage === page) {
                    link.classList.add('active');
                    link.style.fontWeight = '700';
                    link.style.color = branding.colors.orange;
                }
            }
        });
    }

    setActiveLink();

    // ===== OPEN MOBILE MENU =====
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');

        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            mobileMenu.style.opacity = '1';
            mobileMenu.style.transform = 'translateY(0)';
        }, 10);

        if (contentOverlay) {
            contentOverlay.style.opacity = '1';
            contentOverlay.style.pointerEvents = 'auto';
        }

        menuBtn.innerHTML = `
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        `;
    }

    // ===== CLOSE MOBILE MENU =====
    function closeMobileMenu() {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-10px)';

        if (contentOverlay) {
            contentOverlay.style.opacity = '0';
            contentOverlay.style.pointerEvents = 'none';
        }

        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
        }, 200);

        menuBtn.innerHTML = `
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        `;
    }

    // ===== MOBILE MENU TOGGLE =====
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileMenu.classList.contains('hidden')) {
                openMobileMenu();
            } else {
                closeMobileMenu();
            }
        });
    }

    // ===== CLOSE ON OVERLAY CLICK =====
    if (contentOverlay) {
        contentOverlay.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    // ===== CLOSE ON MENU LINK CLICK =====
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }

    // ===== RESIZE HANDLER =====
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });

    // ===== ADD TRANSITION PROPERTIES =====
    if (mobileMenu) {
        mobileMenu.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    }

    // ===== ESCAPE KEY TO CLOSE =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });
}


// ==========================================
// 5. GLOBAL BOOKING CART LOGIC
// ==========================================

let currentBookingCount = parseInt(localStorage.getItem('morixBookingCount')) || 0;

window.updateBookingUI = function () {
    const desktopBadge = document.querySelector('.desktop-booking-count');
    const mobileBadge = document.querySelector('.mobile-booking-count');

    if (desktopBadge) desktopBadge.innerText = currentBookingCount;
    if (mobileBadge) mobileBadge.innerText = currentBookingCount;
};

setTimeout(updateBookingUI, 50);

// Global Add To Booking function triggered from Zanzibar, Tanzania, Media pages
if (typeof window.addToBooking !== 'function') {
    window.addToBooking = function (serviceName, price) {
        if (!window.bookingItems) {
            try {
                window.bookingItems = JSON.parse(localStorage.getItem('morixBookingItems')) || [];
                if (!Array.isArray(window.bookingItems)) window.bookingItems = [];
            } catch (e) {
                window.bookingItems = [];
            }
        }

        // Check if item with same name and price already exists
        const existingItem = window.bookingItems.find(item => item.name === serviceName && item.price === price);

        if (existingItem) {
            // Item already exists - show warning notification
            showWarningNotification(serviceName);
            return; // Don't add it again
        }

        // Add new item
        const newItem = {
            name: serviceName,
            price: price,
            quantity: 1
        };
        window.bookingItems.push(newItem);

        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));

        currentBookingCount = window.bookingItems.length;
        localStorage.setItem('morixBookingCount', currentBookingCount);
        updateBookingUI();

        const btn = document.querySelector('.btn-booking');
        if (btn) {
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
        }

        showToastNotification(serviceName);
    };
}

function showToastNotification(serviceName) {
    const existingToasts = document.querySelectorAll('[data-toast]');
    existingToasts.forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.setAttribute('data-toast', 'true');
    toast.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background-color: #25D366; color: white; padding: 16px 24px; border-radius: 12px; font-weight: 700; z-index: 99999; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); transform: translateY(150px); opacity: 0; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px;';
    toast.innerHTML = `<i class="fi fi-rr-check-circle" style="font-size: 20px; flex-shrink: 0;"></i><span style="white-space: nowrap;">${serviceName} added to cart!</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        toast.style.transform = 'translateY(150px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 400);
    }, 3000);
}

function showWarningNotification(serviceName) {
    const existingWarnings = document.querySelectorAll('[data-warning]');
    existingWarnings.forEach(warning => warning.remove());

    const warning = document.createElement('div');
    warning.setAttribute('data-warning', 'true');
    warning.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background-color: #FF9800; color: white; padding: 16px 24px; border-radius: 12px; font-weight: 700; z-index: 99999; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); transform: translateY(150px); opacity: 0; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px;';
    warning.innerHTML = `<i class="fi fi-rr-info" style="font-size: 20px; flex-shrink: 0;"></i><span style="white-space: nowrap;">${serviceName} is already in your cart!</span>`;
    document.body.appendChild(warning);

    setTimeout(() => {
        warning.style.transform = 'translateY(0)';
        warning.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        warning.style.transform = 'translateY(150px)';
        warning.style.opacity = '0';
        setTimeout(() => {
            if (warning.parentNode) warning.parentNode.removeChild(warning);
        }, 400);
    }, 3000);
}


// ==========================================
// 6. BOOKING.HTML PAGE SPECIFIC LOGIC
// ==========================================
// =====================================
// MORIX BEYOND DYNAMIC CART LOGIC
// =====================================
document.addEventListener('DOMContentLoaded', () => {
    const bookingCartEl = document.getElementById('booking-cart');
    if (!bookingCartEl) return;

    let baseCartTotal = 0;
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const totalItems = document.getElementById('total-items');
    const proceedToPaymentBtn = document.getElementById('proceed-to-payment');
    const formContainer = document.getElementById('booking-form');

    // --- INSTANT RED TOAST NOTIFICATION ---
    window.showErrorToast = function (msg) {
        const existing = document.getElementById('error-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'error-toast';
        toast.className = 'fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl z-[10000] flex items-center gap-3 font-medium transition-all duration-300';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -20px)';
        toast.innerHTML = `<i class='bx bx-error-circle text-2xl'></i> <span>${msg}</span>`;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, 0)';
        }, 10);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, -20px)';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }

    // --- HELPER FUNCTIONS ---
    window.updateItemDate = function (index, date) {
        const currentItem = window.bookingItems[index];
        const isTransfer = (currentItem.name || "").toLowerCase().includes('transfer');

        const isDuplicate = window.bookingItems.some((item, i) => {
            if (i === index) return false;
            if (item.date !== date) return false;
            const otherIsTransfer = (item.name || "").toLowerCase().includes('transfer');
            return isTransfer === otherIsTransfer;
        });

        if (isDuplicate && date !== '') {
            showErrorToast(isTransfer ? 'Date Conflict: You already have a Transfer on this date!' : 'Date Conflict: You already have an Experience/Safari on this date!');
        }

        window.bookingItems[index].date = date;
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    }

    // FIXED: HARD RESET TO 1 GUEST
    window.updateBookingType = function (index, type) {
        window.bookingItems[index].bookingType = type;

        if (type === 'couple') {
            window.bookingItems[index].adults = 2; // Lock to 2 for couple
        } else {
            // STRICT RESET: If changing back to 'guest', force the value to 1
            window.bookingItems[index].adults = 1;
        }

        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.updateItemAdults = function (index, change) {
        let current = parseInt(window.bookingItems[index].adults) || 1;
        let newVal = current + change;
        if (newVal >= 1 && newVal <= 30) {
            window.bookingItems[index].adults = newVal;
            localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
            renderCart();
        }
    };

    window.setExactAdults = function (index, val) {
        window.bookingItems[index].adults = parseInt(val);
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.updateItemVehicle = function (index, vehicle) {
        window.bookingItems[index].vehicle = vehicle;
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.updateItemTripType = function (index, type) {
        window.bookingItems[index].tripType = type;
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.removeFromCart = function (index) {
        window.bookingItems.splice(index, 1);
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        localStorage.setItem('morixBookingCount', window.bookingItems.length);
        if (typeof currentBookingCount !== 'undefined') currentBookingCount = window.bookingItems.length;
        renderCart();
        if (typeof updateBookingUI === 'function') updateBookingUI();
    }

    // --- RENDERING ENGINE ---
    window.renderCart = function () {
        try {
            window.bookingItems = JSON.parse(localStorage.getItem('morixBookingItems')) || [];
        } catch (e) {
            window.bookingItems = [];
        }

        cartItems.innerHTML = '';
        baseCartTotal = 0;

        if (window.bookingItems.length === 0) {
            cartItems.innerHTML = '<p class="text-gray-500 text-center py-10 bg-white border border-gray-100 rounded-2xl shadow-sm">Your cart is empty. Add some experiences from our pages!</p>';
            totalPrice.textContent = '$0.00';
            totalItems.textContent = '0 items';
            proceedToPaymentBtn.classList.add('hidden');
            updatePricing();
            return;
        }

        const today = new Date().toISOString().split('T')[0];

        // Track dates for red highlighting (Separate logic for Transfers vs Non-Transfers)
        const transferDates = {};
        const nonTransferDates = {};
        window.bookingItems.forEach(item => {
            if (item.date) {
                let isTransfer = (item.name || "").toLowerCase().includes('transfer');
                if (isTransfer) {
                    transferDates[item.date] = (transferDates[item.date] || 0) + 1;
                } else {
                    nonTransferDates[item.date] = (nonTransferDates[item.date] || 0) + 1;
                }
            }
        });

        window.bookingItems.forEach((item, index) => {
            let basePrice = item.basePrice;
            if (basePrice === undefined) {
                if (item.price && item.price !== 'Enquire') {
                    basePrice = parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0;
                } else {
                    basePrice = 0;
                }
                item.basePrice = basePrice;
            }

            let itemName = (item.name || "").toLowerCase();
            let bookingType = item.bookingType || 'guest';

            // Ensure adults is treated as a number, defaulting based on type
            let adults = parseInt(item.adults);
            if (isNaN(adults)) {
                adults = (bookingType === 'couple' ? 2 : 1);
            }

            let itemDate = item.date || '';
            let vehicle = item.vehicle || '1 - 4 Pax = Noah / Alphard';
            let tripType = item.tripType || 'one-way';

            let itemTotal = 0;
            let controlsHTML = '';

            let isTransferItem = itemName.includes('transfer');
            let hasDateConflict = false;

            if (itemDate) {
                if (isTransferItem && transferDates[itemDate] > 1) hasDateConflict = true;
                if (!isTransferItem && nonTransferDates[itemDate] > 1) hasDateConflict = true;
            }

            let dateErrorHTML = '';
            let dateInputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer";

            if (hasDateConflict) {
                dateErrorHTML = `<p class="text-xs text-red-600 font-bold mt-1.5 flex items-center gap-1"><i class='bx bx-error-circle text-base'></i> Date already used for another ${isTransferItem ? 'transfer' : 'package'}!</p>`;
                dateInputClass = "w-full px-4 py-2 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 outline-none cursor-pointer bg-red-50 text-red-700 font-bold";
            }

            // ==============================================================
            // LOGIC 1: TRANSFERS
            // ==============================================================
            if (isTransferItem) {
                let vehicleMultiplier = 1;
                if (vehicle.includes('12 Pax')) vehicleMultiplier = 1.4;
                else if (vehicle.includes('24 Pax')) vehicleMultiplier = 1.96;

                // FIX: GO AND RETURN DISCOUNT MULTIPLIER (1.9x instead of 2x)
                let tripMultiplier = (tripType === 'return') ? 1.9 : 1;

                itemTotal = basePrice * vehicleMultiplier * tripMultiplier;

                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col md:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Transfer Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Trip Type *</label>
                            <select onchange="updateItemTripType(${index}, this.value)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer bg-white">
                                <option value="one-way" ${tripType === 'one-way' ? 'selected' : ''}>One Way</option>
                                <option value="return" ${tripType === 'return' ? 'selected' : ''}>Go & Return </option>
                            </select>
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Select Vehicle (PAX) *</label>
                            <select onchange="updateItemVehicle(${index}, this.value)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer bg-white text-sm">
                                <option value="1 - 4 Pax = Noah / Alphard" ${vehicle === '1 - 4 Pax = Noah / Alphard' ? 'selected' : ''}>1 - 4 Pax = Noah/Alphard</option>
                                <option value="1 - 12 Pax = Mini Bus" ${vehicle === '1 - 12 Pax = Mini Bus' ? 'selected' : ''}>1 - 12 Pax = Hiace Minibus</option>
                                <option value="1 - 24 Pax = Bus" ${vehicle === '1 - 24 Pax = Bus' ? 'selected' : ''}>1 - 24 Pax = Coaster</option>
                            </select>
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 2: SAFARIS
            // ==============================================================
            else if (itemName.includes('safari') && !itemName.includes('safari blue')) {
                itemTotal = basePrice * adults;
                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Safari Start Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers *</label>
                            <div class="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200 w-fit">
                                <button type="button" onclick="updateItemAdults(${index}, -1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">−</button>
                                <span class="w-8 text-center font-bold text-[#003C63] text-lg">${adults}</span>
                                <button type="button" onclick="updateItemAdults(${index}, 1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">+</button>
                            </div>
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 3: BEACH PROPOSAL (COUPLE ONLY)
            // ==============================================================
            else if (itemName.includes('proposal')) {
                itemTotal = basePrice;
                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Proposal Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Booking Type</label>
                            <div class="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-[#003C63] font-bold flex items-center gap-2">
                                <i class='bx bx-heart text-[#F27D57]'></i> Couple Setup (2 Guests)
                            </div>
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 4: TRADITIONAL NGALAWA SAILING (1 Person or Couple)
            // ==============================================================
            else if (itemName.includes('ngalawa')) {
                let pax = adults > 2 ? 2 : adults;
                itemTotal = basePrice * pax;

                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Sailing Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Passengers (Max 2) *</label>
                            <select onchange="setExactAdults(${index}, parseInt(this.value))" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer">
                                <option value="1" ${pax === 1 ? 'selected' : ''}>1 Person</option>
                                <option value="2" ${pax === 2 ? 'selected' : ''}>Couple (2 People)</option>
                            </select>
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 5: FLYING DRESS PHOTOSHOOT
            // ==============================================================
            else if (itemName.includes('flying dress') || itemName.includes('dress shoot')) {
                if (bookingType === 'couple') {
                    itemTotal = basePrice * 2;
                    adults = 2; // enforce UI display
                } else {
                    itemTotal = basePrice * adults;
                }

                let guestControls = bookingType === 'guest' ? `
                    <div class="mt-2">
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Number of Guests</label>
                        <div class="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200 w-fit">
                            <button type="button" onclick="updateItemAdults(${index}, -1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">−</button>
                            <span class="w-8 text-center font-bold text-[#003C63] text-lg">${adults}</span>
                            <button type="button" onclick="updateItemAdults(${index}, 1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">+</button>
                        </div>
                    </div>
                ` : `<div class="mt-3 text-xs font-bold text-[#003C63] bg-[#F27D57]/10 p-2 rounded-lg inline-block">Couple Shoot (2 Guests)</div>`;

                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Shoot Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Booking Type *</label>
                            <select onchange="updateBookingType(${index}, this.value)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer">
                                <option value="guest" ${bookingType === 'guest' ? 'selected' : ''}>Number of Guests</option>
                                <option value="couple" ${bookingType === 'couple' ? 'selected' : ''}>Couple</option>
                            </select>
                            ${guestControls}
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 6: MEDIA & GENERAL PHOTOGRAPHY
            // ==============================================================
            else if (itemName.includes('media') || itemName.includes('photo') || itemName.includes('video')) {
                itemTotal = basePrice;
                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4">
                        <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Shoot Date *</label>
                        <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                        ${dateErrorHTML}
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 7: PRIVATE DHOW
            // ==============================================================
            else if (itemName.includes('private dhow') || (itemName.includes('safari blue') && itemName.includes('private'))) {
                itemTotal = basePrice;
                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4">
                        <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Travel Date *</label>
                        <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                        ${dateErrorHTML}
                        <div class="mt-3 text-xs font-semibold text-[#003C63] bg-[#003C63]/5 p-2 rounded-lg inline-flex items-center gap-2">
                            <i class='bx bx-info-circle text-[#F27D57] text-base'></i> Private Group Booking (Flat Rate applies)
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 8: KENDWA BEACH 
            // ==============================================================
            else if (itemName.includes('kendwa')) {
                if (bookingType === 'couple') {
                    itemTotal = (basePrice * 2) * 1.07;
                    adults = 2; // enforce UI display
                } else {
                    itemTotal = basePrice * adults;
                }

                let guestControls = bookingType === 'guest' ? `
                    <div class="mt-2">
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Number of Guests</label>
                        <div class="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200 w-fit">
                            <button type="button" onclick="updateItemAdults(${index}, -1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">−</button>
                            <span class="w-8 text-center font-bold text-[#003C63] text-lg">${adults}</span>
                            <button type="button" onclick="updateItemAdults(${index}, 1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">+</button>
                        </div>
                    </div>
                ` : `<div class="mt-3 text-xs font-bold text-[#003C63] bg-[#F27D57]/10 p-2 rounded-lg inline-block">2 Guests (Includes 7% Couple Surcharge)</div>`;

                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Travel Date *</label>
                            <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                            ${dateErrorHTML}
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Booking Type *</label>
                            <select onchange="updateBookingType(${index}, this.value)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer">
                                <option value="guest" ${bookingType === 'guest' ? 'selected' : ''}>Number of Guests</option>
                                <option value="couple" ${bookingType === 'couple' ? 'selected' : ''}>Couple</option>
                            </select>
                            ${guestControls}
                        </div>
                    </div>
                `;
            }
            // ==============================================================
            // LOGIC 9: DEFAULT EXPERIENCES
            // ==============================================================
            else {
                if (bookingType === 'couple') adults = 2; // enforce UI display
                itemTotal = adults * basePrice;

                let adultControls = bookingType === 'guest' ? `
                    <div class="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200 w-fit mt-2">
                        <button type="button" onclick="updateItemAdults(${index}, -1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">−</button>
                        <span class="w-8 text-center font-bold text-[#003C63] text-lg">${adults}</span>
                        <button type="button" onclick="updateItemAdults(${index}, 1)" class="inline-flex items-center justify-center w-8 h-8 bg-[#003C63] text-white rounded-md hover:bg-[#F27D57] transition-colors font-bold text-lg">+</button>
                    </div>
                ` : `<div class="mt-3 text-sm font-bold text-[#003C63] p-2 bg-gray-50 rounded-lg border border-gray-200 inline-block">2 Guests (Couple)</div>`;

                controlsHTML = `
                    <div class="border-t border-gray-200 pt-4 flex flex-col gap-4">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="flex-1">
                                <label class="block text-sm font-semibold ${hasDateConflict ? 'text-red-600' : 'text-gray-700'} mb-2">Travel Date *</label>
                                <input type="date" min="${today}" value="${itemDate}" onchange="updateItemDate(${index}, this.value)" class="${dateInputClass}" required>
                                ${dateErrorHTML}
                            </div>
                            <div class="flex-1">
                                <label class="block text-sm font-semibold text-gray-700 mb-2">Booking Type *</label>
                                <select onchange="updateBookingType(${index}, this.value)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F27D57] outline-none cursor-pointer">
                                    <option value="guest" ${bookingType === 'guest' ? 'selected' : ''}>Number of Guests</option>
                                    <option value="couple" ${bookingType === 'couple' ? 'selected' : ''}>Couple</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-6 mt-2">
                            <div>
                                <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest">Adults ($${basePrice})</label>
                                ${adultControls}
                            </div>
                        </div>
                    </div>
                `;
            }

            baseCartTotal += itemTotal;

            const itemDiv = document.createElement('div');
            itemDiv.className = `cart-item flex flex-col gap-4 p-5 rounded-xl border shadow-sm relative overflow-hidden transition-all ${hasDateConflict ? 'bg-red-50/50 border-red-300' : 'bg-white border-gray-200'}`;
            itemDiv.innerHTML = `
                <div class="absolute left-0 top-0 bottom-0 w-1.5 ${hasDateConflict ? 'bg-red-500' : 'bg-[#003C63]'}"></div>
                <div class="flex justify-between items-start pl-2">
                    <div class="flex-1 pr-4">
                        <h4 class="font-bold ${hasDateConflict ? 'text-red-700' : 'text-[#003C63]'} text-lg mb-1">${item.name}</h4>
                        <p class="text-[#F27D57] font-black text-xl">$${itemTotal.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 p-3 bg-red-50 rounded-lg transition-colors">
                        <i class="fi fi-rr-trash text-xl"></i>
                    </button>
                </div>
                ${controlsHTML}
            `;
            cartItems.appendChild(itemDiv);
        });

        totalPrice.textContent = `$${baseCartTotal.toFixed(2)}`;
        totalItems.textContent = `${window.bookingItems.length} item${window.bookingItems.length > 1 ? 's' : ''}`;
        proceedToPaymentBtn.classList.remove('hidden');

        updatePricing();
    }

    // --- CHECKOUT & MATH LOGIC ---
    const paymentRadios = document.querySelectorAll('input[name="paymentType"]');
    const amountDisplay = document.getElementById('amountDisplay');
    const calculationDetails = document.getElementById('calculationDetails');
    const btnAmount = document.getElementById('btnAmount');

    window.updatePricing = function () {
        if (baseCartTotal === 0) {
            if (amountDisplay) amountDisplay.textContent = "$0.00";
            if (btnAmount) btnAmount.textContent = "$0.00";
            if (calculationDetails) calculationDetails.textContent = "Total × 100%";
            return;
        }

        let paymentMultiplier = 1;
        let scheduleText = "100%";

        paymentRadios.forEach(radio => {
            if (radio.checked) {
                paymentMultiplier = parseFloat(radio.value);
                if (paymentMultiplier === 0.5) scheduleText = "50% Deposit";
            }
        });

        const finalAmount = baseCartTotal * paymentMultiplier;
        const formattedAmount = `$${finalAmount.toFixed(2)}`;

        if (amountDisplay) amountDisplay.textContent = formattedAmount;
        if (btnAmount) btnAmount.textContent = formattedAmount;
        if (calculationDetails) calculationDetails.textContent = `Total × ${scheduleText}`;
    }

    paymentRadios.forEach(radio => radio.addEventListener('change', updatePricing));

    // CHECKOUT VALIDATION
    if (proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener('click', function () {
            if (!validateBookingDetails()) return;
            document.getElementById('booking-cart').style.display = 'none';
            formContainer.style.display = 'block';
            setTimeout(() => { formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        });

        window.validateBookingDetails = function () {
            window.bookingItems = JSON.parse(localStorage.getItem('morixBookingItems')) || [];

            const transferDatesSet = new Set();
            const nonTransferDatesSet = new Set();

            for (let i = 0; i < window.bookingItems.length; i++) {
                let item = window.bookingItems[i];

                if (!item.date || item.date.trim() === '') {
                    showErrorToast('Please select a travel date for ALL packages before proceeding.');
                    return false;
                }

                let isTransfer = (item.name || "").toLowerCase().includes('transfer');

                if (isTransfer) {
                    if (transferDatesSet.has(item.date)) {
                        showErrorToast('Conflict: You have selected the same date for multiple Transfers. Please fix the highlighted red dates.');
                        return false;
                    }
                    transferDatesSet.add(item.date);
                } else {
                    if (nonTransferDatesSet.has(item.date)) {
                        showErrorToast('Conflict: You have selected the same date for multiple Experiences. Please fix the highlighted red dates.');
                        return false;
                    }
                    nonTransferDatesSet.add(item.date);
                }
            }

            return true;
        }

        window.editMyBooking = function () {
            document.getElementById('booking-cart').style.display = 'block';
            formContainer.style.display = 'none';
            document.getElementById('proceedBtnContainer').style.display = 'block';
            const paySec = document.getElementById('paymentSection');
            if (paySec) { paySec.classList.remove('active'); paySec.style.display = 'none'; }
            setTimeout(() => { document.getElementById('booking-cart').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        }
    }

    const proceedBtn = document.getElementById('proceedBtn');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', () => {
            if (document.getElementById('reservationForm').checkValidity()) {
                document.getElementById('proceedBtnContainer').style.display = 'none';
                document.getElementById('paymentSection').style.display = 'block';
                setTimeout(() => { document.getElementById('paymentSection').scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
            } else {
                document.getElementById('reservationForm').reportValidity();
            }
        });
    }

    // --- PAYMENT TABS LOGIC ---
    const tabCard = document.getElementById('tabCard');
    const tabMobile = document.getElementById('tabMobile');
    const cardProviders = document.getElementById('cardProviders');
    const cardTypeBtns = document.querySelectorAll('.card-type-btn');
    const mobileTypeBtns = document.querySelectorAll('.mobile-type-btn');
    const ccFields = document.getElementById('ccFields');
    const paypalFields = document.getElementById('paypalFields');
    const mobileFields = document.getElementById('mobileFields');
    const mobilePaymentMethod = document.getElementById('mobilePaymentMethod');

    if (mobilePaymentMethod) {
        mobilePaymentMethod.addEventListener('change', function () {
            if (this.value === 'mobile') {
                cardProviders.style.display = 'none';
                ccFields.classList.add('hidden'); ccFields.classList.remove('block');
                paypalFields.classList.add('hidden'); paypalFields.classList.remove('block');
                mobileFields.classList.remove('hidden'); mobileFields.classList.add('block');
            } else {
                cardProviders.style.display = 'grid';
                mobileFields.classList.add('hidden'); mobileFields.classList.remove('block');
                const activeCard = document.querySelector('.card-type-btn.active');
                if (activeCard) activeCard.click();
            }
        });
    }

    if (tabCard && tabMobile) {
        tabCard.addEventListener('click', () => {
            tabCard.classList.add('active'); tabMobile.classList.remove('active');
            cardProviders.style.display = 'grid';
            mobileFields.classList.add('hidden'); mobileFields.classList.remove('block');
            const activeCard = document.querySelector('.card-type-btn.active');
            if (activeCard) activeCard.click();
        });

        tabMobile.addEventListener('click', () => {
            tabMobile.classList.add('active'); tabCard.classList.remove('active');
            cardProviders.style.display = 'none';
            ccFields.classList.add('hidden'); ccFields.classList.remove('block');
            paypalFields.classList.add('hidden'); paypalFields.classList.remove('block');
            mobileFields.classList.remove('hidden'); mobileFields.classList.add('block');
        });
    }

    cardTypeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            cardTypeBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const type = e.currentTarget.getAttribute('data-type');
            if (type === 'paypal') {
                ccFields.classList.add('hidden'); ccFields.classList.remove('block');
                paypalFields.classList.remove('hidden'); paypalFields.classList.add('block');
            } else {
                paypalFields.classList.add('hidden'); paypalFields.classList.remove('block');
                ccFields.classList.remove('hidden'); ccFields.classList.add('block');
            }
        });
    });

    mobileTypeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            mobileTypeBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    renderCart();
});
// ==========================================
// OTHER PAGES LOGIC
// ==========================================









// GLOBAL FOOTER GENERATOR
document.addEventListener("DOMContentLoaded", () => {
    const siteFooter = document.createElement("footer");
    siteFooter.className = "bg-[#003C63] text-white pt-16 pb-8 mt-auto w-full";

    siteFooter.innerHTML = `
        <!-- Full‑width container (no max‑width, just even padding) -->
        <div class="w-full px-4 md:px-6 lg:px-8">

            <!-- Responsive grid: 1 → 2 → 3 → 6 columns -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">

                <!-- Column 1: About Morix Beyond -->
                <div class="space-y-4">
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">About Morix Beyond</h3>
                    <p class="text-gray-300 text-sm leading-relaxed font-light">
                        Morix Beyond Zanzibar is a premium tourism and visual storytelling brand based in Zanzibar.
                        We create unforgettable travel experiences across Zanzibar and mainland Tanzania while capturing
                        them through cinematic photography and videography.
                    </p>
                </div>

                <!-- Column 2: Quick Links -->
                <div>
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">Quick Links</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li><a href="index.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Home</a></li>
                        <li><a href="about us.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>About Us</a></li>
                        <li><a href="why us.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Why Us</a></li>
                        <li><a href="contact.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Contact</a></li>
                        <li><a href="fqs.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>FAQ</a></li>
                    </ul>
                </div>

                <!-- Column 3: Zanzibar Experiences -->
                <div>
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">Zanzibar Experiences</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li><a href="zanzibar.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Zanzibar Tours</a></li>
                        <li><a href="watersport.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Water Sports</a></li>
                        <li><a href="snokling.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Snorkeling</a></li>
                        <li><a href="jetSkiAdventure.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Jet Ski Adventure</a></li>
                        <li><a href="private dhow.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Private Dhow</a></li>
                    </ul>
                </div>

                <!-- Column 4: Tanzania Safaris -->
                <div>
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">Tanzania Safaris</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li><a href="tanzania.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Safari Packages</a></li>
                        <li><a href="tanzania1.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Safari Itineraries</a></li>
                        <li><a href="ultimatecombo.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Ultimate Combo</a></li>
                        <li><a href="transfer.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Transfers</a></li>
                        <li><a href="booking.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Book Now</a></li>
                    </ul>
                </div>

                <!-- Column 5: Stays -->
                <div>
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">Stays</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li><a href="stay.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Featured Stays</a></li>
                        <li><a href="zanzibar.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Zanzibar Villas</a></li>
                        <li><a href="tanzania.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Tanzania Lodges</a></li>
                        <li><a href="gallery.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Photo Gallery</a></li>
                        <li><a href="contact.html" class="hover:text-[#F27D57] transition-colors"><i class="fas fa-chevron-right text-xs mr-2 opacity-60"></i>Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 6: Get In Touch (with proper icon boxes) -->
                <div>
                    <h3 class="text-[#F27D57] font-bold uppercase tracking-widest text-sm mb-5">Get In Touch</h3>
                    <div class="flex flex-col gap-4">
                        <!-- WhatsApp -->
                        <a href="https://wa.me/255746319059" target="_blank"
                           class="flex items-center group transition-all duration-300"
                           title="WhatsApp">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#25D366]/10 text-[#25D366] rounded-xl group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                                <i class="fab fa-whatsapp text-xl"></i>
                            </div>
                            <span class="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">+255 746 319 059</span>
                        </a>
                        <!-- Email -->
                        <a href="mailto:morixbeyond@gmail.com"
                           class="flex items-center group transition-all duration-300"
                           title="Email Us">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#F27D57]/10 text-[#F27D57] rounded-xl group-hover:bg-[#F27D57] group-hover:text-white transition-all shadow-sm">
                                <i class="fas fa-envelope text-lg"></i>
                            </div>
                            <span class="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">morixbeyond@gmail.com</span>
                        </a>
                        <!-- Location -->
                        <div class="flex items-center group transition-all duration-300" title="Location">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-xl shadow-sm">
                                <i class="fas fa-map-marker-alt text-lg"></i>
                            </div>
                            <span class="ml-3 text-sm text-gray-300">Zanzibar, Tanzania</span>
                        </div>
                    </div>

                    <!-- Social icons -->
                    <div class="mt-6 flex flex-wrap items-center gap-4 text-gray-300">
                        <a href="#" target="_blank" class="hover:text-[#F27D57] transition-colors" aria-label="Instagram">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" target="_blank" class="hover:text-[#F27D57] transition-colors" aria-label="Twitter">
                            <i class="fab fa-x-twitter text-xl"></i>
                        </a>
                        <a href="#" target="_blank" class="hover:text-[#F27D57] transition-colors" aria-label="Facebook">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" target="_blank" class="hover:text-[#F27D57] transition-colors" aria-label="TikTok">
                            <i class="fab fa-tiktok text-xl"></i>
                        </a>
                    </div>
                </div>

            </div> <!-- end grid -->

            <!-- Bottom bar -->
           <div class="pt-8 mt-8 border-t border-white/10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-300">
                <p class="w-full lg:w-auto text-center lg:text-left">
                    © ${new Date().getFullYear()} MORIX BEYOND ZANZIBAR. All rights reserved.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="privacy.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">
                        Privacy Policy
                    </a>
                     <a href="terms.html" class="text-gray-300 hover:text-[#F27D57] transition-colors">
                        Terms & Conditions
                    </a>
                </div>
                <p class="w-full lg:w-auto text-center lg:text-right">
                    Powered by <span class="text-[#F27D57] font-medium">Africana Tech Ltd</span>
                </p>
            </div>
        </div>

        </div>
    `;
    document.body.appendChild(siteFooter);
});



// ==========================================
// 4. CART INTEGRATION LOGIC
// ==========================================
function getClosestHeadingText(el) {
    const section = el.closest('section, article, main, header, .hero, .page, .content, .relative');
    if (section) {
        const heading = section.querySelector('h1, h2, h3');
        if (heading && heading.textContent.trim()) {
            return heading.textContent.trim();
        }
    }

    const pageHeading = document.querySelector('h1, h2, h3');
    if (pageHeading && pageHeading.textContent.trim()) {
        return pageHeading.textContent.trim();
    }

    const title = document.title.replace(/\s*-\s*.*/g, '').trim();
    return title || 'Booking Item';
}

function isBookingCTALink(link) {
    if (!link || !link.matches('a[href$="booking.html"]')) return false;
    const text = link.textContent || '';
    return /Book\s*Now|Add\s+to\s+My\s+Booking/i.test(text);
}

function rewriteBookingLinkText() {
    document.querySelectorAll('a[href$="booking.html"]').forEach(link => {
        if (!isBookingCTALink(link)) return;
        link.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && /Book\s*Now/i.test(node.textContent)) {
                node.textContent = node.textContent.replace(/Book\s*Now/gi, 'Add to My Booking');
            }
        });
    });
}

window.handleBookingClick = function (experienceName, serviceName, price) {
    if (typeof window.addToBooking === 'function') {
        window.addToBooking(serviceName, price);
    } else {
        console.warn("addToBooking function not found. Ensure script is loaded.");
    }
};

window.bindBookingLinks = function () {
    rewriteBookingLinkText();

    document.body.addEventListener('click', function (event) {
        const el = event.target.closest('[data-booking-name], a[href$="booking.html"]');
        if (!el) return;

        const isBookingPageLink = el.matches('a[href$="booking.html"]');
        if (isBookingPageLink && !isBookingCTALink(el)) return;

        const name = el.dataset.bookingName || (isBookingPageLink ? getClosestHeadingText(el) : '');
        const price = el.dataset.bookingPrice || '';

        if (!name) return;
        if (typeof window.addToBooking !== 'function') {
            if (isBookingPageLink) return;
            console.warn('addToBooking function not found. Ensure script is loaded.');
            return;
        }

        event.preventDefault();
        window.addToBooking(name, price);
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.bindBookingLinks);
} else {
    window.bindBookingLinks();
}






