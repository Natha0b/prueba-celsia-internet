import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ClientForm from './components/ClientForm';
import ServicesPage from './components/ServicesPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'clients':
        return <ClientForm />;
      case 'services':
        return <ServicesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setCurrentPage('home')}>Inicio</button>
        <button onClick={() => setCurrentPage('clients')}>Clientes</button>
        <button onClick={() => setCurrentPage('services')}>Servicios</button>
      </nav>
      <div className="container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
