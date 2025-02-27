import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;