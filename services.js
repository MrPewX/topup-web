/* ========================================
   TOKO KITA - Services Data & Logic
   (Pulsa, PLN, E-Wallet)
   ======================================== */

// ============ TELECOM PROVIDERS ============
const TELECOM_PROVIDERS = [
    {
        id: 'telkomsel',
        name: 'Telkomsel',
        gradient: 'linear-gradient(135deg, #b71c1c, #e53935)',
        accentColor: '#e53935',
        logoText: 'T',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP Telkomsel',
        inputPlaceholder: 'Contoh: 0812xxxxxxxx'
    },
    {
        id: 'indosat',
        name: 'Indosat Ooredoo',
        gradient: 'linear-gradient(135deg, #1a237e, #283593)',
        accentColor: '#fdd835',
        logoText: 'IM3',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP Indosat',
        inputPlaceholder: 'Contoh: 0816xxxxxxxx'
    },
    {
        id: 'xl',
        name: 'XL Axiata',
        gradient: 'linear-gradient(135deg, #003d99, #1565c0)',
        accentColor: '#1976d2',
        logoText: 'XL',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP XL',
        inputPlaceholder: 'Contoh: 0818xxxxxxxx'
    },
    {
        id: 'axis',
        name: 'Axis',
        gradient: 'linear-gradient(135deg, #6a1b9a, #9c27b0)',
        accentColor: '#ab47bc',
        logoText: 'AXIS',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP Axis',
        inputPlaceholder: 'Contoh: 0838xxxxxxxx'
    },
    {
        id: 'byu',
        name: 'by.U',
        gradient: 'linear-gradient(135deg, #4527a0, #7c4dff)',
        accentColor: '#7c4dff',
        logoText: 'by.U',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP by.U',
        inputPlaceholder: 'Contoh: 0851xxxxxxxx'
    },
    {
        id: 'smartfren',
        name: 'Smartfren',
        gradient: 'linear-gradient(135deg, #c62828, #ef5350)',
        accentColor: '#ef5350',
        logoText: 'SF',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP Smartfren',
        inputPlaceholder: 'Contoh: 0882xxxxxxxx'
    },
    {
        id: 'three',
        name: 'Three (Tri)',
        gradient: 'linear-gradient(135deg, #00695c, #26a69a)',
        accentColor: '#26a69a',
        logoText: '3',
        services: [
            { id: 'pulsa', name: 'Pulsa Reguler', icon: 'fa-money-bill-wave' },
            { id: 'data', name: 'Paket Data', icon: 'fa-wifi' },
            { id: 'telepon', name: 'Paket Telepon', icon: 'fa-phone' }
        ],
        inputLabel: 'Nomor HP Three',
        inputPlaceholder: 'Contoh: 0896xxxxxxxx'
    }
];

// ============ PLN SERVICES ============
const PLN_SERVICES = [
    {
        id: 'token-pln',
        name: 'Token PLN',
        gradient: 'linear-gradient(135deg, #0d47a1, #1976d2)',
        accentColor: '#42a5f5',
        logoText: '⚡',
        inputLabel: 'No. Meter / ID Pelanggan',
        inputPlaceholder: 'Masukkan No. Meter / ID Pelanggan PLN'
    },
    {
        id: 'tagihan-listrik',
        name: 'Tagihan Listrik',
        gradient: 'linear-gradient(135deg, #e65100, #ff9800)',
        accentColor: '#ff9800',
        logoText: '💡',
        inputLabel: 'No. Meter / ID Pelanggan',
        inputPlaceholder: 'Masukkan No. Meter / ID Pelanggan PLN'
    }
];

