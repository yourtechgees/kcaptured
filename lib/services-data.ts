export interface Service {
  id: string;
  category: 'lifestyle' | 'studio';
  name: string;
  duration: string;
  price: number;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    category: 'lifestyle',
    name: 'Basic Lifestyle Shoot',
    duration: '30 min',
    price: 70,
    features: [
      '30 minute session',
      'Natural settings',
      'Digital delivery',
      'Edited photos',
    ],
  },
  {
    id: '2',
    category: 'lifestyle',
    name: 'Deluxe Lifestyle Shoot',
    duration: '1 hr',
    price: 150,
    features: [
      '1 hour session',
      'Multiple locations',
      'Digital gallery',
      'Edited photos',
    ],
  },
  {
    id: '3',
    category: 'lifestyle',
    name: 'Premium Lifestyle Shoot',
    duration: '1 hr 30 min',
    price: 200,
    features: [
      '1.5 hour session',
      'Premium locations',
      'Unlimited outfit changes',
      'Full editing suite',
    ],
  },
  {
    id: '4',
    category: 'studio',
    name: 'Basic Studio Shoot',
    duration: '1 hr',
    price: 170,
    features: [
      '1 hour session',
      'Studio setup',
      'Professional lighting',
      'Digital delivery',
    ],
  },
  {
    id: '5',
    category: 'studio',
    name: 'Deluxe Studio Shoot',
    duration: '1 hr 30 min',
    price: 220,
    features: [
      '1.5 hour session',
      'Multiple backgrounds',
      'Lighting adjustments',
      'Full editing',
    ],
  },
  {
    id: '6',
    category: 'studio',
    name: 'Premium Studio Shoot',
    duration: '2 hr',
    price: 300,
    features: [
      '2 hour session',
      'Custom setups',
      'Professional retouching',
      'High-res files',
    ],
  },
];
