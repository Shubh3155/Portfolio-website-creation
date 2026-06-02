# Portfolio Website

A modern, professional portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ **Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)
- 🎨 **Modern UI** - Built with Tailwind CSS and Radix UI components
- 📱 **Responsive Design** - Fully responsive across all devices
- 🎭 **Smooth Animations** - Motion animations with Framer Motion
- 📊 **Data Visualization** - Charts and graphs with Recharts
- 🎨 **Customizable** - Easy to customize colors, content, and layout

## Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 4.1
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Routing**: React Router
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v11 or higher)

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd "Portfolio website creation"
```

2. Install dependencies:
```sh
pnpm install
```

3. Approve build scripts (if prompted):
```sh
pnpm approve-builds
```

### Running the Development Server

```sh
pnpm dev
```

The application will start at `http://localhost:5173`

### Building for Production

```sh
pnpm build
```

### Preview Production Build

```sh
pnpm preview
```

## Project Structure

```
src/
├── components/          # React components
├── assets/             # Images, SVGs, and other static files
├── main.tsx            # Application entry point
└── ...other files
```

## Customization

### Changing Portfolio Content

Look for content files in the `src/` directory. Update:
- Personal information (name, title, bio)
- Project details and links
- Skills and experience
- Social media links

### Updating Styles

- **Tailwind Configuration**: Edit `tailwind.config.ts` or `tailwind.config.js`
- **Component Styles**: Modify component CSS classes using Tailwind utility classes
- **Theme Colors**: Update Tailwind theme in config file

### Adding New Pages

Create new components in `src/components/` and configure routes in your routing setup.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run linter (if configured)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The React and Tailwind plugins are required and should not be removed
- Build scripts for `@tailwindcss/oxide` and `esbuild` must be approved during installation

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
