import React from 'react';
import { BadgeCheck, Star, Layout, Smartphone, ShoppingBag, Calendar, MessageSquare, BarChart2, CreditCard, Layers, Globe, User, Search, Settings, MapPin, Bell, Camera, Music, Film, Activity } from 'lucide-react';

const designs = [
  { name: 'SaaS Dashboard', desc: 'Analytics cards, charts, team activity', tag: 'Web App' },
  { name: 'Portfolio Grid', desc: 'Masonry showcase with filters', tag: 'Website' },
  { name: 'Ecommerce Storefront', desc: 'Product grid, cart, checkout', tag: 'Web App' },
  { name: 'Booking System', desc: 'Calendar, slots, payments', tag: 'Web App' },
  { name: 'Chat Messenger', desc: 'Sidebar threads, message area', tag: 'Web App' },
  { name: 'Marketing Landing', desc: 'Hero, features, testimonials', tag: 'Website' },
  { name: 'Finance Tracker', desc: 'Budgets, transactions, charts', tag: 'Mobile' },
  { name: 'Task Manager', desc: 'Kanban, calendar, analytics', tag: 'Web App' },
  { name: 'Music Player', desc: 'Queue, mini-player, playlists', tag: 'Mobile' },
  { name: 'Video Library', desc: 'Hero, categories, player', tag: 'Web App' },
  { name: 'Travel Planner', desc: 'Map, itinerary, bookings', tag: 'Web App' },
  { name: 'Social Profile', desc: 'Header, feed, connections', tag: 'Website' },
  { name: 'Search Portal', desc: 'Global search with filters', tag: 'Web App' },
  { name: 'Settings Center', desc: 'Tabs, forms, preferences', tag: 'Web App' },
  { name: 'Maps Directory', desc: 'Markers, filters, details', tag: 'Web App' },
  { name: 'Notifications Hub', desc: 'Inbox, rules, digests', tag: 'Web App' },
  { name: 'Camera Gallery', desc: 'Grid, editor, share', tag: 'Mobile' },
  { name: 'Film Catalog', desc: 'Cards, ratings, watchlist', tag: 'Web App' },
  { name: 'Health Dashboard', desc: 'Vitals, trends, goals', tag: 'Mobile' },
  { name: 'News Reader', desc: 'Headlines, topics, saved', tag: 'Mobile' },
];

const icons = [
  Layout, Star, ShoppingBag, Calendar, MessageSquare, BarChart2, CreditCard, Layers, Globe, User, Search, Settings, MapPin, Bell, Camera, Music, Film, Activity, Smartphone, BadgeCheck,
];

const FunctionalDesigns = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">Functional Designs</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {designs.map((d, i) => {
          const Icon = icons[i % icons.length];
          return (
            <button key={i} className="group flex flex-col items-start gap-3 rounded-xl border bg-white p-4 text-left shadow-sm transition hover:shadow-md">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                <Icon className="h-3.5 w-3.5" /> {d.tag}
              </span>
              <div>
                <div className="font-medium text-gray-900">{d.name}</div>
                <div className="text-sm text-gray-600">{d.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="text-sm font-medium text-gray-900">Font Suggestions</div>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
            <li>Inter — clean, modern for SaaS.</li>
            <li>Manrope — geometric and friendly for portfolios.</li>
            <li>IBM Plex Sans — tech-forward for fintech and tools.</li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="text-sm font-medium text-gray-900">Tips</div>
          <p className="mt-2 text-sm text-gray-700">Use the orange accent for CTAs to match the Spline hero. Keep ample spacing and soft shadows for a premium feel.</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="text-sm font-medium text-gray-900">Usage</div>
          <p className="mt-2 text-sm text-gray-700">Click any card to pick a starting template in your workflow. You can extend these into full pages.</p>
        </div>
      </div>
    </section>
  );
};

export default FunctionalDesigns;