// ============ E-WALLET SERVICES ============
const EWALLET_SERVICES = [
    {
        id: 'dana',
        name: 'DANA',
        gradient: 'linear-gradient(135deg, #108ee9, #3fa9f5)',
        accentColor: '#108ee9',
        logoText: 'DANA',
        inputLabel: 'Nomor HP DANA',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di DANA'
    },
    {
        id: 'shopeepay',
        name: 'ShopeePay',
        gradient: 'linear-gradient(135deg, #ee4d2d, #ff6242)',
        accentColor: '#ee4d2d',
        logoText: 'SP',
        inputLabel: 'Nomor HP ShopeePay',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di ShopeePay'
    },
    {
        id: 'ovo',
        name: 'OVO',
        gradient: 'linear-gradient(135deg, #4c3494, #6f42c1)',
        accentColor: '#6f42c1',
        logoText: 'OVO',
        inputLabel: 'Nomor HP OVO',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di OVO'
    },
    {
        id: 'linkaja',
        name: 'LinkAja',
        gradient: 'linear-gradient(135deg, #e2231a, #ff4444)',
        accentColor: '#e2231a',
        logoText: 'LA',
        inputLabel: 'Nomor HP LinkAja',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di LinkAja'
    },
    {
        id: 'isaku',
        name: 'iSaku',
        gradient: 'linear-gradient(135deg, #00695c, #00897b)',
        accentColor: '#00897b',
        logoText: 'iS',
        inputLabel: 'Nomor HP iSaku',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di iSaku'
    },
    {
        id: 'sakuku',
        name: 'SakuKu',
        gradient: 'linear-gradient(135deg, #1565c0, #1e88e5)',
        accentColor: '#1e88e5',
        logoText: 'SK',
        inputLabel: 'Nomor HP SakuKu',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di SakuKu'
    },
    {
        id: 'doku',
        name: 'DOKU',
        gradient: 'linear-gradient(135deg, #c62828, #e53935)',
        accentColor: '#e53935',
        logoText: 'DK',
        inputLabel: 'Nomor HP DOKU',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di DOKU'
    },
    {
        id: 'mtix',
        name: 'MTix',
        gradient: 'linear-gradient(135deg, #283593, #3949ab)',
        accentColor: '#3949ab',
        logoText: 'MT',
        inputLabel: 'Nomor HP MTix',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di MTix'
    },
    {
        id: 'kaspro',
        name: 'KasPro',
        gradient: 'linear-gradient(135deg, #f57f17, #fbc02d)',
        accentColor: '#fbc02d',
        logoText: 'KP',
        inputLabel: 'Nomor HP KasPro',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di KasPro'
    },
    {
        id: 'gopay-customer',
        name: 'GoPay Customer',
        gradient: 'linear-gradient(135deg, #00880f, #00aa13)',
        accentColor: '#00aa13',
        logoText: 'GP',
        inputLabel: 'Nomor HP GoPay',
        inputPlaceholder: 'Masukkan nomor HP terdaftar di GoPay'
    },
    {
        id: 'gopay-driver',
        name: 'GoPay Driver',
        gradient: 'linear-gradient(135deg, #006b0c, #00880f)',
        accentColor: '#00880f',
        logoText: 'GD',
        inputLabel: 'Nomor HP GoPay Driver',
        inputPlaceholder: 'Masukkan nomor HP GoPay Driver'
    }
];

// ============ SERVICE HELPER FUNCTIONS ============
function switchHomeCategory(category) {
    state.homeCategory = category;
    state.searchQuery = '';
    render();
}

function getHomeCategoryEmoji() {
    return { games: '🎮', pulsa: '📱', pln: '⚡', ewallet: '💳' }[state.homeCategory] || '🎮';
}

function getHomeCategoryTitle() {
    return {
        games: 'Pilih Game',
        pulsa: 'Pulsa & Paket Data',
        pln: 'Token PLN & Listrik',
        ewallet: 'E-Wallet Top Up'
    }[state.homeCategory] || 'Pilih Game';
}

function getSearchPlaceholder() {
    return {
        games: 'Cari game favoritmu...',
        pulsa: 'Cari provider...',
        pln: 'Cari layanan PLN...',
        ewallet: 'Cari e-wallet...'
    }[state.homeCategory] || 'Cari...';
}

