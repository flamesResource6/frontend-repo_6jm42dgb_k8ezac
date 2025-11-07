import React, { useMemo, useState } from 'react';
import { GripVertical, Copy, Download, Share2, FileDown, Boxes } from 'lucide-react';

const defaultColors = ['#0f172a', '#111827', '#f97316', '#f59e0b', '#f3f4f6', '#e5e7eb', '#0ea5e9'];

const DraggableCard = ({ item }) => {
  return (
    <div
      className="group relative flex cursor-move items-center gap-3 rounded-xl border bg-white p-3 shadow-sm"
      draggable
    >
      <GripVertical className="h-4 w-4 text-gray-400" />
      <img src={item.thumbnail} alt={item.title} className="h-14 w-20 rounded object-cover" />
      <div>
        <div className="text-sm font-medium text-gray-900">{item.title}</div>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline"
        >
          Open source
        </a>
      </div>
    </div>
  );
};

const ColorSwatch = ({ hex, onCopy }) => (
  <button
    onClick={() => onCopy(hex)}
    className="flex items-center justify-between rounded-lg border bg-white p-3 text-left shadow-sm hover:shadow"
  >
    <div className="flex items-center gap-3">
      <span
        className="h-8 w-8 rounded"
        style={{ backgroundColor: hex }}
      />
      <span className="font-mono text-sm text-gray-800">{hex}</span>
    </div>
    <Copy className="h-4 w-4 text-gray-500" />
  </button>
);

const InteractiveBoard = () => {
  const [palette] = useState(defaultColors);

  const items = useMemo(
    () => [
      {
        title: 'Modern SaaS Dashboard',
        thumbnail: 'https://images.unsplash.com/photo-1551281044-8d8d0d8f8bdf?q=80&w=600&auto=format&fit=crop',
        link: 'https://www.behance.net',
      },
      {
        title: 'Minimal Portfolio',
        thumbnail: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=600&auto=format&fit=crop',
        link: 'https://dribbble.com',
      },
      {
        title: 'Fintech Mobile',
        thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop',
        link: 'https://mobbin.com',
      },
    ],
    []
  );

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  const downloadPDF = () => {
    // Simple print as PDF
    window.print();
  };

  const exportFigma = () => {
    const payload = {
      nodes: items.map((it, i) => ({
        id: `node-${i}`,
        type: 'image',
        x: 120 + i * 180,
        y: 120 + i * 60,
        src: it.thumbnail,
        meta: { title: it.title, link: it.link },
      })),
      colors: palette,
      canvas: { width: 1200, height: 800 },
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'figma-board.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const sharePublic = () => {
    try {
      navigator.share({ title: 'Interactive Board', url: window.location.href });
    } catch {
      window.alert('Copy this link: ' + window.location.href);
    }
  };

  return (
    <section id="board" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Interactive Moodboard</h2>
          <p className="text-gray-600">Drag cards to arrange. Click a swatch to copy the hex.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={downloadPDF} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black">
            <FileDown className="h-4 w-4" /> Download as PDF
          </button>
          <button onClick={exportFigma} className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
            <Boxes className="h-4 w-4" /> Export to Figma
          </button>
          <button onClick={sharePublic} className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
            <Share2 className="h-4 w-4" /> Share Public Link
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <DraggableCard key={i} item={it} />
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900">Color Palette</h3>
          <div className="grid grid-cols-2 gap-3">
            {palette.map((hex) => (
              <ColorSwatch key={hex} hex={hex} onCopy={copy} />
            ))}
          </div>
          <p className="text-xs text-gray-500">Dark background with white to orange accents matches the interactive Spline cover for a modern fintech/travel vibe.</p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBoard;
