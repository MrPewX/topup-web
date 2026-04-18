/* ========================================
   TOKO KITA - Premium Top-Up Store
   Application Logic & Data
   ======================================== */

// ============ CONFIGURATION ============
const CONFIG = {
    whatsappNumber: '6285732729950',
    storeName: 'Toko Kita',
    storeTagline: 'Top Up Game Termurah & Tercepat!',
};

// ============ PAYMENT METHODS ============
const PAYMENT_METHODS = [
    {
        id: 'btn',
        name: 'Bank BTN',
        type: 'Transfer Bank',
        icon: 'fa-building-columns',
        accountNumber: '650150009369',
        accountName: 'Seva Anggry Pradana',
        color: '#f47920',
        instructions: 'Transfer ke rekening BTN di atas, lalu kirim bukti transfer.'
    },
    {
        id: 'brimo',
        name: 'BRImo (Bank BRI)',
        type: 'Transfer Bank',
        icon: 'fa-building-columns',
        accountNumber: '631701030541532',
        accountName: 'Seva Anggry Pradana',
        color: '#00529c',
        instructions: 'Transfer via BRImo ke nomor rekening di atas, lalu kirim bukti transfer.'
    },
    {
        id: 'ovo',
        name: 'OVO',
        type: 'E-Wallet',
        icon: 'fa-wallet',
        accountNumber: '085732729950',
        accountName: 'Seva Anggry Pradana',
        color: '#4c3494',
        instructions: 'Transfer ke akun OVO di atas, lalu kirim bukti pembayaran.'
    },
    {
        id: 'gopay',
        name: 'GoPay',
        type: 'E-Wallet',
        icon: 'fa-wallet',
        accountNumber: '085732729950',
        accountName: 'Seva Anggry Pradana',
        color: '#00aed6',
        instructions: 'Transfer ke akun GoPay di atas, lalu kirim bukti pembayaran.'
    }
];

