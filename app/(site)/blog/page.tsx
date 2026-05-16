"use client";

import { useState } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import type { BlogPost, Category } from "@/components/blog/types";

const blogPosts: BlogPost[] = [
  {
    id: "evolution-of-aerodynamics",
    title: "Evolucioni i Aerodinamikës në Hypercarët Modernë",
    description:
      "Nga testet e para në tunelin e erës deri te sistemet aktive aerodinamike, eksploroni si dizajni aerodinamik ka formuar performancën dhe identitetin e hypercarëve më ekskluzivë në botë.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Aerodynamics",
    category: "Inxhinieri",
    date: "Tetor 28, 2024",
    readTime: 6,
  },
  {
    id: "preserving-automotive-history",
    title: "Ruajtja e Historisë Automobilistike: Arti i Restaurimit",
    description:
      "Hyni brenda punishtes ku legjendat e dekadave të kaluara rikthehen në jetë. Një vështrim në mjeshtërinë e përpiktë pas restaurimeve të nivelit concours.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Restoration",
    category: "Trashëgimi",
    date: "Tetor 24, 2024",
    readTime: 8,
  },
  {
    id: "future-is-electric",
    title: "E Ardhmja është Elektrike: Performancë Pa Kompromis",
    description:
      "Grupet lëvizëse elektrike po ripërcaktojnë kuptimin e performancës. Zbuloni si teknologjia hibride dhe EV po shtyn kufijtë pa sakrifikuar shpirtin e vozitjes.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Electric",
    category: "Teknologji",
    date: "Shtator 28, 2024",
    readTime: 5,
  },
  {
    id: "interior-mastery",
    title: "Mjeshtëria e Brendshme: Krijimi i Përvojës Perfekte të Kabinës",
    description:
      "Një zhytje e thellë në materialet, ergonominë dhe filozofitë e dizajnit që transformojnë kabinën e një makine në një shenjtërore komoditeti dhe luksi.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Interior",
    category: "Teknologji",
    date: "Shtator 14, 2024",
    readTime: 7,
  },
  {
    id: "behind-the-badge",
    title: "Pas Stemës: Historitë që Përcaktojnë Trashëgimitë Automobilistike",
    description:
      "Çdo emblemë tregon një histori. Nga kuajt e kërcimtarë te krahët fluturues, zbuloni historinë dhe kuptimin pas stemave më ikonike automobilistike në botë.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Badge",
    category: "Trashëgimi",
    date: "Shtator 10, 2024",
    readTime: 6,
  },
  {
    id: "art-of-sound",
    title: "Arti i Zërit: Inxhinieria e Notës Perfekte të Motorit",
    description:
      "Si inxhinierët akustikë dhe dizajnerët e shkarkimit krijojnë simfoninë që përcakton karakterin e çdo marke — nga gjëmimi i thellë i një V8 deri te krescendoja e një V12 me rrotullime të larta.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Sound",
    category: "Inxhinieri",
    date: "Gusht 22, 2024",
    readTime: 5,
  },
  {
    id: "sustainable-luxury",
    title: "Luks i Qëndrueshëm: Materiale Ekologjike në Dizajnin Automobilistik",
    description:
      "Luksi dhe qëndrueshmëria nuk janë më reciprokisht ekskluzive. Eksploroni si markat premium po përqafojnë materiale të ricikluara, lëkurë vegane dhe burime të rinovueshme.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Sustainable",
    category: "Teknologji",
    date: "Gusht 15, 2024",
    readTime: 4,
  },
  {
    id: "track-day-guide",
    title: "Ditët në Pistë & Inspektimet Teknike: Udhëzues për Blerësin",
    description:
      "Këshilla thelbësore për pronarët e mundshëm mbi inspektimet para blerjes, përgatitjen për ditët në pistë dhe çfarë të kërkoni kur vlerësoni një makinë me performancë të lartë.",
    image: "https://placehold.co/800x450/1a1f2e/93d5ae?text=Track",
    category: "Evente",
    date: "Korrik 30, 2024",
    readTime: 9,
  },
];

const categories: Category[] = [
  { name: "Inxhinieri", count: 12 },
  { name: "Trashëgimi", count: 8 },
  { name: "Teknologji", count: 15 },
  { name: "Evente", count: 5 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-[#111415] min-h-screen">
      <BlogHeader />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-[7] min-w-0">
            <BlogGrid posts={filteredPosts} />
          </div>
          <div className="flex-[3]">
            <BlogSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
