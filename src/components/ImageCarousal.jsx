import { useState } from 'react';

const ImageCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { path: '/placeholder.png', alt: 'Slide 1' },
    { path: '/placeholder.png', alt: 'Slide 2' },
    { path: '/placeholder.png', alt: 'Slide 3' },
  ];
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
    <>

    <div className="align-middle relative w-sm max-w-md mx-auto overflow-hidden drop-shadow-sm">
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
        className="absolute left-0.5 top-1/3 transform -translate-y-1/2 p-2 bg-dark text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:p-4"
      >
        &lt;
      </button>
      <button
        onClick={() => updateCarousel(currentIndex + 1)}
        className="absolute right-0.5 top-1/3 transform -translate-y-1/2 p-2 bg-dark text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:p-4"
      >
        &gt;
      </button>
    </div>
    </>
  );
};

export default ImageCarousal;

