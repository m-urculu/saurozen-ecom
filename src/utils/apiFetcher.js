// src/utils/apiFetcher.js

/**
 * Fetch files from the blob API route.
 * @returns {Promise<Object[]>} - The fetched files as an array of objects.
 */
export const fetchBlobFilesFromApi = async () => {
    try {
      const response = await fetch('/api/blob');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch blob data: ${response.statusText}`);
      }
  
      return await response.json(); // Return the fetched data
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return [];
    }
  };
  