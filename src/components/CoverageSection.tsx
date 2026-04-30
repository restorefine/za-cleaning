"use client";

import { useState } from "react";
import CoverageMap from "@/components/CoverageMap";

export default function CoverageSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const glasgowAreas = ["Airdrie", "Ayr", "Clydebank", "Cumbernauld", "Dunfermline", "East Kilbride", "Falkirk", "Hamilton", "Helensburgh", "Irvine", "Kilmarnock", "Lanark", "Motherwell", "Paisley", "Stirling"];

  const edinburghAreas = ["Dalkeith", "Dunfermline", "Galashiels", "Kirkcaldy", "Linlithgow", "Livingston", "Musselburgh", "North Berwick"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Checking availability for: ${searchQuery}`);
    }
  };

  return (
    <section className="relative py-24 bg-bg-soft overflow-hidden">
      {/* Soft background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Do We Cover Your Area?</h2>
          <p className="text-slate-600 text-lg sm:text-xl">Enter your town or city below to instantly check if we operate in your area.</p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-10 mx-auto max-w-2xl flex items-center bg-slate-100 rounded-full p-2 shadow-sm border border-slate-200 focus-within:border-accent-light focus-within:ring-4 focus-within:ring-accent-light/20 transition-all">
            <input type="text" placeholder="e.g. Bearsden, Stockbridge..." className="flex-1 bg-transparent border-none outline-none px-6 py-3 text-slate-700 placeholder-slate-400 font-medium w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-accent-light transition-colors shadow-md hover:shadow-lg shrink-0">
              Check Availability
            </button>
          </form>
        </div>

        {/* Info Cards and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Left Column (Hub Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Glasgow Hub */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#0055D4] rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm group-hover:scale-105 transition-transform">01</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Glasgow Hub</h3>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">Primary Operations Center</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl flex-1 min-w-[120px]">
                  <p className="text-xl font-bold text-[#0055D4] leading-none mb-1">50mi</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider">SERVICE RADIUS</p>
                </div>
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl flex-1 min-w-[120px]">
                  <p className="text-xl font-bold text-[#0055D4] leading-none mb-1">15</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider">MAIN AREAS</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
                {glasgowAreas.map((area) => (
                  <span key={area} className="shrink-0 rounded-full bg-[#0055D4]/8 px-3 py-1 text-[11px] font-semibold text-[#0055D4] ring-1 ring-[#0055D4]/10 whitespace-nowrap">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Edinburgh Hub */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm group-hover:scale-105 transition-transform">02</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Edinburgh Hub</h3>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">Eastern Region Center</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl flex-1 min-w-[120px]">
                  <p className="text-xl font-bold text-slate-700 leading-none mb-1">50mi</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider">SERVICE RADIUS</p>
                </div>
                <div className="bg-slate-50 px-4 py-2.5 rounded-2xl flex-1 min-w-[120px]">
                  <p className="text-xl font-bold text-slate-700 leading-none mb-1">8</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider">MAIN AREAS</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
                {edinburghAreas.map((area) => (
                  <span key={area} className="shrink-0 rounded-full bg-slate-600/8 px-3 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-600/10 whitespace-nowrap">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Leaflet Map) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sm border border-slate-100 min-h-[420px] relative">
            <CoverageMap />
            {/* Hub legend overlay */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 pointer-events-none">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-slate-700">Glasgow Hub · 15 areas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0" />
                <span className="text-[11px] font-bold text-slate-700">Edinburgh Hub · 8 areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
