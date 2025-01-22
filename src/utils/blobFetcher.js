/**
 * Fetch a single image file from Vercel Blob Storage.
 * @param {string} imageUrl - The full URL of the image.
 * @param {string} token - The access token for authentication.
 * @returns {Promise<Object>} - An object containing image data with URL.
 */
export const fetchImageFile = async (imageUrl, token) => {
  try {
    const response = await fetch(imageUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image data: ${response.statusText}`);
    }

    // Here we don't parse JSON since we're fetching an image
    const imageBlob = await response.blob();
    
    // Construct the image data object with URL and size (if needed)
    const imageFile = {
      url: imageUrl,
      size: imageBlob.size,  // Image size in bytes (optional)
      type: imageBlob.type,  // Image MIME type (e.g., image/jpeg, image/png)
      altText: imageUrl.split('/').pop().split('.')[0],  // Use the image file name as alt text
    };

    return imageFile;
  } catch (error) {
    console.error('Error fetching image file:', error);
    return null;
  }
};
