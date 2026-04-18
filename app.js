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
                    { name: 'Pilihan Pemula', price: 14214 },
                    { name: '60 Bonds', price: 15757 },
                    { name: 'Kotak Anti Peluru 30 Hari', price: 38850 },
                    { name: 'Battle Pass Lanjutan', price: 62420 },
                    { name: 'Percobaan Elite 30 Hari', price: 66910 },
                    { name: '310 Bonds', price: 69878 },
                    { name: 'Kotak Komposit 30 Hari', price: 111589 },
                    { name: '630 Bonds', price: 136862 },
                    { name: 'Battle Pass Premium', price: 177449 },
                    { name: '1.580 Bonds', price: 337379 },
                    { name: '3.200 Bonds', price: 679850 },
                    { name: '6.500 Bonds', price: 1.360947 }
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
                    { name: '40 Vouchers', price: 11655 },
                    { name: '90 Vouchers', price: 20709 },
                    { name: '230 Vouchers', price: 47873 },
                    { name: '470 Vouchers', price: 92115 },
                    { name: '950 Vouchers', price: 177825 },
                    { name: '1430 Vouchers', price: 271094 }
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
                    { name: '42 Diamonds', price: 15500 },
                    { name: '297 Diamonds', price: 105000 }
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
                    { name: 'Ultra Skin Lucky Chest', price: 8504 },
                    { name: '100 Gold', price: 14096 },
                    { name: 'Level Up Pass', price: 27254 },
                    { name: '300 Gold', price: 37741 },
                    { name: 'Strike Pass Elite', price: 52263 },
                    { name: '500 Gold', price: 61470 },
                    { name: 'Strike Pass Elite+', price: 114748 },
                    { name: '1.000 Gold', price: 121464 },
                    { name: '2.000 Gold', price: 239653 },
                    { name: '5.000 Gold', price: 595177 }
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
                    { name: '32 CP', price: 6748 },
                    { name: '63 CP', price: 11503 },
                    { name: '128 CP', price: 20709 },
                    { name: '321 CP', price: 47773 },
                    { name: '645 CP', price: 92315 },
                    { name: '800 CP', price: 111414 },
                    { name: '1.373 CP', price: 149468 },
                    { name: '2.059 CP', price: 294825 },
                    { name: '3.564 CP', price: 459525 }
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
                    { name: '39 Silver', price: 8391 },
                    { name: '40 FC Points', price: 8441 },
                    { name: '99 Silver', price: 17292 },
                    { name: '100 FC Points', price: 17342 },
                    { name: '499 Silver', price: 76325 },
                    { name: '520 FC Points', price: 76375 },
                    { name: '999 Silver', price: 151288 },
                    { name: '1.070 FC Points', price: 151338 }
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
                    { name: '5 Diamond', price: 2879 },
                    { name: '10 Diamond', price: 3793 },
                    { name: '12 Diamond', price: 3950 },
                    { name: '15 Diamond', price: 4617 },
                    { name: '20 Diamond', price: 5441 },
                    { name: '25 Diamond', price: 6244 },
                    { name: '30 Diamond', price: 7064 },
                    { name: '50 Diamond', price: 8719 },
                    { name: '55 Diamond', price: 9563 },
                    { name: '60 Diamond', price: 10383 },
                    { name: '70 Diamond', price: 11135 },
                    { name: '75 Diamond', price: 12003 },
                    { name: '80 Diamond', price: 12875 },
                    { name: '90 Diamond', price: 14528 },
                    { name: '100 Diamond', price: 15344 },
                    { name: '120 Diamond', price: 17820 },
                    { name: '130 Diamond', price: 19468 },
                    { name: '140 Diamond', price: 20002 },
                    { name: '145 Diamond', price: 21048 },
                    { name: '150 Diamond', price: 21870 },
                    { name: '160 Diamond', price: 23615 },
                    { name: '170 Diamond', price: 24389 },
                    { name: '180 Diamond', price: 26034 },
                    { name: '190 Diamond', price: 26807 },
                    { name: '200 Diamond', price: 28452 },
                    { name: '210 Diamond', price: 29225 },
                    { name: '230 Diamond', price: 32535 },
                    { name: '250 Diamond', price: 35034 },
                    { name: '280 Diamond', price: 38225 },
                    { name: '300 Diamond', price: 41516 },
                    { name: '355 Diamond', price: 47230 },
                    { name: '360 Diamond', price: 48077 },
                    { name: '375 Diamond', price: 50516 },
                    { name: '405 Diamond', price: 53807 },
                    { name: '425 Diamond', price: 56225 },
                    { name: '455 Diamond', price: 60164 },
                    { name: '475 Diamond', price: 62807 },
                    { name: '500 Diamond', price: 66048 },
                    { name: '510 Diamond', price: 67693 },
                    { name: '515 Diamond', price: 68516 },
                    { name: '520 Diamond', price: 69415 },
                    { name: '545 Diamond', price: 71807 },
                    { name: '565 Diamond', price: 74225 },
                    { name: '600 Diamond', price: 79241 },
                    { name: '635 Diamond', price: 83255 },
                    { name: '645 Diamond', price: 84900 },
                    { name: '655 Diamond', price: 86546 },
                    { name: '720 Diamond', price: 91775 },
                    { name: '725 Diamond', price: 93073 },
                    { name: '740 Diamond', price: 95541 },
                    { name: '770 Diamond', price: 99283 },
                    { name: '790 Diamond', price: 101389 },
                    { name: '800 Diamond', price: 103043 },
                    { name: '860 Diamond', price: 110250 },
                    { name: '930 Diamond', price: 119250 },
                    { name: '1000 Diamond', price: 128250 },
                    { name: '1050 Diamond', price: 135032 },
                    { name: '1075 Diamond', price: 137431 },
                    { name: '1200 Diamond', price: 153705 },
                    { name: '1215 Diamond', price: 155300 },
                    { name: '1300 Diamond', price: 166768 },
                    { name: '1440 Diamond', price: 182300 },
                    { name: '1450 Diamond', price: 182300 },
                    { name: '1490 Diamond', price: 188765 },
                    { name: '1510 Diamond', price: 190597 },
                    { name: '1580 Diamond', price: 199647 },
                    { name: '1795 Diamond', price: 227635 },
                    { name: '1800 Diamond', price: 227634 },
                    { name: '1875 Diamond', price: 236644 },
                    { name: '1975 Diamond', price: 249866 },
                    { name: '2000 Diamond', price: 253093 },
                    { name: '2100 Diamond', price: 266157 },
                    { name: '2140 Diamond', price: 271114 },
                    { name: '2180 Diamond', price: 270875 },
                    { name: '2210 Diamond', price: 277286 },
                    { name: '2280 Diamond', price: 285908 },
                    { name: '2355 Diamond', price: 296263 },
                    { name: '5600 Diamond', price: 700304 },
                    { name: '7290 Diamond', price: 906744 }
                ]
            },
            {
                name: 'Pass & Membership',
                items: [
                    { name: 'Level Up Pass - Level 6', price: 7169 },
                    { name: 'Level Up Pass - Level 10', price: 10528 },
                    { name: 'Level Up Pass - Level 15', price: 10528 },
                    { name: 'Level Up Pass - Level 20', price: 10528 },
                    { name: 'Level Up Pass - Level 25', price: 10528 },
                    { name: 'Level Up Pass - Level 30', price: 15672 },
                    { name: 'Member Mingguan', price: 29701 },
                    { name: 'Booyah Pass', price: 43739 },
                    { name: 'Member Mingguan 2X', price: 57770 },
                    { name: 'Member Bulanan', price: 84352 },
                    { name: 'Member Mingguan x3', price: 85654 },
                    { name: 'Member Mingguan x4', price: 113539 },
                    { name: 'Member Mingguan x5', price: 141424 },
                    { name: 'Membership Bulanan 2X', price: 168590 },
                    { name: 'Membership Bulanan x3', price: 251885 },
                    { name: 'Membership Bulanan x4', price: 335180 },
                    { name: 'Membership Bulanan x5', price: 418475 }
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
                    { name: '80 RC', price: 15250 },
                    { name: 'Kartu Mingguan', price: 28823 },
                    { name: '250 RC', price: 43098 },
                    { name: 'Kartu Bulanan', price: 46195 },
                    { name: '450 RC', price: 70246 },
                    { name: 'Quick Glory Pass', price: 71250 },
                    { name: 'Growth Fund', price: 90317 },
                    { name: 'Dana Elit Rebate Lv 80', price: 118995 },
                    { name: 'Glory Pass Premium', price: 134438 },
                    { name: '920 RC', price: 137213 },
                    { name: '1.850 RC', price: 272955 },
                    { name: '2.800 RC', price: 408698 },
                    { name: '4.750 RC', price: 675050 }
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
                    { name: '60 Genesis Crystals', price: 12851 },
                    { name: '300+30 Genesis Crystals', price: 55621 },
                    { name: 'Blessing of the Welkin Moon', price: 55721 },
                    { name: '980+110 Genesis Crystals', price: 166830 },
                    { name: '1980+260 Genesis Crystals', price: 345621 },
                    { name: '3280+600 Genesis Crystals', price: 567412 }
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
                    { name: '1000 Diamonds', price: 3833 },
                    { name: '1200 Diamonds', price: 4502 },
                    { name: '2.000 Diamond', price: 5416 },
                    { name: '3.000 Diamond', price: 6999 },
                    { name: '4.000 Diamond', price: 8582 },
                    { name: '6.000 Diamond', price: 11748 },
                    { name: '8.000 Diamond', price: 14935 },
                    { name: '9.200 Diamond', price: 16994 },
                    { name: '10.000 Diamond', price: 18080 },
                    { name: '12.000 Diamond', price: 21270 },
                    { name: '14.000 Diamond', price: 24412 },
                    { name: '16.000 Diamond', price: 27578 },
                    { name: '18.000 Diamond', price: 30744 },
                    { name: '18.200 Diamond', price: 31460 },
                    { name: '20.000 Diamond', price: 33910 },
                    { name: '30.000 Diamond', price: 49740 },
                    { name: '35.000 Diamond', price: 57655 },
                    { name: '40.000 Diamond', price: 65570 },
                    { name: '45.000 Diamond', price: 73485 },
                    { name: '45.600 Diamond', price: 74990 },
                    { name: '50.000 Diamond', price: 81400 },
                    { name: '60.000 Diamond', price: 98230 },
                    { name: '61.000 Diamond', price: 99980 },
                    { name: '80.000 Diamond', price: 129890 }
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
                    { name: '60 Oneiric Shard', price: 13293 },
                    { name: 'Express Supply Pass', price: 55460 },
                    { name: '300+30 Oneiric Shard', price: 56075 },
                    { name: '980+110 Oneiric Shard', price: 168514 },
                    { name: '1980+260 Oneiric Shard', price: 334086 },
                    { name: '3280+600 Oneiric Shard', price: 574195 }
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
                    { name: '16 Tokens', price: 5231 },
                    { name: '80 Tokens', price: 16603 },
                    { name: '240 Tokens', price: 44929 },
                    { name: '400 Tokens', price: 73455 },
                    { name: '560 Tokens', price: 101938 },
                    { name: '800 Tokens', price: 144515 },
                    { name: '1.200 Tokens', price: 215570 },
                    { name: '2.400 Tokens', price: 428935 },
                    { name: '4.000 Tokens', price: 713378 },
                    { name: '8.000 Tokens', price: 1424379 }
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
                    { name: '65 Credits', price: 16595 },
                    { name: '330 Credits', price: 63599 },
                    { name: '558 Credits', price: 102599 },
                    { name: '1108 Credits', price: 187293 },
                    { name: '2268 Credits', price: 417620 },
                    { name: '3468 Credits', price: 582599 }
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
                    { name: '300 Coins', price: 37372 },
                    { name: '600 Coins', price: 72484 },
                    { name: '1.000 Coins', price: 118464 },
                    { name: '2.000 Coins', price: 234668 },
                    { name: '5.000 Coins', price: 583380 }
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
                    { name: '105 Wild Cores', price: 16090 },
                    { name: '350 Wild Cores', price: 48150 },
                    { name: '420 Wild Cores', price: 57175 },
                    { name: '585 Wild Cores', price: 75375 },
                    { name: '1135 Wild Cores', price: 139740 },
                    { name: '1660 Wild Cores', price: 194650 },
                    { name: '3010 Wild Cores', price: 332040 },
                    { name: '6210 Wild Cores', price: 689200 }
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
                    { name: '5 Diamonds', price: 3405 },
                    { name: '12 Diamonds', price: 5044 },
                    { name: '19 Diamonds', price: 6634 },
                    { name: '28 Diamonds', price: 8799 },
                    { name: '44 Diamonds', price: 12259 },
                    { name: '59 Diamonds', price: 16478 },
                    { name: '85 Diamonds', price: 22991 },
                    { name: 'Weekly Card', price: 29325 },
                    { name: '170 Diamonds', price: 42640 },
                    { name: '240 Diamonds', price: 58800 },
                    { name: '296 Diamonds', price: 71160 },
                    { name: '408 Diamonds', price: 95098 },
                    { name: '568 Diamonds', price: 133708 },
                    { name: '875 Diamonds', price: 205572 },
                    { name: '2.010 Diamonds', price: 443210 },
                    { name: '4.830 Diamonds', price: 1075118 }
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
                    { name: '60 Ruby', price: 14990 },
                    { name: '310 Ruby', price: 60062 },
                    { name: 'Kartu Bulanan', price: 60062 },
                    { name: 'Support Pass', price: 63804 },
                    { name: 'Kartu Bulanan Premium', price: 113629 },
                    { name: 'Support Pass Premium', price: 120683 },
                    { name: '630 Ruby', price: 124567 },
                    { name: '1.300 Ruby', price: 225882 },
                    { name: '3.200 Ruby', price: 579245 },
                    { name: '6.500 Ruby', price: 1114910 }
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
                    { name: '5 Diamond', price: 3546 },
                    { name: '10 Diamond', price: 4964 },
                    { name: '14 Diamond', price: 6042 },
                    { name: '28 Diamond', price: 9846 },
                    { name: '36 Diamond', price: 11918 },
                    { name: '44 Diamond', price: 13666 },
                    { name: '59 Diamond', price: 17312 },
                    { name: '70 Diamond', price: 20978 },
                    { name: '86 Diamond', price: 24997 },
                    { name: '112 Diamond (Misi Topup 100DM)', price: 31769 },
                    { name: '140 Diamond', price: 38893 },
                    { name: '172 Diamond', price: 47057 },
                    { name: '185 Diamond', price: 51107 },
                    { name: '222 Diamond', price: 59285 },
                    { name: '240 Diamond', price: 64090 },
                    { name: '257 Diamond', price: 68928 },
                    { name: '284 Diamond (Misi Topup 250DM)', price: 75045 },
                    { name: '296 Diamond', price: 78065 },
                    { name: '344 Diamond', price: 91043 },
                    { name: '355 Diamond', price: 94182 },
                    { name: '370 Diamond', price: 96593 },
                    { name: '408 Diamond', price: 106759 },
                    { name: '429 Diamond', price: 112990 },
                    { name: '514 Diamond', price: 132818 },
                    { name: '568 Diamond', price: 144345 },
                    { name: '600 Diamond', price: 153204 },
                    { name: '706 Diamond', price: 180753 },
                    { name: '878 Diamond', price: 220164 },
                    { name: '963 Diamond', price: 237949 },
                    { name: '1050 Diamond', price: 259675 },
                    { name: '1159 Diamond', price: 286916 },
                    { name: '1220 Diamond', price: 302134 },
                    { name: '1412 Diamond', price: 350767 },
                    { name: '1446 Diamond', price: 362763 },
                    { name: '1506 Diamond', price: 375261 },
                    { name: '1669 Diamond', price: 421825 },
                    { name: '1704 Diamond', price: 422583 },
                    { name: '1830 Diamond', price: 457898 },
                    { name: '2195 Diamond', price: 518520 },
                    { name: '2976 Diamond', price: 706941 },
                    { name: '3073 Diamond', price: 737511 },
                    { name: '3688 Diamond', price: 883.884 },
                    { name: '4394 Diamond', price: 1034446 },
                    { name: '4830 Diamond', price: 1127140 },
                    { name: '5532 Diamond', price: 1301014 },
                    { name: '6050 Diamond', price: 1412478 },
                    { name: '7727 Diamond', price: 1813620 }
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
                    { name: '60 Gems', price: 15000 },
                    { name: '300 Gems', price: 72000 }
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
                    { name: '250 Gems', price: 15550 },
                    { name: '120 Tokens', price: 34475 },
                    { name: '800 Gems', price: 36994 },
                    { name: '1.600 Gems + 75 Tokens', price: 45275 },
                    { name: '5.000 Gems + 275 Tokens', price: 105875 },
                    { name: '1.300 Tokens', price: 232875 }
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
                    { name: '60 Candies', price: 14660 },
                    { name: '180 Candies', price: 40175 },
                    { name: '316 Candies', price: 64543 },
                    { name: '718 Candies', price: 127525 },
                    { name: '1368 Candies', price: 251896 },
                    { name: '2118 Candies', price: 374500 }
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
                    { name: '1200 PB Cash', price: 11600 },
                    { name: '2400 PB Cash', price: 20700 },
                    { name: '6000 PB Cash', price: 48000 },
                    { name: '12000 PB Cash', price: 93500 },
                    { name: '24000 PB Cash', price: 184500 },
                    { name: '36000 PB Cash', price: 275500 },
                    { name: '60000 PB Cash', price: 457500 }
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
                    { name: '15 UC', price: 9800 },
                    { name: '25 UC', price: 17125 },
                    { name: '35 UC', price: 17450 },
                    { name: '60 UC', price: 17600 },
                    { name: '50 UC', price: 17950 },
                    { name: '100 UC', price: 32600 },
                    { name: '70 UC', price: 32600 },
                    { name: '125 UC', price: 47400 },
                    { name: '150 UC', price: 48204 },
                    { name: '210 UC', price: 61809 },
                    { name: '200 UC', price: 61850 },
                    { name: '250 UC', price: 76100 },
                    { name: '300 UC', price: 79350 },
                    { name: '350 UC', price: 91850 },
                    { name: '375 UC', price: 94780 },
                    { name: '500 UC', price: 126350 },
                    { name: '525 UC', price: 152050 },
                    { name: '700 UC', price: 169800 },
                    { name: '750 UC', price: 190050 },
                    { name: '1000 UC', price: 251550 },
                    { name: '1100 UC', price: 265650 },
                    { name: '1500 UC', price: 349165 },
                    { name: '1250 UC', price: 357550 },
                    { name: '1750 UC', price: 415775 },
                    { name: 'Elite Pass Plus', price: 418050 },
                    { name: '2500 UC', price: 557550 }
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
                    { name: '100 Golden Star', price: 12955 },
                    { name: 'Weekly Card', price: 13380 },
                    { name: '310 Golden Star', price: 36613 },
                    { name: '520 Golden Star', price: 55365 },
                    { name: 'Super Pass', price: 57588 },
                    { name: '1.060 Golden Star', price: 108875 },
                    { name: 'Super Pass Bundle', price: 114230 },
                    { name: 'Monthly Card', price: 136223 },
                    { name: 'Super VIP Card', price: 155260 },
                    { name: '2.180 Golden Star', price: 216050 },
                    { name: '5.600 Golden Star', price: 618543 }
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
                    { name: '475 VP', price: 54699 },
                    { name: '1000 VP', price: 107372 },
                    { name: '1475 VP', price: 158797 }
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
