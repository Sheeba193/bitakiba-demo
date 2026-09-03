# 💰 BitAkiba Demo

> A simpler MVP prototype demonstrating the core BitAkiba value proposition: receive payments, auto-save, connect wallets, manage locked savings, switch languages, and upgrade to premium.

[![JavaScript](https://img.shields.io/badge/JavaScript-Latest-yellow.svg)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()

---

## 📋 Table of Contents

- [Overview](#-overview)
- [MVP Features](#-mvp-features)
- [Key Value Proposition](#-key-value-proposition)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Core Features](#-core-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [User Workflows](#-user-workflows)
- [Development](#-development)
- [Deployment](#-deployment)
- [API Integration](#-api-integration)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

**BitAkiba Demo** is a streamlined, MVP-focused prototype that showcases the essential features and user flows of the BitAkiba application.

**What This Demo Includes:**
- ✨ Receive payments with payment codes
- 💰 Auto-save functionality
- 🔐 Wallet connection management
- 🏦 Locked savings management
- 🌍 Multi-language support
- ⭐ Premium upgrade path

**Demo Focus:**
This is a simplified version designed for user testing, investor pitches, and rapid iteration. It focuses on core user interactions without full backend infrastructure.

---

## ✨ MVP Features

| Feature | Description | Status |
|---------|-------------|--------|
| 💳 **Receive Payments** | Accept payments with unique payment codes | ✅ Implemented |
| 💰 **Auto-Save** | Automatically save portion of received payments | ✅ Implemented |
| 🔗 **Connect Wallets** | Link external cryptocurrency wallets | ✅ Implemented |
| 🏦 **Locked Savings** | Time-locked savings accounts for goals | ✅ Implemented |
| 🌐 **Language Switching** | Easy language preference switching | ✅ Implemented |
| ⭐ **Premium Upgrade** | Upgrade to premium features flow | ✅ Implemented |
| 📱 **Mobile Responsive** | Optimized for mobile devices | ✅ Implemented |
| 🎨 **Modern UI** | Clean, intuitive user interface | ✅ Implemented |

---

## 🎁 Key Value Proposition

### Problem Solved
**Underserved populations lack simple, secure financial tools.**

### BitAkiba Solution
✅ **Simple** - Intuitive interface anyone can use  
✅ **Secure** - Cryptocurrency-backed security  
✅ **Accessible** - Works with minimal connectivity  
✅ **Flexible** - Multiple savings and payment options  
✅ **Inclusive** - Available in African languages  

### Core User Benefits
1. 🛡️ **Security** - Control your own money
2. 🚀 **Speed** - Instant payments via Lightning Network
3. 💡 **Simplicity** - No banking complexity
4. 🌍 **Accessibility** - Works everywhere
5. 💪 **Empowerment** - Financial independence

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI library | 18+ |
| **JavaScript** | Programming language | ES6+ |
| **HTML5** | Markup | Latest |
| **CSS3** | Styling | Latest |

### State Management

| Tool | Purpose |
|------|---------|
| **React Hooks** | State management |
| **Context API** | Global state |
| **Local Storage** | Client-side persistence |

### Build & Development

| Tool | Purpose |
|------|---------|
| **npm/yarn** | Package management |
| **Webpack** | Module bundler |
| **Babel** | JavaScript compiler |

### Styling

| Approach | Purpose |
|----------|---------|
| **CSS Modules** | Component styling |
| **Bootstrap/Tailwind** | UI framework (optional) |
| **Responsive Design** | Mobile-first approach |

---

## 📁 Project Structure

```
bitakiba-demo/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       ├── logos/
│       └── icons/
│
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── PaymentCard.jsx
│   │   ├── SavingsVault.jsx
│   │   ├── WalletConnect.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── PremiumUpgrade.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/                   # Page components
│   │   ├── Dashboard.jsx
│   │   ├── ReceivePayment.jsx
│   │   ├── Savings.jsx
│   │   ├── Wallets.jsx
│   │   ├── Settings.jsx
│   │   ├── Premium.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/                  # CSS files
│   │   ├── App.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── responsive.css
│   │
│   ├── utils/                   # Utility functions
│   │   ├── api.js
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   └── validators.js
│   │
│   ├── locales/                 # i18n translation files
│   │   ├── en.json
│   │   ├── sw.json
│   │   └── am.json
│   │
│   ├── context/                 # React Context
│   │   ├── AuthContext.jsx
│   │   ├── PaymentContext.jsx
│   │   └── LanguageContext.jsx
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

## 🚀 Quick Start

### Prerequisites

```
✓ Node.js v14 or higher
✓ npm or yarn package manager
✓ Git
✓ Modern web browser
```

### Installation

**Step 1:** Clone the repository
```bash
git clone https://github.com/Sheeba193/bitakiba-demo.git
cd bitakiba-demo
```

**Step 2:** Install dependencies
```bash
npm install
# or
yarn install
```

**Step 3:** Start development server
```bash
npm start
# or
yarn start
```

✅ Application opens at `http://localhost:3000`

---

## 🎯 Core Features

### 1. Receive Payments

**User Flow:**
```
Dashboard
    ↓
Click "Receive"
    ↓
Generate Payment Code
    ↓
Share Code (Copy/QR)
    ↓
View Payment Status
```

**Features:**
- Generate unique payment codes
- Display QR code for mobile scanning
- Copy payment link to clipboard
- Real-time payment status
- Transaction history

### 2. Auto-Save

**How It Works:**
```
Receive Payment
    ↓
Apply Auto-Save Rule (%)
    ↓
Split Payment
    ↓
Main Account + Savings Account
```

**Customization:**
- Set auto-save percentage (5% - 100%)
- Choose savings destination
- View savings growth
- Pause/resume auto-save

### 3. Connect Wallets

**Supported Wallets:**
- MetaMask
- Coinbase Wallet
- Ledger
- Trust Wallet
- Hardware wallets

**Features:**
- One-click wallet connection
- Multiple wallet management
- Balance display
- Transaction history
- Wallet settings

### 4. Locked Savings

**Savings Goals:**
```
Set Goal
    ↓
Define Lock Period
    ↓
Add Funds
    ↓
Track Progress
    ↓
Claim When Ready
```

**Types:**
- Time-locked savings
- Goal-based savings
- Emergency fund
- Custom goals

**Features:**
- Set lock duration
- Automatic withdrawal prevention
- Interest accrual (future)
- Goal progress tracking
- Early withdrawal penalties

### 5. Language Support

**Available Languages:**
| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Swahili | `sw` | ✅ Complete |
| Amharic | `am` | 🔄 In Progress |

**Implementation:**
- Easy language switcher
- Persistent language preference
- RTL support ready
- Currency localization

### 6. Premium Upgrade

**Upgrade Flow:**
```
Dashboard
    ↓
View Premium Features
    ↓
Click "Upgrade"
    ↓
Choose Plan
    ↓
Complete Payment
    ↓
Unlock Premium Features
```

**Premium Features:**
- ⭐ Advanced analytics
- 🔐 Enhanced security
- 📊 Detailed reports
- 🎁 Rewards program
- 📱 Mobile app priority
- 🆘 Premium support

---

## 💻 Installation

### Full Setup Guide

**1. Prerequisites Installation**
```bash
# Install Node.js from https://nodejs.org
# Verify installation
node --version
npm --version
```

**2. Clone Repository**
```bash
git clone https://github.com/Sheeba193/bitakiba-demo.git
cd bitakiba-demo
```

**3. Install Dependencies**
```bash
npm install
```

**4. Environment Setup**
```bash
# Create environment file
cp .env.example .env.local

# Edit .env.local with your settings
```

**5. Run Application**
```bash
npm start
```

**6. Build for Production**
```bash
npm run build
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3001

# Environment
REACT_APP_ENV=development

# Features
REACT_APP_ENABLE_DEMO_MODE=true
REACT_APP_ENABLE_WALLET_CONNECT=true

# Blockchain (if using Web3)
REACT_APP_INFURA_KEY=your_infura_key
REACT_APP_NETWORK_ID=1
```

### Production Configuration

```env
REACT_APP_API_URL=https://api.bitakiba.com
REACT_APP_ENV=production
REACT_APP_ENABLE_DEMO_MODE=false
```

### Build Configuration

Edit `package.json`:

```json
{
  "name": "bitakiba-demo",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://bitakiba.com",
  "proxy": "http://localhost:3001"
}
```

---

## 👥 User Workflows

### New User Onboarding

```
1. Landing Page
   ↓
2. Sign Up / Create Account
   ↓
3. Verify Email/Phone
   ↓
4. Complete Profile
   ↓
5. View Dashboard
```

### Payment Reception Workflow

```
1. Dashboard → "Receive Payment"
2. Generate Payment Code
3. Share with Payer
4. Monitor Payment Status
5. Confirm Receipt
6. Auto-save triggered (if enabled)
```

### Savings Setup Workflow

```
1. Savings Vault → "Create Goal"
2. Set Target Amount
3. Define Lock Period
4. Choose Auto-save % (optional)
5. Start Saving
6. Track Progress
```

### Wallet Connection Workflow

```
1. Settings → "Connect Wallet"
2. Select Wallet Type
3. Authorize Connection
4. Verify Wallet
5. View Balance
6. Manage Transactions
```

### Premium Upgrade Workflow

```
1. Settings → "Upgrade to Premium"
2. Review Features
3. Select Plan
4. Process Payment
5. Instant Activation
6. Access Premium Features
```

---

## 🧪 Development

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

### Development Best Practices

- ✅ Use functional components with hooks
- ✅ Maintain component modularity
- ✅ Add PropTypes for type checking
- ✅ Write meaningful comments
- ✅ Test user flows regularly
- ✅ Keep UI responsive

### Debugging

**React Developer Tools:**
```
Install browser extension for React debugging
```

**Browser Console:**
```javascript
// Check state
console.log(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)

// Local storage
localStorage.getItem('bitakiba-user')
```

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop 'build' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t bitakiba-demo:latest .
docker run -p 3000:3000 bitakiba-demo:latest
```

---

## 🔌 API Integration

### Current Status
- 🔄 Mock data for demo
- 🔄 Local storage for persistence
- 📋 Backend integration ready

### Mock API Structure

```javascript
// Example mock payment API
const mockPaymentAPI = {
  generatePaymentCode: () => ({
    code: 'PAY_123456',
    qrCode: 'data:image/png...',
    expiresAt: '2026-09-15'
  }),
  
  getPaymentStatus: (code) => ({
    status: 'pending',
    amount: 1000,
    currency: 'USD'
  })
};
```

### Connecting Real APIs

**Step 1:** Replace mock calls
```javascript
// Old: mockPaymentAPI.generatePaymentCode()
// New: await paymentAPI.generatePaymentCode()
```

**Step 2:** Add real endpoints
```javascript
const paymentAPI = {
  generatePaymentCode: async () => {
    const response = await fetch('/api/payments/generate');
    return response.json();
  }
};
```

---

## 🧪 Testing

### Unit Testing

```bash
npm test
```

### Testing Framework
- Jest (testing framework)
- React Testing Library (component testing)

### Example Test

```javascript
import { render, screen } from '@testing-library/react';
import Dashboard from './pages/Dashboard';

test('renders dashboard with welcome message', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
```

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Safari iOS | 12+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |

---

## 🔒 Security & Best Practices

### Security Measures
- ✅ Input validation on all forms
- ✅ XSS protection
- ✅ Environment variables for secrets
- ✅ HTTPS enforced in production
- ✅ Secure local storage usage

### Code Quality
- ✅ ESLint for code standards
- ✅ Prettier for code formatting
- ✅ PropTypes for type checking
- ✅ Git pre-commit hooks

---

## 🤝 Contributing

We welcome contributions! Here's how:

**1. Fork the Repository**
```bash
git clone https://github.com/Sheeba193/bitakiba-demo.git
```

**2. Create Feature Branch**
```bash
git checkout -b feature/YourFeatureName
```

**3. Make Changes**
- Add new features
- Fix bugs
- Improve documentation
- Enhance UI/UX

**4. Commit Changes**
```bash
git commit -m "Add: Description of changes"
```

**5. Push to Branch**
```bash
git push origin feature/YourFeatureName
```

**6. Open Pull Request**

### Code Guidelines
- Follow React conventions
- Use functional components
- Write clear comments
- Test your changes
- Include translations
- Maintain responsive design

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🐛 Support & Issues

### Report a Bug

Open an [Issue](https://github.com/Sheeba193/bitakiba-demo/issues) with:
- Clear description
- Steps to reproduce
- Screenshots
- Environment details

### Ask Questions

Use [GitHub Discussions](https://github.com/Sheeba193/bitakiba-demo/discussions) for:
- General questions
- Ideas and feedback
- User testing reports

---

## 👤 About

**Creator:** Bathseba Kerubo Kengere  
**GitHub:** [@Sheeba193](https://github.com/Sheeba193)  
**Email:** 116869315+Sheeba193@users.noreply.github.com

---

## 📝 Project Roadmap

### Phase 1: MVP Demo ✅
- [x] Core UI implementation
- [x] Payment receive flow
- [x] Auto-save functionality
- [x] Wallet connection UI
- [x] Locked savings UI
- [x] Language switching
- [x] Premium upgrade flow

### Phase 2: API Integration 🔄
- [ ] Backend API connection
- [ ] Real payment processing
- [ ] User authentication
- [ ] Data persistence
- [ ] Transaction history

### Phase 3: Enhanced Features 📋
- [ ] Analytics dashboard
- [ ] Advanced security
- [ ] More languages
- [ ] Push notifications
- [ ] Mobile app

### Phase 4: Production 📋
- [ ] Performance optimization
- [ ] Security audit
- [ ] User testing
- [ ] Launch preparation

---

<div align="center">

**Made with ❤️ for financial empowerment**

*Last updated: September 2, 2026*

[GitHub](https://github.com/Sheeba193/bitakiba-demo) | [Issues](https://github.com/Sheeba193/bitakiba-demo/issues) | [Discussions](https://github.com/Sheeba193/bitakiba-demo/discussions)

💰 **Enable Financial Inclusion with BitAkiba** ⚡

</div>
