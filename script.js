/* -------------------------------------------------------------
   TOPSALDO CORE INTERACTION JAVASCRIPT
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // === 1. SERVICES DATA CONFIGURATION ===
    const servicesData = {
        // GAMES
        ml: {
            name: "Mobile Legends",
            desc: "Masukkan User ID & Zone ID. Diamond akan masuk otomatis.",
            type: "game",
            nominals: [
                { id: "ml_86", name: "86 Diamonds", price: 20000 },
                { id: "ml_172", name: "172 Diamonds", price: 40000 },
                { id: "ml_257", name: "257 Diamonds", price: 60000 },
                { id: "ml_344", name: "344 Diamonds", price: 80000 },
                { id: "ml_706", name: "706 Diamonds", price: 160000 },
                { id: "ml_1412", name: "1412 Diamonds", price: 320000 }
            ]
        },
        ff: {
            name: "Free Fire",
            desc: "Masukkan Player ID Free Fire Anda.",
            type: "game",
            nominals: [
                { id: "ff_50", name: "50 Diamonds", price: 8000 },
                { id: "ff_70", name: "70 Diamonds", price: 10000 },
                { id: "ff_140", name: "140 Diamonds", price: 20000 },
                { id: "ff_355", name: "355 Diamonds", price: 50000 },
                { id: "ff_720", name: "720 Diamonds", price: 100000 },
                { id: "ff_1440", name: "1440 Diamonds", price: 200000 }
            ]
        },
        pubg: {
            name: "PUBG Mobile",
            desc: "Masukkan Character ID PUBG Mobile Anda.",
            type: "game",
            nominals: [
                { id: "pubg_60", name: "60 UC", price: 15000 },
                { id: "pubg_325", name: "325 UC", price: 75000 },
                { id: "pubg_660", name: "660 UC", price: 145000 },
                { id: "pubg_1800", name: "1800 UC", price: 370000 },
                { id: "pubg_3850", name: "3850 UC", price: 730000 }
            ]
        },
        genshin: {
            name: "Genshin Impact",
            desc: "Masukkan UID & Server ID Genshin Impact Anda.",
            type: "game",
            nominals: [
                { id: "gi_60", name: "60 Genesis Crystals", price: 16000 },
                { id: "gi_300", name: "330 Genesis Crystals", price: 79000 },
                { id: "gi_980", name: "1090 Genesis Crystals", price: 249000 },
                { id: "gi_1980", name: "2240 Genesis Crystals", price: 479000 },
                { id: "gi_welkin", name: "Welkin Moon (30 Hari)", price: 79000 }
            ]
        },
        valorant: {
            name: "Valorant Points",
            desc: "Masukkan Riot ID + Tagline (Contoh: User#ID).",
            type: "game",
            nominals: [
                { id: "val_375", name: "375 Points", price: 45000 },
                { id: "val_750", name: "750 Points", price: 90000 },
                { id: "val_1650", name: "1650 Points", price: 180000 },
                { id: "val_2850", name: "2850 Points", price: 300000 },
                { id: "val_5800", name: "5800 Points", price: 600000 }
            ]
        },
        // E-WALLETS
        dana: {
            name: "Saldo DANA",
            desc: "Masukkan nomor handphone akun DANA terdaftar Anda.",
            type: "banking",
            nominals: [
                { id: "dana_10", name: "Saldo Rp 10.000", price: 11500 },
                { id: "dana_20", name: "Saldo Rp 20.000", price: 21500 },
                { id: "dana_50", name: "Saldo Rp 50.000", price: 51500 },
                { id: "dana_100", name: "Saldo Rp 100.000", price: 101500 },
                { id: "dana_200", name: "Saldo Rp 200.000", price: 201500 }
            ]
        },
        gopay: {
            name: "Saldo GoPay",
            desc: "Masukkan nomor handphone akun GoPay Anda.",
            type: "banking",
            nominals: [
                { id: "gopay_10", name: "Saldo Rp 10.000", price: 11500 },
                { id: "gopay_20", name: "Saldo Rp 20.000", price: 21500 },
                { id: "gopay_50", name: "Saldo Rp 50.000", price: 51200 },
                { id: "gopay_100", name: "Saldo Rp 100.000", price: 101200 },
                { id: "gopay_200", name: "Saldo Rp 200.000", price: 201200 }
            ]
        },
        ovo: {
            name: "Saldo OVO",
            desc: "Masukkan nomor handphone akun OVO terdaftar Anda.",
            type: "banking",
            nominals: [
                { id: "ovo_20", name: "Saldo Rp 20.000", price: 21500 },
                { id: "ovo_50", name: "Saldo Rp 50.000", price: 51500 },
                { id: "ovo_100", name: "Saldo Rp 100.000", price: 101500 },
                { id: "ovo_200", name: "Saldo Rp 200.000", price: 201500 }
            ]
        },
        shopeepay: {
            name: "Saldo ShopeePay",
            desc: "Masukkan nomor handphone akun ShopeePay Anda.",
            type: "banking",
            nominals: [
                { id: "sp_10", name: "Saldo Rp 10.000", price: 11500 },
                { id: "sp_20", name: "Saldo Rp 20.000", price: 21500 },
                { id: "sp_50", name: "Saldo Rp 50.000", price: 51500 },
                { id: "sp_100", name: "Saldo Rp 100.000", price: 101500 }
            ]
        },
        linkaja: {
            name: "Saldo LinkAja",
            desc: "Masukkan nomor handphone akun LinkAja Anda.",
            type: "banking",
            nominals: [
                { id: "la_10", name: "Saldo Rp 10.000", price: 11200 },
                { id: "la_20", name: "Saldo Rp 20.000", price: 21200 },
                { id: "la_50", name: "Saldo Rp 50.000", price: 51200 },
                { id: "la_100", name: "Saldo Rp 100.000", price: 101200 }
            ]
        }
    };

    // Tracking state
    let activeServiceId = "ml";
    let activeNominalId = "";
    let activeNominalObj = null;

    // === 2. DOM ELEMENTS ===
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const gameGrid = document.getElementById('gameGrid');
    const bankingGrid = document.getElementById('bankingGrid');
    const serviceCards = document.querySelectorAll('.service-card');
    
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
    const paymentRadios = document.getElementsByName('paymentMethod');
    
    // Summary elements
    const summaryService = document.getElementById('summaryService');
    const summaryNominal = document.getElementById('summaryNominal');
    const summaryTotal = document.getElementById('summaryTotal');
    const topupForm = document.getElementById('topupForm');
    
    // Modal elements
    const orderModal = document.getElementById('orderModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const waConfirmBtn = document.getElementById('waConfirmBtn');
    const receiptId = document.getElementById('receiptId');
    const receiptService = document.getElementById('receiptService');
    const receiptTarget = document.getElementById('receiptTarget');
    const receiptNominal = document.getElementById('receiptNominal');
    const receiptPayment = document.getElementById('receiptPayment');
    const receiptTotal = document.getElementById('receiptTotal');

    // === 3. MOBILE NAVIGATION ===
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when navigation links are clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar-container');
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'var(--glass-shadow)';
        }

        // Active link on scroll indicator
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

    // === 4. CATEGORY TABS TOGGLE ===
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'game') {
                gameGrid.classList.add('active');
                bankingGrid.classList.remove('active');
                // Select first game
                selectService("ml");
            } else {
                bankingGrid.classList.add('active');
                gameGrid.classList.remove('active');
                // Select first banking
                selectService("dana");
            }
        });
    });

    // === 5. LAYANAN & NOMINAL SELECTOR ===
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const serviceId = card.getAttribute('data-id');
            selectService(serviceId);
        });
    });

    function selectService(serviceId) {
        // Visual indicator update
        serviceCards.forEach(c => {
            if(c.getAttribute('data-id') === serviceId) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });

        activeServiceId = serviceId;
        const service = servicesData[serviceId];
        
        // Update Title & Details
        selectedServiceName.textContent = service.name;
        selectedServiceDesc.textContent = service.desc;
        summaryService.textContent = service.name;

        // Reset tracking fields
        activeNominalId = "";
        activeNominalObj = null;
        summaryNominal.textContent = "-";
        summaryTotal.textContent = "Rp 0";

        // Toggle Form Inputs based on service type
        if (service.type === 'game') {
            gameInputFields.classList.remove('hide');
            bankingInputFields.classList.add('hide');
            
            userIdInput.setAttribute('required', 'true');
            phoneInput.removeAttribute('required');

            // Custom placeholder details
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
            } else {
                inputLabelTitle.textContent = "Masukkan Player ID";
                zoneIdWrapper.classList.add('hide');
                zoneIdInput.removeAttribute('required');
                userIdInput.placeholder = "Contoh: 8876534211";
            }
        } else {
            // Banking / E-Wallet Input
            gameInputFields.classList.add('hide');
            bankingInputFields.classList.remove('hide');
            
            userIdInput.removeAttribute('required');
            zoneIdInput.removeAttribute('required');
            phoneInput.setAttribute('required', 'true');
            
            inputLabelTitle.textContent = "Masukkan Nomor Handphone Tujuan";
            phoneInput.placeholder = `Contoh: 08123456789 (Akun ${service.name})`;
        }

        // Render Nominals
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

            // Radio change handler
            card.querySelector('input').addEventListener('change', () => {
                activeNominalId = nominal.id;
                activeNominalObj = nominal;
                updateSummary();
            });

            nominalGrid.appendChild(card);
        });
    }

    // Payment methods change trigger price update
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', updateSummary);
    });

    function getAdminFee(method, price) {
        if (method === 'QRIS') {
            return Math.round(price * 0.007); // 0.7% admin
        } else if (method === 'Transfer Bank BCA') {
            return 1000;
        } else {
            return 2500; // Alfamart / Retailer outlet fee
        }
    }

    function updateSummary() {
        if (!activeNominalObj) return;

        // Find active payment
        let paymentMethodValue = 'QRIS';
        paymentRadios.forEach(r => {
            if (r.checked) paymentMethodValue = r.value;
        });

        const price = activeNominalObj.price;
        const fee = getAdminFee(paymentMethodValue, price);
        const total = price + fee;

        summaryNominal.textContent = activeNominalObj.name;
        summaryTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    }

    // Initialize with Mobile Legends selected
    selectService("ml");

    // === 6. FORM SUBMISSION & SUCCESS MODAL ===
    topupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const service = servicesData[activeServiceId];
        let targetAccount = '';

        if (service.type === 'game') {
            if (activeServiceId === 'ml' || activeServiceId === 'genshin') {
                targetAccount = `${userIdInput.value} (${zoneIdInput.value})`;
            } else {
                targetAccount = userIdInput.value;
            }
        } else {
            targetAccount = phoneInput.value;
        }

        // Find active payment
        let paymentMethodValue = 'QRIS';
        paymentRadios.forEach(r => {
            if (r.checked) paymentMethodValue = r.value;
        });

        const totalPayable = activeNominalObj.price + getAdminFee(paymentMethodValue, activeNominalObj.price);
        const randId = 'TS-' + Math.floor(1000000 + Math.random() * 9000000);

        // Populate Modal Fields
        receiptId.textContent = randId;
        receiptService.textContent = service.name;
        receiptTarget.textContent = targetAccount;
        receiptNominal.textContent = activeNominalObj.name;
        receiptPayment.textContent = paymentMethodValue;
        receiptTotal.textContent = `Rp ${totalPayable.toLocaleString('id-ID')}`;

        // Create WhatsApp Message redirect
        const waText = `Halo TopSaldo! Saya ingin mengonfirmasi pembayaran untuk pemesanan top up dengan rincian berikut:%0A%0A` +
            `*ID Transaksi:* ${randId}%0A` +
            `*Layanan:* ${service.name}%0A` +
            `*Data Akun:* ${targetAccount}%0A` +
            `*Nominal:* ${activeNominalObj.name}%0A` +
            `*Metode Pembayaran:* ${paymentMethodValue}%0A` +
            `*Total Tagihan:* Rp ${totalPayable.toLocaleString('id-ID')}%0A%0A` +
            `Tolong bantu diproses ya, terima kasih!`;

        waConfirmBtn.href = `https://wa.me/6281234567890?text=${waText}`;

        // Open Modal Box
        orderModal.classList.remove('hide');
        setTimeout(() => {
            orderModal.classList.add('show');
        }, 10);
    });

    // Close Modal Box
    closeModalBtn.addEventListener('click', closeModal);
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeModal();
        }
    });

    function closeModal() {
        orderModal.classList.remove('show');
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
        slideInterval = setInterval(nextSlide, 5000); // Auto slide 5s
    }

    sliderNextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideShow(); // Reset interval
    });

    sliderPrevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideShow(); // Reset interval
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlideShow();
        });
    });

    // Initialize slides
    startSlideShow();

    // === 8. FAQ ACCORDION ===
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const faqBody = faqItem.querySelector('.faq-body');
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-body').style.maxHeight = null;
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
                // Calculate height dynamically
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";
            }
        });
    });

    // === 9. CONTACT FORM RESPONSE ===
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        alert(`Terima kasih ${name}, pesan Anda telah terkirim! Tim CS TopSaldo dari Kelompok X akan segera menghubungi Anda kembali.`);
        
        contactForm.reset();
    });

    // === 10. SMOOTH ANCHOR SCROLLING ===
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
