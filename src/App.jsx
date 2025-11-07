import React from 'react';
import Hero from './components/Hero';
import References from './components/References';
import LayoutTemplates from './components/LayoutTemplates';
import InteractiveBoard from './components/InteractiveBoard';
import FunctionalDesigns from './components/FunctionalDesigns';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <Hero />
      <References />
      <LayoutTemplates />
      <FunctionalDesigns />
      <InteractiveBoard />

      <footer className="mx-auto max-w-6xl px-6 pb-16 text-center text-sm text-gray-500">
        Built as an AI wireframe and high-fidelity design generator. Drag, copy, and export your moodboard.
      </footer>
    </div>
  );
}

export default App;