// ============ GAMES DATA ============
const GAMES = [
    {
        id: 'arena-breakout',
        name: 'Arena Breakout',
        spritePos: { r: 0, c: 0 },
        gradient: 'linear-gradient(135deg, #1a1a1a, #333333)',
        accentColor: '#ffffff',
        tag: 'new',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID Arena Breakout',
        categories: [
            {
                name: 'Bonds & Packs',
                items: [
                    { name: 'Pilihan Pemula', price: 13214 },
                    { name: '60 Bonds', price: 14757 },
                    { name: 'Kotak Anti Peluru 30 Hari', price: 37850 },
                    { name: 'Battle Pass Lanjutan', price: 61420 },
                    { name: 'Percobaan Elite 30 Hari', price: 65910 },
                    { name: '310 Bonds', price: 68878 },
                    { name: 'Kotak Komposit 30 Hari', price: 120548 },
                    { name: '630 Bonds', price: 148349 },
                    { name: 'Battle Pass Premium', price: 192994 },
                    { name: '1.580 Bonds', price: 368917 },
                    { name: '3.200 Bonds', price: 745636 },
                    { name: '6.500 Bonds', price: 1494842 }
                ]
            }
        ]
    },
    {
        id: 'arena-of-valor',
        name: 'Arena Of Valor',
        spritePos: { r: 0, c: 1 },
        gradient: 'linear-gradient(135deg, #0a1f3d, #1a3a6d)',
        accentColor: '#4d9dff',
        tag: null,
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID AOV',
        categories: [
            {
                name: 'Vouchers',
                items: [
                    { name: '40 Vouchers', price: 10655 },
                    { name: '90 Vouchers', price: 19709 },
                    { name: '230 Vouchers', price: 46873 },
                    { name: '470 Vouchers', price: 99127 },
                    { name: '950 Vouchers', price: 193408 },
                    { name: '1430 Vouchers', price: 296004 }
                ]
            }
        ]
    },
    {
        id: 'bigo-live',
        name: 'Bigo Live',
        spritePos: { r: 0, c: 2 },
        gradient: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
        accentColor: '#00d4ff',
        tag: null,
        needsServerId: false,
        userIdLabel: 'Bigo ID',
        userIdPlaceholder: 'Masukkan Bigo ID',
        categories: [
            {
                name: 'Diamonds',
                items: [
                    { name: '42 Diamonds', price: 14500 },
                    { name: '297 Diamonds', price: 113301 }
                ]
            }
        ]
    },
    {
        id: 'blood-strike',
        name: 'Blood Strike',
        spritePos: { r: 0, c: 3 },
        gradient: 'linear-gradient(135deg, #3d0a0a, #6d1a1a)',
        accentColor: '#ff5252',
        tag: 'new',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID Blood Strike',
        categories: [
            {
                name: 'Gold & Pass',
                items: [
                    { name: 'Ultra Skin Lucky Chest', price: 7504 },
                    { name: '100 Gold', price: 13096 },
                    { name: 'Level Up Pass', price: 26254 },
                    { name: '300 Gold', price: 36741 },
                    { name: 'Strike Pass Elite', price: 51263 },
                    { name: '500 Gold', price: 60470 },
                    { name: 'Strike Pass Elite+', price: 124023 },
                    { name: '1.000 Gold', price: 131411 },
                    { name: '2.000 Gold', price: 261419 },
                    { name: '5.000 Gold', price: 652495 }
                ]
            }
        ]
    },
    {
        id: 'cod-mobile',
        name: 'Call of Duty Mobile',
        spritePos: { r: 1, c: 0 },
        gradient: 'linear-gradient(135deg, #1a1a1a, #2c2c2c)',
        accentColor: '#ffab00',
        tag: 'popular',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID CODM',
        categories: [
            {
                name: 'CP',
                items: [
                    { name: '32 CP', price: 5748 },
                    { name: '63 CP', price: 10503 },
                    { name: '128 CP', price: 19709 },
                    { name: '321 CP', price: 46773 },
                    { name: '645 CP', price: 99347 },
                    { name: '800 CP', price: 120356 },
                    { name: '1.373 CP', price: 162215 },
                    { name: '2.059 CP', price: 322108 },
                    { name: '3.564 CP', price: 503278 }
                ]
            }
        ]
    },
    {
        id: 'ea-fc-mobile',
        name: 'FC Mobile',
        spritePos: { r: 1, c: 1 },
        gradient: 'linear-gradient(135deg, #1a472a, #2d7a4a)',
        accentColor: '#4caf50',
        tag: null,
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID EA FC Mobile',
        categories: [
            {
                name: 'Silver & FC Points',
                items: [
                    { name: '39 Silver', price: 7391 },
                    { name: '40 FC Points', price: 7441 },
                    { name: '99 Silver', price: 16292 },
                    { name: '100 FC Points', price: 16342 },
                    { name: '499 Silver', price: 81758 },
                    { name: '520 FC Points', price: 81813 },
                    { name: '999 Silver', price: 164217 },
                    { name: '1.070 FC Points', price: 164272 }
                ]
            }
        ]
    },
    {
        id: 'free-fire',
        name: 'FreeFire',
        spritePos: { r: 1, c: 2 },
        gradient: 'linear-gradient(135deg, #8b2500, #cc5500)',
        accentColor: '#ff7043',
        tag: 'hot',
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID Free Fire',
        categories: [
            {
                name: 'Diamonds',
                items: [
                    { name: '5 Diamond', price: 1879 },
                    { name: '10 Diamond', price: 2793 },
                    { name: '12 Diamond', price: 2950 },
                    { name: '15 Diamond', price: 3617 },
                    { name: '20 Diamond', price: 4441 },
                    { name: '25 Diamond', price: 5244 },
                    { name: '30 Diamond', price: 6064 },
                    { name: '50 Diamond', price: 7719 },
                    { name: '55 Diamond', price: 8563 },
                    { name: '60 Diamond', price: 9383 },
                    { name: '70 Diamond', price: 10135 },
                    { name: '75 Diamond', price: 11003 },
                    { name: '80 Diamond', price: 11875 },
                    { name: '90 Diamond', price: 13528 },
                    { name: '100 Diamond', price: 14344 },
                    { name: '120 Diamond', price: 16820 },
                    { name: '130 Diamond', price: 18468 },
                    { name: '140 Diamond', price: 19002 },
                    { name: '145 Diamond', price: 20048 },
                    { name: '150 Diamond', price: 20870 },
                    { name: '160 Diamond', price: 22615 },
                    { name: '170 Diamond', price: 23389 },
                    { name: '180 Diamond', price: 25034 },
                    { name: '190 Diamond', price: 25807 },
                    { name: '200 Diamond', price: 27452 },
                    { name: '210 Diamond', price: 28225 },
                    { name: '230 Diamond', price: 31535 },
                    { name: '250 Diamond', price: 34034 },
                    { name: '280 Diamond', price: 37225 },
                    { name: '300 Diamond', price: 40516 },
                    { name: '355 Diamond', price: 46230 },
                    { name: '360 Diamond', price: 47077 },
                    { name: '375 Diamond', price: 49516 },
                    { name: '405 Diamond', price: 52807 },
                    { name: '425 Diamond', price: 55225 },
                    { name: '455 Diamond', price: 59164 },
                    { name: '475 Diamond', price: 61807 },
                    { name: '500 Diamond', price: 65048 },
                    { name: '510 Diamond', price: 66693 },
                    { name: '515 Diamond', price: 67516 },
                    { name: '520 Diamond', price: 68415 },
                    { name: '545 Diamond', price: 76788 },
                    { name: '565 Diamond', price: 79448 },
                    { name: '600 Diamond', price: 84966 },
                    { name: '635 Diamond', price: 89381 },
                    { name: '645 Diamond', price: 91191 },
                    { name: '655 Diamond', price: 93001 },
                    { name: '720 Diamond', price: 98753 },
                    { name: '725 Diamond', price: 100181 },
                    { name: '740 Diamond', price: 102896 },
                    { name: '770 Diamond', price: 107012 },
                    { name: '790 Diamond', price: 109328 },
                    { name: '800 Diamond', price: 111148 },
                    { name: '860 Diamond', price: 119076 },
                    { name: '930 Diamond', price: 128976 },
                    { name: '1000 Diamond', price: 138875 },
                    { name: '1050 Diamond', price: 146336 },
                    { name: '1075 Diamond', price: 148975 },
                    { name: '1200 Diamond', price: 166876 },
                    { name: '1215 Diamond', price: 168630 },
                    { name: '1300 Diamond', price: 181245 },
                    { name: '1440 Diamond', price: 198331 },
                    { name: '1450 Diamond', price: 198331 },
                    { name: '1490 Diamond', price: 205442 },
                    { name: '1510 Diamond', price: 207457 },
                    { name: '1580 Diamond', price: 217412 },
                    { name: '1795 Diamond', price: 248199 },
                    { name: '1800 Diamond', price: 248198 },
                    { name: '1875 Diamond', price: 258109 },
                    { name: '1975 Diamond', price: 272653 },
                    { name: '2000 Diamond', price: 276203 },
                    { name: '2100 Diamond', price: 290573 },
                    { name: '2140 Diamond', price: 296026 },
                    { name: '2180 Diamond', price: 295763 },
                    { name: '2210 Diamond', price: 302815 },
                    { name: '2280 Diamond', price: 312299 },
                    { name: '2355 Diamond', price: 323690 },
                    { name: '5600 Diamond', price: 768135 },
                    { name: '7290 Diamond', price: 995219 }
                ]
            },
            {
                name: 'Pass & Membership',
                items: [
                    { name: 'Level Up Pass - Level 6', price: 6169 },
                    { name: 'Level Up Pass - Level 10', price: 9528 },
                    { name: 'Level Up Pass - Level 15', price: 9528 },
                    { name: 'Level Up Pass - Level 20', price: 9528 },
                    { name: 'Level Up Pass - Level 25', price: 9528 },
                    { name: 'Level Up Pass - Level 30', price: 14672 },
                    { name: 'Member Mingguan', price: 28701 },
                    { name: 'Booyah Pass', price: 42739 },
                    { name: 'Member Mingguan 2X', price: 56770 },
                    { name: 'Member Bulanan', price: 90588 },
                    { name: 'Member Mingguan x3', price: 92020 },
                    { name: 'Member Mingguan x4', price: 122693 },
                    { name: 'Member Mingguan x5', price: 153367 },
                    { name: 'Membership Bulanan 2X', price: 183250 },
                    { name: 'Membership Bulanan x3', price: 274874 },
                    { name: 'Membership Bulanan x4', price: 366499 },
                    { name: 'Membership Bulanan x5', price: 458123 }
                ]
            }
        ]
    },
    {
        id: 'garena-undawn',
        name: 'Garena Undawn',
        spritePos: { r: 1, c: 3 },
        gradient: 'linear-gradient(135deg, #2d1f00, #5a3d00)',
        accentColor: '#ff8f00',
        tag: null,
        needsServerId: true,
        userIdLabel: 'Role ID',
        serverIdLabel: 'Server',
        userIdPlaceholder: 'Masukkan Role ID',
        serverIdPlaceholder: 'Masukkan nama server',
        categories: [
            {
                name: 'RC & Pass',
                items: [
                    { name: '80 RC', price: 14250 },
                    { name: 'Kartu Mingguan', price: 27823 },
                    { name: '250 RC', price: 42098 },
                    { name: 'Kartu Bulanan', price: 45195 },
                    { name: '450 RC', price: 75071 },
                    { name: 'Quick Glory Pass', price: 76175 },
                    { name: 'Growth Fund', price: 97149 },
                    { name: 'Dana Elit Rebate Lv 80', price: 128695 },
                    { name: 'Glory Pass Premium', price: 145682 },
                    { name: '920 RC', price: 148735 },
                    { name: '1.850 RC', price: 298051 },
                    { name: '2.800 RC', price: 447368 },
                    { name: '4.750 RC', price: 740356 }
                ]
            }
        ]
    },
    {
        id: 'genshin-impact',
        name: 'Genshin Impact',
        spritePos: { r: 2, c: 0 },
        gradient: 'linear-gradient(135deg, #2d1b69, #5b3cc4)',
        accentColor: '#b388ff',
        tag: 'popular',
        needsServerId: true,
        userIdLabel: 'UID',
        serverIdLabel: 'Server',
        userIdPlaceholder: 'Masukkan UID Genshin Impact',
        serverIdPlaceholder: 'Pilih server (Asia, America, Europe, TW/HK/MO)',
        categories: [
            {
                name: 'Genesis Crystals',
                items: [
                    { name: '60 Genesis Crystals', price: 11851 },
                    { name: '300+30 Genesis Crystals', price: 54621 },
                    { name: 'Blessing of the Welkin Moon', price: 54721 },
                    { name: '980+110 Genesis Crystals', price: 181314 },
                    { name: '1980+260 Genesis Crystals', price: 377984 },
                    { name: '3280+600 Genesis Crystals', price: 621954 }
                ]
            }
        ]
    },
    {
        id: 'hago',
        name: 'Hago',
        spritePos: { r: 2, c: 1 },
        gradient: 'linear-gradient(135deg, #fdd835, #fbc02d)',
        accentColor: '#4dd0e1',
        tag: null,
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID Hago',
        categories: [
            {
                name: 'Diamonds',
                items: [
                    { name: '1000 Diamonds', price: 2833 },
                    { name: '1200 Diamonds', price: 3502 },
                    { name: '2.000 Diamond', price: 4416 },
                    { name: '3.000 Diamond', price: 5999 },
                    { name: '4.000 Diamond', price: 7582 },
                    { name: '6.000 Diamond', price: 10748 },
                    { name: '8.000 Diamond', price: 13935 },
                    { name: '9.200 Diamond', price: 15994 },
                    { name: '10.000 Diamond', price: 17080 },
                    { name: '12.000 Diamond', price: 20270 },
                    { name: '14.000 Diamond', price: 23412 },
                    { name: '16.000 Diamond', price: 26578 },
                    { name: '18.000 Diamond', price: 29744 },
                    { name: '18.200 Diamond', price: 30460 },
                    { name: '20.000 Diamond', price: 32910 },
                    { name: '30.000 Diamond', price: 48740 },
                    { name: '35.000 Diamond', price: 56655 },
                    { name: '40.000 Diamond', price: 64570 },
                    { name: '45.000 Diamond', price: 78634 },
                    { name: '45.600 Diamond', price: 80289 },
                    { name: '50.000 Diamond', price: 87340 },
                    { name: '60.000 Diamond', price: 105854 },
                    { name: '61.000 Diamond', price: 107779 },
                    { name: '80.000 Diamond', price: 140679 }
                ]
            }
        ]
    },
    {
        id: 'honkai-star-rail',
        name: 'Honkai Star Rail',
        spritePos: { r: 2, c: 2 },
        gradient: 'linear-gradient(135deg, #1a1a3e, #4a2d7c)',
        accentColor: '#ce93d8',
        tag: 'popular',
        needsServerId: true,
        userIdLabel: 'UID',
        serverIdLabel: 'Server',
        userIdPlaceholder: 'Masukkan UID Honkai Star Rail',
        serverIdPlaceholder: 'Pilih server',
        categories: [
            {
                name: 'Oneiric Shard',
                items: [
                    { name: '60 Oneiric Shard', price: 12293 },
                    { name: 'Express Supply Pass', price: 54460 },
                    { name: '300+30 Oneiric Shard', price: 55075 },
                    { name: '980+110 Oneiric Shard', price: 183166 },
                    { name: '1980+260 Oneiric Shard', price: 365295 },
                    { name: '3280+600 Oneiric Shard', price: 629415 }
                ]
            }
        ]
    },
    {
        id: 'honor-of-kings',
        name: 'Honor Of Kings',
        spritePos: { r: 2, c: 3 },
        gradient: 'linear-gradient(135deg, #8b6914, #c99a2e)',
        accentColor: '#ffd54f',
        tag: 'hot',
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID Honor of Kings',
        categories: [
            {
                name: 'Tokens',
                items: [
                    { name: '16 Tokens', price: 4231 },
                    { name: '80 Tokens', price: 15603 },
                    { name: '240 Tokens', price: 43929 },
                    { name: '400 Tokens', price: 78601 },
                    { name: '560 Tokens', price: 109932 },
                    { name: '800 Tokens', price: 156767 },
                    { name: '1.200 Tokens', price: 234928 },
                    { name: '2.400 Tokens', price: 469629 },
                    { name: '4.000 Tokens', price: 782516 },
                    { name: '8.000 Tokens', price: 1564617 }
                ]
            }
        ]
    },
    {
        id: 'lifeafter',
        name: 'Life After',
        spritePos: { r: 3, c: 0 },
        gradient: 'linear-gradient(135deg, #1b2a1b, #2e4a2e)',
        accentColor: '#81c784',
        tag: null,
        needsServerId: true,
        userIdLabel: 'Role ID',
        serverIdLabel: 'Server',
        userIdPlaceholder: 'Masukkan Role ID',
        serverIdPlaceholder: 'Masukkan nama server',
        categories: [
            {
                name: 'Credits',
                items: [
                    { name: '65 Credits', price: 15595 },
                    { name: '330 Credits', price: 62599 },
                    { name: '558 Credits', price: 110659 },
                    { name: '1108 Credits', price: 203823 },
                    { name: '2268 Credits', price: 457183 },
                    { name: '3468 Credits', price: 638659 }
                ]
            }
        ]
    },
    {
        id: 'lita',
        name: 'Lita',
        spritePos: { r: 3, c: 1 },
        gradient: 'linear-gradient(135deg, #4a148c, #7b1fa2)',
        accentColor: '#ea80fc',
        tag: null,
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID LITA',
        categories: [
            {
                name: 'Coins',
                items: [
                    { name: '300 Coins', price: 36372 },
                    { name: '600 Coins', price: 77533 },
                    { name: '1.000 Coins', price: 128111 },
                    { name: '2.000 Coins', price: 255935 },
                    { name: '5.000 Coins', price: 639518 }
                ]
            }
        ]
    },
    {
        id: 'lol-wild-rift',
        name: 'LOL Wild Rift',
        spritePos: { r: 3, c: 2 },
        gradient: 'linear-gradient(135deg, #0d2137, #1a4060)',
        accentColor: '#42a5f5',
        tag: null,
        needsServerId: false,
        userIdLabel: 'Riot ID',
        userIdPlaceholder: 'Masukkan Riot ID (contoh: Name#TAG)',
        categories: [
            {
                name: 'Wild Cores',
                items: [
                    { name: '105 Wild Cores', price: 15090 },
                    { name: '350 Wild Cores', price: 47150 },
                    { name: '420 Wild Cores', price: 56175 },
                    { name: '585 Wild Cores', price: 80713 },
                    { name: '1135 Wild Cores', price: 151514 },
                    { name: '1660 Wild Cores', price: 211916 },
                    { name: '3010 Wild Cores', price: 363045 },
                    { name: '6210 Wild Cores', price: 755921 }
                ]
            }
        ]
    },
    {
        id: 'magic-chess',
        name: 'Magic Chess Go Go',
        spritePos: { r: 3, c: 3 },
        gradient: 'linear-gradient(135deg, #311b92, #4527a0)',
        accentColor: '#b39ddb',
        tag: null,
        needsServerId: true,
        userIdLabel: 'User ID',
        serverIdLabel: 'Zone ID',
        userIdPlaceholder: 'Masukkan User ID',
        serverIdPlaceholder: 'Masukkan Zone ID',
        categories: [
            {
                name: 'Diamonds',
                items: [
                    { name: '5 Diamonds', price: 2405 },
                    { name: '12 Diamonds', price: 4044 },
                    { name: '19 Diamonds', price: 5634 },
                    { name: '28 Diamonds', price: 7799 },
                    { name: '44 Diamonds', price: 11259 },
                    { name: '59 Diamonds', price: 15478 },
                    { name: '85 Diamonds', price: 21991 },
                    { name: 'Weekly Card', price: 28325 },
                    { name: '170 Diamonds', price: 41640 },
                    { name: '240 Diamonds', price: 57800 },
                    { name: '296 Diamonds', price: 76076 },
                    { name: '408 Diamonds', price: 102408 },
                    { name: '568 Diamonds', price: 144879 },
                    { name: '875 Diamonds', price: 223930 },
                    { name: '2.010 Diamonds', price: 485332 },
                    { name: '4.830 Diamonds', price: 1180430 }
                ]
            }
        ]
    },
    {
        id: 'metal-slug',
        name: 'Metal Slug',
        spritePos: { r: 4, c: 0 },
        gradient: 'linear-gradient(135deg, #4a1a00, #8b3300)',
        accentColor: '#ff7043',
        tag: null,
        needsServerId: true,
        userIdLabel: 'User ID',
        serverIdLabel: 'Server',
        userIdPlaceholder: 'Masukkan User ID',
        serverIdPlaceholder: 'Masukkan nama server',
        categories: [
            {
                name: 'Ruby & Pass',
                items: [
                    { name: '60 Ruby', price: 13990 },
                    { name: '310 Ruby', price: 59062 },
                    { name: 'Kartu Bulanan', price: 59062 },
                    { name: 'Support Pass', price: 62804 },
                    { name: 'Kartu Bulanan Premium', price: 122792 },
                    { name: 'Support Pass Premium', price: 130552 },
                    { name: '630 Ruby', price: 134824 },
                    { name: '1.300 Ruby', price: 246271 },
                    { name: '3.200 Ruby', price: 634970 },
                    { name: '6.500 Ruby', price: 1224201 }
                ]
            }
        ]
    },
    {
        id: 'mobile-legends',
        name: 'Mobile Legend',
        spritePos: { r: 4, c: 1 },
        gradient: 'linear-gradient(135deg, #1e3a5f, #2d6aa0)',
        accentColor: '#4d9dff',
        tag: 'popular',
        needsServerId: true,
        serverIdLabel: 'Zone ID',
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID',
        serverIdPlaceholder: 'Masukkan Zone ID',
        categories: [
            {
                name: 'Diamond',
                items: [
                    { name: '5 Diamond', price: 2546 },
                    { name: '10 Diamond', price: 3964 },
                    { name: '14 Diamond', price: 5042 },
                    { name: '28 Diamond', price: 8846 },
                    { name: '36 Diamond', price: 10918 },
                    { name: '44 Diamond', price: 12666 },
                    { name: '59 Diamond', price: 16312 },
                    { name: '70 Diamond', price: 19978 },
                    { name: '86 Diamond', price: 23997 },
                    { name: '112 Diamond (Misi Topup 100DM)', price: 30769 },
                    { name: '140 Diamond', price: 37893 },
                    { name: '172 Diamond', price: 46057 },
                    { name: '185 Diamond', price: 50107 },
                    { name: '222 Diamond', price: 58285 },
                    { name: '240 Diamond', price: 63090 },
                    { name: '257 Diamond', price: 67928 },
                    { name: '284 Diamond (Misi Topup 250DM)', price: 80350 },
                    { name: '296 Diamond', price: 83672 },
                    { name: '344 Diamond', price: 97948 },
                    { name: '355 Diamond', price: 101401 },
                    { name: '370 Diamond', price: 104053 },
                    { name: '408 Diamond', price: 115235 },
                    { name: '429 Diamond', price: 122090 },
                    { name: '514 Diamond', price: 143900 },
                    { name: '568 Diamond', price: 156580 },
                    { name: '600 Diamond', price: 166325 },
                    { name: '706 Diamond', price: 196629 },
                    { name: '878 Diamond', price: 239981 },
                    { name: '963 Diamond', price: 259544 },
                    { name: '1050 Diamond', price: 283443 },
                    { name: '1159 Diamond', price: 313408 },
                    { name: '1220 Diamond', price: 330148 },
                    { name: '1412 Diamond', price: 383644 },
                    { name: '1446 Diamond', price: 396840 },
                    { name: '1506 Diamond', price: 410588 },
                    { name: '1669 Diamond', price: 461808 },
                    { name: '1704 Diamond', price: 462642 },
                    { name: '1830 Diamond', price: 501488 },
                    { name: '2195 Diamond', price: 568172 },
                    { name: '2976 Diamond', price: 775436 },
                    { name: '3073 Diamond', price: 809063 },
                    { name: '3688 Diamond', price: 970073 },
                    { name: '4394 Diamond', price: 1135691 },
                    { name: '4830 Diamond', price: 1237654 },
                    { name: '5532 Diamond', price: 1428916 },
                    { name: '6050 Diamond', price: 1551526 },
                    { name: '7727 Diamond', price: 1992783 }
                ]
            }
        ]
    },
    {
        id: 'racing-master',
        name: 'Racing Master',
        spritePos: { r: 4, c: 2 },
        gradient: 'linear-gradient(135deg, #2c3e50, #000000)',
        accentColor: '#e74c3c',
        tag: 'new',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID Racing Master',
        categories: [
            {
                name: 'Gems',
                items: [
                    { name: '60 Gems', price: 14000 },
                    { name: '300 Gems', price: 77000 }
                ]
            }
        ]
    },
    {
        id: 'stumble-guys',
        name: 'Stumble Guys',
        spritePos: { r: 4, c: 3 },
        gradient: 'linear-gradient(135deg, #2d1b69, #5b3cc4)',
        accentColor: '#b388ff',
        tag: 'popular',
        needsServerId: false,
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID Stumble Guys',
        categories: [
            {
                name: 'Gems & Tokens',
                items: [
                    { name: '250 Gems', price: 14550 },
                    { name: '120 Tokens', price: 33475 },
                    { name: '800 Gems', price: 35994 },
                    { name: '1.600 Gems + 75 Tokens', price: 44275 },
                    { name: '5.000 Gems + 275 Tokens', price: 114263 },
                    { name: '1.300 Tokens', price: 253963 }
                ]
            }
        ]
    },
    {
        id: 'sausage-man',
        name: 'Sausage Man',
        spritePos: { r: 5, c: 0 },
        gradient: 'linear-gradient(135deg, #ff9f43, #ff6b6b)',
        accentColor: '#ff9f43',
        tag: 'hot',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID Sausage Man',
        categories: [
            {
                name: 'Candies',
                items: [
                    { name: '60 Candies', price: 13660 },
                    { name: '180 Candies', price: 39175 },
                    { name: '316 Candies', price: 63543 },
                    { name: '718 Candies', price: 138078 },
                    { name: '1368 Candies', price: 274886 },
                    { name: '2118 Candies', price: 409751 }
                ]
            }
        ]
    },
    {
        id: 'point-blank',
        name: 'Point Blank',
        spritePos: { r: 5, c: 1 },
        gradient: 'linear-gradient(135deg, #1e3a5f, #2d4a8a)',
        accentColor: '#4d9dff',
        tag: null,
        needsServerId: false,
        userIdLabel: 'ID Login (Username)',
        userIdPlaceholder: 'Masukkan Username PB',
        categories: [
            {
                name: 'PB Cash',
                items: [
                    { name: '1200 PB Cash', price: 10600 },
                    { name: '2400 PB Cash', price: 19700 },
                    { name: '6000 PB Cash', price: 47000 },
                    { name: '12000 PB Cash', price: 100651 },
                    { name: '24000 PB Cash', price: 200751 },
                    { name: '36000 PB Cash', price: 300850 },
                    { name: '60000 PB Cash', price: 501051 }
                ]
            }
        ]
    },
    {
        id: 'pubg-mobile',
        name: 'PUBG MOBILE',
        spritePos: { r: 5, c: 2 },
        gradient: 'linear-gradient(135deg, #b71c1c, #e53935)',
        accentColor: '#e53935',
        tag: 'popular',
        needsServerId: false,
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID PUBG',
        categories: [
            {
                name: 'Unknown Cash',
                items: [
                    { name: '15 UC', price: 8800 },
                    { name: '25 UC', price: 16125 },
                    { name: '35 UC', price: 16450 },
                    { name: '60 UC', price: 16600 },
                    { name: '50 UC', price: 16950 },
                    { name: '100 UC', price: 31600 },
                    { name: '70 UC', price: 31600 },
                    { name: '125 UC', price: 46400 },
                    { name: '150 UC', price: 47204 },
                    { name: '210 UC', price: 60809 },
                    { name: '200 UC', price: 60850 },
                    { name: '250 UC', price: 81510 },
                    { name: '300 UC', price: 85085 },
                    { name: '350 UC', price: 98836 },
                    { name: '375 UC', price: 102059 },
                    { name: '500 UC', price: 136785 },
                    { name: '525 UC', price: 165055 },
                    { name: '700 UC', price: 184581 },
                    { name: '750 UC', price: 206856 },
                    { name: '1000 UC', price: 274505 },
                    { name: '1100 UC', price: 290015 },
                    { name: '1500 UC', price: 381882 },
                    { name: '1250 UC', price: 391106 },
                    { name: '1750 UC', price: 455153 },
                    { name: 'Elite Pass Plus', price: 457656 },
                    { name: '2500 UC', price: 611105 }
                ]
            }
        ]
    },
    {
        id: 'super-sus',
        name: 'Supersus',
        spritePos: { r: 5, c: 3 },
        gradient: 'linear-gradient(135deg, #121212, #333333)',
        accentColor: '#ffffff',
        tag: 'hot',
        needsServerId: false,
        userIdLabel: 'Space ID',
        userIdPlaceholder: 'Masukkan Space ID Super Sus',
        categories: [
            {
                name: 'Gold Star & Pass',
                items: [
                    { name: '100 Golden Star', price: 11955 },
                    { name: 'Weekly Card', price: 12380 },
                    { name: '310 Golden Star', price: 35613 },
                    { name: '520 Golden Star', price: 54365 },
                    { name: 'Super Pass', price: 56588 },
                    { name: '1.060 Golden Star', price: 117563 },
                    { name: 'Super Pass Bundle', price: 123454 },
                    { name: 'Monthly Card', price: 147646 },
                    { name: 'Super VIP Card', price: 168586 },
                    { name: '2.180 Golden Star', price: 235456 },
                    { name: '5.600 Golden Star', price: 678198 }
                ]
            }
        ]
    },
    {
        id: 'valorant',
        name: 'Valorant',
        spritePos: { r: 6, c: 0 },
        gradient: 'linear-gradient(135deg, #ff4655, #111111)',
        accentColor: '#ff4655',
        tag: 'popular',
        needsServerId: false,
        userIdLabel: 'Riot ID',
        userIdPlaceholder: 'Masukkan Riot ID (contoh: Username#Tag)',
        categories: [
            {
                name: 'Valorant Points',
                items: [
                    { name: '475 VP', price: 53699 },
                    { name: '1000 VP', price: 115910 },
                    { name: '1475 VP', price: 172477 }
                ]
            }
        ]
    }
];

