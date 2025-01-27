const fs = require("fs");
const path = require("path");

// Use relative path to reach the parent directory
const filePath = path.join(__dirname, '../scripts/imageLinks.json');

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
  const products = groupedImages.map((group, index) => ({
    productId: index + 1,
    images: group,
  }));

  // Create the products.json object
  const productsJson = { products };

  // Write the products.json file
  const outputPath = path.join(__dirname, '../scripts/products.json');
  fs.writeFile(outputPath, JSON.stringify(productsJson, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("products.json created successfully!");
  });
});
