import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import References from './components/References';
import InteractiveBoard from './components/InteractiveBoard';
import PromptComposer from './components/PromptComposer';
import { Loader2 } from 'lucide-react';

function App() {
  const [generated, setGenerated] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const boardRef = useRef(null);

  useEffect(() => {
    if (generated && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [generated]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <Hero />
      <PromptComposer onGenerate={setGenerated} onProcessingChange={setIsProcessing} />

      {isProcessing && (
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <Loader2 className="h-4 w-4 animate-spin text-gray-900" />
            <p className="text-sm text-gray-800">Processing prompt… Creating your design board.</p>
          </div>
        </div>
      )}

      <div ref={boardRef}>
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
      </div>

      <footer className="mx-auto max-w-6xl px-6 pb-16 text-center text-sm text-gray-500">
        Built as an AI wireframe and high-fidelity design generator. Drag, copy, and export your moodboard.
      </footer>
    </div>
  );
}

export default App;
