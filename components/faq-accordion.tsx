'use client';

import { FAQItem } from '@/lib/faq-data';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const groupedByCategory = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, FAQItem[]>
  );

  return (
    <div className="space-y-8">
      {Object.entries(groupedByCategory).map(([category, categoryItems]) => (
        <div key={category}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {category}
          </h3>

          <div className="space-y-3">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenId(openId === item.id ? null : item.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-gray-600 transition-transform ${
                      openId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openId === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
