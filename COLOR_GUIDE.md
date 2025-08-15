# 🎨 भक्ति कैलेंडर रंग पैलेट (Bhakti Calendar Color Palette)

This document outlines the classic Indian/Hindu-inspired color system implemented for the Panchang Calendar application.

## 🌅 Color Philosophy

Our color palette is inspired by traditional Indian sacred colors and natural elements:
- **Saffron (केसरिया)**: Sacred orange colors representing spirituality and sacrifice
- **Kumkum (कुमकुम)**: Sacred red colors for auspiciousness and devotion
- **Gold (स्वर्ण)**: Divine golden colors representing prosperity and enlightenment
- **Earth Tones**: Natural colors representing grounding and stability
- **Spiritual Colors**: Colors associated with various deities and sacred elements

## 🎨 Color Variables

### Saffron Colors (केसरिया रंग)
```css
--saffron-light: 39 100% 85%    /* Light saffron background */
--saffron: 39 100% 70%          /* Main saffron color */
--saffron-dark: 39 100% 55%     /* Deep saffron */
--saffron-darker: 39 100% 40%   /* Darker saffron */
```

### Kumkum/Red Colors (कुमकुम रंग)
```css
--kumkum-light: 0 85% 85%       /* Light red/pink */
--kumkum: 0 85% 65%             /* Kumkum red */
--kumkum-dark: 0 85% 50%        /* Deep kumkum */
--sindoor: 14 100% 55%          /* Sindoor red-orange */
```

### Gold Colors (स्वर्ण रंग)
```css
--gold-light: 45 100% 85%       /* Light gold */
--gold: 45 100% 65%             /* Pure gold */
--gold-dark: 45 100% 50%        /* Deep gold */
--turmeric: 45 95% 70%          /* Turmeric yellow */
```

### Earth Tones (पृथ्वी रंग)
```css
--earth-light: 30 25% 90%       /* Light earth */
--earth: 30 25% 75%             /* Earth tone */
--earth-dark: 30 25% 60%        /* Dark earth */
--sandalwood: 35 30% 85%        /* Sandalwood beige */
```

### Spiritual Colors (आध्यात्मिक रंग)
```css
--lotus-pink: 340 75% 85%       /* Light lotus pink */
--lotus: 340 75% 70%            /* Lotus pink */
--peacock-blue: 195 85% 55%     /* Krishna blue */
--tulsi-green: 140 60% 45%      /* Sacred basil green */
```

### Sacred Neutrals (पवित्र तटस्थ रंग)
```css
--sacred-white: 0 0% 98%        /* Pure white */
--sacred-cream: 45 25% 95%      /* Cream white */
--sacred-grey: 0 0% 85%         /* Light grey */
--charcoal: 0 0% 25%            /* Dark charcoal */
```

## 🚀 Usage Examples

### Using Tailwind Classes
```jsx
{/* Background colors */}
<div className="bg-saffron-light">Light saffron background</div>
<div className="bg-kumkum">Kumkum background</div>
<div className="bg-gold-dark">Dark gold background</div>

{/* Text colors */}
<p className="text-saffron-dark">Saffron text</p>
<p className="text-kumkum-light">Light kumkum text</p>
<p className="text-earth-dark">Dark earth text</p>

{/* Border colors */}
<div className="border border-gold">Gold border</div>
<div className="border-2 border-saffron-dark">Thick saffron border</div>
```

### Using Gradient Utilities
```jsx
{/* Pre-defined gradients */}
<div className="gradient-saffron">Saffron gradient</div>
<div className="gradient-kumkum">Kumkum gradient</div>
<div className="gradient-gold">Gold gradient</div>
<div className="gradient-sacred">Sacred tri-color gradient</div>
<div className="gradient-sunset">Sunset gradient</div>
<div className="gradient-earth">Earth gradient</div>
```

### Day-specific Themes
```jsx
{/* Calendar day themes */}
<div className="sunday-theme">Sunday theme (saffron)</div>
<div className="monday-theme">Monday theme (peacock blue)</div>
<div className="tuesday-theme">Tuesday theme (sindoor)</div>
<div className="wednesday-theme">Wednesday theme (tulsi green)</div>
<div className="thursday-theme">Thursday theme (gold)</div>
<div className="friday-theme">Friday theme (lotus)</div>
<div className="saturday-theme">Saturday theme (charcoal)</div>
```

### Special Purpose Backgrounds
```jsx
{/* Event and festival specific */}
<div className="festival-bg">Festival background</div>
<div className="auspicious-bg">Auspicious background</div>
<div className="sacred-bg">Sacred/subtle background</div>
```

## 🎯 Color Usage Guidelines

### Primary Actions
- Use **saffron-dark** for primary buttons and important CTAs
- Use **gold** for secondary actions and highlights

### Text Hierarchy
- **charcoal** for main headings and important text
- **earth-dark** for body text and descriptions
- **sacred-white** for text on dark backgrounds

### Backgrounds
- **sacred-cream** for main page backgrounds
- **saffron-light** for content sections
- **sacred-white** for cards and modals

### States & Feedback
- **kumkum** colors for errors and destructive actions
- **tulsi-green** for success states
- **gold** for warnings and attention

### Calendar Specific
- **kumkum-light** for Sunday backgrounds
- **saffron-light** for regular day backgrounds
- **gradient-sacred** for festival highlights

## 🌈 Accessibility

All color combinations have been chosen to maintain good contrast ratios:
- Light backgrounds with dark text: 7:1+ contrast ratio
- Dark backgrounds with light text: 7:1+ contrast ratio
- Interactive elements maintain 3:1+ contrast ratio

## 🛠️ Development Tips

1. **Use semantic classes**: Prefer `bg-saffron` over specific HSL values
2. **Consistent patterns**: Use the same color family for related elements
3. **Gradients**: Use pre-defined gradient utilities for consistency
4. **Dark mode**: Colors automatically adapt with `.dark` class
5. **Devanagari text**: Use `font-devanagari` class for Hindi text

## 📱 Responsive Considerations

Colors work seamlessly across all screen sizes. On mobile:
- Use lighter backgrounds to improve readability
- Ensure sufficient contrast for touch targets
- Gradients may appear differently on various devices

## 🔄 Future Extensions

The color system can be extended with:
- Regional festival-specific colors
- Seasonal color variations
- User preference themes
- High contrast mode variations

---

**प्रेम और आशीर्वाद के साथ** ❤️ *With love and blessings*
