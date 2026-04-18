const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find price: XXXX
content = content.replace(/price:\s*(\d+(\.\d+)?)/g, (match, p1) => {
    let price = parseFloat(p1);
    let finalPrice;
    
    if (price < 70000) {
        finalPrice = price - 1000;
    } else {
        finalPrice = Math.ceil((price - 2000) * 1.10);
    }
    
    // Ensure we don't go below 0
    if (finalPrice < 0) finalPrice = 0;
    
    return `price: ${finalPrice}`;
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated all prices in app.js');
