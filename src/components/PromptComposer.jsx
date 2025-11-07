import React, { useMemo, useState } from 'react';
import { Sparkles, Link as LinkIcon, AtSign, FileDown, Copy } from 'lucide-react';

const extractUrls = (text) => {
  const urlRegex = /(https?:\/\/[\w.-]+(?:\/[\w\-.~:?#@!$&'()*+,;=%]*)?)/gi;
  const matches = text.match(urlRegex) || [];
  return Array.from(new Set(matches));
};

const extractEmails = (text) => {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;
  const matches = text.match(emailRegex) || [];
  return Array.from(new Set(matches));
};

const buildPaletteFromPrompt = (prompt) => {
  const p = prompt.toLowerCase();
  if (p.includes('fintech') || p.includes('saas') || p.includes('dark')) {
    return ['#0b1220', '#111827', '#0ea5e9', '#22d3ee', '#f97316', '#f3f4f6'];
  }
  if (p.includes('wellness') || p.includes('health') || p.includes('calm')) {
    return ['#0f766e', '#5eead4', '#ecfeff', '#f8fafc', '#14b8a6', '#0ea5e9'];
  }
  if (p.includes('ecommerce') || p.includes('fashion') || p.includes('luxury')) {
    return ['#0b0b0b', '#1f2937', '#eab308', '#f5f5f4', '#e5e7eb', '#a78bfa'];
  }
  if (p.includes('portfolio') || p.includes('creative') || p.includes('agency')) {
    return ['#111827', '#f472b6', '#60a5fa', '#34d399', '#f9fafb', '#f59e0b'];
  }
  return ['#111827', '#0ea5e9', '#22c55e', '#f59e0b', '#f3f4f6', '#e5e7eb'];
};

const buildItemsFromPrompt = (prompt, urls, emails) => {
  const base = [];
  const p = prompt.toLowerCase();
  if (p.includes('dashboard')) {
    base.push({ title: 'Analytics Dashboard', thumbnail: 'https://images.unsplash.com/photo-1551281044-8d8d0d8f8bdf?q=80&w=800&auto=format&fit=crop', link: '#' });
  }
  if (p.includes('portfolio')) {
    base.push({ title: 'Minimal Portfolio', thumbnail: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800&auto=format&fit=crop', link: '#' });
  }
  if (p.includes('mobile') || p.includes('app')) {
    base.push({ title: 'Mobile App Flow', thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop', link: '#' });
  }
  if (p.includes('ecommerce') || p.includes('store')) {
    base.push({ title: 'Storefront + PDP', thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop', link: '#' });
  }

  const urlItems = urls.map((u, i) => ({
    title: `Reference ${i + 1}`,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
    link: u,
  }));

  const emailItems = emails.map((e) => ({
    title: `From ${e}`,
    thumbnail: `https://dummyimage.com/800x450/111827/ffffff&text=${encodeURIComponent(e)}`,
    link: `mailto:${e}`,
  }));

  const fallback = base.length ? base : [
    { title: 'Landing Hero Concept', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', link: '#' },
  ];

  return [...fallback, ...urlItems, ...emailItems].slice(0, 8);
};

const exampleSnippet = `Modern SaaS dashboard with dark mode, onboarding flow, and payments.\nAdd refs: https://dribbble.com https://mobbin.com demo@brand.com`;

const PromptComposer = ({ onGenerate }) => {
  // Field starts empty, snippet is shown only as reference below
  const [text, setText] = useState('');

  const urls = useMemo(() => extractUrls(text), [text]);
  const emails = useMemo(() => extractEmails(text), [text]);

  const handleGenerate = () => {
    const palette = buildPaletteFromPrompt(text);
    const items = buildItemsFromPrompt(text, urls, emails);
    onGenerate?.({ prompt: text, palette, items });
  };

  const downloadBrief = () => {
    const data = {
      prompt: text,
      references: { urls, emails },
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design-brief.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(exampleSnippet);
    } catch (e) {
      // noop
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="prompt" className="mb-2 block text-sm font-medium text-gray-900">Describe your product or page</label>
            <textarea
              id="prompt"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="e.g., Minimal portfolio site with case studies, pastel palette, bold hero. Paste refs (URLs/emails) in the same field."
              className="w-full resize-y rounded-lg border bg-white p-3 font-sans text-sm text-gray-900 outline-none ring-offset-2 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-800"
            />

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1"><LinkIcon className="h-3 w-3"/> URLs detected: {urls.length}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1"><AtSign className="h-3 w-3"/> Emails detected: {emails.length}</span>
            </div>

            <div className="mt-4 rounded-lg border bg-gray-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">Reference snippet (example)</span>
                <button onClick={copySnippet} className="inline-flex items-center gap-1 rounded-md border bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                  <Copy className="h-3 w-3" /> Copy
                </button>
              </div>
              <pre className="whitespace-pre-wrap break-words rounded-md bg-white p-2 text-xs text-gray-800">{exampleSnippet}</pre>
            </div>
          </div>
          <div className="w-full max-w-[220px] space-y-3">
            <button onClick={handleGenerate} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black">
              <Sparkles className="h-4 w-4" /> Generate Prototype
            </button>
            <button onClick={downloadBrief} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50">
              <FileDown className="h-4 w-4" /> Download Brief JSON
            </button>
          </div>
        </div>

        {(urls.length > 0 || emails.length > 0) && (
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {urls.length > 0 && (
              <div className="rounded-lg bg-gray-50 p-3">
                <div className="mb-2 text-xs font-medium text-gray-700">Reference URLs</div>
                <div className="flex flex-wrap gap-2">
                  {urls.map((u) => (
                    <a key={u} href={u} target="_blank" rel="noreferrer" className="truncate rounded-md border bg-white px-2 py-1 text-xs text-blue-600 hover:underline">
                      {u}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {emails.length > 0 && (
              <div className="rounded-lg bg-gray-50 p-3">
                <div className="mb-2 text-xs font-medium text-gray-700">Reference Emails</div>
                <div className="flex flex-wrap gap-2">
                  {emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="truncate rounded-md border bg-white px-2 py-1 text-xs text-gray-700">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptComposer;
