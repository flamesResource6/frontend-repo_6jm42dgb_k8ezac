import React from 'react';
import { Sparkles, Grid, Quote, DollarSign, Info, Layout } from 'lucide-react';

const layouts = [
  {
    name: 'Hero: Centered headline + right mockup + CTA',
    description: 'A balanced split layout with compelling headline and a product preview on the right.',
    thumbnail_url: 'https://dummyimage.com/400x220/111827/ffffff&text=Hero:+Split+headline+%2B+mockup',
    note: 'Use for SaaS, product launches, and apps.',
  },
  {
    name: 'Features: Three-card grid with icons',
    description: 'Three evenly spaced cards with subtle hover and icon headers.',
    thumbnail_url: 'https://dummyimage.com/400x220/111827/ffffff&text=3-Card+Features+Grid',
    note: 'Great for value props and benefits.',
  },
  {
    name: 'Testimonials: Carousel with avatars',
    description: 'Horizontally scrollable quotes with client names and roles.',
    thumbnail_url: 'https://dummyimage.com/400x220/111827/ffffff&text=Testimonial+Carousel',
    note: 'Build trust and showcase social proof.',
  },
  {
    name: 'Pricing Table',
    description: 'Monthly/annual plans with emphasized featured plan.',
    thumbnail_url: 'https://dummyimage.com/400x220/111827/ffffff&text=Pricing+Table',
    note: 'Ideal for SaaS and subscriptions.',
  },
  {
    name: 'Footer: Utility and links',
    description: 'Compact footer with sitemap, socials, and legal.',
    thumbnail_url: 'https://dummyimage.com/400x220/111827/ffffff&text=Footer+Layout',
    note: 'Standard site ending.',
  },
];

const LayoutTemplates = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Layout Templates</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Layout className="h-4 w-4" />
          <span>Simple wireframe visuals</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {layouts.map((l, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 shadow-sm">
            <img src={l.thumbnail_url} alt={l.name} className="mb-4 h-40 w-full rounded-md object-cover" />
            <h3 className="font-medium text-gray-900">{l.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{l.description}</p>
            <p className="mt-2 text-xs text-gray-500">{l.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayoutTemplates;
