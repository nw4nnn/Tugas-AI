/* -------------------------------------------------------------
   NAGA SHOP CORE CYBERPUNK INTERACTION JAVASCRIPT
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // === 1. SERVICES DATA CONFIGURATION (18 Items) ===
    const servicesData = {
        // GAMES
        ml: {
            name: "Mobile Legends",
            desc: "Masukkan User ID & Zone ID. Diamond diproses otomatis.",
            category: "game",
            nominals: [
                { id: "ml_86", name: "86 Diamonds", price: 19800 },
                { id: "ml_172", name: "172 Diamonds", price: 39500 },
                { id: "ml_257", name: "257 Diamonds", price: 59000 },
                { id: "ml_344", name: "344 Diamonds", price: 78500 },
                { id: "ml_706", name: "706 Diamonds", price: 156000 },
                { id: "ml_1412", name: "1412 Diamonds", price: 312000 }
            ]
        },
        ff: {
            name: "Free Fire",
            desc: "Masukkan Player ID Free Fire Anda.",
            category: "game",
            nominals: [
                { id: "ff_50", name: "50 Diamonds", price: 7900 },
                { id: "ff_70", name: "70 Diamonds", price: 9800 },
                { id: "ff_140", name: "140 Diamonds", price: 19500 },
                { id: "ff_355", name: "355 Diamonds", price: 48500 },
                { id: "ff_720", name: "720 Diamonds", price: 96000 },
                { id: "ff_1440", name: "1440 Diamonds", price: 192000 }
            ]
        },
        pubg: {
            name: "PUBG Mobile",
            desc: "Masukkan Character ID PUBG Mobile Anda.",
            category: "game",
            nominals: [
                { id: "pubg_60", name: "60 UC", price: 14500 },
                { id: "pubg_325", name: "325 UC", price: 72000 },
                { id: "pubg_660", name: "660 UC", price: 139000 },
                { id: "pubg_1800", name: "1800 UC", price: 355000 },
                { id: "pubg_3850", name: "3850 UC", price: 698000 }
            ]
        },
        hok: {
            name: "Honor of Kings",
            desc: "Masukkan User ID Honor of Kings Anda.",
            category: "game",
            nominals: [
                { id: "hok_80", name: "80 Tokens", price: 15500 },
                { id: "hok_240", name: "240 Tokens", price: 46000 },
                { id: "hok_400", name: "400 Tokens", price: 77000 },
                { id: "hok_800", name: "800 Tokens", price: 152000 },
                { id: "hok_1200", name: "1200 Tokens", price: 228000 },
                { id: "hok_2400", name: "2400 Tokens", price: 450000 }
            ]
        },
        genshin: {
            name: "Genshin Impact",
            desc: "Masukkan UID & Server ID Genshin Impact Anda.",
            category: "game",
            nominals: [
                { id: "gi_60", name: "60 Genesis Crystals", price: 15800 },
                { id: "gi_300", name: "330 Genesis Crystals", price: 77500 },
                { id: "gi_980", name: "1090 Genesis Crystals", price: 242000 },
                { id: "gi_1980", name: "2240 Genesis Crystals", price: 465000 },
                { id: "gi_welkin", name: "Welkin Moon (30 Hari)", price: 77500 }
            ]
        },
        valorant: {
            name: "Valorant Points",
            desc: "Masukkan Riot ID + Tagline (Contoh: User#TAG).",
            category: "game",
            nominals: [
                { id: "val_375", name: "375 Points", price: 44000 },
                { id: "val_750", name: "750 Points", price: 87000 },
                { id: "val_1650", name: "1650 Points", price: 175000 },
                { id: "val_2850", name: "2850 Points", price: 292000 },
                { id: "val_5800", name: "5800 Points", price: 585000 }
            ]
        },
        codm: {
            name: "Call of Duty Mobile",
            desc: "Masukkan Open ID Call of Duty Mobile Anda.",
            category: "game",
            nominals: [
                { id: "codm_31", name: "31 CP", price: 5000 },
                { id: "codm_63", name: "63 CP", price: 10000 },
                { id: "codm_128", name: "128 CP", price: 20000 },
                { id: "codm_320", name: "320 CP", price: 50000 },
                { id: "codm_643", name: "643 CP", price: 100000 },
                { id: "codm_1286", name: "1286 CP", price: 200000 }
            ]
        },
        roblox: {
            name: "Roblox Robux",
            desc: "Masukkan Username Roblox Anda.",
            category: "game",
            nominals: [
                { id: "rb_80", name: "80 Robux", price: 15500 },
                { id: "rb_160", name: "160 Robux", price: 31000 },
                { id: "rb_400", name: "400 Robux", price: 75500 },
                { id: "rb_800", name: "800 Robux", price: 149000 },
                { id: "rb_1700", name: "1700 Robux", price: 308000 }
            ]
        },
        // E-WALLETS
        dana: {
            name: "DANA",
            desc: "Masukkan nomor handphone akun DANA terdaftar Anda.",
            category: "banking",
            nominals: [
                { id: "dana_10", name: "Saldo Rp 10.000", price: 10400 },
                { id: "dana_20", name: "Saldo Rp 20.000", price: 20400 },
                { id: "dana_50", name: "Saldo Rp 50.000", price: 50400 },
                { id: "dana_100", name: "Saldo Rp 100.000", price: 100400 },
                { id: "dana_200", name: "Saldo Rp 200.000", price: 200400 }
            ]
        },
        ovo: {
            name: "OVO",
            desc: "Masukkan nomor handphone akun OVO terdaftar Anda.",
            category: "banking",
            nominals: [
                { id: "ovo_20", name: "Saldo Rp 20.000", price: 20500 },
                { id: "ovo_50", name: "Saldo Rp 50.000", price: 50500 },
                { id: "ovo_100", name: "Saldo Rp 100.000", price: 100500 },
                { id: "ovo_200", name: "Saldo Rp 200.000", price: 200500 }
            ]
        },
        gopay: {
            name: "GoPay",
            desc: "Masukkan nomor handphone akun GoPay Anda.",
            category: "banking",
            nominals: [
                { id: "gopay_10", name: "Saldo Rp 10.000", price: 10300 },
                { id: "gopay_20", name: "Saldo Rp 20.000", price: 20300 },
                { id: "gopay_50", name: "Saldo Rp 50.000", price: 50100 },
                { id: "gopay_100", name: "Saldo Rp 100.000", price: 100100 },
                { id: "gopay_200", name: "Saldo Rp 200.000", price: 200100 }
            ]
        },
        shopeepay: {
            name: "ShopeePay",
            desc: "Masukkan nomor handphone akun ShopeePay Anda.",
            category: "banking",
            nominals: [
                { id: "sp_10", name: "Saldo Rp 10.000", price: 10500 },
                { id: "sp_20", name: "Saldo Rp 20.000", price: 20500 },
                { id: "sp_50", name: "Saldo Rp 50.000", price: 50500 },
                { id: "sp_100", name: "Saldo Rp 100.000", price: 100500 }
            ]
        },
        linkaja: {
            name: "LinkAja",
            desc: "Masukkan nomor handphone akun LinkAja Anda.",
            category: "banking",
            nominals: [
                { id: "la_10", name: "Saldo Rp 10.000", price: 10200 },
                { id: "la_20", name: "Saldo Rp 20.000", price: 20200 },
                { id: "la_50", name: "Saldo Rp 50.000", price: 50200 },
                { id: "la_100", name: "Saldo Rp 100.000", price: 100200 }
            ]
        },
        seabank: {
            name: "SeaBank",
            desc: "Masukkan nomor rekening SeaBank tujuan transfer.",
            category: "banking",
            nominals: [
                { id: "sb_25", name: "Transfer Rp 25.000", price: 25000 },
                { id: "sb_50", name: "Transfer Rp 50.000", price: 50000 },
                { id: "sb_100", name: "Transfer Rp 100.000", price: 100000 },
                { id: "sb_250", name: "Transfer Rp 250.000", price: 250000 }
            ]
        },
        bca: {
            name: "BCA Mobile",
            desc: "Masukkan nomor rekening BCA tujuan transfer.",
            category: "banking",
            nominals: [
                { id: "bca_25", name: "Transfer Rp 25.000", price: 25000 },
                { id: "bca_50", name: "Transfer Rp 50.000", price: 50000 },
                { id: "bca_100", name: "Transfer Rp 100.000", price: 100000 },
                { id: "bca_250", name: "Transfer Rp 250.000", price: 250000 }
            ]
        },
        brimo: {
            name: "BRImo",
            desc: "Masukkan nomor rekening BRI tujuan transfer.",
            category: "banking",
            nominals: [
                { id: "bri_25", name: "Transfer Rp 25.000", price: 25000 },
                { id: "bri_50", name: "Transfer Rp 50.000", price: 50000 },
                { id: "bri_100", name: "Transfer Rp 100.000", price: 100000 },
                { id: "bri_250", name: "Transfer Rp 250.000", price: 250000 }
            ]
        },
        mandiri: {
            name: "Livin' by Mandiri",
            desc: "Masukkan nomor rekening Mandiri tujuan transfer.",
            category: "banking",
            nominals: [
                { id: "man_25", name: "Transfer Rp 25.000", price: 25000 },
                { id: "man_50", name: "Transfer Rp 50.000", price: 50000 },
                { id: "man_100", name: "Transfer Rp 100.000", price: 100000 },
                { id: "man_250", name: "Transfer Rp 250.000", price: 250000 }
            ]
        },
        bni: {
            name: "BNI Mobile Banking",
            desc: "Masukkan nomor rekening BNI tujuan transfer.",
            category: "banking",
            nominals: [
                { id: "bni_25", name: "Transfer Rp 25.000", price: 25000 },
                { id: "bni_50", name: "Transfer Rp 50.000", price: 50000 },
                { id: "bni_100", name: "Transfer Rp 100.000", price: 100000 },
                { id: "bni_250", name: "Transfer Rp 250.000", price: 250000 }
            ]
        }
    };

    // Tracking state
    let activeServiceId = "ml";
    let activeNominalId = "";
    let activeNominalObj = null;
    let selectedCategoryFilter = "all";
    let countdownInterval = null;

    // === 2. DOM ELEMENTS ===
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const serviceSearch = document.getElementById('serviceSearch');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const servicesGrid = document.getElementById('servicesGrid');
    const serviceCards = document.querySelectorAll('.service-card');
    const emptyResult = document.getElementById('emptyResult');
    
    // Form elements
    const selectedServiceName = document.getElementById('selectedServiceName');
    const selectedServiceDesc = document.getElementById('selectedServiceDesc');
    const inputLabelTitle = document.getElementById('inputLabelTitle');
    const gameInputFields = document.getElementById('gameInputFields');
    const bankingInputFields = document.getElementById('bankingInputFields');
    const zoneIdWrapper = document.getElementById('zoneIdWrapper');
    const userIdInput = document.getElementById('userIdInput');
    const zoneIdInput = document.getElementById('zoneIdInput');
    const phoneInput = document.getElementById('phoneInput');
    const nominalGrid = document.getElementById('nominalGrid');
    
    // Summary elements
    const summaryService = document.getElementById('summaryService');
    const summaryNominal = document.getElementById('summaryNominal');
    const summaryTotal = document.getElementById('summaryTotal');
    const topupForm = document.getElementById('topupForm');
    
    // Modal elements
    const orderModal = document.getElementById('orderModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
    const successCloseBtn = document.getElementById('successCloseBtn');
    const modalHeaderSection = document.getElementById('modalHeaderSection');
    const modalMainContent = document.getElementById('modalMainContent');
    const verificationScreen = document.getElementById('verificationScreen');
    const successScreen = document.getElementById('successScreen');
    const receiptService = document.getElementById('receiptService');
    const receiptTarget = document.getElementById('receiptTarget');
    const receiptNominal = document.getElementById('receiptNominal');
    const receiptTotal = document.getElementById('receiptTotal');
    const countdownTimer = document.getElementById('countdownTimer');
    const paymentStatusText = document.getElementById('paymentStatusText');
    const statusDot = document.getElementById('statusDot');
    const qrisContainer = document.getElementById('qrisContainer');

    // === 3. MOBILE NAVIGATION ===
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background change & active indicator on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar-container');
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
        }

        let current = '';
        const sections = document.querySelectorAll('section, header');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // === 4. REAL-TIME SEARCH & CATEGORY FILTERING ===
    function filterServices() {
        const searchQuery = serviceSearch.value.toLowerCase().trim();
        let visibleCount = 0;

        serviceCards.forEach(card => {
            const serviceId = card.getAttribute('data-id');
            const serviceName = card.getAttribute('data-name').toLowerCase();
            const serviceCat = card.getAttribute('data-category');

            const matchesSearch = serviceName.includes(searchQuery);
            const matchesCategory = selectedCategoryFilter === 'all' || serviceCat === selectedCategoryFilter;

            if (matchesSearch && matchesCategory) {
                card.classList.remove('hide');
                visibleCount++;
            } else {
                card.classList.add('hide');
            }
        });

        // Toggle Empty Result Placeholder
        if (visibleCount === 0) {
            emptyResult.classList.remove('hide');
            servicesGrid.style.display = 'none';
        } else {
            emptyResult.classList.add('hide');
            servicesGrid.style.display = 'grid';
        }
    }

    // Search input typing listener
    serviceSearch.addEventListener('input', filterServices);

    // Tab buttons click listeners
    filterTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            filterTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            selectedCategoryFilter = btn.getAttribute('data-filter');
            filterServices();

            // Auto-select first visible item
            const firstVisibleCard = Array.from(serviceCards).find(card => !card.classList.contains('hide'));
            if (firstVisibleCard) {
                const serviceId = firstVisibleCard.getAttribute('data-id');
                selectService(serviceId);
            }
        });
    });

    // === 5. SERVICE & NOMINAL SELECTION ===
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-id');
            selectService(serviceId);
            
            // Smooth scroll to the order form panel
            const orderPanel = document.querySelector('.order-widget-panel');
            if (orderPanel) {
                window.scrollTo({
                    top: orderPanel.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    function selectService(serviceId) {
        // Update selection styling
        serviceCards.forEach(c => {
            if (c.getAttribute('data-id') === serviceId) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });

        activeServiceId = serviceId;
        const service = servicesData[serviceId];
        
        // Update titles and details
        selectedServiceName.textContent = service.name;
        selectedServiceDesc.textContent = service.desc;
        summaryService.textContent = service.name;

        // Reset inputs
        activeNominalId = "";
        activeNominalObj = null;
        summaryNominal.textContent = "-";
        summaryTotal.textContent = "Rp 0";

        // Dynamic input fields
        if (service.category === 'game') {
            gameInputFields.classList.remove('hide');
            bankingInputFields.classList.add('hide');
            
            userIdInput.setAttribute('required', 'true');
            phoneInput.removeAttribute('required');

            if (serviceId === 'ml') {
                inputLabelTitle.textContent = "Masukkan User ID & Zone ID";
                zoneIdWrapper.classList.remove('hide');
                zoneIdInput.setAttribute('required', 'true');
                userIdInput.placeholder = "Contoh: 12345678";
                zoneIdInput.placeholder = "Contoh: (1234)";
            } else if (serviceId === 'genshin') {
                inputLabelTitle.textContent = "Masukkan UID & Server ID";
                zoneIdWrapper.classList.remove('hide');
                zoneIdInput.setAttribute('required', 'true');
                userIdInput.placeholder = "Contoh: 817654321";
                zoneIdInput.placeholder = "Asia / America / Europe";
            } else if (serviceId === 'valorant') {
                inputLabelTitle.textContent = "Masukkan Riot ID & Tagline";
                zoneIdWrapper.classList.remove('hide');
                zoneIdInput.setAttribute('required', 'true');
                userIdInput.placeholder = "Contoh: NagaShop";
                zoneIdInput.placeholder = "Contoh: #ID";
            } else {
                inputLabelTitle.textContent = "Masukkan Player ID";
                zoneIdWrapper.classList.add('hide');
                zoneIdInput.removeAttribute('required');
                userIdInput.placeholder = "Contoh: 8876534211";
            }
        } else {
            // E-Wallets / Banks
            gameInputFields.classList.add('hide');
            bankingInputFields.classList.remove('hide');
            
            userIdInput.removeAttribute('required');
            zoneIdInput.removeAttribute('required');
            phoneInput.setAttribute('required', 'true');
            
            if (serviceId === 'seabank' || serviceId === 'bca' || serviceId === 'brimo' || serviceId === 'mandiri' || serviceId === 'bni') {
                inputLabelTitle.textContent = "Masukkan Nomor Rekening";
                phoneInput.placeholder = `Ketik nomor rekening ${service.name} Anda`;
            } else {
                inputLabelTitle.textContent = "Masukkan Nomor Handphone Diterima";
                phoneInput.placeholder = `Contoh: 0812XXXXXXXX (Nomor ${service.name})`;
            }
        }

        renderNominals(service.nominals);
    }

    function renderNominals(nominals) {
        nominalGrid.innerHTML = '';
        
        nominals.forEach((nominal, index) => {
            const card = document.createElement('label');
            card.className = 'nominal-card';
            
            const isChecked = index === 0 ? 'checked' : '';
            if (index === 0) {
                activeNominalId = nominal.id;
                activeNominalObj = nominal;
                updateSummary();
            }

            card.innerHTML = `
                <input type="radio" name="nominalOption" value="${nominal.id}" ${isChecked}>
                <span class="nominal-details">
                    <strong>${nominal.name}</strong>
                    <span>Rp ${nominal.price.toLocaleString('id-ID')}</span>
                </span>
            `;

            card.querySelector('input').addEventListener('change', () => {
                activeNominalId = nominal.id;
                activeNominalObj = nominal;
                updateSummary();
            });

            nominalGrid.appendChild(card);
        });
    }

    function updateSummary() {
        if (!activeNominalObj) return;

        const total = activeNominalObj.price; // Admin fee 0%

        summaryNominal.textContent = activeNominalObj.name;
        summaryTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    }

    // Default Select Mobile Legends
    selectService("ml");

    // === 6. QRIS CASHIER MODAL & COUNTDOWN TIMER ===
    topupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const service = servicesData[activeServiceId];
        let targetAccount = '';

        if (service.category === 'game') {
            if (activeServiceId === 'ml' || activeServiceId === 'genshin' || activeServiceId === 'valorant') {
                targetAccount = `${userIdInput.value} ${zoneIdInput.value}`;
            } else {
                targetAccount = userIdInput.value;
            }
        } else {
            targetAccount = phoneInput.value;
        }

        const totalPayable = activeNominalObj.price;

        // Reset screen states
        modalHeaderSection.classList.remove('hide');
        modalMainContent.classList.remove('hide');
        verificationScreen.classList.add('hide');
        successScreen.classList.add('hide');

        // Reset modal main state
        paymentStatusText.textContent = "Menunggu Pembayaran";
        paymentStatusText.style.color = "#f59e0b";
        statusDot.style.backgroundColor = "#f59e0b";
        qrisContainer.classList.remove('hide');
        confirmPaymentBtn.classList.remove('hide');

        // Populate Modal Fields
        receiptService.textContent = service.name;
        receiptTarget.textContent = targetAccount;
        receiptNominal.textContent = activeNominalObj.name;
        receiptTotal.textContent = `Rp ${totalPayable.toLocaleString('id-ID')}`;

        // Start Countdown Timer (15 Minutes)
        startCountdown(15 * 60);

        // Show Modal
        orderModal.classList.remove('hide');
        document.body.classList.add('modal-open');
        setTimeout(() => {
            orderModal.classList.add('show');
        }, 10);
    });

    function startCountdown(seconds) {
        clearInterval(countdownInterval);
        
        let timeLeft = seconds;
        
        function tick() {
            let mins = Math.floor(timeLeft / 60);
            let secs = timeLeft % 60;
            
            mins = mins < 10 ? '0' + mins : mins;
            secs = secs < 10 ? '0' + secs : secs;
            
            countdownTimer.textContent = `${mins}:${secs}`;
            
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                paymentStatusText.textContent = "Pembayaran Kedaluwarsa";
                paymentStatusText.style.color = "#ef4444";
                statusDot.style.backgroundColor = "#ef4444";
                confirmPaymentBtn.classList.add('hide');
            }
            timeLeft--;
        }
        
        tick();
        countdownInterval = setInterval(tick, 1000);
    }

    // Confirm Payment Simulation Button Clicked
    confirmPaymentBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        
        // Hide main header and cashier content
        modalHeaderSection.classList.add('hide');
        modalMainContent.classList.add('hide');
        
        // Show loading verification screen
        verificationScreen.classList.remove('hide');
        
        // Simulate verification processing time (3.5 seconds)
        setTimeout(() => {
            verificationScreen.classList.add('hide');
            successScreen.classList.remove('hide');
        }, 3500);
    });

    // Close Modal Box
    modalCloseBtn.addEventListener('click', closeModal);
    cancelPaymentBtn.addEventListener('click', closeModal);
    successCloseBtn.addEventListener('click', closeModal);

    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeModal();
        }
    });

    function closeModal() {
        clearInterval(countdownInterval);
        orderModal.classList.remove('show');
        document.body.classList.remove('modal-open');
        setTimeout(() => {
            orderModal.classList.add('hide');
        }, 300);
    }

    // === 7. TESTIMONIAL SLIDER ===
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const sliderPrevBtn = document.getElementById('sliderPrevBtn');
    const sliderNextBtn = document.getElementById('sliderNextBtn');
    
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        currentSlide = (index + testimonials.length) % testimonials.length;
        testimonials[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4500); // Autoplay slide 4.5s
    }

    sliderNextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideShow();
    });

    sliderPrevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideShow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlideShow();
        });
    });

    // Run autoplay testimonial slides
    startSlideShow();

    // === 8. FAQ ACCORDION ===
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const faqBody = faqItem.querySelector('.faq-body');
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-body').style.maxHeight = null;
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";
            }
        });
    });

    // === 9. CONTACT FORM SUBMISSION ===
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        alert(`Terima kasih ${name}, pesan Anda telah terkirim! Tim Support NAGA SHOP dari kelompok Naga Hitam akan segera menghubungi Anda kembali.`);
        
        contactForm.reset();
    });

    // === 10. SMOOTH SCROLL REVEAL (IntersectionObserver) ===
    const revealSections = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // Smooth navigation anchor links scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});
