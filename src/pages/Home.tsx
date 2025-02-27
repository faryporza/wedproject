import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-16 bg-[#CCCCCC]">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black-600 animate-slide-in-left">
                    Welcome to the Single Page Application
                </h1>
                <p className="mt-4 text-lg text-gray-700 animate-slide-in-right">
                    This is the main content of the application.
                </p>
            </div>
            <div className="w-full flex justify-center absolute bottom-0 mb-4">
                <svg className="w-6 h-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Home;