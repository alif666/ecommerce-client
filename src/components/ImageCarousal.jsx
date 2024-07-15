import { useState } from 'react';

const ImageCarousal = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const items = [
//     { path: '/Logo_Dark.png', alt: 'Slide 1' },
//     { path: '/Logo.png', alt: 'Slide 2' },
//     { path: '/Logo_Square_Dark.png', alt: 'Slide 3' },
//   ];
  const totalItems = items.length;

  const updateCarousel = (newIndex) => {
    if (newIndex < 0) {
      newIndex = totalItems - 1;
    } else if (newIndex >= totalItems) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex-none w-full max-w-md mx-auto overflow-hidden">
      <div
        className="flex flex-none transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={item.path} className="w-full object-cover" alt="slide" />
          </div>
        ))}
      </div>
      <button
        onClick={() => updateCarousel(currentIndex - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:p-4"
      >
        Prev
      </button>
      <button
        onClick={() => updateCarousel(currentIndex + 1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:p-4"
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousal;

