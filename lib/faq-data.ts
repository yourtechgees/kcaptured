export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How do I book a photography session?',
    answer: 'To book a session, simply message us on Instagram @kcaptures._ with your preferred date and session type. We\'ll discuss your needs, pricing, and send you a contract. A 50% deposit is required to hold your date.',
    category: 'Booking',
  },
  {
    id: '2',
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 2+ weeks in advance receive a full refund. Cancellations within 2 weeks forfeit the deposit. We allow one free reschedule within 3 months of your original date.',
    category: 'Policies',
  },
  {
    id: '3',
    question: 'How long does it take to receive my photos?',
    answer: 'Edited photos are typically delivered within 2-3 weeks of your session. This includes professional color correction, retouching, and curation of the best shots.',
    category: 'Timeline',
  },
  {
    id: '4',
    question: 'Can I get the unedited RAW files?',
    answer: 'We provide professionally edited JPEGs and high-resolution files. RAW files are not included in standard packages, but can be purchased separately for an additional fee.',
    category: 'Deliverables',
  },
  {
    id: '5',
    question: 'Do you offer print services?',
    answer: 'Yes! We offer a selection of premium prints, canvases, and albums. Details and pricing are provided after your session.',
    category: 'Products',
  },
  {
    id: '6',
    question: 'What should I wear to my session?',
    answer: 'Wear what makes you feel confident! We recommend coordinating outfits (solid colors, complementary tones) and avoiding busy patterns. Bring 2-3 outfit changes for variety.',
    category: 'Preparation',
  },
  {
    id: '7',
    question: 'Can you do outdoor sessions?',
    answer: 'Absolutely! We specialize in both studio and outdoor sessions. Location fees may apply for locations outside our standard radius. Outdoor sessions are weather dependent.',
    category: 'Sessions',
  },
  {
    id: '8',
    question: 'Do you offer group or family sessions?',
    answer: 'Yes! Group sessions work great for families, friends, and corporate teams. Pricing adjusts based on group size and session duration.',
    category: 'Sessions',
  },
];
