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

// 2. INJECT CSS
const style = document.createElement('style');
style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
    
    :root {
        --morix-navy: ${branding.colors.navy};
        --morix-orange: ${branding.colors.orange};
    }

    header { font-family: ${branding.fonts.heading}; }

    /* =========================================
       DESKTOP TOP NAV LINKS
       ========================================= */
    .nav-link-top {
        color: var(--morix-navy);
        font-family: ${branding.fonts.body};
        font-size: 1rem;
        text-transform: uppercase;
        transition: color 0.3s ease;
        position: relative;
        font-weight: 500;
        padding-bottom: 6px; 
    }
    
    .nav-link-top::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--morix-orange);
        transition: width 0.3s ease;
        border-radius: 2px;
    }

    .nav-link-top:hover { color: var(--morix-orange); }
    .nav-link-top:hover::after { width: 100%; }

    /* --- PERMANENT ACTIVE STATE --- */
    .nav-link-top.active {
        color: var(--morix-orange) !important;
        font-weight: 700 !important;
    }
    .nav-link-top.active::after {
        width: 100% !important; 
        background-color: var(--morix-orange) !important;
    }


    /* =========================================
       SECOND NAV BAR
       ========================================= */
    .second-nav-bar { background-color: var(--morix-navy); }

    .nav-link-main {
        color: white;
        font-size: 1.05rem;
        font-weight: 500;
        transition: color 0.3s ease;
        position: relative;
        padding-bottom: 6px;
    }

    .nav-link-main::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--morix-orange);
        transition: width 0.3s ease;
        border-radius: 2px;
    }

    .nav-link-main:hover { color: var(--morix-orange); }
    .nav-link-main:hover::after { width: 100%; }

    /* --- PERMANENT ACTIVE STATE --- */
    .nav-link-main.active {
        color: var(--morix-orange) !important;
        font-weight: 700 !important;
    }
    .nav-link-main.active::after {
        width: 100% !important; 
        background-color: var(--morix-orange) !important;
    }

    /* BOOKING BUTTON STYLE (Desktop) */
    .btn-booking {
        background-color: var(--morix-orange);
        color: white;
        padding: 8px 20px;
        border-radius: 30px;
        font-weight: bold;
        font-style: italic;
        transition: transform 0.3s, background-color 0.3s, color 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px; 
        text-decoration: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
    }
    .btn-booking:hover { 
        transform: scale(1.05);
        background-color: white;
        color: var(--morix-orange); 
    }

    /* THE NUMBER BADGE */
    .booking-badge {
        background-color: var(--morix-navy);
        color: white;
        border-radius: 50%;
        padding: 2px 7px;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 800;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
        transition: 0.3s;
    }
    .btn-booking:hover .booking-badge {
        background-color: var(--morix-orange); 
        color: white;
    }

    /* =========================================
       MOBILE MENU STYLES
       ========================================= */
    #mobile-menu {
        position: absolute;
        top: 100%;
        left: 1rem;
        width: auto;
        min-width: 260px;
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
        transition: 0.3s;
        position: relative;
    }
    
    .mobile-group-2 { background-color: var(--morix-navy); padding: 8px 0; }
    .mobile-group-2 a {
        display: block;
        padding: 12px 24px;
        color: white;
        font-weight: 600;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        transition: 0.3s;
        position: relative;
    }

    /* Mobile Permanent Active Styles */
    .mobile-group-1 a.active {
        color: var(--morix-orange) !important;
        font-weight: 700 !important;
        background-color: rgba(242, 125, 87, 0.05);
        border-left: 4px solid var(--morix-orange);
        padding-left: 20px;
    }
    .mobile-group-2 a.active {
        color: var(--morix-orange) !important;
        font-weight: 700 !important;
        background-color: rgba(255, 255, 255, 0.05);
        border-left: 4px solid var(--morix-orange);
        padding-left: 20px;
    }

    /* Mobile Booking Button */
    .mobile-btn-book {
        background-color: var(--morix-orange) !important;
        color: white !important;
        margin: 10px 20px;
        border-radius: 4px;
        width: auto !important;
        border: none !important;
        display: flex !important;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        text-decoration: none;
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
                <a href="index.html" class="nav-link-top">Home</a>
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
                <a href="about us.html">About Us</a>
                <a href="why us.html">Why Us</a>
                <a href="contact.html">Contact</a>
                <a href="FQS.html">FAQ</a>
                <button id="mobile-login-btn" style="color: var(--morix-navy); font-weight: 700;">Guest Handover</button>
            </div>
            <div class="mobile-group-2">
                <a href="zanzibar.html">Zanzibar Experiences</a>
                <a href="tanzania.html">Tanzania Safaris</a>
                <a href="media.html">Media Services</a>
                <a href="gallery.html">Gallery</a>
                <a href="booking.html" class="mobile-btn-book" id="mobile-booking-btn">
                    <i class="fi fi-rr-shopping-bag"></i> My Booking 
                    <span class="booking-badge mobile-booking-count">0</span>
                </a>
            </div>
        </div>
    </div>

    <div class="hidden lg:block second-nav-bar">
        <div class="container mx-auto flex justify-center items-center py-3 space-x-12">
            <a href="zanzibar.html" class="nav-link-main">Zanzibar Experiences</a>
            <a href="tanzania.html" class="nav-link-main">Tanzania Safaris</a>
            <a href="media.html" class="nav-link-main">Media Services</a>
            <a href="gallery.html" class="nav-link-main">Gallery</a>
            <a href="booking.html" class="btn-booking" id="booking-btn">
                <i class="fi fi-rr-shopping-bag"></i> My Booking 
                <span class="booking-badge desktop-booking-count">0</span>
            </a>
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeaderSystem);
} else {
    initializeHeaderSystem();
}

