import React from 'react';

const references = [
  { title: 'SaaS Analytics Dashboard', source: 'Behance', thumbnail_url: 'https://images.unsplash.com/photo-1551281044-8d8d0d8f8bdf?q=80&w=600&auto=format&fit=crop', url: 'https://www.behance.net', },
  { title: 'Minimal Portfolio Grid', source: 'Dribbble', thumbnail_url: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=600&auto=format&fit=crop', url: 'https://dribbble.com', },
  { title: 'Playful App Onboarding', source: 'Pinterest', thumbnail_url: 'https://images.unsplash.com/photo-1559027615-5f5f6f5f5f5f?q=80&w=600&auto=format&fit=crop', url: 'https://pinterest.com', },
  { title: 'Futuristic Landing Page', source: 'mobbin', thumbnail_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', url: 'https://mobbin.com', },
  { title: 'Elegant Ecommerce', source: 'Behance', thumbnail_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop', url: 'https://www.behance.net', },
  { title: 'Dark Mode Fintech', source: 'Dribbble', thumbnail_url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop', url: 'https://dribbble.com', },
  { title: 'Bold Agency Hero', source: 'Pinterest', thumbnail_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop', url: 'https://pinterest.com', },
  { title: 'Calm Wellness App', source: 'mobbin', thumbnail_url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop', url: 'https://mobbin.com', },
  { title: 'Premium Fashion Lookbook', source: 'Behance', thumbnail_url: 'https://images.unsplash.com/photo-1520975682031-a6c60d7b2f86?q=80&w=600&auto=format&fit=crop', url: 'https://www.behance.net', },
  { title: 'Energetic Marketing Site', source: 'Dribbble', thumbnail_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop', url: 'https://dribbble.com', },
  { title: 'Brutalist Editorial', source: 'Pinterest', thumbnail_url: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop', url: 'https://pinterest.com', },
  { title: 'Figma Mobile Patterns', source: 'mobbin', thumbnail_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop', url: 'https://mobbin.com', },
  { title: 'Neumorphic UI Kit', source: 'Dribbble', thumbnail_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop', url: 'https://dribbble.com', },
  { title: 'Colorful Data Viz', source: 'Behance', thumbnail_url: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=600&auto=format&fit=crop', url: 'https://www.behance.net', },
];

const References = () => {
  return (
    <section id="references" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Curated Design References</h2>
          <p className="text-gray-600">Click any card to open the source in a new tab.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {references.map((ref, idx) => (
          <a
            key={idx}
            href={ref.url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border bg-white shadow transition hover:shadow-lg"
          >
            <img src={ref.thumbnail_url} alt={ref.title} className="h-40 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <div className="text-sm opacity-80">{ref.source}</div>
              <div className="text-sm font-medium leading-tight">{ref.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default References;