// ============ TESTIMONIALS ============
const TESTIMONIALS = [
    {
        name: 'Rizky A.',
        game: 'Mobile Legends',
        text: '"Top up diamond ML di Toko Kita murah banget dan prosesnya cepet! Gak sampai 5 menit udah masuk. Recommended banget! ⭐"',
        avatar: 'R',
        color: '#4d7cfe'
    },
    {
        name: 'Dina S.',
        game: 'Free Fire',
        text: '"Langganan top up diamond FF di sini. Harganya paling murah dibanding toko lain, admin juga ramah. Mantap! 🔥"',
        avatar: 'D',
        color: '#ff6b9d'
    },
    {
        name: 'Andi P.',
        game: 'Genshin Impact',
        text: '"Beli Genesis Crystal di sini aman dan terpercaya. Udah beberapa kali order, selalu lancar. Thx Toko Kita! 🌟"',
        avatar: 'A',
        color: '#7c5cfc'
    },
    {
        name: 'Maya R.',
        game: 'Honkai Star Rail',
        text: '"Pertama kali coba top up di sini, agak ragu awalnya. Tapi ternyata beneran cepet banget prosesnya! Bakal repeat order. 🚀"',
        avatar: 'M',
        color: '#00d4ff'
    },
    {
        name: 'Budi K.',
        game: 'Honor of Kings',
        text: '"Harga token HoK paling murah se-Indonesia! Admin fast respon, proses kilat. 10/10 pokoknya! 👑"',
        avatar: 'B',
        color: '#ff9f43'
    },
    {
        name: 'Sari W.',
        game: 'Mobile Legends',
        text: '"Udah belasan kali top up di Toko Kita dan gak pernah ada masalah. Harga selalu update dan kompetitif. Love it! 💙"',
        avatar: 'S',
        color: '#25d366'
    }
];