function initializeHeaderSystem() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const authModal = document.getElementById('auth-modal');
    const loginTriggers = [document.getElementById('login-btn'), document.getElementById('mobile-login-btn')];
    const closeAuth = document.getElementById('close-auth');

    // === NEW FEATURE: BULLETPROOF ACTIVE LINK HIGHLIGHTER ===
    function setActiveLink() {
        // Use decodeURIComponent to fix spaces (e.g. "about%20us.html" becomes "about us.html")
        let path = decodeURIComponent(window.location.pathname);
        let page = path.split('/').pop().split('?')[0]; 
        
        // If we are on the base URL, default to index.html
        if (page === '' || page === '/') {
            page = 'index.html'; 
        }

        const allNavLinks = document.querySelectorAll('.nav-link-top, .nav-link-main, .mobile-group-1 a, .mobile-group-2 a');
        
        allNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Remove active class just to be safe
            link.classList.remove('active');

            // If the href matches the page name perfectly, set it to Active
            if (linkHref && linkHref === page) {
                link.classList.add('active');
            }
        });
    }
    
    // Run the active link function immediately
    setActiveLink();

    // Toggle Mobile Menu
    if(menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Open Modal
    loginTriggers.forEach(trigger => {
        if(trigger) {
            trigger.addEventListener('click', () => {
                authModal.style.display = 'flex';
                mobileMenu.style.display = 'none'; 
            });
        }
    });

    if(closeAuth) {
        closeAuth.addEventListener('click', () => authModal.style.display = 'none');
    }

    window.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.style.display = 'none';
        if (mobileMenu && !mobileMenu.contains(e.target) && e.target !== menuBtn) mobileMenu.style.display = 'none';
    });
}

// ==========================================
// 5. GLOBAL BOOKING CART LOGIC
// ==========================================

let currentBookingCount = parseInt(localStorage.getItem('morixBookingCount')) || 0;

window.updateBookingUI = function() {
    const desktopBadge = document.querySelector('.desktop-booking-count');
    const mobileBadge = document.querySelector('.mobile-booking-count');
    
    if (desktopBadge) desktopBadge.innerText = currentBookingCount;
    if (mobileBadge) mobileBadge.innerText = currentBookingCount;
};

setTimeout(updateBookingUI, 50);

