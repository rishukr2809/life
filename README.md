# 💕 Beautiful Valentine's Day Website

A stunning, interactive Valentine's Day website with photo memories gallery and romantic proposal section.

## ✨ Features

### 🎨 Beautiful Animations
- Smooth fade-in animations for all elements
- Character-by-character text reveals
- Floating hearts and confetti effects
- Hover animations on photo gallery
- Scroll-triggered reveals

### 📸 Photo Memories Gallery
- Displays 20 beautiful photos from your `memories` folder (1.jpg to 20.jpg)
- Responsive grid layout (3-4 columns on desktop, 1 column on mobile)
- Hover effects with scale and overlay animations
- Staggered reveal animations as you scroll

### 💬 Slow Reveal Text Section
- Beautiful poetic messages that appear one by one
- Smooth fade-in effects with timing
- Sets the mood for the proposal

### 🤍 Interactive Proposal Section
- Romantic question: "Will you be my Valentine forever?"
- **YES Button**: Shows "I Love You So Much!" with confetti celebration
- **NO Button**: Escapes from cursor/touch - never lets them click it!
- Responsive design for all devices

### 🎉 Celebration Section
- Animated confetti falling effect
- Beautiful gradient typography
- Celebratory message and romantic text

## 📁 Project Structure

```
valentine-website/
├── index.html           # Main HTML file
├── style/
│   └── style.css        # All styling and animations
├── script/
│   └── main.js          # JavaScript logic and animations
├── img/                 # Existing images (balloon, hearts, etc.)
├── memories/            # YOUR PHOTO FOLDER
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── ... (up to 20.jpg)
└── customize.json       # Configuration file (existing)
```

## 🚀 Setup Instructions

### 1. **Add Your Photos**
   - Create a `memories` folder in your project directory
   - Add 20 photos named `1.jpg`, `2.jpg`, ... up to `20.jpg`
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 500x600px or larger (will scale automatically)

### 2. **File Placement**
   - Copy `index.html` to your project root
   - Create/update `style/style.css` with the provided CSS
   - Create/update `script/main.js` with the provided JavaScript
   - Ensure your `img/` folder exists with all original images

### 3. **Customize (Optional)**
   Edit `customize.json` to personalize:
   ```json
   {
     "name": "My Baby AnjaliSiaa!!",
     "greetingText": "I really like your name AnjaliSiaa!!!",
     "wishText": "Your custom message here",
     "imagePath": "img/your-image.jpg"
   }
   ```

### 4. **Run Locally**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   http-server
   ```
   Then open: `http://localhost:8000`

## 🎮 How It Works

### Initial Animation
1. Greeting message appears and disappears
2. "It's Valentine!!!" text fades in
3. Chat message with send button appears
4. "Idea" messages cascade through
5. Balloons and hearts float up
6. Main image appears with wish message
7. Confetti effects (SVG circles) burst

### Photo Gallery Reveal
- Automatically appears after main animation
- 20 photos load from `memories/` folder
- Hover over photos to see scale/overlay effect
- Photos are lazy-loaded for performance

### Romantic Text
- 7 poetic lines appear one after another
- Each line delays before appearing
- Creates emotional buildup to proposal

### The Proposal
- Beautiful romantic question appears
- Two buttons: "Yes! ❤️" and "No"
- **YES**: Celebration section with confetti
- **NO**: Button runs away from cursor/touch! 😄

## 🎨 Color Scheme

- **Primary**: `#ff1654` (Hot Pink/Red)
- **Secondary**: `#ff69b4` (Hot Pink)
- **Accent**: `#ffd6e8` (Light Pink)
- **Background**: Soft pink gradient

## 📱 Responsive Design

- **Desktop**: Full experience with animations
- **Tablet**: Optimized grid layout (2-3 columns)
- **Mobile**: Single column layout, touch-friendly buttons

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## ⚠️ Important Notes

1. **Image Path**: The gallery automatically looks for images in `memories/` folder
2. **Fallback**: If an image is missing, that tile is hidden automatically
3. **CORS**: If running from `file://` protocol, some features may not work - use a local server
4. **Photo Quality**: Larger, high-quality photos look better
5. **Animation Performance**: Tested on modern browsers; older browsers may have slower animations

## 🎵 Audio (Optional)

To add background music, add to `<head>` in HTML:
```html
<audio autoplay loop volume="0.3">
    <source src="path-to-your-song.mp3" type="audio/mpeg">
</audio>
```

## 🌟 Customization Tips

### Change Colors
Edit the `:root` variables in `style.css`:
```css
:root {
    --primary-color: #ff1654;
    --secondary-color: #ff69b4;
    /* ... more colors */
}
```

### Change Fonts
Google Fonts already included:
- `Playfair Display` - Headings (elegant serif)
- `Poppins` - Body text (modern sans-serif)
- `Montserrat` - Alternative option

### Adjust Animation Timing
In `main.js`, modify delays in the Timeline:
```javascript
tl.to(".three", 0.7, { opacity: 0 }, "+=2"); // +=2 means wait 2 seconds
```

### Add More Photos
Simply add more images (21.jpg, 22.jpg, etc.) and change line in `main.js`:
```javascript
for (let i = 1; i <= 25; i++) { // Change 20 to 25
```

## 🐛 Troubleshooting

**Photos not showing?**
- Check that images are in `memories/` folder
- Use correct file names: `1.jpg`, `2.jpg`, etc.
- Clear browser cache and reload

**Animations not working?**
- Check browser console for errors (F12)
- Ensure GSAP library loads: `https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js`
- Try refreshing the page

**Button not escaping?**
- Works best on desktop with mouse
- Mobile: Button escapes on touch
- Ensure JavaScript is enabled

**Page loads slowly?**
- Optimize image file sizes
- Use JPG format instead of PNG
- Consider reducing from 20 to 15 photos

## 📞 Support

If you encounter issues:
1. Check browser console (F12 → Console tab)
2. Verify all files are in correct folders
3. Try running on a local server (not `file://`)
4. Clear browser cache

## 💝 Final Notes

This website is designed to be shared with someone special. The escaping "No" button ensures they'll eventually say "Yes!" 😊

Personalize it with your own photos, colors, and messages to make it truly special!

---

**Created with ❤️ for your Valentine** 💕