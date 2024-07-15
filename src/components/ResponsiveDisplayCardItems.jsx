import { useState } from 'react';
import LinkButton from './LinkButton';

export default function ResponsiveDisplayCardItems({ key, imgCaraousals, labelHeader, children, price }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (e) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgCaraousals.length);
    
  };

  return (
    <div key={key} className="bg-gray-200 border-gray border-solid-2 flex-shrink-0 drop-shadow-xl mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative  ">
       <div
          className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
          onClick={handleClick}
          style={{ cursor: 'pointer'}}
        >

    
          <img
            src={imgCaraousals[currentImageIndex].path}
            alt={imgCaraousals[currentImageIndex].altext}
            className="animate-slideInLeft h-64 object-fill object-center lg:h-full lg:w-full"
          />
        </div>

        {price && <p className="fixed mx-auto -mt-6 text-sm font-large text-gray-dark font-extrabold">{currentImageIndex+1} | {price}TK</p>}
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <LinkButton to={labelHeader} />
            </h3>
            <span className="mt-1 text-sm text-gray-500 drop-shadow-sm">
              {children}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
