import React from 'react';

export const Details: React.FC = () => {
    return (
        <div className="min-h-screen p-16 ">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="mb-12 animate-slide-in-left">
                    <h1 className="text-4xl font-bold mb-6">รายละเอียดโครงงาน</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Mobile Application</h2>
                            <p className="text-gray-700">
                                แอปพลิเคชันสำหรับการจองบริการช่างและแม่บ้าน 
                                ที่มีระบบยืนยันตัวตนด้วยการสแกนใบหน้า
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="https://media.discordapp.net/attachments/1305781421461340184/1344703903811375184/20250227_231259_0000.png?ex=67c1e09a&is=67c08f1a&hm=523b75d288552b42aed3ce026c9c8c0fed526da9f98e51f7c23c62b87b1221a4&=&format=webp&quality=lossless&width=1100&height=618" 
                                alt="Project Overview"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-12 animate-slide-in-right">
                    <h2 className="text-3xl font-semibold mb-6">ฟีเจอร์หลัก</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "การเลือกร้าน",
                                image: "https://media.discordapp.net/attachments/1305781421461340184/1344694365863280761/image.png?ex=67c1d7b8&is=67c08638&hm=4678479f4b9ae16774870448abc8400803183b323681c4db56bf3401bf70500e&=&format=webp&quality=lossless&width=514&height=1114",
                                description: "โชว์ร้านที่ให้บริการที่เกี่ยวข้อง"
                            },
                            {
                                title: "การยืนยันตัวตน", 
                                image: "https://media.discordapp.net/attachments/1305781421461340184/1344694527096651816/image.png?ex=67c1d7de&is=67c0865e&hm=09b30c779cf14a7c6187d342acbc24bd15267e95da78b207827565625427c98d&=&format=webp&quality=lossless&width=512&height=1110",
                                description: "ระบบยืนยันตัวตนด้วยการสแกนใบหน้า"
                            },
                            {
                                title: "การเลือกช่าง",
                                image: "https://media.discordapp.net/attachments/1305781421461340184/1344694888536739971/image.png?ex=67c1d834&is=67c086b4&hm=f42fee95ea1c40645b4543edbb40cde1fd7ecce806e4fe19e471192285d84249&=&format=webp&quality=lossless&width=518&height=1114",
                                description: "ระบบเลือกช่างที่คิวว่างมาให้เอง"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <div className="relative w-full max-w-[200px] mx-auto">
                                    <div className="pb-[177.78%]"> {/* 16:9 aspect ratio */}
                                        <img 
                                            src={feature.image} 
                                            alt={feature.title}
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Details */}
                <section className="animate-slide-in-left">
                    <h2 className="text-3xl font-semibold mb-6">Software ที่ใช้ในการพัฒนา</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">2.1 เครื่องมือที่ใช้ในการพัฒนาแอปพลิเคชัน</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Visual Studio Code</li>
                                <li>Xcode</li>
                                <li>Android Studio</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-4">2.2 แพลตฟอร์มและเครื่องมือที่ใช้ในการออกแบบ UX/UI</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Figma</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-4">2.3 เฟรมเวิร์ก (Frameworks) สำหรับการพัฒนาแอปพลิเคชัน</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Flutter</li>
                                <li>Google Maps API</li>
                                <li>Google ML Kit</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-4">2.4 ระบบฐานข้อมูล</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Details;