function getHomeCategoryGrid() {
    switch (state.homeCategory) {
        case 'games':
            return GAMES.map(game => {
                const colPos = game.spritePos ? (game.spritePos.c * 33.33) : 0;
                const rowPos = game.spritePos ? (27.5 + (game.spritePos.r * 11)) : 0;
                const spriteStyle = game.spritePos ? `style="background-position: ${colPos}% ${rowPos}%"` : '';

                return `
                    <div class="game-card" data-name="${game.name}" onclick="navigateTo('game', {gameId: '${game.id}'})">
                        ${game.tag ? `<div class="tag tag-${game.tag}">${game.tag.toUpperCase()}</div>` : ''}
                        <div class="game-icon">
                            ${game.spritePos ? 
                                `<div class="game-sprite" ${spriteStyle}></div>` : 
                                (game.iconUrl ? `<img src="${game.iconUrl}" alt="${game.name}">` : `<span style="font-size: 2rem;">🎮</span>`)
                            }
                        </div>
                        <div class="game-name">${game.name}</div>
                    </div>
                `;
            }).join('');
        case 'pulsa':
            return TELECOM_PROVIDERS.map(p => `
                <div class="game-card" data-name="${p.name}" onclick="navigateTo('service', {serviceId: '${p.id}', serviceType: 'telecom'})">
                    <div class="brand-logo-icon" style="background: ${p.gradient}"><span>${p.logoText}</span></div>
                    <div class="game-name">${p.name}</div>
                </div>
            `).join('');
        case 'pln':
            return PLN_SERVICES.map(s => `
                <div class="game-card" data-name="${s.name}" onclick="navigateTo('service', {serviceId: '${s.id}', serviceType: 'pln'})">
                    <div class="game-icon">${s.logoText}</div>
                    <div class="game-name">${s.name}</div>
                </div>
            `).join('');
        case 'ewallet':
            return EWALLET_SERVICES.map(s => `
                <div class="game-card" data-name="${s.name}" onclick="navigateTo('service', {serviceId: '${s.id}', serviceType: 'ewallet'})">
                    <div class="brand-logo-icon" style="background: ${s.gradient}"><span>${s.logoText}</span></div>
                    <div class="game-name">${s.name}</div>
                </div>
            `).join('');
        default:
            return '';
    }
}

function findServiceById(id) {
    return TELECOM_PROVIDERS.find(p => p.id === id)
        || PLN_SERVICES.find(s => s.id === id)
        || EWALLET_SERVICES.find(s => s.id === id);
}

function selectServiceType(typeId) {
    state.selectedServiceType = typeId;
    document.querySelectorAll('.service-type-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.type === typeId);
    });
}

