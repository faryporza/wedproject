import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen pt-16">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1305781421461340184/1344700599970697289/resized_image_16_9.webp?ex=67c1dd86&is=67c08c06&hm=fed71e313e3cd43dbcfefa33ae0c0f1790987acf6e17045832428b0cc440edad&=&format=webp&width=1980&height=1114')] bg-cover bg-center"></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-white opacity-60"></div>
            {/* Content */}
            <div className="relative text-center">
                <h1 className="text-4xl font-bold text-black-600 animate-slide-in-left">
                    Cleaning and Service Technician Application
                </h1>
                <p className="mt-4 text-lg text-gray-700 animate-slide-in-right">
                    Mobile Application
                </p>
            </div>
            <div className="relative w-full flex justify-center absolute bottom-0 mb-4">
                <svg className="w-6 h-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Home;