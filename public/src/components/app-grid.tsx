"use client";

import { useState } from "react";
import { AppCard } from "./app-card";
import { SearchBar } from "./search-bar";
import { apps } from "@/data/apps";

export function AppGrid() {
  const [filteredApps, setFilteredApps] = useState(apps);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredApps(apps);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = apps.filter((app) =>
      app.name.toLowerCase().includes(lowercaseQuery)
    );

    setFilteredApps(filtered);
  };

  return (
    <div className="w-full px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <p className="text-center text-white/80 mb-6 max-w-3xl mx-auto">
          Unlock premium features, boost your progress, and elevate your experience effortlessly.
          AppSneak is your go-to tool for endless possibilities.
        </p>

        <SearchBar onSearch={handleSearch} />

        <div className="app-grid mt-8">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
