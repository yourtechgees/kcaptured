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
      '30-minute shoot at one location',
      '3 retouched pictures',
      'Up to 10 raw pictures of your choice',
    ],
  },
  {
    id: '2',
    category: 'lifestyle',
    name: 'Deluxe Lifestyle Shoot',
    duration: '1 hr',
    price: 150,
    features: [
      '1-hour shoot at one location',
      '7 retouched pictures',
      'Up to 20 raw pictures of your choice',
    ],
  },
  {
    id: '3',
    category: 'lifestyle',
    name: 'Premium Lifestyle Shoot',
    duration: '1 hr 30 min',
    price: 200,
    features: [
      '1.5-hour shoot at 2 locations if opted',
      '12 retouched pictures',
      'Up to 30 raw pictures of your choice',
    ],
  },
  {
    id: '4',
    category: 'studio',
    name: 'Basic Studio Shoot',
    duration: '1 hr',
    price: 170,
    features: [
      '1-hour shoot with one outfit',
      '5 retouched pictures',
      'Up to 10 raw pictures of your choice',
    ],
  },
  {
    id: '5',
    category: 'studio',
    name: 'Deluxe Studio Shoot',
    duration: '1 hr 30 min',
    price: 220,
    features: [
      '1.5-hour shoot with 2 outfits if opted',
      '10 retouched pictures',
      'Up to 20 raw pictures of your choice',
    ],
  },
  {
    id: '6',
    category: 'studio',
    name: 'Premium Studio Shoot',
    duration: '2 hr',
    price: 300,
    features: [
      '2-hour shoot with 3 outfits if opted',
      '17 retouched pictures',
      'Up to 30 raw pictures of your choice',
    ],
  },
];
