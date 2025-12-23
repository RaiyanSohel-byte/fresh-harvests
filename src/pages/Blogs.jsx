import React, { useState } from "react";
import { Link } from "react-router";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      category: "Nutrition",
      title: "The Science of Soil: Why Organic Actually Tastes Better",
      excerpt:
        "Research shows that mineral-rich soil directly impacts the flavonoid profile of your vegetables...",
      date: "Oct 24, 2025",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
      featured: true,
    },
    {
      id: 2,
      category: "Recipes",
      title: "5 Winter Root Vegetables You’re Probably Underusing",
      excerpt:
        "From parsnips to purple carrots, rediscover the hidden gems of the cold season.",
      date: "Oct 22, 2025",
      image:
        "https://images.unsplash.com/photo-1510629954389-c1e0da47d415?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      category: "Farming",
      title: "Vertical Farming: The Future of Urban Freshness",
      excerpt:
        "How we are bringing the farm into the heart of the city using 90% less water.",
      date: "Oct 20, 2025",
      image:
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      category: "Lifestyle",
      title: "The 'Slow Food' Movement: Reclaiming Your Kitchen",
      excerpt:
        "Why spending 2 hours on a meal might be the best mental health hack of the decade.",
      date: "Oct 18, 2025",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <header className="pt-24 pb-12 px-4 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-[#749B3F] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              The Harvest Journal
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
              Insights for a <span className="text-[#FF6A1A]">Lush Life.</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {posts
          .filter((p) => p.featured)
          .map((post) => (
            <Link
              key={post.id}
              to={`/blog`}
              className="group relative block overflow-hidden rounded-[2.5rem] bg-gray-900 h-[60vh] lg:h-[70vh]"
            >
              <img
                src={post.image}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                alt={post.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-16 w-full lg:w-2/3">
                <span className="bg-[#FF6A1A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block">
                  Featured Article
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h2>
                <div className="flex items-center gap-6 text-white/80 text-sm">
                  <span className="font-bold uppercase tracking-widest">
                    {post.author}
                  </span>
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {posts
              .filter((p) => !p.featured)
              .map((post, id) => (
                <article
                  key={post.id}
                  className={`flex flex-col ${
                    id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 items-center group`}
                >
                  <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl">
                    <img
                      src={post.image}
                      className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4">
                    <span className="text-[#749B3F] font-bold text-xs uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h3 className="text-3xl font-bold leading-tight group-hover:text-[#749B3F] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed questrial">
                      {post.excerpt}
                    </p>
                    <div className="pt-4">
                      <button className="text-[#1A1A1A] font-bold border-b-2 border-[#FF6A1A] pb-1 hover:text-[#FF6A1A] transition-colors">
                        Read Full Analysis
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="bg-[#F8F8F8] p-8 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-bold mb-4">Search Journal</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    className="w-full bg-white border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#749B3F] transition-all"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#749B3F] rounded-[2rem] p-8 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 className="text-2xl font-bold mb-4 relative z-10">
                  Join the Circle
                </h4>
                <p className="text-white/80 mb-6 text-sm leading-relaxed relative z-10">
                  Weekly farm updates, nutrition deep-dives, and early access to
                  seasonal harvests.
                </p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-4 placeholder:text-white/40 text-white focus:outline-none"
                />
                <button className="w-full bg-[#FF6A1A] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-shadow">
                  Subscribe Now
                </button>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                  Trending Topics
                </h4>
                <div className="space-y-6">
                  {[
                    "Regenerative Farming",
                    "Micro-Greens Guide",
                    "Zero-Waste Kitchen",
                    "Gut Health",
                  ].map((topic, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center group cursor-pointer"
                    >
                      <span className="text-2xl font-black text-gray-100 group-hover:text-[#749B3F] transition-colors">
                        0{i + 1}
                      </span>
                      <p className="font-bold text-gray-800 border-b border-transparent group-hover:border-[#FF6A1A] transition-all">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
