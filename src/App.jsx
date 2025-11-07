import React, { useState } from 'react';
import Hero from './components/Hero';
import References from './components/References';
import InteractiveBoard from './components/InteractiveBoard';
import PromptComposer from './components/PromptComposer';

function App() {
  const [generated, setGenerated] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <Hero />
      <PromptComposer onGenerate={setGenerated} />

      {generated ? (
        <InteractiveBoard
          key={JSON.stringify(generated.palette)}
          initialPalette={generated.palette}
          initialItems={generated.items}
        />
      ) : (
        <>
          <References />
          <InteractiveBoard />
        </>
      )}

      <footer className="mx-auto max-w-6xl px-6 pb-16 text-center text-sm text-gray-500">
        Built as an AI wireframe and high-fidelity design generator. Drag, copy, and export your moodboard.
      </footer>
    </div>
  );
}

export default App;