// ============ FAQ DATA ============
const FAQ_DATA = [
    {
        q: 'Bagaimana cara melakukan top up di Toko Kita?',
        a: 'Pilih game yang ingin di-top up → Masukkan User ID/Zone ID → Pilih nominal → Pilih metode pembayaran → Transfer sesuai nominal → Upload bukti pembayaran → Kirim pesanan via WhatsApp. Pesanan akan diproses dalam 1-5 menit setelah pembayaran dikonfirmasi.'
    },
    {
        q: 'Berapa lama proses top up?',
        a: 'Proses top up biasanya memakan waktu 1-5 menit setelah bukti pembayaran diterima dan diverifikasi oleh admin. Pada jam sibuk, proses bisa memakan waktu hingga 15 menit.'
    },
    {
        q: 'Apakah aman top up di Toko Kita?',
        a: 'Sangat aman! Kami sudah melayani ribuan transaksi dengan tingkat keberhasilan 99.9%. Semua transaksi dilakukan secara resmi melalui channel yang terverifikasi.'
    },
    {
        q: 'Bagaimana jika diamond/item belum masuk?',
        a: 'Jika dalam waktu 15 menit item belum masuk, silakan hubungi admin via WhatsApp dengan menyertakan nomor invoice. Kami akan segera mengecek dan menyelesaikan masalah Anda.'
    },
    {
        q: 'Apakah ada minimal pembelian?',
        a: 'Tidak ada minimal pembelian. Anda bisa membeli mulai dari nominal terkecil yang tersedia di setiap game.'
    },
    {
        q: 'Metode pembayaran apa saja yang tersedia?',
        a: 'Kami menerima pembayaran via Transfer Bank (BTN, BRI/BRImo), E-Wallet (OVO, GoPay). Pilih metode yang paling nyaman untuk Anda!'
    },
    {
        q: 'Bagaimana cara mengetahui User ID dan Zone ID saya?',
        a: 'Untuk Mobile Legends: Klik avatar profil → User ID dan Zone ID tertera di bawah nama. Untuk Free Fire: Klik avatar profil → ID tertera di halaman profil. Untuk Genshin Impact: Buka menu Paimon → UID tertera di pojok kanan bawah layar.'
    },
    {
        q: 'Apakah ada promo atau diskon?',
        a: 'Ya! Kami sering mengadakan promo dan diskon. Pantau terus banner promo di halaman utama atau tanyakan langsung ke admin via WhatsApp untuk info promo terbaru.'
    }
];

