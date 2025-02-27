import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Column 1 - Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
                        <ul className="space-y-2">
                            <li>มหาวิทยาลัยพะเยา</li>
                            <li>คณะเทคโนโลยีสาระสนเทศและการสื่อสาร</li>
                            <li>สาขาวิทยาการคอมพิวเตอร์</li>
                        </ul>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">หน้าหลัก</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">ที่มาของโครงการ</a></li>
                            <li><a href="#scope" className="hover:text-blue-400 transition-colors">ขอบเขต</a></li>
                            <li><a href="#details" className="hover:text-blue-400 transition-colors">รายละเอียด</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">รายชื่อสมาชิก</h3>
                        <ul className="space-y-2">
                            <li>ธนกฤต ชูเชิด</li>
                            <li>รัชภูมิ วงค์เรียน</li>
                            <li>อภิรักษ์ เขื่อนคำ</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Mobile Application Project. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;