import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed w-full top-0 lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md z-50">
            <div className="flex-1 flex justify-between items-center">
                <a onClick={() => scrollToSection('home')} className="text-xl cursor-pointer">Mobile Application</a>
            
                {/* Move button inside the flex container */}
                <div className="md:hidden">
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="fill-current text-gray-900 w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`
                w-full md:w-auto
                ${isMenuOpen ? 'block' : 'hidden'}
                md:block
                absolute md:relative
                top-full left-0
                bg-white
                shadow-lg md:shadow-none
                z-40
            `}>
                <nav className="px-4 md:px-0">
                    <ul className="md:flex items-center justify-between text-base text-gray-700 py-4 md:py-0">
                        <li className="border-b md:border-0 border-gray-200">
                            <a onClick={() => scrollToSection('about')} 
                               className="block py-2 md:py-0 md:px-4 cursor-pointer hover:text-blue-600 transition-colors">
                                ที่มาของโครงการ
                            </a>
                        </li>
                        <li className="border-b md:border-0 border-gray-200">
                            <a onClick={() => scrollToSection('scope')} 
                               className="block py-2 md:py-0 md:px-4 cursor-pointer hover:text-blue-600 transition-colors">
                                ขอบเขต
                            </a>
                        </li>
                        <li className="border-b md:border-0 border-gray-200">
                            <a onClick={() => scrollToSection('details')} 
                               className="block py-2 md:py-0 md:px-4 cursor-pointer hover:text-blue-600 transition-colors">
                                รายละเอียด
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;