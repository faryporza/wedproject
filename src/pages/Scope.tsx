import React, { useState } from 'react';

const Scope: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Target Groups */}
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">1. กลุ่มเป้าหมาย</h2>
                    <div className={`transition-all duration-300 overflow-hidden ${expandedSections['target'] ? 'h-auto' : 'h-24'}`}>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>กลุ่มคนผู้ที่ไม่คุ้นเคยกับการหาช่าง</li>
                            <li>กลุ่มคนที่ต้องการซ่อมแซมหรือทำความสะอาดอุปกรณ์เครื่องใช้หรือยานพาหนะ</li>
                        </ul>
                    </div>

                </section>

                {/* Functional Scope */}
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">2. ขอบเขตด้านฟังก์ชันการใช้งาน</h2>
                    
                    {/* User Type 1 */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">2.1 ผู้ใช้งานที่ 1 ผู้ใช้บริการ</h3>
                        <div className={`transition-all duration-300 overflow-hidden ${expandedSections['user1'] ? 'h-auto' : 'h-24'}`}>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li>การลงทะเบียน: สามารถลงทะเบียนและสร้างโปรไฟล์ได้แบบง่าย</li>
                                <li>การค้นหาบริการ: สามารถค้นหาการบริการที่ต้องการผ่านแอปพลิเคชัน</li>
                                <li>การติดต่อสื่อสาร: สามารถติดต่อกับผู้ให้บริการ</li>
                                <li>ฟังก์ชันการรีวิวและการให้คะแนน</li>
                                <li>การแจ้งเตือน: จะได้รับการแจ้งเตือนยืนยันการจองและการเปลี่ยนแปลงสถานะงาน</li>
                                <li>การชำระเงิน: สามารถชำระค่าบริการผ่านระบบออนไลน์ได้</li>
                                <li>การยืนยันตัวตนผู้ให้บริการ</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => toggleSection('user1')}
                            className="mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            {expandedSections['user1'] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>

                    {/* User Type 2 */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">2.2 ผู้ใช้งานที่ 2 ผู้ให้บริการ</h3>
                        <div className={`transition-all duration-300 overflow-hidden ${expandedSections['user2'] ? 'h-auto' : 'h-24'}`}>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li>การลงทะเบียน: ต้องยืนยันตัวตนผ่านการสแกนใบหน้า</li>
                                <li>การตั้งร้านค้า: สามารถสร้างโปรไฟล์ร้าน</li>
                                <li>การรับงาน: สามารถรับงานผ่านทางการแจ้งเตือน</li>
                                <li>การแจ้งเตือน</li>
                                <li>ดูประวัติรายได้</li>
                                <li>ติดตามการชำระเงิน</li>
                                <li>การติดต่อสื่อสาร</li>
                                <li>การดูตารางเวลา</li>
                                <li>การเสนอราคา</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => toggleSection('user2')}
                            className="mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            {expandedSections['user2'] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Scope;