// ============ SERVICE PAGE RENDER ============
function renderServicePage(app) {
    const service = state.selectedService;
    if (!service) return navigateTo('home');

    const isTelecom = state.selectedServiceCategory === 'telecom';
    const isPLN = state.selectedServiceCategory === 'pln';
    const isEwallet = state.selectedServiceCategory === 'ewallet';

    let categoryLabel = 'Layanan';
    if (isTelecom) categoryLabel = 'Pulsa, Paket Data & Paket Telepon';
    if (isPLN) categoryLabel = 'Token Listrik & Tagihan';
    if (isEwallet) categoryLabel = 'Top Up Saldo E-Wallet';

    const showBrandLogo = service.logoText && !service.logoText.includes('⚡') && !service.logoText.includes('💡');

    app.innerHTML = `
        <div class="page-container">
            <div class="game-header-section" style="background: ${service.gradient};">
                <button class="back-btn" onclick="navigateTo('home')"><i class="fas fa-arrow-left"></i></button>
                <div class="game-header-content">
                    <div class="game-header-icon">
                        ${showBrandLogo
                            ? `<div class="brand-logo-header">${service.logoText}</div>`
                            : `<span style="font-size:2.5rem;">${service.logoText}</span>`}
                    </div>
                    <div class="game-header-info">
                        <h1>${service.name}</h1>
                        <p>${categoryLabel}</p>
                    </div>
                </div>
            </div>

            ${isTelecom && service.services ? `
                <div class="service-type-section">
                    <h3><i class="fas fa-list-check" style="color: var(--accent-blue);"></i> Pilih Jenis Layanan</h3>
                    <div class="service-type-grid">
                        ${service.services.map(s => `
                            <div class="service-type-card ${state.selectedServiceType === s.id ? 'selected' : ''}" data-type="${s.id}" onclick="selectServiceType('${s.id}')">
                                <i class="fas ${s.icon}"></i>
                                <span>${s.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="order-section" id="order-section">
                <div class="order-card">
                    <h2><i class="fas fa-shopping-cart" style="color: var(--accent-blue);"></i> Form Pemesanan</h2>

                    <div class="form-group">
                        <label>${service.inputLabel} <span class="required">*</span></label>
                        <input type="text" class="form-input" id="service-input" placeholder="${service.inputPlaceholder}">
                    </div>

                    <div class="form-group">
                        <label>Nomor WhatsApp <span class="required">*</span></label>
                        <input type="tel" class="form-input" id="wa-number" placeholder="Contoh: 08123456789">
                    </div>

                    <div class="info-box">
                        <div class="info-box-icon"><i class="fas fa-info-circle"></i></div>
                        <div class="info-box-content">
                            <strong>ℹ️ Informasi Pemesanan</strong>
                            <p>Setelah mengirim form ini via WhatsApp, <strong>admin akan mengirimkan daftar harga</strong> yang tersedia untuk layanan yang kamu pilih. Kamu tinggal pilih nominal yang diinginkan dan lakukan pembayaran!</p>
                        </div>
                    </div>

                    <button class="submit-btn" onclick="submitServiceOrder()" id="submit-btn">
                        <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i>
                        Kirim Pesanan via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}

function submitServiceOrder() {
    const service = state.selectedService;
    if (!service) return;

    const serviceInput = document.getElementById('service-input')?.value?.trim();
    const waNumber = document.getElementById('wa-number')?.value?.trim();
    const isTelecom = state.selectedServiceCategory === 'telecom';

    if (isTelecom && !state.selectedServiceType) {
        showToast('Pilih jenis layanan terlebih dahulu! (Pulsa/Data/Telepon)', 'error');
        return;
    }
    if (!serviceInput) {
        showToast('Masukkan ' + service.inputLabel + ' terlebih dahulu!', 'error');
        document.getElementById('service-input')?.focus();
        return;
    }
    if (!waNumber) {
        showToast('Masukkan nomor WhatsApp kamu!', 'error');
        document.getElementById('wa-number')?.focus();
        return;
    }

    let serviceTypeName = service.name;
    if (isTelecom && service.services) {
        const found = service.services.find(s => s.id === state.selectedServiceType);
        if (found) serviceTypeName = found.name;
    }

    let categoryIcon = '📱';
    if (state.selectedServiceCategory === 'pln') categoryIcon = '⚡';
    if (state.selectedServiceCategory === 'ewallet') categoryIcon = '💳';

    const message = categoryIcon + ` *PESANAN BARU - TOKO KITA*
━━━━━━━━━━━━━━━━━━━━
🏢 *Layanan:* ${service.name}
📦 *Jenis:* ${serviceTypeName}
📱 *${service.inputLabel}:* ${serviceInput}
📱 *No. WhatsApp:* ${waNumber}
━━━━━━━━━━━━━━━━━━━━
📋 _Mohon kirimkan daftar harga yang tersedia._
_Terima kasih telah berbelanja di Toko Kita! 🐻💙_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodedMessage;

    window.open(waUrl, '_blank');
    showToast('Berhasil! Silakan cek WhatsApp kamu untuk daftar harga.', 'success');
}
