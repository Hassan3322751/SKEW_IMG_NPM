# React Skew Image Component

A stylish skewed image component with lazy loading.

## Installation
```bash
npm install hr-skew-img
```

## Usage
```jsx
import SkewImg from 'hr-skew-img';
import 'hr-skew-img/dist/index.cjs.css';
--------OR
import 'hr-skew-img/dist/index.esm.css';

const App = () => (
  <SkewImg 
    image="your-image-src | link.jpg" 
    alt="Description"
  />
);
```

## Props
| Prop      | Type   | Default | Description                           |
|-----------|--------|---------|---------------------------------------|
| image     | string | -       | Image URL | src                       |
| alt       | string | ''      | Accessibility description             |

## Customization
Add these CSS variables to your root CSS and import that CSS file in your component where you are going to use SkewImg:
```css
#Use !important with each var e.g. --skew-angle: 15deg !important

:root {
  --bottom-skew-bg: #364854 !important;
  --bottom-skew-border: 1px solid #364854 !important;
  --bottom-skew-angle: skewX(-20deg) !important;
  --top-skew-bg: transparent !important;
  --top-skew-border: 1px solid white !important;
  --top-skew-angle: skewX(-20deg) !important;
  --img-skew-angle: skewX(0deg) !important;
}

#Above_given are some variables can be changed modified as your need
  1. Skew background can be transparent, image or color etc.
```
## GIF Preview
Here example GIF from Cloudinary how it will look like in your awesome project:

| GIF |
|------|
| ![GIF 1](https://res.cloudinary.com/dmprsl1mx/image/upload/f_auto,q_auto/syzcllcx4u0ytd9u5ffn) |