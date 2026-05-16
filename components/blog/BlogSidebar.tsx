import SearchBox from "./SearchBox";
import CategoriesWidget from "./CategoriesWidget";
import SubscriptionBox from "./SubscriptionBox";
import type { Category } from "./types";

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <SearchBox value={searchQuery} onChange={onSearchChange} />
      <CategoriesWidget
        categories={categories}
        selected={selectedCategory}
        onSelect={onCategorySelect}
      />
      <SubscriptionBox />
    </aside>
  );
}
