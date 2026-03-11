export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  readTime: number;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Natural Lighting in Photography',
    excerpt: 'Discover how to master natural light and create stunning photographs without artificial equipment.',
    content: `Natural light is one of the most powerful tools in photography. Whether you're shooting indoors or outdoors, understanding how light behaves can transform your images from ordinary to extraordinary.

The golden hour, occurring during the first hour after sunrise and the last hour before sunset, is beloved by photographers worldwide. This warm, soft light creates a magical quality that's difficult to replicate with artificial lighting.

Key tips for working with natural light:
- Observe how light falls on your subject
- Use shadows to create depth and dimension
- Reflectors can help bounce light into shadowed areas
- Positioning is crucial - the angle of light changes everything

Practice observing light in your daily life. Notice how it falls through windows, how it creates shadows, and how it changes throughout the day. This awareness will elevate your photography significantly.`,
    author: 'Photography Studio',
    publishedDate: '2024-03-01',
    readTime: 5,
    category: 'Techniques',
    slug: 'natural-lighting-photography',
  },
  {
    id: '2',
    title: 'How to Prepare for Your Photo Session',
    excerpt: 'Tips to ensure you feel confident and look your best during your upcoming photography session.',
    content: `Preparing for a photo session is essential to getting the best results. Here's a comprehensive guide to help you prepare:

Before Your Session:
1. Choose outfits that represent your style and make you feel confident
2. Plan your styling - hair and makeup should enhance, not distract
3. Get plenty of rest the night before
4. Avoid excessive sun exposure the day of your shoot
5. Eat light and stay hydrated

During Your Session:
- Relax and have fun - your comfort shows in photos
- Communicate with your photographer about your goals
- Try different poses and movements
- Give yourself permission to be playful and authentic
- The best photos often come when you're laughing or thinking of happy memories

After Your Session:
- Allow time for editing and curation
- Provide feedback on your favorites
- Share your photos and tag your photographer

Remember, everyone feels nervous during photo sessions. Your photographer is experienced at making you feel comfortable and bringing out your best self.`,
    author: 'Photography Studio',
    publishedDate: '2024-02-15',
    readTime: 4,
    category: 'Tips',
    slug: 'prepare-photo-session',
  },
  {
    id: '3',
    title: 'Behind the Scenes: A Day in Studio',
    excerpt: 'Take a peek behind the curtain and see what a typical studio day looks like for us.',
    content: `Ever wondered what happens behind the scenes of a professional photo shoot? Let me walk you through a typical day in our studio.

Morning Setup (8:00 AM - 9:00 AM):
Our day starts early with equipment checks and studio preparation. We set up lighting rigs, check camera settings, and prepare backdrops based on the day's schedule.

Client Sessions (9:00 AM - 5:00 PM):
With back-to-back sessions, each client gets our full attention. We take time to understand their vision and create a comfortable environment for them to be themselves.

Afternoon Editing (5:00 PM - 7:00 PM):
Once clients leave, our editing team takes over. We color-correct, retouch, and enhance photos to match our quality standards while maintaining authenticity.

Evening Wrap-Up:
We review the day's work, plan for tomorrow, and organize all files systematically.

What We've Learned:
The magic isn't just in the camera or lighting - it's in creating genuine connections with our clients and capturing their authentic selves. Every session tells a story, and we're honored to be part of yours.`,
    author: 'Photography Studio',
    publishedDate: '2024-01-30',
    readTime: 6,
    category: 'Studio Life',
    slug: 'day-in-studio',
  },
];
