const fs = require("fs");
const path = require("path");

// List of custom names for the models, you can edit these
const modelNames = [
  "Half Frames",
  "Semi Rimless",
  "Wrap",
  "Sport",
  "Hingeless",
  "Rectangle Rimless",
  "Shield Sunglasses",
  "Biker Goggles",
  "Headband"
];

// List of descriptions for the models, aligned with modelNames
const modelDescriptions = [
  "Lightweight half-rim glasses for a sleek and modern look.",
  "Semi-rimless design for a perfect blend of style and durability.",
  "Wrap-around frames that offer full peripheral coverage.",
  "Performance-focused sports eyewear with a secure fit.",
  "Hingeless frames designed for maximum flexibility and comfort.",
  "Minimalist rectangle rimless frames for a sophisticated appeal.",
  "Oversized shield sunglasses for bold protection and style.",
  "Durable biker goggles crafted for ultimate road protection.",
  "Comfortable headband-style eyewear for hands-free convenience."
];

// Descriptions for each collection
const collectionDescriptions = {
  "Aqua Aura": "The Aqua Aura collection captures the essence of crystal-clear waters and sunlit reflections. With sleek, fluid designs and oceanic hues, these eyewear pieces exude an effortless blend of elegance and adventure. Perfect for those who embrace the serenity of the sea and the thrill of the unknown. 🌊☀️",
  "Ethereal Tides": "The Ethereal Tides collection embodies the fluidity of ocean waves and the brilliance of sunlit horizons. With sleek contours and reflective lenses, these pieces create a dreamlike fusion of motion and serenity. Designed for those who drift between adventure and tranquility, capturing the magic of endless tides. 🌊✨",
  "Neon Mirage": "The Neon Mirage collection radiates bold energy and futuristic elegance. With striking hues, reflective finishes, and sleek designs, these eyewear pieces embody a blend of high-fashion luxury and cyber-inspired aesthetics. Perfect for those who dare to stand out and embrace the glow of the extraordinary. 🔥💖✨",
  "Lustruous Core": "The Lustrous Core collection fuses sleek chrome designs with sharp, futuristic details, radiating bold sophistication and edgy elegance. These eyewear pieces are a statement of strength and innovation, perfect for those who crave a fearless, avant-garde style that turns heads and breaks boundaries. ⚡🕶️✨",
  "Abyss Forge": "The Abyss Forge collection channels the raw power of molten metal and the mystique of deep oceanic depths. With intricate, liquid-like designs and striking, dark hues, these pieces embody an aura of untamed energy and enigmatic allure. Perfect for those who seek to unleash their inner fire and explore the unknown. 🌊⚙️🔥"
};

// Use relative path to reach the imageLinks.json file
const filePath = path.join(__dirname, 'imageLinks.json');

// Generate a random rating between 3.5 and 5
function getRandomRating() {
  return (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
}

// Helper function to generate random date
function getRandomDate(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const randomTime = Math.floor(Math.random() * (end - start + 1)) + start;
  return new Date(randomTime).toISOString();
}

// Function to generate random units sold
function getRandomUnitsSold() {
  return Math.floor(Math.random() * (500 - 10 + 1)) + 10; // Random number between 10 and 500
}

// Function to generate random available units
function getRandomAvailableUnits() {
  return Math.floor(Math.random() * (150 - 50 + 1)) + 50; // Random number between 50 and 150
}

// Read the imageLinks.json file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  const images = jsonData.images;

  // Function to divide an array into chunks of 4
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  // Divide images into groups of 4
  const groupedImages = chunkArray(images, 4);

  // Create a new products array
  const products = groupedImages.map((group, index) => {
    const modelIndex = index % modelNames.length;
    
    // Determine collection
    let collection;
    if (index < 9) {
      collection = "Aqua Aura";
    } else if (index < 18) {
      collection = "Ethereal Tides";
    } else if (index < 27) {
      collection = "Neon Mirage";
    } else if (index < 36) {
      collection = "Lustruous Core";
    } else {
      collection = "Abyss Forge";
    }

    // Generate a random price between 100 and 300
    function getRandomPrice() {
      let price = Math.random() * (300 - 100) + 100;
      let priceInt = Math.floor(price);
      let roundType = Math.floor(Math.random() * 3); // 0 for decimal, 1 for 5, 2 for 9
      let lastDigit = priceInt % 10;

      if (roundType === 0) {
          priceInt = priceInt - lastDigit;
      } else if (roundType === 1) {
          priceInt = priceInt - lastDigit + 5;
      } else {
          priceInt = priceInt - lastDigit + 9;
      }

      return priceInt;
    }

    // Determine if product gets a discount
    function getDiscount() {
      // Randomly decide if this product gets a discount (50% chance)
      if (Math.random() < 0.5) {
        // Return a random discount between 10 and 50
        let discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

        // Round the discount to the nearest 5
        return Math.round(discount / 5) * 5;
      }
      return null; // No discount
    }

    const product = {
      productId: index + 1,
      model: modelNames[modelIndex], // Model comes first
      collection: collection,       // Collection is next
      description: `${modelDescriptions[modelIndex]} ${collectionDescriptions[collection]}`, // Description comes last
      rating: parseFloat(getRandomRating()), // Add random rating
      images: group,
      price: getRandomPrice(), // Add random price
      createdAt: getRandomDate('2020-01-01', '2024-12-31'), // Random creation date
      unitsSold: getRandomUnitsSold(), // Add random units sold
      availableUnits: getRandomAvailableUnits() // Add random available units
    };

    // Add discount key if there is a discount
    const discount = getDiscount();
    if (discount !== null) {
      product.discount = discount;
    }

    return product;
  });

  // Create the products.json object
  const productsJson = { products };

  // Write the products.json file
  const outputPath = path.join(__dirname, 'products.json');
  fs.writeFile(outputPath, JSON.stringify(productsJson, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("products.json created successfully!");
  });
});
