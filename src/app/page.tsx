"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlumniCard } from "@/components/alumni-card";
import { alumni, fieldsOfStudy, locations } from "@/lib/mock-data";
import type { Alumni } from "@/lib/types";
import { Search } from "lucide-react";

export default function AlumniDirectoryPage() {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("all");
  const [location, setLocation] = useState("all");
  const [year, setYear] = useState("all");

  const filteredAlumni = useMemo(() => {
    return alumni.filter((alum) => {
      const searchLower = search.toLowerCase();
      const nameMatch = alum.name.toLowerCase().includes(searchLower);
      const skillsMatch = alum.skills.some(skill => skill.toLowerCase().includes(searchLower));
      const fieldMatch = field === "all" || alum.fieldOfStudy === field;
      const locationMatch =
        location === "all" || alum.location === location;
      const yearMatch =
        year === "all" || alum.graduationYear === parseInt(year);

      return (nameMatch || skillsMatch) && fieldMatch && locationMatch && yearMatch;
    });
  }, [search, field, location, year]);

  const uniqueYears = useMemo(() => {
    const years = new Set(alumni.map((a) => a.graduationYear));
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <header className="bg-card border-b border-border p-4 md:p-6 sticky top-0 z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Alumni Directory</h1>
            <p className="text-muted-foreground">Find and connect with fellow alumni.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or skill..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={field} onValueChange={setField}>
            <SelectTrigger>
              <SelectValue placeholder="Field of Study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              {fieldsOfStudy.map((f) => (
                <SelectItem key={f} value={f}>{f}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((l) => (
                <SelectItem key={l} value={l}>{l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Graduation Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map((y) => (
                <SelectItem key={y} value={String(y)}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAlumni.map((alum) => (
              <AlumniCard key={alum.id} alumni={alum} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-lg font-semibold text-muted-foreground">No alumni found</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
