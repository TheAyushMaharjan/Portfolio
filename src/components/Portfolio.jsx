import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import expensetracker from '../assets/portfolio/expensetracker.png';
import ecom from '../assets/portfolio/ecom.png';
import movie from '../assets/portfolio/movie.png';
import api from '../assets/portfolio/api.png';
import content from '../assets/portfolio/content.png';

export default function Portfolio() {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
    const [previewImage, setPreviewImage] = useState(null); // Track the image being previewed

    const portfolioItems = [
        { id: 1, src: api,
            src: content,
            href: 'https://github.com/TheAyushMaharjan/Content-Management-System.git',
         },
        { 
            id: 2, 
            src: expensetracker,
            href: 'https://github.com/TheAyushMaharjan/Ecommerce-Tech-Website.git',
        },
        { id: 3, src: ecom,
            href: 'https://github.com/TheAyushMaharjan/expenses_tracker.git',
         },
        { id: 4, src: movie,
            href: 'https://github.com/TheAyushMaharjan/movieapp.git',
         },
         { id: 5, src: api,
            href: 'https://github.com/TheAyushMaharjan/Api-CURD-Laravel.git',
         },
    ];

    const handlePreviewClick = (src) => {
        setPreviewImage(src); // Set the image to preview
    };

    const closePreview = () => {
        setPreviewImage(null); // Close the preview
    };

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 md:h-screen text-gray-200">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    ref={aboutRef}
                    initial={{ x: "-100px", opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold inline border-b-2">Portfolio</p>
                    <p className="text-xl py-4">Check out some of my works.</p>
                </motion.div>
                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, ease: 'easeOut' }}
                >
                    {portfolioItems.map(({ id, src, href }) => (
                        <motion.div
                            key={id}
                            className="shadow-md shadow-slate-700 rounded-lg group"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 0.3 * id }}
                        >
                            <div className="overflow-hidden rounded-t-lg">
                                <img 
                                    src={src} 
                                    alt={`Project ${id}`} 
                                    className="w-full h-40 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button 
                                    onClick={() => handlePreviewClick(src)} // Pass the image src to the handler
                                    className="w-1/2 px-4 py-2 m-2 text-sm rounded hover:scale-105 hover:text-blue-600 duration-200"
                                >
                                    Preview
                                </button>
                                <a 
                                    href={href || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`w-1/2 px-4 py-2 m-2 text-sm text-center rounded hover:scale-105 hover:text-gray-500 duration-200 ${
                                        href ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'
                                    }`}
                                >
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Full-Screen Preview Overlay */}
                {previewImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePreview} // Close the preview when clicking outside the image
                    >
                        <motion.img
                            src={previewImage}
                            alt="Full-Screen Preview"
                            className="max-w-[90vw] max-h-[90vh] object-contain"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}