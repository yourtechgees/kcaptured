export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  content: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientRole: 'Brand Owner',
    content: 'The photos captured my brand perfectly. Professional, creative, and delivered on time!',
    videoUrl: '', // REPLACE WITH YOUR CLOUDINARY VIDEO URL
    imageUrl: 'https://via.placeholder.com/100x100',
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    clientRole: 'Entrepreneur',
    content: 'Best headshot session I\'ve had. The photographer really made me feel comfortable and confident.',
    videoUrl: '', // REPLACE WITH YOUR CLOUDINARY VIDEO URL
    imageUrl: 'https://via.placeholder.com/100x100',
  },
  {
    id: '3',
    clientName: 'Emma Davis',
    clientRole: 'Model',
    content: 'Exceptional work! The attention to detail and creative vision was outstanding.',
    videoUrl: '', // REPLACE WITH YOUR CLOUDINARY VIDEO URL
    imageUrl: 'https://via.placeholder.com/100x100',
  },
];
