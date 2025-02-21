// ReviewSlider.tsx
import React, { useState, useRef, useEffect } from 'react';
import * as Icons from '../../public/icons';

interface ReviewSliderProps {
  children: React.ReactNode; // Specify that children can be any valid React node
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State for the current index of the review
  const [reviewWidth, setReviewWidth] = useState(0); // State for dynamic review width
  const reviewsRef = useRef<HTMLDivElement | null>(null); // Create a ref for the reviews container
  const totalReviews = React.Children.count(children); // Count of total reviews

  // Calculate the width of a single review and log the scrollable width
  useEffect(() => {
    const calculateReviewWidth = () => {
      if (reviewsRef.current) {
        const scrollWidth = reviewsRef.current.scrollWidth; // Get the full scrollable width of the container
        const singleReviewWidth = scrollWidth / totalReviews + 4; // Calculate the width of a single review
        setReviewWidth(singleReviewWidth); // Save the calculated review width in state
      }
    };

    // Calculate on initial render
    calculateReviewWidth();

    // Add resize event listener to recalculate when the viewport is resized
    const handleResize = () => {
      calculateReviewWidth(); // Recalculate the width on window resize
    };

    window.addEventListener('resize', handleResize); // Attach the resize listener

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize); // Remove the listener
    };
  }, [totalReviews]); // Recalculate when total reviews change and on resize

  // Scroll to a specific review based on its index
  const scrollToReview = (index: number) => {
    if (reviewsRef.current) {
      const targetPosition = reviewWidth * index; // Calculate the target scroll position based on the index
      reviewsRef.current.scrollTo({
        left: targetPosition, // Scroll to the calculated position
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  // Move to the next review
  const handleNext = () => {
    if (currentIndex < totalReviews - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex); // Update the current index
      scrollToReview(newIndex); // Scroll to the new review
    } else {
      // Ensure you scroll to the last review
      scrollToReview(totalReviews - 1);
    }
  };  

  // Move to the previous review
  const handlePrevious = () => {
    if (reviewsRef.current) {
      if (reviewsRef.current.scrollLeft > (reviewWidth * currentIndex)) {
        // Ensure it scrolls to position 0 when at the start
        scrollToReview(currentIndex); // Ensure it scrolls to x = 0
      } else {
        const newIndex = Math.max(currentIndex - 1, 0); // Prevent newIndex from going below 0
        setCurrentIndex(newIndex); // Update the current index
        scrollToReview(newIndex); // Scroll to the new review
      }
    }
  };

  // Update current index based on scroll position
useEffect(() => {
  // Define the handleScroll function
  const handleScroll = () => {
    if (reviewsRef.current) {
      const scrollLeft = reviewsRef.current.scrollLeft; // Get the current scroll position
      const newIndex = Math.floor(scrollLeft / reviewWidth); // Calculate the new index based on scroll position

      // Update the current index only if it has changed
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex); // Update the current index
      }
    }
  };

  // Get the current ref element
  const reviewsElement = reviewsRef.current;

  // Add scroll event listener if the element exists
  if (reviewsElement) {
    reviewsElement.addEventListener('scroll', handleScroll); // Attach the scroll listener
  }

  // Clean up the event listener on component unmount or when reviewWidth changes
  return () => {
    if (reviewsElement) {
      reviewsElement.removeEventListener('scroll', handleScroll); // Remove the listener
    }
  };
}, [reviewWidth, currentIndex]); // Run this effect whenever reviewWidth or currentIndex changes


  return (
    <div>
      <div className='reviews-header'>
        <h1 className='reviews-title'>REVIEWS</h1>
        <div className="arrows">
          <button onClick={handlePrevious}>
            <img 
              src={Icons.arrow.src}
              alt="Previous"
              className="arrowleft"
            />
          </button>
          <button onClick={handleNext}>
            <img 
              src={Icons.arrow.src}
              alt="Next"
              className="arrowright"
            />
          </button>
        </div>
      </div>

      <div 
        className='reviews'
        ref={reviewsRef} // Attach the ref here
        style={{
          display: 'flex',
          overflowX: 'auto', // Allow manual horizontal scrolling
          scrollSnapType: 'x mandatory', // Optional: for a snapping effect
        }}
      >
        {children} {/* Render the review items passed as children */}
      </div>
    </div>
  );
};

export default ReviewSlider;