// ============ APP STATE ============
let state = {
    currentPage: 'home',
    selectedGame: null,
    selectedItem: null,
    selectedCategory: 0,
    selectedPayment: null,
    sliderIndex: 0,
    proofFile: null,
    proofFileName: '',
    mobileMenuOpen: false,
    searchQuery: '',
    homeCategory: 'games',
    selectedService: null,
    selectedServiceCategory: null,
    selectedServiceType: null
};

let sliderInterval = null;

// ============ UTILITIES ============
function formatPrice(price) {
    return 'Rp ' + new Intl.NumberFormat('id-ID').format(price);
}

function generateInvoice() {
    const now = new Date();
    const date = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const rand = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
    return `TK-${date}-${rand}`;
}

function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Berhasil disalin!', 'success');
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Berhasil disalin!', 'success');
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ NAVIGATION ============
function navigateTo(page, data = null) {
    state.currentPage = page;
    if (data) {
        if (data.gameId) {
            state.selectedGame = GAMES.find(g => g.id === data.gameId);
            state.selectedCategory = 0;
            state.selectedItem = null;
            state.selectedPayment = null;
            state.proofFile = null;
            state.proofFileName = '';
        }
        if (data.serviceId) {
            state.selectedService = findServiceById(data.serviceId);
            state.selectedServiceCategory = data.serviceType || null;
            state.selectedServiceType = null;
        }
    }
    render();
    scrollToTop();
    updateNavActive();
    // Close mobile menu
    state.mobileMenuOpen = false;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');
}

