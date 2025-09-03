# DataPlug Web

A modern, responsive landing page for DataPlug - the cloud-aware data partitioning framework for scientific data, built with Next.js and Ant Design.

## About DataPlug

DataPlug is a client-side only, extensible Python framework with the goal of enabling efficient data partitioning of unstructured scientific data stored in object storage (like Amazon S3) for elastic workloads in the Cloud.

### Key Features
- **Cloud-Aware**: Specifically targets cold raw data in object storage (e.g. Amazon S3). Exploits S3 byte-range reads for parallel high-bandwidth access
- **Read-Only**: Pre-processes data in read-only fashion. Indexes and metadata stored decoupled from raw objects, keeping cold data as-is
- **Data Slicing**: Lazy-evaluated partitions with zero-cost re-partitioning. Serializable for distributed computing environments like PySpark, Dask, or Ray
- **Multiple Domains**: Supports Genomics, Geospatial, Metabolomics, Generic, and Astronomics data
- **Distributed Computing**: Compatible with PySpark, Dask, and Ray

## Official Links

- **[DataPlug Repository](https://github.com/CLOUDLAB-URV/dataplug)** - Main framework
- **[Data Cockpit Repository](https://github.com/ubenabdelkrim/DataCockpit)** - Interactive Jupyter widget
- **[PyRun Cloud Platform](https://pyrun.cloud/)** - Cloud execution platform

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Ant Design (antd)
- **Styling**: Tailwind CSS + Ant Design
- **Language**: TypeScript
- **Icons**: Ant Design Icons
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── sections/        # Page sections
│   │       ├── HeroSection.tsx
│   │       └── FeaturesSection.tsx
│   ├── data/                # Data and content
│   │   ├── features.ts      # Feature definitions
│   │   ├── domains.ts       # Domain information
│   │   ├── dataCockpit.ts   # Data Cockpit content
│   │   └── pyrun.ts         # PyRun content
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts         # Centralized type definitions
│   ├── config/              # Configuration
│   │   ├── constants.ts     # Site constants and colors
│   │   └── site.ts          # Site configuration
│   ├── utils/               # Utilities
│   │   └── index.ts         # Common functions
│   ├── lib/                 # Utilities
│   │   └── theme.ts         # Ant Design theme config
│   ├── docs/                # Documentation page
│   │   └── page.tsx         # Documentation with tabs
│   ├── page.tsx             # Main landing page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
```

## Features

### Landing Page
- **Modern Design**: Clean, professional interface using Ant Design components
- **Responsive Layout**: Optimized for all devices with Ant Design's grid system
- **Interactive Elements**: Cards, buttons, statistics, and alerts
- **Gradient Backgrounds**: Beautiful gradient sections for hero and CTA areas
- **Smooth Animations**: Hover effects and transitions

### Documentation
- **Tabbed Interface**: Organized content with Ant Design Tabs
- **Code Examples**: Syntax-highlighted code blocks with official examples
- **Integration Guides**: PySpark and Dask examples from official repository
- **API Reference**: Clean component-based documentation
- **Performance Tips**: Alert components for important information

### Ant Design Components Used
- **Layout**: Header, Content, Footer structure
- **Typography**: Title, Paragraph, Text components
- **Cards**: Feature cards, domain cards, integration examples
- **Buttons**: Primary, secondary, and ghost buttons
- **Statistics**: Performance metrics display
- **Steps**: Installation and architecture flow
- **Tabs**: Documentation organization
- **Alerts**: Important information display
- **Lists**: Data format listings
- **Tags**: Color-coded domain indicators

## Ecosystem Integration

### DataPlug + Data Cockpit + PyRun
- **DataPlug**: Core data partitioning engine
- **Data Cockpit**: Interactive Jupyter widget interface
- **PyRun**: Cloud execution platform

## Installation

### DataPlug
```bash
pip install cloud-dataplug
```

### Data Cockpit
```bash
pip install cloud_data_cockpit
```

### Data Cockpit with Geospatial Support
```bash
pip install cloud_data_cockpit[geospatial]
```

## Customization

### Theme Configuration
The Ant Design theme is configured in `src/app/lib/theme.ts`:
- Primary color: `#1890ff` (blue)
- Border radius: `8px`
- Component-specific customizations

### Colors
- **Primary**: Blue gradient for hero sections
- **Secondary**: Purple gradient for CTA sections
- **Success**: Green for positive actions
- **Warning**: Orange for alerts
- **Error**: Red for errors
- **Gradients**: Blue-purple for hero sections

### Content
- **Data**: Edit files in `src/app/data/` to update content
- **Components**: Modify components in `src/app/components/`
- **Styling**: Update `src/app/globals.css` for global styles
- **Configuration**: Adjust constants in `src/app/config/constants.ts`

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/dataplug/dataplug-web.git
cd dataplug-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Generate static export for GitHub Pages
npm run deploy       # Deploy to GitHub Pages (manual)
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: The GitHub Actions workflow will automatically trigger
2. **Static Export**: Next.js builds and exports static files
3. **Deploy**: Files are deployed to GitHub Pages

### Manual Deployment
```bash
npm run deploy       # Build and deploy manually using gh-pages
```

### Configuration
- Static export is configured in `next.config.ts`
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Automatic deployment on push to `main` branch

## Performance

- **Static Export**: Pre-built static files for fast loading
- **Optimized Bundle**: Tree-shaking and code splitting for smaller bundles
- **Modern Assets**: WebP and AVIF image formats support
- **Fast Loading**: Optimized CSS and JavaScript delivery

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [DataPlug Framework](https://github.com/CLOUDLAB-URV/dataplug)
- [Data Cockpit](https://github.com/ubenabdelkrim/DataCockpit)
- [PyRun Platform](https://pyrun.cloud/)
- [Ant Design](https://ant.design/)
- [Next.js](https://nextjs.org/)
- [Documentation](https://dataplug.dev/docs)
- [Issues](https://github.com/dataplug/dataplug-web/issues)
