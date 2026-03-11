export interface PortfolioImage {
  id: string;
  cloudinaryUrl: string;
  category: 'lifestyle' | 'studio';
  title: string;
  description?: string;
  width: number;
  height: number;
}

export const portfolioImages: PortfolioImage[] = [
  // REPLACE WITH YOUR CLOUDINARY URLS
  // Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/your-image-name.jpg
  {
    id: '1',
    cloudinaryUrl: 'https://via.placeholder.com/300x400',
    category: 'lifestyle',
    title: 'Portrait',
    width: 300,
    height: 400,
  },
  {
    id: '2',
    cloudinaryUrl: 'https://via.placeholder.com/400x300',
    category: 'lifestyle',
    title: 'Lifestyle Shot',
    width: 400,
    height: 300,
  },
  {
    id: '3',
    cloudinaryUrl: 'https://via.placeholder.com/350x450',
    category: 'studio',
    title: 'Studio Session',
    width: 350,
    height: 450,
  },
  {
    id: '4',
    cloudinaryUrl: 'https://via.placeholder.com/400x400',
    category: 'studio',
    title: 'Studio Portrait',
    width: 400,
    height: 400,
  },
  {
    id: '5',
    cloudinaryUrl: 'https://via.placeholder.com/300x500',
    category: 'lifestyle',
    title: 'Nature Shot',
    width: 300,
    height: 500,
  },
  {
    id: '6',
    cloudinaryUrl: 'https://via.placeholder.com/450x350',
    category: 'studio',
    title: 'Professional Headshot',
    width: 450,
    height: 350,
  },
];