function updateNavActive() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === state.currentPage);
    });
}

// ============ SLIDER ============
function initSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        state.sliderIndex = (state.sliderIndex + 1) % 3;
        updateSlider();
    }, 5000);
}

function updateSlider() {
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.style.transform = `translateX(-${state.sliderIndex * 100}%)`;
    }
    document.querySelectorAll('.hero-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === state.sliderIndex);
    });
}

function goToSlide(index) {
    state.sliderIndex = index;
    updateSlider();
    // Reset interval
    initSlider();
}

// ============ SEARCH ============
function handleSearch(query) {
    state.searchQuery = query.toLowerCase().trim();
    const gameGrid = document.getElementById('game-grid');
    if (!gameGrid) return;

    const cards = gameGrid.querySelectorAll('.game-card');
    let foundCount = 0;
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const match = !state.searchQuery || name.includes(state.searchQuery);
        card.style.display = match ? '' : 'none';
        if (match) foundCount++;
    });

    const noResult = document.getElementById('no-search-result');
    if (noResult) {
        noResult.style.display = (foundCount === 0 && state.searchQuery) ? 'block' : 'none';
    }
}

// ============ RENDER FUNCTIONS ============
function render() {
    const app = document.getElementById('app');
    switch (state.currentPage) {
        case 'home':
            renderHome(app);
            break;
        case 'game':
            renderGamePage(app);
            break;
        case 'service':
            renderServicePage(app);
            break;
        case 'faq':
            renderFAQ(app);
            break;
        case 'check-order':
            renderCheckOrder(app);
            break;
    }
}

