# 🚀 Crypto Dashboard - Bitcoin Price Tracker

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
</div>
<div align="center">
  <h3>🎯 Professional Bitcoin price tracking dashboard with real-time charts and modern UI</h3>
  <p>Built with React 19, Vite 6, and Tailwind CSS - Pixel-perfect Figma implementation</p>
  <div style="margin: 20px 0;">
    <a href="[https://crypto-dashboard-azure-theta.vercel.app/](https://crypto-dashboard-azure-theta.vercel.app/)" target="_blank">
      <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-brightgreen?style=for-the-badge" alt="Live Demo">
    </a>
    <a href="https://github.com/tivivek/crypto-dashboard" target="_blank">
      <img src="https://img.shields.io/badge/📱%20Source%20Code-GitHub-black?style=for-the-badge&logo=github" alt="Source Code">
    </a>
  </div>
</div>

## ✨ **Features**

### 📊 **Interactive Charts**

- **Real-time price visualization** with Recharts library
- **Linear gradient backgrounds** matching Figma design specifications
- **Interactive timeframe controls** (1d, 3d, 1w, 1m, 6m, 1y, max)
- **Volume chart** with animated bars
- **Dotted grid lines** for enhanced readability
- **Price indicators** with precise positioning

### 🎨 **Modern UI/UX**

- **Pixel-perfect Figma implementation** with attention to detail
- **Responsive design** optimized for all devices
- **Smooth animations** and hover effects
- **Professional color scheme** with custom gradients
- **Tab-based navigation** (Summary, Chart, Statistics, Analysis, Settings)

### ⚡ **Performance & Architecture**

- **React 19** with latest features and optimizations
- **Vite 6** for lightning-fast development and builds
- **Custom hooks** for clean state management
- **Modular component architecture** for scalability
- **TypeScript ready** structure for type safety

---

## 🛠️ **Tech Stack**

| Technology       | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| **React**        | 19.1.0  | UI Framework            |
| **Vite**         | 6.3.5   | Build Tool & Dev Server |
| **Tailwind CSS** | 3.4.17  | Styling Framework       |
| **Recharts**     | 2.15.3  | Data Visualization      |
| **Lucide React** | 0.511.0 | Icon Library            |
| **PostCSS**      | 8.5.3   | CSS Processing          |
| **ESLint**       | 9.25.0  | Code Linting            |

---

## 🚀 **Quick Start**

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/crypto-dashboard.git
cd crypto-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Development server (with hot reload)
npm run dev                 # Starts at http://localhost:5173

# Build for production
npm run build              # Creates optimized build in /dist

# Preview production build
npm run preview            # Preview the production build

# Lint code
npm run lint               # Check for code quality issues

# Deploy to GitHub Pages
npm run deploy             # Build and deploy to gh-pages
```

---

## 📁 **Project Structure**

```
crypto-dashboard/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.jsx     # Custom button component
│   │   │   ├── Card.jsx       # Card wrapper component
│   │   │   └── Loading.jsx    # Loading spinner
│   │   ├── Chart/             # Chart-related components
│   │   │   ├── PriceChart.jsx # Main price chart with gradients
│   │   │   ├── VolumeChart.jsx# Volume visualization
│   │   │   └── ChartControls.jsx # Chart control buttons
│   │   ├── Dashboard/         # Dashboard components
│   │   │   ├── CryptoDashboard.jsx # Main dashboard container
│   │   │   ├── PriceDisplay.jsx    # Price and change display
│   │   │   └── NavigationTabs.jsx  # Tab navigation
│   │   └── Layout/            # Layout components
│   │       └── Container.jsx  # Main layout wrapper
│   ├── hooks/                 # Custom React hooks
│   │   ├── usePriceData.js   # Price data management
│   │   └── useLocalStorage.js # Local storage utilities
│   ├── utils/                 # Utility functions
│   │   ├── constants.js      # App constants
│   │   ├── formatters.js     # Number/price formatters
│   │   └── dataGenerators.js # Mock data generation
│   ├── services/             # API services (ready for integration)
│   ├── styles/               # Custom CSS and themes
│   └── main.jsx              # Application entry point
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

