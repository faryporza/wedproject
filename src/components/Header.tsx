import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full top-0 lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md z-50">
            <div className="flex-1 flex justify-between items-center">
                <a href="#" className="text-xl">Company</a>
            </div>

            <button 
                className="cursor-pointer md:hidden block p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <svg className="fill-current text-gray-900 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>

            <div className={`
                w-full md:w-auto
                ${isMenuOpen ? 'block' : 'hidden'}
                md:block
                absolute md:relative
                top-full left-0
                bg-white
                shadow-lg md:shadow-none
                z-50
            `} id="menu">
                <nav className="px-4 md:px-0">
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="md:p-4 py-3 px-0 block" href="#">AboutUs</a></li>
                        <li><a className="md:p-4 py-3 px-0 block" href="#">Treatments</a></li>
                        <li><a className="md:p-4 py-3 px-0 block" href="#">Blog</a></li>
                        <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;