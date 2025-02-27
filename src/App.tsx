import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Scope from './pages/Scope';
import Details from './pages/Details'; // Verify this import path

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="scope"><Scope /></div>
        <div id="details"><Details /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;