---

## 🎨 **Design System**

### Color Palette

```css
Primary: #4B40EE (Purple)
Success: #10B981 (Green)
Background: #F8FAFC (Light Gray)
Gradient: linear-gradient(180deg, #E8E7FF 0%, rgba(255, 255, 255, 0) 100%)
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Sizes**: 12px - 48px with proper line heights
- **Weights**: 400, 500, 600, 700

### Components

- **Consistent spacing** using Tailwind's scale
- **Rounded corners** with 4px-12px radius
- **Shadow system** for depth and hierarchy
- **Animation timing** of 200-300ms for smooth interactions

---

## 📊 **Features Breakdown**

### Dashboard Components

- [x] **Price Display** - Large price with change percentage
- [x] **Navigation Tabs** - Multi-section dashboard
- [x] **Chart Controls** - Timeframe selection buttons
- [x] **Interactive Charts** - Price and volume visualization
- [x] **Responsive Layout** - Mobile-first design

### Chart Features

- [x] **Linear Gradient Fill** - Beautiful area charts
- [x] **Real-time Updates** - Simulated live data
- [x] **Multiple Timeframes** - 7 different time periods
- [x] **Grid Lines** - Dotted horizontal guidelines
- [x] **Price Indicators** - Floating price markers
- [x] **Volume Bars** - Animated volume visualization

### Interactive Elements

- [x] **Hover Effects** - Smooth transitions
- [x] **Active States** - Clear visual feedback
- [x] **Responsive Touch** - Mobile-optimized interactions
- [x] **Loading States** - Smooth data transitions

---

## 🔧 **Configuration**

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Crypto Dashboard
VITE_API_URL=https://api.coingecko.com/api/v3
VITE_APP_VERSION=1.0.0
```

### Customization

The app is highly customizable through:

- **Tailwind configuration** in `tailwind.config.js`
- **Constants file** in `src/utils/constants.js`
- **Theme variables** in CSS files
- **Component props** for easy modifications

---

## 🚀 **Deployment**

### GitHub Pages (Recommended)

```bash
npm run deploy
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts for automatic deployment
```

### Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to netlify.com
# Or connect your GitHub repository for automatic deployments
```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:

- AWS S3 + CloudFront
- Azure Static Web Apps
- Firebase Hosting
- Surge.sh

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📈 **Roadmap**

### Phase 1 (Current)

- [x] Basic dashboard with price display
- [x] Interactive charts with gradients
- [x] Responsive design
- [x] Tab navigation

### Phase 2 (Planned)

- [ ] Real API integration (CoinGecko/CoinMarketCap)
- [ ] Multiple cryptocurrency support
- [ ] Price alerts and notifications
- [ ] Dark/Light theme toggle

### Phase 3 (Future)

- [ ] Portfolio tracking
- [ ] Advanced chart indicators
- [ ] Price prediction AI
- [ ] Social sentiment analysis

---

## 🐛 **Known Issues**

- **Chart responsiveness**: Minor adjustments needed for very small screens
- **Data simulation**: Currently using mock data (ready for real API)
- **Browser compatibility**: Optimized for modern browsers (Chrome 90+, Firefox 88+, Safari 14+)

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 **Author**

**Your Name**

- GitHub: [@tivivek](https://github.com/tivivek/)
- LinkedIn: [Vivek Tiwari](hhttps://www.linkedin.com/in/er-vivektiwari/)

---

## 🙏 **Acknowledgments**

- **Figma Design**: Original design specifications
- **React Team**: For the amazing React 19 features
- **Tailwind CSS**: For the utility-first CSS framework
- **Recharts**: For the beautiful chart library
- **Vite Team**: For the incredibly fast build tool

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