// Global Add To Booking function triggered from Zanzibar, Tanzania, Media pages
window.addToBooking = function(serviceName, price) {
    if (!window.bookingItems) {
        try {
            window.bookingItems = JSON.parse(localStorage.getItem('morixBookingItems')) || [];
            if (!Array.isArray(window.bookingItems)) window.bookingItems = [];
        } catch(e) {
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
    if(btn) {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
    }
    
    showToastNotification(serviceName);
};

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
    window.showErrorToast = function(msg) {
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
    window.updateItemDate = function(index, date) {
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
    window.updateBookingType = function(index, type) {
        window.bookingItems[index].bookingType = type;
        
        if(type === 'couple') {
            window.bookingItems[index].adults = 2; // Lock to 2 for couple
        } else {
            // STRICT RESET: If changing back to 'guest', force the value to 1
            window.bookingItems[index].adults = 1; 
        }
        
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.updateItemAdults = function(index, change) {
        let current = parseInt(window.bookingItems[index].adults) || 1;
        let newVal = current + change;
        if (newVal >= 1 && newVal <= 30) {
            window.bookingItems[index].adults = newVal;
            localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
            renderCart();
        }
    };

    window.setExactAdults = function(index, val) {
        window.bookingItems[index].adults = parseInt(val);
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart();
    };

    window.updateItemVehicle = function(index, vehicle) {
        window.bookingItems[index].vehicle = vehicle;
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart(); 
    };

    window.updateItemTripType = function(index, type) {
        window.bookingItems[index].tripType = type;
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        renderCart(); 
    };

    window.removeFromCart = function(index) {
        window.bookingItems.splice(index, 1);
        localStorage.setItem('morixBookingItems', JSON.stringify(window.bookingItems));
        localStorage.setItem('morixBookingCount', window.bookingItems.length);
        if(typeof currentBookingCount !== 'undefined') currentBookingCount = window.bookingItems.length;
        renderCart();
        if(typeof updateBookingUI === 'function') updateBookingUI();
    }

    // --- RENDERING ENGINE ---
    window.renderCart = function() {
        try {
            window.bookingItems = JSON.parse(localStorage.getItem('morixBookingItems')) || [];
        } catch(e) {
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
                if(item.price && item.price !== 'Enquire') {
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

    window.updatePricing = function() {
        if(baseCartTotal === 0) {
            if(amountDisplay) amountDisplay.textContent = "$0.00";
            if(btnAmount) btnAmount.textContent = "$0.00";
            if(calculationDetails) calculationDetails.textContent = "Total × 100%";
            return;
        }

        let paymentMultiplier = 1; 
        let scheduleText = "100%";
        
        paymentRadios.forEach(radio => {
            if (radio.checked) {
                paymentMultiplier = parseFloat(radio.value);
                if(paymentMultiplier === 0.5) scheduleText = "50% Deposit";
            }
        });

        const finalAmount = baseCartTotal * paymentMultiplier;
        const formattedAmount = `$${finalAmount.toFixed(2)}`;
        
        if(amountDisplay) amountDisplay.textContent = formattedAmount;
        if(btnAmount) btnAmount.textContent = formattedAmount;
        if(calculationDetails) calculationDetails.textContent = `Total × ${scheduleText}`;
    }

    paymentRadios.forEach(radio => radio.addEventListener('change', updatePricing));

    // CHECKOUT VALIDATION
    if(proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener('click', function() {
            if (!validateBookingDetails()) return; 
            document.getElementById('booking-cart').style.display = 'none';
            formContainer.style.display = 'block';
            setTimeout(() => { formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        });

        window.validateBookingDetails = function() {
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

        window.editMyBooking = function() {
            document.getElementById('booking-cart').style.display = 'block';
            formContainer.style.display = 'none';
            document.getElementById('proceedBtnContainer').style.display = 'block';
            const paySec = document.getElementById('paymentSection');
            if (paySec) { paySec.classList.remove('active'); paySec.style.display = 'none'; }
            setTimeout(() => { document.getElementById('booking-cart').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        }
    }

    const proceedBtn = document.getElementById('proceedBtn');
    if(proceedBtn) {
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
        mobilePaymentMethod.addEventListener('change', function() {
            if (this.value === 'mobile') {
                cardProviders.style.display = 'none'; 
                ccFields.classList.add('hidden'); ccFields.classList.remove('block');
                paypalFields.classList.add('hidden'); paypalFields.classList.remove('block');
                mobileFields.classList.remove('hidden'); mobileFields.classList.add('block');
            } else {
                cardProviders.style.display = 'grid'; 
                mobileFields.classList.add('hidden'); mobileFields.classList.remove('block');
                const activeCard = document.querySelector('.card-type-btn.active');
                if(activeCard) activeCard.click(); 
            }
        });
    }

    if(tabCard && tabMobile) {
        tabCard.addEventListener('click', () => {
            tabCard.classList.add('active'); tabMobile.classList.remove('active');
            cardProviders.style.display = 'grid'; 
            mobileFields.classList.add('hidden'); mobileFields.classList.remove('block');
            const activeCard = document.querySelector('.card-type-btn.active');
            if(activeCard) activeCard.click(); 
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






//about us page//
console.log("Morix Beyond Zanzibar - About Us Loaded");
if (window.matchMedia("(min-width: 1024px)").matches) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xMove = (x - rect.width / 2) / 20;
            const yMove = (y - rect.height / 2) / 20;
            card.style.transform = `perspective(1000px) rotateX(${yMove * -1}deg) rotateY(${xMove}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

//team //
const teamData = [
    { name: "Morix | Modest", role: "Founder & Visionary", image: "image/morix 2.jpeg" },
    { name: "Ngalla", role: " Professional Driver", image: "image/driver.jpeg" },
    { name: "Abdul", role: "Expert Tour Guide", image: "image/tourguide.jpeg" },
    { name: "Majalo", role: "Photographer", image: "image/creative.jpeg" },
    { name: "De King", role: "Drone Pilot & Visual Editor", image: "image/dking.jpeg" },
    { name: "Victor", role: "IT", image: "image/victor.png" },
    { name: "Majalo", role: "Creative Director", image: "image/creative.jpeg" },
    { name: "Majalo", role: "Creative Director", image: "image/creative.jpeg" },    
    
];

function renderTeam() {
    const container = document.getElementById('team-grid');
    if (!container) return;

    container.innerHTML = teamData.map((member, index) => `
        <div class="team-card group relative overflow-hidden rounded-xl cursor-pointer service-pop-up" style="transition-delay: ${index * 150}ms">
            <div class="h-80 w-full overflow-hidden bg-gray-200">
                <img src="${member.image}" alt="${member.name}" class="team-card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0">
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0E415E] to-transparent pt-12">
                <h4 class="text-white font-bold text-lg font-serif">${member.name}</h4>
                <p class="text-[#F28E64] text-xs font-bold uppercase tracking-widest">${member.role}</p>
            </div>
            <div class="team-social absolute inset-0 bg-[#0E415E]/90 flex flex-col items-center justify-center text-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="w-16 h-16 rounded-full border-2 border-[#F28E64] p-1 mb-4">
                    <img src="${member.image}" class="w-full h-full rounded-full object-cover">
                </div>
                <h4 class="text-white font-bold text-xl mb-1">${member.name}</h4>
                <p class="text-gray-300 text-sm mb-6">${member.role}</p>
            </div>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', () => { renderTeam(); });

// why choose us & contact us//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    });
});

//GALLERY PAGE//
const photoData = [
    { src: "image/1 (13).jpg", cat: "safari", title: "Lion King" },
    { src: "image/1 (10).jpg", cat: "safari", title: "Ngorongoro Crater" },
    { src: "image/1 (15).jpg", cat: "safari", title: "The Great Migration" },
    { src: "image/1 (19).jpg", cat: "safari", title: "Elephants at Sunset" },
    { src: "image/1 (1).jpg", cat: "beach", title: "Nungwi Turquoise" },
    { src: "image/1 (2).jpg", cat: "beach", title: "Sandbank Relax" },
    { src: "image/1 (9).jpg", cat: "beach", title: "Traditional Dhow" },
    { src: "image/1 (7).jpg", cat: "culture", title: "Stone Town Alleys" },
    { src: "image/1 (6).jpg", cat: "culture", title: "Spice Farm Colors" }
];

const videoData = [
    { src: "image/video.mp4", title: "Safari Adventure" },
    { src: "image/video.mp4", title: "Nungwi Vibes" },
    { src: "image/video.mp4", title: "Nightlife & Music" },
    { src: "image/video.mp4", title: "Romantic Getaway" },
    { src: "image/video.mp4", title: "Aerial Drone View" },
    { src: "image/video.mp4", title: "Luxury Resort Tour" }
];

let activeLightboxList = []; 
let activeIndex = 0; 

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
    
    if(typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
        gsap.fromTo(".gallery-item", {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out"});
    }
}

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

function openLightbox(type, index, filter = 'all') {
    const modal = document.getElementById('lightbox-modal');
    const content = document.getElementById('lightbox-content');
    
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

    modal.classList.remove('hidden');
    setTimeout(() => { 
        modal.style.opacity = '1'; 
        content.style.transform = 'scale(1)';
    }, 10);
    document.body.style.overflow = 'hidden';
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
        imgEl.src = item.src.replace('&w=800', '&w=1600'); 
    }
}

function navigateLightbox(direction) {
    activeIndex += direction;
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
    
    document.body.style.overflow = 'auto';
}

function filterPhotos(category) {
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');
        btn.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
        
        if(btn.dataset.filter === category) {
            btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
            btn.classList.add('active', 'bg-[#003C63]', 'text-white', 'shadow-lg');
        }
    });
    renderPhotos(category);
}

document.addEventListener('DOMContentLoaded', () => {
    renderPhotos('all');
    renderVideos();
});

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
});

// GLOBAL FOOTER GENERATOR
document.addEventListener("DOMContentLoaded", () => {
    const siteFooter = document.createElement("footer");
    siteFooter.className = "bg-[#003C63] text-white pt-16 pb-6 mt-auto";
    
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
                                <i class="fi fi-brands-instagram text-xl w-8"></i><span>Instagram</span>
                            </a>                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-twitter-alt text-xl w-8"></i><span>X (Twitter)</span>
                            </a>                            
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-facebook text-xl w-8"></i><span>Facebook</span>
                            </a>
                            <a href="#" target="_blank" class="text-gray-300 hover:text-[#F27D57] transition-colors flex items-center group">
                                <i class="fi fi-brands-tik-tok text-xl w-8"></i><span>TikTok</span>
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
                                <span class="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Location</span>
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
    document.body.appendChild(siteFooter);
});



//zanzibar//
//zanzibar//
// ==========================================
// 1. DATABASE OF EXPERIENCES 
// ==========================================
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
        shortDesc: "Experience Zanzibar’s most popular beach with exciting water activities.",
        mainDesc: "A white-sand paradise with crystal-clear waters and legendary sunsets — the perfect setting for luxury ocean experiences, captured with professional drone photography and videography.",
        originalPrice: 490, 
        packagePrice: 450,
        packageDesc: "Experience everything Kendwa Beach offers in one discounted ultimate package. Including all the experiences above: <span class='block mt-3 text-white font-bold bg-white/10 p-3 rounded-xl border border-white/20'>Clear Kayak + Jet Car + Jet Ski = <span class='line-through text-white/50 font-normal'>$490</span> <span class='text-[#F27D57] ml-1'>$450</span> <span class='bg-[#F27D57] text-white text-[10px] px-2 py-1 rounded-md ml-2 uppercase tracking-wider'>8% Off</span></span>",
        services: [
            { 
                name: "Zanzibar Clear Kayak", 
                icon: "fi fi-rr-water", 
                desc: "Capture unforgettable moments with our Clear Kayak Drone Photoshoot at Kendwa Beach. Crystal-clear waters, stunning views, and cinematic aerial shots.", 
                options: [
                    { name: "15 mins", price: 35 },
                    { name: "30 mins", price: 65 },
                    { name: "1 hour", price: 125 },
                    { name: "15 mins + Drone", price: 135 }
                ],
                includes: ["Posing guidance", "Photo assistance"], 
                excludes: [],
                transportNote: "",
                priceNote: "All prices are listed per activity and per person or couple, per video."
            },
            { 
                name: "Jet Car Experience", 
                icon: "fi fi-rr-car-side", 
                desc: "Enjoy a thrilling ride on a luxury jet car while our drone records dynamic aerial shots, delivering high-impact content perfect for social media and keepsakes.", 
                options: [
                    { name: "15 mins", price: 110 },
                    { name: "30 mins", price: 200 },
                    { name: "15 mins + Drone", price: 210 }
                ],
                includes: ["Posing guidance", "Photo assistance", "Safety briefing"], 
                excludes: [],
                transportNote: "",
                priceNote: "All prices are listed per activity and per person or couple, per video."
            },
            { 
                name: "Jet Ski Adventure", 
                icon: "fi fi-rr-dashboard", 
                desc: "Race across the ocean with powerful drone footage tracking your movement, combining adrenaline with stunning coastal scenery in cinematic style.", 
                options: [
                    { name: "15 mins", price: 45 },
                    { name: "30 mins", price: 85 },
                    { name: "1 hour", price: 165 },
                    { name: "15 mins + Drone", price: 145 }
                ],
                includes: ["Posing guidance", "Photo assistance", "Safety training", "Life jacket"], 
                excludes: [],
                transportNote: "",
                priceNote: "All prices are listed per activity and per person or couple, per video."
            }
        ]
    },
    {
        id: "safariblue",
        title: "Island Cruise (Safari Blue)",
        category: "cruise",
        badge: "Cruise",
        images: [
            "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Enjoy a full-day island adventure across Zanzibar’s turquoise waters.",
        mainDesc: "Exploring pristine sandbanks, hidden lagoons, and colorful coral reefs. This classic ocean experience includes swimming, snorkeling, relaxing on a natural island, baobab tree exploration and a delicious seafood lunch.",
        services: [
            { 
                name: "Safari Blue Adventure", 
                icon: "fi fi-rr-ship", 
                desc: "Offering the perfect mix of adventure, nature, and island lifestyle.", 
                options: [
                    { name: "Per Person", price: 65 },
                    { name: "Private Dhow (20 pax)", price: 1200 }
                ],
                includes: ["Drinking water & Fruits", "BBQ seafood lunch", "Snorkelling tools", "All entry fees", "Professional tour guide", "Dhow (Sharing/Private)"], 
                excludes: ["Tips", "Items of personal nature", "Money to buy local gifts", "Transport"],
                transportNote: "Transport to departure point can be arranged separately or through us."
            }
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
        shortDesc: "Embark on a guided cultural and island-hopping journey through Zanzibar’s most iconic sites.",
        mainDesc: "Explore Zanzibar’s culture, islands, and local life in one unforgettable day.",
        packagePrice: 165,
        services: [
            { 
                name: "Prison Island Tour", 
                icon: "fi fi-rr-umbrella-beach", 
                desc: "Discover the famous island sanctuary home to Giant Aldabra tortoises and historic ruins, surrounded by crystal-clear waters and scenic ocean views.", 
                options: [{ name: "Per Person", price: 55 }],
                includes: ["Professional tour guide", "All entry fees", "Boat/Dhow"], 
                excludes: ["Transport", "Tips", "Items of personal nature", "Money to buy local gifts"],
                transportNote: "Transport to Stone Town departure point must be booked separately or with us."
            },
            { 
                name: "Nakupenda Sandbank", 
                icon: "fi fi-rr-sun", 
                desc: "Relax on a pristine white sandbank in the middle of turquoise waters. Ideal for swimming, sunbathing and enjoying a peaceful island escape.", 
                options: [{ name: "Per Person", price: 50 }],
                includes: ["Drinking water & Fruits", "BBQ seafood lunch", "Boat/Dhow"], 
                excludes: ["Money to buy local gifts", "Tips", "Items of personal nature", "Transport"],
                transportNote: "Transport to Stone Town departure point must be booked separately or via us."
            },
            { 
                name: "Stone Town Tour", 
                icon: "fi fi-rr-building", 
                desc: "Walk through Zanzibar’s UNESCO-listed old town with a professional guide, exploring Swahili culture, historic landmarks and the famous carved wooden doors.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["Professional tour guide", "All entry fees"], 
                excludes: ["Transport", "Tips", "Items of personal nature", "Money to buy local gifts"],
                transportNote: "Travel to Stone Town departure point must be booked separately or arranged with us."
            },
            { 
                name: "Forodhani Night Market ", 
                icon: "fi fi-rr-moon", 
                desc: "End your day at Zanzibar’s most vibrant night market, tasting local street food and experiencing the lively oceanfront atmosphere.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["Professional tour guide"], 
                excludes: ["Transport", "Money to buy local street food", "Items of personal nature", "Tips"],
                transportNote: "Travel to Stone Town departure point must be booked separately or arranged with us."
            }
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
        shortDesc: "Explore Zanzibar’s highlights: spice farms, forests, a swimming cave, turtles, and a famous lunch at The Rock Restaurant.",
        mainDesc: "Blending spice culture, wildlife, natural swimming caves, a unique turtle experience, and iconic oceanfront dining into one unforgettable adventure.",
        packagePrice: 190,
        services: [
            { 
                name: "Spice Farm Tour", 
                icon: "fi fi-rr-leaf", 
                desc: "Explore Zanzibar’s famous spice plantations and discover cloves, vanilla, nutmeg, and tropical fruits while enjoying the island’s natural aromas and flavors.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["Professional tour guide"], 
                excludes: ["Money to buy local gifts", "Tips", "Transport", "Items of personal nature"],
                transportNote: "Transport to the Spice Farm must be arranged separately or via us."
            },
            { 
                name: "Jozani Forest", 
                icon: "fi fi-rr-tree", 
                desc: "Walk through Zanzibar’s only national park and encounter the rare red colobus monkeys in their natural habitat, surrounded by lush forest and mangrove scenery.", 
                options: [{ name: "Per Person", price: 50 }],
                includes: ["Professional tour guide", "All entry fees"], 
                excludes: ["Money to buy local gifts", "Tips", "Items of personal nature", "Transport"],
                transportNote: "Transport to Jozani Forest must be arranged separately or through us."
            },
            { 
                name: "Maalum Cave", 
                icon: "fi fi-rr-water", 
                desc: "Swim in a crystal-clear underground cave pool formed over thousands of years, offering a peaceful and refreshing escape in a unique natural setting.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["Professional tour guide", "All entry fees"], 
                excludes: ["Tips", "Transport", "Money to buy local gifts", "Items of personal nature"],
                transportNote: "Transport to Maalum cave must be arranged separately or with us."
            },
            { 
                name: "Salaam Cave", 
                icon: "fi fi-rr-water", 
                desc: "Swim alongside sea turtles in a natural cave pool with clear, calm water. This unique experience allows guests to feed and interact closely with these gentle turtles.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["Professional tour guide", "All entry fees"], 
                excludes: ["Transport", "Items of personal nature", "Money to buy local gifts", "Tips"],
                transportNote: "Transport to Salaam Cave must be arranged separately or via us."
            },
            { 
                name: "The Rock Restaurant", 
                icon: "fi fi-rr-restaurant", 
                desc: "Enjoy a meal at Zanzibar’s most iconic oceanfront restaurant, set on a rock in the Indian Ocean and offering unforgettable coastal views and a truly unique dining atmosphere.", 
                options: [{ name: "Per Person", price: 50 }],
                includes: ["All entry fees", "Professional tour guide"], 
                excludes: ["Tips", "Money to buy local gifts", "Items of personal nature", "Transport", "Food & beverages (F&B)"],
                transportNote: "Transport to departure point arranged separately or via us."
            }
        ]
    },
    {
        id: "mariner",
        title: "The Mariner",
        category: "marinelife",
        badge: "marinelife",
        images: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Experience Zanzibar’s marine life and coastal traditions on a curated ocean adventure with unforgettable sailing moments.",
        mainDesc: "Dive into Zanzibar’s marine life with a unique ocean swim near dolphins and a traditional sunset cruise.",
        packagePrice: 120,
        services: [
            { 
                name: "Dolphin Adventure", 
                icon: "fi fi-rr-dolphin", 
                desc: "Swim near dolphins in their natural ocean environment, snorkel crystal waters, explore sandbanks, and meet starfish on this unforgettable marine adventure.", 
                options: [{ name: "Per Person", price: 60 }],
                includes: ["All entry fees", "Snorkelling tools", "Professional tour guide", "Drinking water & Fruits", "Boat/Dhow"], 
                excludes: ["Transport", "Tips", "Items of personal nature", "Money to buy local gifts"],
                transportNote: "Transport from your hotel to the departure point can be booked separately or via us."
            },
            { 
                name: "Swim with Turtles (Baraka aquarium)", 
                icon: "fi fi-rr-turtle", 
                desc: "Enjoy a special swimming experience with sea turtles in calm waters, allowing close interaction with these gentle marine creatures in a safe and controlled setting.", 
                options: [{ name: "Per Person", price: 30 }],
                includes: ["All entry fees", "Professional tour guide"], 
                excludes: ["Tips", "Transport", "Money to buy local gifts", "Items of personal nature"],
                transportNote: "Transport to departure point arranged separately or via us."
            },
            { 
                name: "Sunset Dhow Cruise", 
                icon: "fi fi-rr-sunset", 
                desc: "Glide across the ocean aboard a traditional wooden dhow as the sun sets on the horizon, offering golden views, cool sea breezes, and a truly romantic end to the day.", 
                options: [
                    { name: "Per Person", price: 30 },
                    { name: "Private Dhow (15 pax)", price: 300 }
                ],
                includes: ["Professional tour guide", "Dhow/Boat (Sharing/Private)", "All entry fees", "Drinking water & Fruits"], 
                excludes: ["Transport", "Items of personal nature", "Tips", "Money to buy local gifts"],
                transportNote: "Transport to departure point arranged separately or via us."
            }
        ]
    },
    {
        id: "romantic",
        title: "The Romantic",
        category: "couples",
        badge: "Love",
        images: [
            "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
        ],
        shortDesc: "Celebrate love with intimate proposals and sunset experiences in Zanzibar’s most romantic settings.",
        mainDesc: "Celebrate love in breathtaking settings with intimate, luxurious experiences for couples.",
        packagePrice: 3000,
        services: [
            { 
                name: "Beach Proposal", 
                icon: "fi fi-rr-heart", 
                desc: "A private, tastefully decorated beach setting created especially for your proposal, with ocean views and romantic details to make your “yes” moment truly magical.", 
                options: [{ name: "Per Couple / Video", price: 1000 }],
                includes: ["Beach setup", "Authentic Flower Decoration", "Photo assistance", "Posing guidance", "Videography & photography"], 
                excludes: ["Transport", "Items of personal nature", "Tips"],
                transportNote: "Transport to departure point arranged separately or via us."
            },
            { 
                name: "Flying Dress Photoshoot", 
                icon: "fi fi-rr-camera", 
                desc: "Capture elegant portraits in a cinematic photoshoot with flowing designer dress on stunning coasts.", 
                options: [{ name: "Per Person/Video", price: 500 }],
                includes: ["Dress", "Posing guidance", "Photo assistance", "Videography & photography"], 
                excludes: ["Transport", "Items of personal nature", "Tips"],
                transportNote: "Transport to departure point arranged separately or via us."
            },
            { 
                name: "Traditional Ngalawa Sailing", 
                icon: "fi fi-rr-sailboat", 
                desc: "Sail into the golden hour aboard a traditional ngalawa, enjoying ocean views, cool sea breezes, and an authentic Swahili sailing experience.", 
                options: [{ name: "3 Hour Max", price: 1500 }],
                includes: ["Drinking water & Fruits", "Beer / Wines / Champagne",  "Videography & photography"], 
                excludes: ["Transport", "Tips", "Items of personal nature"],
                transportNote: "Transport to departure point arranged separately or via us."
            }
        ]
    }
];

// ==========================================
// 2. GRID RENDERING & FILTER LOGIC
// ==========================================
let gridIntervals = [];
let modalInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    
    const grid = document.getElementById('experiences-grid');
    
    function renderCards(filter = 'all') {
        if (!grid) return; 
        grid.innerHTML = '';
        
        gridIntervals.forEach(clearInterval);
        gridIntervals = [];

        experiencesDB.forEach(exp => {
            if(filter === 'all' || exp.category === filter) {
                const imageLayers = exp.images.map((img, idx) => 
                    `<img src="${img}" class="slide-${exp.id} absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-110 ${idx === 0 ? 'opacity-100' : 'opacity-0'}">`
                ).join('');

                grid.innerHTML += `
                    <div class="exp-card group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300" onclick="openModal('${exp.id}')">
                        ${imageLayers}
                        <div class="absolute inset-0 bg-gradient-to-t from-[#003C63] via-[#003C63]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        <div class="absolute top-6 left-6 flex gap-2">
                            <span class="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20 flex items-center shadow-lg">
                                <i class="fi fi-rr-star mr-2 text-[#F27D57]"></i> ${exp.badge}
                            </span>
                        </div>
                        <div class="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-3xl font-black text-white mb-2 leading-tight">${exp.title}</h3>
                            <p class="text-gray-300 text-sm mb-6 line-clamp-2">${exp.shortDesc}</p>
                            <button class="w-full bg-white text-[#003C63] font-bold py-4 rounded-xl hover:bg-[#F27D57] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-xl">
                                View Details <i class="fi fi-rr-eye"></i>
                            </button>
                        </div>
                    </div>
                `;
            }
        });

        setTimeout(() => {
            experiencesDB.forEach(exp => {
                if(filter === 'all' || exp.category === filter) {
                    const images = document.querySelectorAll(`.slide-${exp.id}`);
                    if (images.length > 1) {
                        let currentIndex = 0;
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

    // FIXED FILTER BUTTONS LOGIC (Prevents disappearing buttons)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-[#003C63]', 'text-white', 'shadow-lg', 'shadow-[#003C63]/20', 'scale-105');
                b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            });
            const target = e.currentTarget;
            target.classList.add('active', 'bg-[#003C63]', 'text-white', 'shadow-lg', 'shadow-[#003C63]/20', 'scale-105');
            target.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
            renderCards(target.getAttribute('data-filter'));
        });
    });

    // ==========================================
    // 3. FAIL-SAFE MODAL LOGIC 
    // ==========================================
    const modal = document.getElementById('experience-modal');
    const modalCard = document.getElementById('modal-card');
    const modalImgEl = document.getElementById('modal-img');
    
    window.openModal = function(id) {
        const data = experiencesDB.find(x => x.id === id);
        if (!data) return; 
        
        if (modalImgEl) {
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
                    }, 500); 
                }, 3500);
            }
        }

        const titleEl = document.getElementById('modal-title');
        const badgeEl = document.getElementById('modal-badge');
        const aboutTitleEl = document.getElementById('modal-about-title');
        const descEl = document.getElementById('modal-desc');

        if (titleEl) titleEl.textContent = data.title;
        if (badgeEl) badgeEl.textContent = data.badge;
        if (aboutTitleEl) aboutTitleEl.textContent = `About ${data.title}`; 
        if (descEl) descEl.innerHTML = data.mainDesc;

        // ==============================================================
        // BULLETPROOF LOGIC: DYNAMICALLY PLURALIZE "AVAILABLE EXPERIENCE(S)"
        // ==============================================================
        const cardHeadings = document.querySelectorAll('#modal-card h4');
        cardHeadings.forEach(h4 => {
            if (h4.textContent.toLowerCase().includes('available')) {
                h4.textContent = data.services.length === 1 ? "Available Experience" : "Available Experiences";
            }
        });

        let servicesHTML = '';

        servicesHTML += data.services.map(srv => {
            const incHTML = srv.includes.map(i => `<li class="flex items-start gap-1"><span class="text-green-500">✓</span> ${i}</li>`).join('');
            const excHTML = srv.excludes.map(i => `<li class="flex items-start gap-1 text-gray-400"><span>×</span> ${i}</li>`).join('');
            const safeTitle = data.title.replace(/'/g, "\\'");
            const safeSrvName = srv.name.replace(/'/g, "\\'");
            
            const optionsHTML = `
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    ${srv.options.map(opt => `
                        <div class="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200 flex flex-col justify-between h-full hover:border-[#F27D57] hover:shadow-md transition-all">
                            <div class="mb-3">
                                <span class="block font-bold text-[#003C63] text-sm leading-tight mb-1">${opt.name}</span>
                                <span class="block font-black text-[#F27D57] text-xl">$${opt.price.toLocaleString()}</span>
                            </div>
                            <button onclick="handleBookingClick('${safeTitle}', '${safeSrvName} - ${opt.name}', '\$${opt.price}')" class="w-full bg-[#003C63] text-white px-3 py-2.5 rounded-lg font-bold text-xs hover:bg-[#F27D57] transition-all flex items-center justify-center gap-2 mt-auto">
                                Add <i class="fi fi-rr-shopping-cart-add"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;

            return `
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-6">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-full bg-[#003C63]/5 text-[#003C63] flex items-center justify-center text-xl shrink-0">
                            <i class="${srv.icon}"></i>
                        </div>
                        <h5 class="font-bold text-[#003C63] text-xl leading-tight">${srv.name}</h5>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-5 leading-relaxed">${srv.desc}</p>
                    
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

                    ${srv.priceNote ? `
                    <div class="mb-5 bg-[#003C63]/5 border border-[#003C63]/10 text-[#003C63] p-3 rounded-lg text-xs font-bold flex items-start gap-3 shadow-sm">
                        <i class="fi fi-rr-info text-[#F27D57] text-base mt-0.5"></i> 
                        <span class="leading-relaxed tracking-wide">${srv.priceNote}</span>
                    </div>
                    ` : ''}

                    ${srv.transportNote ? `
                    <div class="mb-5 bg-[#003C63]/5 border border-[#003C63]/10 text-[#003C63] p-3 rounded-lg text-xs font-bold flex items-start gap-3 shadow-sm">
                        <i class="fi fi-rr-car-side text-[#F27D57] text-base mt-0.5"></i> 
                        <span class="leading-relaxed tracking-wide">${srv.transportNote}</span>
                    </div>
                    ` : ''}
                    
                    <div class="pt-4 border-t border-gray-100">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Select Option:</p>
                        ${optionsHTML}
                    </div>
                </div>
            `;
        }).join('');

        if (data.services.length > 1 || data.packagePrice) {
            const totalPrice = data.packagePrice || data.services.reduce((sum, srv) => sum + srv.options[0].price, 0);
            
            const packageDesc = data.packageDesc || `Experience everything ${data.title} has to offer in one ultimate booking. Includes all the experiences listed above.`;
            
            const safeTitleAll = data.title.replace(/'/g, "\\'");

            let priceDisplay = `<span class="text-4xl font-black text-[#F27D57]">$${totalPrice.toLocaleString()}</span>`;

            servicesHTML += `
                <div class="bg-[#003C63] text-white p-6 md:p-8 rounded-2xl mt-8 shadow-xl relative overflow-hidden border border-[#003C63]/50">
                    <div class="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                        <i class="fi fi-rr-star text-9xl"></i>
                    </div>
                    <div class="relative z-10 block w-full">
                        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 pb-6 border-b border-white/20">
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold mb-2">Book the Full Experience</h4>
                                <p class="text-white/80 text-sm leading-relaxed max-w-lg">
                                    ${packageDesc}
                                </p>
                            </div>
                            <div class="text-left md:text-right shrink-0">
                                ${priceDisplay}
                            </div>
                        </div>

                        <div class="flex w-full">
                            <button onclick="handleBookingClick('${safeTitleAll}', 'Full Experience', '\$${totalPrice}')" class="w-full bg-[#F27D57] hover:bg-white hover:text-[#003C63] text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F27D57]/20">
                                <i class="fi fi-rr-shopping-cart-add text-xl"></i> Add Full Experience to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        const servicesListEl = document.getElementById('modal-services-list');
        if (servicesListEl) servicesListEl.innerHTML = servicesHTML;

        if (modal && modalCard) {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalCard.classList.remove('scale-90', 'opacity-0');
                modalCard.classList.add('scale-100', 'opacity-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    };

    function closeModal() {
        if(modalInterval) clearInterval(modalInterval);
        if (modalCard && modal) {
            modalCard.classList.remove('scale-100', 'opacity-100');
            modalCard.classList.add('scale-90', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                if(modalImgEl) modalImgEl.style.opacity = '1'; 
            }, 300);
            document.body.style.overflow = 'auto';
        }
    }

    const closeBtnTop = document.getElementById('close-modal');
    const closeBtnBottom = document.getElementById('close-modal-bottom');
    const backdrop = document.getElementById('modal-backdrop');

    if (closeBtnTop) closeBtnTop.addEventListener('click', closeModal);
    if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
});

// ==========================================
// 4. CART INTEGRATION LOGIC
// ==========================================
window.handleBookingClick = function(experienceName, serviceName, price) {
    if (typeof window.addToBooking === 'function') {
        window.addToBooking(serviceName, price);
    } else {
        console.warn("addToBooking function not found. Ensure script is loaded.");
    }
};




//tranferr//
document.addEventListener('DOMContentLoaded', () => {
    const transferTabs = document.querySelectorAll('.transfer-tab');
    const transferGrids = document.querySelectorAll('.transfer-grid');

    transferTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            // 1. Reset all tabs styling
            transferTabs.forEach(t => {
                t.classList.remove('bg-[#003C63]', 'text-white', 'shadow-lg', 'hover:shadow-xl');
                t.classList.add('bg-gray-50', 'text-[#003C63]', 'border-gray-200', 'hover:bg-gray-100');
            });

            // 2. Set active tab styling
            tab.classList.remove('bg-gray-50', 'text-[#003C63]', 'border-gray-200', 'hover:bg-gray-100');
            tab.classList.add('bg-[#003C63]', 'text-white', 'shadow-lg', 'hover:shadow-xl');

            // 3. Toggle Grid Visibility with Animation
            const targetId = tab.getAttribute('data-target');
            transferGrids.forEach(grid => {
                if (grid.id === targetId) {
                    grid.classList.remove('hidden');
                    grid.classList.add('block');
                    
                    // Reset and trigger CSS animation
                    grid.classList.remove('fade-up-anim');
                    void grid.offsetWidth; // Trigger reflow
                    grid.classList.add('fade-up-anim');
                } else {
                    grid.classList.add('hidden');
                    grid.classList.remove('block');
                }
            });
        });
    });
});

// safaris