# Recent Updates - Photography Portfolio

## What's New

### 1. Dark/Light Theme Toggle ✨
- **Location:** Click the sun/moon icon in the header (top right)
- **Features:**
  - Automatically detects system preference (light/dark)
  - Manual toggle with smooth transitions
  - All components styled for both themes
- **Files Updated:**
  - `app/layout.tsx` - Added ThemeProvider wrapper
  - `components/theme-toggle.tsx` - New theme switcher component
  - `components/header.tsx` - Added theme toggle button
  - All components - Added dark: class variants

### 2. Framer Motion Animations 🎬
- **What animate:**
  - Hero section text fades in on page load
  - Decorative background elements have subtle floating animation
  - Services cards animate in staggered pattern
  - Gallery images scale and fade on filter change
  - Lightbox modal has smooth fade/scale effects
  - Buttons have hover and tap animations
  - Mobile menu has smooth slide-in animation

- **Files Updated:**
  - `components/hero-section.tsx` - Added hero animations
  - `components/services-section.tsx` - Added service card animations
  - `components/masonry-gallery.tsx` - Added gallery animations
  - `components/header.tsx` - Added mobile menu animation
  - `package.json` - Added framer-motion dependency

### 3. Updated Services Data 💰
- **What Changed:**
  - Services now organized by category (Lifestyle vs Studio)
  - Each service has duration and numeric price
  - Homepage displays all 6 services with category filter

- **Services List:**
  - Basic Lifestyle: $70 (30 min)
  - Deluxe Lifestyle: $150 (1 hr)
  - Premium Lifestyle: $200 (1.5 hr)
  - Basic Studio: $170 (1 hr)
  - Deluxe Studio: $220 (1.5 hr)
  - Premium Studio: $300 (2 hr)

- **Files Updated:**
  - `lib/services-data.ts` - Complete restructure
  - `components/services-section.tsx` - Added filtering UI

### 4. Enhanced README Documentation 📖
- **New Sections:**
  - "Where to Add Media Files" - Exact locations for portfolio images, videos, hero backgrounds
  - "Complete Media Setup Guide" - Step-by-step instructions for Cloudinary
  - "Cloudinary Pro Tips" - Best practices for organization and optimization
  - Theme and animation features documented

- **File Updated:**
  - `README.md` - Significantly expanded

## How to Use These Features

### Add Your Cloudinary URLs

Edit `lib/portfolio-data.ts` and replace placeholder URLs:

```typescript
const portfolioImages = [
  {
    id: 'lifestyle-1',
    cloudinaryUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/YOUR_IMAGE_ID',
    category: 'lifestyle',
    title: 'Your Image Title',
    width: 300,    // Important: accurate aspect ratio
    height: 400,
  },
  // Add more images...
];
```

### Add Testimonial Videos

Edit `lib/testimonials-data.ts`:

```typescript
const testimonials = [
  {
    id: '1',
    clientName: 'Client Name',
    clientRole: 'Their Role',
    content: 'Testimonial text...',
    videoUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/YOUR_VIDEO_ID',
    imageUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/CLIENT_PHOTO',
  },
];
```

### Update Your Instagram Handle

Search and replace in these files:
1. `components/hero-section.tsx`
2. `components/footer.tsx`

Replace `https://instagram.com/your_handle` with your actual handle.

## File Structure

```
New/Updated Files:
├── components/
│   ├── theme-toggle.tsx          (NEW)
│   ├── theme-provider.tsx        (Updated)
│   ├── header.tsx                (Updated - added theme toggle)
│   ├── hero-section.tsx          (Updated - added animations)
│   ├── services-section.tsx      (Updated - filtering + animations)
│   ├── masonry-gallery.tsx       (Updated - animations)
│   └── ...other components       (Updated - dark mode support)
├── lib/
│   └── services-data.ts          (Updated - new structure)
├── app/
│   └── layout.tsx                (Updated - ThemeProvider)
├── package.json                  (Updated - framer-motion)
├── README.md                      (Expanded documentation)
└── UPDATES.md                     (This file)
```

## What You Need to Do

1. **Required:** Update `lib/portfolio-data.ts` with your Cloudinary image URLs
2. **Required:** Update your Instagram handle in components
3. **Required:** Set up Formspree Form ID in `components/contact-form.tsx`
4. **Optional:** Add testimonial videos to `lib/testimonials-data.ts`
5. **Test:** Click the theme toggle to verify dark/light mode works
6. **Deploy:** Push to Vercel when ready

## Dependencies Added

- `framer-motion` ^11.0.0 - For smooth animations
- `next-themes` ^0.4.6 - For dark/light theme management (already included)

These will be automatically installed when you run `pnpm install`.

## Browser Support

All features work on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Questions?

Refer to the expanded README.md for:
- Complete Cloudinary setup guide
- Step-by-step media upload instructions
- Styling customization options
- Troubleshooting tips
- Future enhancement ideas
