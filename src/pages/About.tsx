import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We are a dedicated team passionate about delivering exceptional web solutions. 
            Our mission is to create innovative and user-friendly experiences that make a difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            To be at the forefront of technological innovation while maintaining our commitment 
            to quality and customer satisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? Feel free to reach out to us at{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;