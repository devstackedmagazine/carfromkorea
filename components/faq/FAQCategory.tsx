import FAQItem from "./FAQItem";
import { FAQCategoryData } from "./types";

interface FAQCategoryProps {
  category: FAQCategoryData;
}

/**
 * FAQCategory Component
 * 
 * Wrapper for a specific group of FAQs.
 * Renders the category title, a badge with the question count, 
 * and maps through the category's FAQ items.
 */
export default function FAQCategory({ category }: FAQCategoryProps) {
  return (
    <div className="mb-14 scroll-mt-24" id={`faq-${category.id}`}>
      <div className="flex items-center justify-between mb-6 border-b border-[#2A2E34] pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          {category.name}
        </h3>
        
        {/* Visual indicator / Count badge */}
        <span className="text-xs sm:text-sm font-medium px-3 py-1 bg-[#1A1F26] text-gray-300 border border-[#2A2E34] rounded-full">
          {category.items.length} Questions
        </span>
      </div>
      
      <div className="flex flex-col gap-4">
        {category.items.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
