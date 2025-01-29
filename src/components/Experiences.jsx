import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import js from '../assets/js.jpg';
import tailwind from '../assets/tailwind.svg';
import laravel from '../assets/laravel.svg';
import mysql from '../assets/mysql.svg';
import firebase from '../assets/firebase.svg';
import github from '../assets/github.svg';


export default function Experiences() {
    const experiences = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-teal-500',
        },
        {
            id: 6,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-red-500',
        },
        {
            id: 7,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-400',
        },
        {
            id: 8,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-400',
        },
        {
            id: 8,
            src: github,
            title: 'github',
            style: 'shadow-gray-50',
        },
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black md:h-screen">
            <div className="max-w-screen-lg pt-16 p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">
                        Experiences
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                {/* Infinite Scroll Section */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex items-center animate-scroll gap-8 py-8"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        {experiences.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-400 py-2 px-4 min-w-[120px] min-h-[140px] flex flex-col items-center justify-center rounded-lg ${style}`}
                            >
                                <img
                                    src={src}
                                    alt={title}
                                    className="w-16 h-16 object-contain"
                                />
                                <p className="mt-2 text-center">{title}</p>
                            </div>
                        ))}
                        {/* Repeat the same items for a seamless scroll */}
                        {experiences.map(({ id, src, title, style }) => (
                            <div
                                key={`repeat-${id}`}
                                className={`shadow-md hover:scale-105 duration-400 py-2 px-4 min-w-[120px] min-h-[140px] flex flex-col items-center justify-center rounded-lg ${style}`}
                            >
                                <img
                                    src={src}
                                    alt={title}
                                    className="w-16 h-16 object-contain"
                                />
                                <p className="mt-2 text-center">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tailwind Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 7s linear infinite;
                    animation-play-state: running;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
