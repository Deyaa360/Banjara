# 🍛 Banjara Restaurant Website

A modern, elegant website for Banjara, a premium Indian restaurant showcasing authentic regional cuisine from across India. Built with Next.js, React, TypeScript, and Tailwind CSS.

![Banjara Restaurant](public/heritage.png)

## 🌟 Live Demo

Visit the live website: [https://deyaa360.github.io/Banjara](https://deyaa360.github.io/Banjara)

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Heritage Theme**: Sophisticated gold and black design inspired by Indian culture
- **Online Reservations**: Table booking functionality with date/time selection
- **Regional Menu**: Authentic dishes from different Indian states
- **Contact Form**: Customer inquiry submission with validation
- **About Page**: Restaurant story and heritage information
- **Accessibility**: WCAG compliant components
- **Smooth Animations**: Framer Motion powered interactions
- **Modern UI**: Built with shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: React Hook Form with validation
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Date Picker**: React Day Picker
- **Linting**: ESLint
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deyaa360/Banjara.git
   cd Banjara
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
Banjara/
├── public/               # Static assets (images, logos)
│   └── images/          # Menu and food images
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── menu/        # Menu page
│   │   └── reservations/ # Reservations page
│   ├── components/       # Reusable components
│   │   ├── contact/     # Contact form components
│   │   ├── layout/      # Header and Footer
│   │   ├── reservation/ # Reservation components
│   │   └── ui/          # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles and design system
│   └── theme/            # Color definitions
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Colors

- **Gold**: `#D4AF37` - Primary accent color
- **Pepper (Black)**: `#1F1C1A` - Background color
- **Basmati (Off-white)**: `#F8F0E3` - Text color

### Typography

- **Headings**: Serif font family (Playfair Display)
- **Body**: Sans-serif font family (Inter)

## 🧩 Components

The website uses a component-based architecture with reusable UI elements:

- **Button**: Multi-variant button component
- **Input**: Form input fields
- **Card**: Content container with consistent styling
- **ReservationForm**: Table booking form
- **MenuCategory**: Menu section component
- **MenuItem**: Dish display component

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

### Tailwind Configuration

The `tailwind.config.js` file contains custom color definitions and theme extensions:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'gold': {
          400: '#E5C158',
          500: '#D4AF37',
          600: '#C09B29',
        },
        'pepper': {
          700: '#2A2724',
          800: '#262220',
          900: '#1F1C1A',
        },
        'basmati': {
          100: '#F8F0E3',
          200: '#EFE6D9',
          300: '#E6DCC9',
        },
        // Additional colors...
      },
      // Additional theme extensions...
    },
  },
  // Plugin configurations...
};
```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling

### Component Creation

- Create reusable components for repeated UI elements
- Use composition over inheritance
- Implement proper prop validation
- Follow the single responsibility principle

### CSS Guidelines

- Use Tailwind utility classes for styling
- Create custom utility classes for repeated patterns
- Maintain consistent spacing and sizing
- Follow the color scheme defined in the design system

## 🚢 Deployment

### GitHub Pages

The website is configured for deployment on GitHub Pages:

1. **Automatic Deployment**: Every push to the `main` branch triggers a GitHub Actions workflow
2. **Static Export**: Next.js is configured to export static files
3. **Custom Domain**: Can be configured in repository settings
4. **HTTPS**: Automatically enabled

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run export
```

### Alternative Deployment (Vercel)

For Vercel deployment:

1. Import the repository in Vercel
2. Configure environment variables
3. Deploy automatically

## 📚 Additional Documentation

For more detailed information about the project, refer to:

- [TECHNICAL_SPECIFICATION.md](./TECHNICAL_SPECIFICATION.md) - Technical specifications and architecture
- [STYLE_GUIDE.md](./STYLE_GUIDE.md) - Design system and styling guidelines

## 🍽️ Menu Highlights

The website showcases authentic regional dishes from across India:

- **Delhi**: Aslam Tikka, Dal Makhni
- **Punjab**: Butter Chicken, Chicken Zafrani Tikka
- **Kashmir**: Burata Haak, Lamb Chop
- **Lucknow**: Galauti Kebab, Dahi Ke Kebab
- **Hyderabad**: Doori Kebab, Nalli Biryani
- **Kerala**: Koonthal Pepper Fry
- **And many more regional specialties...**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Deployment platform