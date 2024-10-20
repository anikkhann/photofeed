// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'

// const slides = [
//   {
//     title: 'Time-honored ingredients',
//     description: 'Carefully prepared for the delight of your senses. Whether you select a single ingredient like our freshly chopped ginger in canola oil or one of our finished pesto sauces, you will enjoy the uncompromising quality packed into everything we do. Simple really can be great!',
//     image: '/bird.png',
//   },
//   {
//     title: 'Farm-fresh produce',
//     description: 'Our commitment to quality starts at the source. We partner with local farmers to bring you the freshest, most flavorful ingredients possible.',
//     image: '/bird.png',
//   },
//   {
//     title: 'Artisanal craftsmanship',
//     description: 'Every product is crafted with care, combining traditional methods with modern innovation to deliver exceptional taste and quality.',
//     image: '/bird.png',
//   },
// ]

// export default function VerticalSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//     }, 5000) // Change slide every 5 seconds

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
//             index === currentSlide ? 'translate-y-0' : 'translate-y-full'
//           }`}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             layout="fill"
//             objectFit="cover"
//             className="brightness-50 "

//           />
//           <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-cursive">
//               {slide.title}
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg text-white mb-8 max-w-2xl">
//               {slide.description}
//             </p>
//             <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-300 transition-colors w-max">
//               Discover
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full ${
//               index === currentSlide ? 'bg-yellow-400 h-5' : 'bg-gray-400'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }