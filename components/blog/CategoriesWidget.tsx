"use client";

import type { Category } from "./types";

interface CategoriesWidgetProps {
  categories: Category[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoriesWidget({
  categories,
  selected,
  onSelect,
}: CategoriesWidgetProps) {
  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
      <ul className="space-y-1">
        {categories.map((cat) => {
          const isActive = selected === cat.name;
          return (
            <li key={cat.name}>
              <button
                onClick={() => onSelect(isActive ? null : cat.name)}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors text-left ${
                  isActive
                    ? "bg-light-emerald/10 text-light-emerald"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-sm font-medium">{cat.name}</span>
                <span className="text-gray-500 text-sm">({cat.count})</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
