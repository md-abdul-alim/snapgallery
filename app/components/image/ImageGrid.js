// import Image from "next/image";
// import React from "react";

// export default function ImageGrid({ images }) {
//   return (
//     <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//       <div
//         className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
//         style={{ columnGap: '16px' }} // Adjust the gap as needed
//       >
//         {images.map((image) => (
//           <div key={image.id} className="relative mb-6 break-inside-avoid">
//             <Image
//               placeholder="blur"
//               src={image.url}
//               alt={image.alt}
//               loading="lazy"
//               quality={100}
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function ImageGrid({ images }) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <Image
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }