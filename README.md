# Hedamo - Frontend Developer Assignment

A beautiful, card-based product showcase built with Next.js and Tailwind CSS, inspired by Samsung Weather's modular design approach.

## 🎯 Project Overview

This project demonstrates a modern, responsive product showcase where each product aspect is presented in its own distinct card. The design follows the clean, separated card pattern used in Samsung's weather app, creating an intuitive and visually appealing user experience.

## ✨ Features

### Main Page
- **Hero Section**: Eye-catching introduction with gradient text and floating badges
- **Product Grid**: Responsive grid of product preview cards
- **Features Section**: Highlighting key benefits of the platform
- **Smooth Animations**: Hover effects, transitions, and micro-interactions

### Product Details Modal
- **Card-Based Layout**: Each product aspect gets its own dedicated card:
  - Hero Image with pricing and rating
  - Product Description
  - Key Features
  - Nutritional Information
  - Traceability & Origin
  - Certifications
  - Customer Reviews
  - Product Specifications
  - Call-to-Action

### Design Features
- **Responsive Design**: Works seamlessly on all device sizes
- **Modern UI/UX**: Clean, professional appearance with smooth interactions
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Smooth Animations**: Fade-in, slide-up, and scale effects
- **Card Hover Effects**: Subtle animations and shadow changes

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript for type safety
- **Icons**: Lucide React for consistent iconography
- **Images**: Next.js Image optimization
- **Fonts**: Inter font family for modern typography

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Frontend-Developer-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and highlights
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Yellow tones for ratings and highlights
- **Semantic**: Green for success, blue for info, etc.

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear heading and body text scales

### Components
- **Cards**: Consistent shadow, border radius, and hover effects
- **Buttons**: Primary and secondary variants with proper states
- **Modals**: Smooth transitions and backdrop blur effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Products
1. Update `src/data/products.ts` with new product data
2. Follow the existing Product interface structure
3. Add product images to the specified domains in `next.config.js`

### Modifying Styles
1. Update `tailwind.config.js` for theme changes
2. Modify `src/app/globals.css` for custom CSS
3. Use Tailwind utility classes for component-specific styling

### Adding New Card Types
1. Create new card components in `src/components/`
2. Update the ProductModal to include new cards
3. Ensure proper TypeScript interfaces

## 🌟 Bonus Features Implemented

- **Smooth Animations**: Fade-in, slide-up, and scale effects
- **Micro-interactions**: Hover effects and gentle animations
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Accessibility**: ARIA labels and semantic HTML
- **Modern Design**: Glassmorphism and gradient effects

## 📋 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and Tailwind
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
├── components/         # Reusable components
│   ├── ProductCard.tsx # Product preview cards
│   └── ProductModal.tsx # Detailed product modal
├── data/              # Product data and utilities
│   └── products.ts    # Product database
└── types/             # TypeScript type definitions
    └── product.ts     # Product interfaces
```

## 🎯 Key Implementation Details

### Card-Based Design
- Each product aspect is presented in its own card
- Cards have consistent styling and spacing
- Smooth hover effects and transitions
- Responsive grid layout

### Modal Implementation
- Full-screen modal with smooth animations
- Sticky header for easy navigation
- Scrollable content with proper spacing
- Backdrop click to close

### State Management
- React hooks for local state
- Product selection and modal visibility
- Smooth transitions between states

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure redirects for Next.js routing

### Other Platforms
- Build: `npm run build`
- Start: `npm run start`
- Deploy the built application

## 🔍 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging
- **Lazy Loading**: Images and components as needed

## 🧪 Testing

The project is set up with:
- TypeScript for type safety
- ESLint for code quality
- Responsive design testing
- Accessibility considerations

## 📄 License

This project is created for the Hedamo Frontend Developer Assignment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

**Built with ❤️ using Next.js and Tailwind CSS**
