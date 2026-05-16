"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItemData } from "./types";

interface FAQItemProps {
  item: FAQItemData;
}

/**
 * FAQItem Component
 * 
 * Individual accordion item displaying a single question and answer.
 * Handles its own open/close state.
 */
export default function FAQItem({ item }: FAQItemProps) {
  // Opting to allow multiple accordions to be open at once. 
  // This is better for reading flow, letting users compare answers between questions.
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border border-[#2A2E34] rounded-lg bg-[#111415] transition-colors duration-300 hover:border-[#3A4569] overflow-hidden group">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A4569] focus-visible:ring-inset"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span className="text-white font-medium text-base sm:text-lg pr-4 group-hover:text-gray-100 transition-colors">
          {item.title}
        </span>
        <ChevronDown 
          className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-white" : "text-gray-400"
          }`} 
          size={20} 
          strokeWidth={2}
        />
      </button>
      
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        ref={contentRef}
        className="transition-all duration-300 ease-in-out"
        style={{
          // Smoothly animate height using scrollHeight
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-6 pb-5 pt-0 text-gray-300 leading-relaxed text-sm sm:text-base">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
