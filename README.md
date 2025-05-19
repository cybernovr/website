# Cybernovr Cybersecurity Website

A production-ready, component-based website for the cybersecurity brand Cybernovr, built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design based on CyberArk.com
- Component-based architecture for maintainability and reusability
- Server-side rendering for improved SEO and performance
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-first approach with responsive breakpoints

## Tech Stack

- **Frontend**: Next.js (React), Tailwind CSS
- **State Management**: React Context
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Montserrat (headings), Open Sans (body)

## Project Structure

```
cybernovr-website/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── initiatives/      # Initiatives page
│   ├── products/         # Products page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── about/            # About page components
│   ├── contact/          # Contact page components
│   ├── home/             # Home page components
│   ├── initiatives/      # Initiatives page components
│   ├── layout/           # Layout components (header, footer)
│   ├── products/         # Products page components
│   ├── services/         # Services page components
│   ├── ui/               # UI components from shadcn
│   └── theme-provider.tsx # Theme provider component
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── .env.example          # Example environment variables
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/cybernovr-website.git
cd cybernovr-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy

## Testing

Run tests with:

```bash
npm run test
# or
yarn test
```

## Accessibility

This website follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper ARIA roles and attributes
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
