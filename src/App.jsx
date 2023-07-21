// src/App.js

import React from 'react';
import './App.css';
import ImageCropper from './components/ImageCropper'; // Importa el componente ImageCropper desde la nueva ubicación
import logoImage from './assets/Logo-cbb-800x800.png'; // Ajusta la ruta a "./src/assets/Logo-cbb-800x800.png"
import whatsappIcon from './assets/whatsapp.png'; // Cambia la ruta a "./src/assets/whatsapp.png"
import gmailIcon from './assets/email.png'; // Cambia la ruta a "./src/assets/email.png"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ImageCropper image={logoImage} newSize={0.2} />{' '}
      {/* Tamaño personalizado para el logo */}
      <p className="text-3xl text-gray-700 mb-4">
        ¡Estamos trabajando en nuestra tienda e-commerce para brindarte la mejor
        experiencia en calefacción!
      </p>
      <p className="text-xl text-gray-700 mb-4">
        Pronto podrás comprar calefactores a pellets, repuestos y pellets de
        calidad de distintas marcas, además de recibir servicios de
        mantenimiento e instalación de equipos. ¡Asegura un hogar cálido y
        ecológico con nosotros!
      </p>
      <div className="flex space-x-4 mb-4">
        {' '}
        {/* También podemos usar "flex" aquí para los iconos */}
        <a
          href="https://wa.me/+56933634355"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageCropper image={whatsappIcon} newSize={0.05} />{' '}
          {/* Tamaño personalizado para WhatsApp */}
        </a>{' '}
        <a
          href="mailto:calorbiobio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageCropper image={gmailIcon} newSize={0.05} />{' '}
          {/* Tamaño personalizado para Gmail */}
        </a>
      </div>
      <div className="space-x-4 mb-4 flex">
        {' '}
        {/* Agregamos "flex" para que los elementos <a> estén uno al lado del otro */}
        <a
          href="https://www.instagram.com/calorbiobio.cl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500"
          style={{ color: '#194923' }}
        >
          Instagram
        </a>{' '}
        <a
          href="https://www.facebook.com/profile.php?id=100094920735284"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
          style={{ color: '#194923' }}
        >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default App;
