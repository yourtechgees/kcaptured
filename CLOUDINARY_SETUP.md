# Cloudinary Setup - Quick Reference

## Your Cloudinary Information

When you're ready to add your images, you'll need:

- **Cloud Name:** `YOUR_CLOUD_NAME` (find this in your Cloudinary dashboard)
- **Folder structure:** Optional but recommended (e.g., `/portfolio`, `/testimonials`, `/blog`)

## URL Format Reference

### Portfolio Images

**Format:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/YOUR_IMAGE_ID
```

**Example:**
```
https://res.cloudinary.com/my-photography-studio/image/upload/v1704067890/portfolio/sunset-portrait.jpg
```

**Where to find:**
1. Upload image to Cloudinary
2. Right-click image → View Image → Copy URL from address bar
3. Paste into `lib/portfolio-data.ts`

### Testimonial Videos

**Format:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/YOUR_VIDEO_ID
```

**Example:**
```
https://res.cloudinary.com/my-photography-studio/video/upload/v1704067890/testimonials/client-sarah.mp4
```

**Where to find:**
1. Upload video to Cloudinary
2. Right-click video → View Video → Copy URL
3. Paste into `lib/testimonials-data.ts`

### With Transformations (Optional)

You can add parameters to optimize images:

**Resize width:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_800/image.jpg
```

**Resize width and height (crop):**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_400,h_600,c_fill/image.jpg
```

**Quality optimization:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto/image.jpg
```

**Auto format (WebP if supported):**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto/image.jpg
```

## Step-by-Step Setup

### 1. Get Your Cloud Name
```
1. Go to cloudinary.com/console
2. Look for "Cloud Name" at the top
3. Copy it (example: abc123xyz)
```

### 2. Upload Your First Image
```
1. Click "Media Library"
2. Click "Upload"
3. Select your portrait image
4. Wait for upload to complete
5. Copy the URL shown
```

### 3. Find Image Dimensions
```
1. Right-click uploaded image
2. Select "Inspect" (or Developer Tools)
3. Look for width/height in image properties
4. OR: Open image in new tab, inspect it there
```

### 4. Update portfolio-data.ts
```typescript
// Add to lib/portfolio-data.ts
{
  id: 'lifestyle-sunset-1',
  cloudinaryUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/...',
  category: 'lifestyle',  // or 'studio'
  title: 'Your Photo Title',
  description: 'Optional description',
  width: 300,   // From step 3
  height: 400,  // From step 3
}
```

## File Organization Best Practices

### Recommended Folder Structure in Cloudinary:
```
portfolio/
├── lifestyle/
│   ├── sunset-portrait.jpg
│   ├── beach-session.jpg
│   └── urban-lifestyle.jpg
├── studio/
│   ├── headshot-001.jpg
│   ├── studio-portrait.jpg
│   └── product-showcase.jpg
testimonials/
├── client-sarah.mp4
├── client-john.mp4
└── client-maria.mp4
blog/
├── featured-tips.jpg
└── behind-scenes.jpg
```

### How to Create Folders:
```
1. In Cloudinary Media Library
2. Click "New Folder"
3. Name it (e.g., "portfolio")
4. Upload images into that folder
5. Cloudinary shows full path in URL
```

## Common Cloudinary URL Examples

### Original upload:
```
https://res.cloudinary.com/studio-photo/image/upload/v1704067890/portfolio/portrait.jpg
```

### With width optimization (recommended for web):
```
https://res.cloudinary.com/studio-photo/image/upload/w_800/portfolio/portrait.jpg
```

### Auto-optimize format (saves bandwidth):
```
https://res.cloudinary.com/studio-photo/image/upload/f_auto,q_auto/portfolio/portrait.jpg
```

### For social media (cropped square):
```
https://res.cloudinary.com/studio-photo/image/upload/w_1080,h_1080,c_fill/portfolio/portrait.jpg
```

## When Ready to Submit Your Cloudinary Info

Provide:
- **Cloud Name:** (required)
- **Sample Image URL:** (one working URL to test)
- **Number of portfolio images:** (approximately)
- **Testimonial videos ready?:** (yes/no)

Example:
```
Cloud Name: my-photography-studio
Sample URL: https://res.cloudinary.com/my-photography-studio/image/upload/v1704067890/portfolio/main.jpg
Portfolio images: ~30 images
Testimonials: 5 videos ready
```

## Troubleshooting Cloudinary URLs

### URL not working?
- Check that YOUR_CLOUD_NAME is correct
- Verify the image/video ID is complete
- Make sure it's not truncated in the file

### Image not showing in gallery?
- Check browser console for CORS errors
- Verify width/height values are accurate
- Try the URL directly in browser address bar

### Video not playing?
- Ensure video format is supported (MP4, WebM)
- Check file size is under 100MB
- Try uploading again if corrupted

## Next Steps

1. ✅ Sign up for Cloudinary (free tier included)
2. ✅ Get your Cloud Name
3. ✅ Upload your portfolio images
4. ✅ Provide Cloud Name when ready
5. ✅ Update `lib/portfolio-data.ts` with your URLs
6. ✅ Update Instagram handle
7. ✅ Test the site locally
8. ✅ Deploy to Vercel

Ready to add your content? Update `lib/portfolio-data.ts` with your Cloudinary Cloud Name and image URLs!