function renderHome(app) {
    app.innerHTML = `
        <!-- Hero Slider -->
        <section class="hero-section">
            <div class="hero-slider">
                <div class="hero-slide slide-1">
                    <div class="hero-content">
                        <div class="hero-badge">🔥 PROMO SPESIAL</div>
                        <h2 class="hero-title">Top Up Game Termurah<br>& Tercepat se-Indonesia!</h2>
                        <p class="hero-subtitle">Dapatkan harga spesial untuk semua game favorit kamu. Proses cepat, aman & terpercaya!</p>
                    </div>
                </div>
                <div class="hero-slide slide-2">
                    <div class="hero-content">
                        <div class="hero-badge">⚡ PROSES KILAT</div>
                        <h2 class="hero-title">Top Up Instan!<br>Hanya 1-5 Menit</h2>
                        <p class="hero-subtitle">Bayar, konfirmasi, dan diamond langsung masuk ke akun kamu. Gak pakai lama!</p>
                    </div>
                </div>
                <div class="hero-slide slide-3">
                    <div class="hero-content">
                        <div class="hero-badge">🛒 LAYANAN LENGKAP</div>
                        <h2 class="hero-title">Game, Pulsa, Token PLN,<br>E-Wallet & Lainnya!</h2>
                        <p class="hero-subtitle">Semua kebutuhan top up dalam satu tempat. Harga termurah, proses tercepat!</p>
                    </div>
                </div>
            </div>
            <div class="hero-dots">
                <button class="hero-dot active" onclick="goToSlide(0)"></button>
                <button class="hero-dot" onclick="goToSlide(1)"></button>
                <button class="hero-dot" onclick="goToSlide(2)"></button>
            </div>
        </section>

        <!-- Search -->
        <div class="search-section">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" id="search-input" placeholder="${getSearchPlaceholder()}" oninput="handleSearch(this.value)" autocomplete="off">
                <button class="search-btn" onclick="document.getElementById('search-input').focus()">Cari</button>
            </div>
        </div>

        <!-- Category Tabs -->
        <div class="home-categories">
            <button class="home-cat-tab ${state.homeCategory === 'games' ? 'active' : ''}" data-cat="games" onclick="switchHomeCategory('games')">
                <i class="fas fa-gamepad"></i> <span>Game</span>
            </button>
            <button class="home-cat-tab ${state.homeCategory === 'pulsa' ? 'active' : ''}" data-cat="pulsa" onclick="switchHomeCategory('pulsa')">
                <i class="fas fa-mobile-screen-button"></i> <span>Pulsa & Data</span>
            </button>
            <button class="home-cat-tab ${state.homeCategory === 'pln' ? 'active' : ''}" data-cat="pln" onclick="switchHomeCategory('pln')">
                <i class="fas fa-bolt"></i> <span>PLN</span>
            </button>
            <button class="home-cat-tab ${state.homeCategory === 'ewallet' ? 'active' : ''}" data-cat="ewallet" onclick="switchHomeCategory('ewallet')">
                <i class="fas fa-wallet"></i> <span>E-Wallet</span>
            </button>
        </div>

        <!-- Service Grid -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title"><span class="emoji">${getHomeCategoryEmoji()}</span> ${getHomeCategoryTitle()}</h2>
            </div>
            <div class="game-grid" id="game-grid">
                ${getHomeCategoryGrid()}
            </div>
            <div id="no-search-result" style="display:none; text-align:center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 12px; display:block;"></i>
                Tidak ditemukan. Coba kata kunci lain.
            </div>
        </section>

        <!-- Testimonials -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title"><span class="emoji">💬</span> Testimoni Pelanggan</h2>
            </div>
            <div class="testimonial-scroll">
                ${TESTIMONIALS.map(t => `
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <div class="testimonial-avatar" style="background: ${t.color}">${t.avatar}</div>
                            <div>
                                <div class="testimonial-name">${t.name}</div>
                                <div class="testimonial-game">${t.game}</div>
                            </div>
                        </div>
                        <div class="testimonial-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="testimonial-text">${t.text}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- FAQ Preview -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title"><span class="emoji">❓</span> FAQ</h2>
                <button class="nav-link" onclick="navigateTo('faq')" style="background: var(--bg-card); border: 1px solid var(--glass-border);">Lihat Semua →</button>
            </div>
            <div class="faq-list">
                ${FAQ_DATA.slice(0, 4).map((faq, i) => `
                    <div class="faq-item" id="faq-home-${i}">
                        <button class="faq-question" onclick="toggleFAQ('faq-home-${i}')">
                            ${faq.q}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="faq-answer"><p>${faq.a}</p></div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    initSlider();
}

function renderGamePage(app) {
    const game = state.selectedGame;
    if (!game) return navigateTo('home');

    const currentCategory = game.categories[state.selectedCategory];
    const items = currentCategory ? currentCategory.items : [];

    const colPos = game.spritePos ? (game.spritePos.c * 33.33) : 0;
    const rowPos = game.spritePos ? (27.5 + (game.spritePos.r * 11)) : 0;
    const spriteStyle = game.spritePos ? `style="background-position: ${colPos}% ${rowPos}%"` : '';

    app.innerHTML = `
        <div class="page-container">
            <!-- Game Header -->
            <div class="game-header-section" style="background: ${game.gradient};">
                <button class="back-btn" onclick="navigateTo('home')"><i class="fas fa-arrow-left"></i></button>
                <div class="game-header-content">
                    <div class="game-header-icon">
                        ${game.spritePos ? 
                            `<div class="game-sprite" ${spriteStyle}></div>` : 
                            (game.iconUrl ? `<img src="${game.iconUrl}" alt="${game.name}">` : `<span style="font-size: 3rem;">🎮</span>`)
                        }
                    </div>
                    <div class="game-header-info">
                        <h1>${game.name}</h1>
                        <p>Pilih item yang ingin kamu beli</p>
                    </div>
                </div>
            </div>

            <!-- Category Tabs -->
            ${game.categories.length > 1 ? `
                <div class="category-tabs">
                    ${game.categories.map((cat, i) => `
                        <button class="cat-tab ${i === state.selectedCategory ? 'active' : ''}" onclick="switchCategory(${i})">${cat.name}</button>
                    `).join('')}
                </div>
            ` : ''}

            <!-- Product Grid -->
            <div class="product-grid" id="product-grid">
                ${items.map((item, i) => `
                    <div class="product-card ${state.selectedItem === i ? 'selected' : ''}" onclick="selectItem(${i})">
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">${formatPrice(item.price)}</div>
                    </div>
                `).join('')}
            </div>

            <!-- Order Form -->
            <div class="order-section" id="order-section">
                <div class="order-card">
                    <h2><i class="fas fa-shopping-cart" style="color: var(--accent-blue);"></i> Form Pemesanan</h2>

                    <!-- User ID & Server/Zone ID -->
                    <div class="form-row">
                        <div class="form-group">
                            <label>${game.userIdLabel} <span class="required">*</span></label>
                            <input type="text" class="form-input" id="user-id" placeholder="${game.userIdPlaceholder}">
                        </div>
                        ${game.needsServerId ? `
                            <div class="form-group">
                                <label>${game.serverIdLabel} <span class="required">*</span></label>
                                <input type="text" class="form-input" id="server-id" placeholder="${game.serverIdPlaceholder}">
                            </div>
                        ` : ''}
                    </div>

                    <!-- WhatsApp Number -->
                    <div class="form-group">
                        <label>Nomor WhatsApp <span class="required">*</span></label>
                        <input type="tel" class="form-input" id="wa-number" placeholder="Contoh: 08123456789">
                    </div>

                    <div class="info-box">
                        <div class="info-box-icon"><i class="fas fa-info-circle"></i></div>
                        <div class="info-box-content">
                            <strong>ℹ️ Informasi Pembayaran</strong>
                            <p>Pembayaran dilakukan melalui transfer. <strong>Detail nomor rekening dan instruksi pembayaran akan dikirimkan langsung oleh admin melalui WhatsApp</strong> segera setelah kamu mengirim pesanan ini.</p>
                        </div>
                    </div>

                    <!-- Order Summary -->
                    ${state.selectedItem !== null ? `
                        <div class="order-summary">
                            <h4><i class="fas fa-receipt"></i> Ringkasan Pesanan</h4>
                            <div class="summary-row">
                                <span class="label">Game</span>
                                <span class="value">${game.name}</span>
                            </div>
                            <div class="summary-row">
                                <span class="label">Item</span>
                                <span class="value">${items[state.selectedItem].name}</span>
                            </div>
                            <div class="summary-row total">
                                <span class="label">Total Harga</span>
                                <span class="value">${formatPrice(items[state.selectedItem].price)}</span>
                            </div>
                        </div>
                    ` : ''}

                    <!-- Submit -->
                    <button class="submit-btn" onclick="submitOrder()" id="submit-btn">
                        <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i>
                        Kirim Pesanan via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;

    // If payment is already selected, show detail
    if (state.selectedPayment) {
        showPaymentDetail(state.selectedPayment);
    }
}

function renderFAQ(app) {
    app.innerHTML = `
        <div class="page-container">
            <section class="section">
                <div style="text-align: center; margin-bottom: 32px;">
                    <button class="back-btn" onclick="navigateTo('home')" style="position:relative; display:inline-flex; margin-bottom: 16px;"><i class="fas fa-arrow-left"></i></button>
                    <h1 class="section-title" style="justify-content: center; font-size: 1.8rem;"><span class="emoji">❓</span> Frequently Asked Questions</h1>
                    <p class="section-subtitle mt-1">Temukan jawaban dari pertanyaan yang sering diajukan</p>
                </div>
                <div class="faq-list">
                    ${FAQ_DATA.map((faq, i) => `
                        <div class="faq-item" id="faq-${i}">
                            <button class="faq-question" onclick="toggleFAQ('faq-${i}')">
                                ${faq.q}
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer"><p>${faq.a}</p></div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderCheckOrder(app) {
    app.innerHTML = `
        <div class="page-container">
            <section class="section">
                <div class="check-order-box">
                    <div class="check-icon"><i class="fas fa-search"></i></div>
                    <h2>Cek Status Pesanan</h2>
                    <p>Masukkan nomor invoice untuk melihat status pesanan kamu</p>
                    <div class="check-order-input-row">
                        <input type="text" class="form-input" id="invoice-input" placeholder="Contoh: TK-20260418-0001">
                        <button onclick="checkOrder()">Cek Status</button>
                    </div>
                    <div id="order-result-container"></div>
                </div>
            </section>
        </div>
    `;
}

// ============ EVENT HANDLERS ============
function switchCategory(index) {
    state.selectedCategory = index;
    state.selectedItem = null;
    render();
}

function selectItem(index) {
    state.selectedItem = index;
    render();
    // Scroll to order form smoothly
    setTimeout(() => {
        const orderSection = document.getElementById('order-section');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function selectPayment(paymentId) {
    state.selectedPayment = paymentId;
    // Update UI without full re-render
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    showPaymentDetail(paymentId);
}

function showPaymentDetail(paymentId) {
    const pm = PAYMENT_METHODS.find(p => p.id === paymentId);
    if (!pm) return;

    const container = document.getElementById('payment-detail-container');
    if (!container) return;

    container.innerHTML = `
        <div class="payment-detail-box">
            <h4><i class="fas fa-info-circle"></i> Detail Pembayaran - ${pm.name}</h4>
            <div class="payment-detail-row">
                <span>Nomor Rekening / Akun</span>
                <span>
                    <strong>${pm.accountNumber}</strong>
                    <button class="copy-btn" onclick="copyToClipboard('${pm.accountNumber}')">
                        <i class="fas fa-copy"></i> Salin
                    </button>
                </span>
            </div>
            <div class="payment-detail-row">
                <span>Atas Nama</span>
                <span><strong>${pm.accountName}</strong></span>
            </div>
            ${state.selectedItem !== null ? `
                <div class="payment-detail-row">
                    <span>Jumlah Transfer</span>
                    <span style="color: var(--accent-cyan); font-size: 1.1rem;">
                        <strong>${formatPrice(state.selectedGame.categories[state.selectedCategory].items[state.selectedItem].price)}</strong>
                        <button class="copy-btn" onclick="copyToClipboard('${state.selectedGame.categories[state.selectedCategory].items[state.selectedItem].price}')">
                            <i class="fas fa-copy"></i> Salin
                        </button>
                    </span>
                </div>
            ` : ''}
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                ${pm.instructions}
            </p>
        </div>
    `;
}

function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
        showToast('Hanya file gambar yang diizinkan!', 'error');
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        showToast('Ukuran file maksimal 5MB!', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        state.proofFile = e.target.result;
        state.proofFileName = file.name;
        
        const uploadArea = document.getElementById('upload-area');
        if (uploadArea) {
            uploadArea.classList.add('has-file');
            uploadArea.innerHTML = `
                <input type="file" class="upload-input" id="proof-input" accept="image/*" onchange="handleFileUpload(this)">
                <i class="fas fa-check-circle" style="color: var(--success); font-size: 2rem;"></i>
                <p style="color: var(--success); font-weight: 600;">${file.name}</p>
                <p class="upload-hint">Klik untuk mengganti file</p>
                <img src="${e.target.result}" class="upload-preview" alt="Preview">
            `;
        }
        showToast('Bukti pembayaran berhasil diupload!', 'success');
    };
    reader.readAsDataURL(file);
}

function submitOrder() {
    const game = state.selectedGame;
    if (!game) return;

    // Validation
    const userId = document.getElementById('user-id')?.value?.trim();
    const serverId = document.getElementById('server-id')?.value?.trim();
    const waNumber = document.getElementById('wa-number')?.value?.trim();

    if (state.selectedItem === null) {
        showToast('Pilih item yang ingin dibeli terlebih dahulu!', 'error');
        return;
    }
    if (!userId) {
        showToast(`Masukkan ${game.userIdLabel} terlebih dahulu!`, 'error');
        document.getElementById('user-id')?.focus();
        return;
    }
    if (game.needsServerId && !serverId) {
        showToast(`Masukkan ${game.serverIdLabel} terlebih dahulu!`, 'error');
        document.getElementById('server-id')?.focus();
        return;
    }
    if (!waNumber) {
        showToast('Masukkan nomor WhatsApp kamu!', 'error');
        document.getElementById('wa-number')?.focus();
        return;
    }

    const item = game.categories[state.selectedCategory].items[state.selectedItem];
    const invoice = generateInvoice();

    // Save order to localStorage
    const order = {
        invoice,
        game: game.name,
        item: item.name,
        price: item.price,
        userId,
        serverId: serverId || '-',
        payment: 'WhatsApp Transfer',
        waNumber,
        status: 'pending',
        timestamp: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem('tokokita_orders') || '[]');
    orders.push(order);
    localStorage.setItem('tokokita_orders', JSON.stringify(orders));

    // Format WhatsApp message
    const message = `🛒 *PESANAN BARU - TOKO KITA*
━━━━━━━━━━━━━━━━━━━━
📋 *Invoice:* ${invoice}
🎮 *Game:* ${game.name}
📦 *Item:* ${item.name}
💰 *Harga:* ${formatPrice(item.price)}

👤 *${game.userIdLabel}:* ${userId}${game.needsServerId ? `\n🌐 *${game.serverIdLabel}:* ${serverId}` : ''}

📱 *No. WhatsApp:* ${waNumber}

💳 *Minta Detail Pembayaran Via WA*
━━━━━━━━━━━━━━━━━━━━
_Terima kasih telah berbelanja di Toko Kita! 🐻💙_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Show success modal
    showOrderModal(invoice, waUrl);
}

function showOrderModal(invoice, waUrl) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'order-modal';
    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">✅</div>
            <h3 class="modal-title">Pesanan Siap Dikirim!</h3>
            <p class="modal-text">
                Invoice: <strong>${invoice}</strong><br><br>
                Klik tombol di bawah untuk mengirim pesanan ke WhatsApp admin. 
                <strong style="color: var(--accent-blue);">Admin akan segera mengirimkan nomor rekening dan total yang harus dibayar di chat WhatsApp.</strong>
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <a href="${waUrl}" target="_blank" class="modal-btn modal-btn-primary" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
                    <i class="fab fa-whatsapp"></i> Kirim ke WhatsApp
                </a>
                <button class="modal-btn" style="background: var(--bg-card); border: 1px solid var(--glass-border); color: var(--text-secondary);" onclick="closeModal()">Tutup</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));
}

function closeModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function toggleFAQ(id) {
    const item = document.getElementById(id);
    if (item) {
        item.classList.toggle('open');
    }
}

function checkOrder() {
    const invoiceInput = document.getElementById('invoice-input');
    const invoice = invoiceInput?.value?.trim();
    if (!invoice) {
        showToast('Masukkan nomor invoice!', 'error');
        return;
    }

    const orders = JSON.parse(localStorage.getItem('tokokita_orders') || '[]');
    const order = orders.find(o => o.invoice.toLowerCase() === invoice.toLowerCase());
    const container = document.getElementById('order-result-container');

    if (order) {
        const date = new Date(order.timestamp);
        const formattedDate = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        container.innerHTML = `
            <div class="order-result">
                <div class="order-result-card">
                    <div class="status-badge status-${order.status}">
                        <i class="fas fa-${order.status === 'pending' ? 'clock' : 'check-circle'}"></i>
                        ${order.status === 'pending' ? 'Menunggu Konfirmasi' : 'Berhasil'}
                    </div>
                    <div class="summary-row">
                        <span class="label">Invoice</span>
                        <span class="value">${order.invoice}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">Game</span>
                        <span class="value">${order.game}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">Item</span>
                        <span class="value">${order.item}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">Total</span>
                        <span class="value text-gradient">${formatPrice(order.price)}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">${order.userId ? 'User ID' : '-'}</span>
                        <span class="value">${order.userId}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">Pembayaran</span>
                        <span class="value">${order.payment}</span>
                    </div>
                    <div class="summary-row">
                        <span class="label">Tanggal</span>
                        <span class="value">${formattedDate}</span>
                    </div>
                    <p style="margin-top: 16px; font-size: 0.8rem; color: var(--text-muted);">
                        <i class="fas fa-info-circle"></i> 
                        ${order.status === 'pending' ? 'Pesanan sedang menunggu konfirmasi admin. Jika sudah lebih dari 15 menit, silakan hubungi admin via WhatsApp.' : 'Top up berhasil! Silakan cek akun game kamu.'}
                    </p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="order-result">
                <div class="order-result-card" style="text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--warning); margin-bottom: 12px;"></i>
                    <p style="color: var(--text-secondary);">Invoice <strong>${invoice}</strong> tidak ditemukan.<br>Pastikan nomor invoice sudah benar.</p>
                </div>
            </div>
        `;
    }
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    // Render home page
    render();

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            state.mobileMenuOpen = !state.mobileMenuOpen;
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-open', state.mobileMenuOpen);
        });
    }

    // Nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateTo(page);
        });
    });

    // Close modal on overlay click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
});

