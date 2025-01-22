import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Fetch the image from the API route
    const fetchImage = async () => {
      const res = await fetch('/api/image');
      if (res.ok) {
        const imageBlob = await res.blob();
        setImageUrl(URL.createObjectURL(imageBlob));
      }
    };

    fetchImage();
  }, []);

  // Render the image once it's loaded
  if (!imageUrl) return <div>Loading...</div>;

  return (
    <div>
      <img src={imageUrl} alt="Product Image" width="400" />
    </div>
  );
};

export default ImageComponent;
