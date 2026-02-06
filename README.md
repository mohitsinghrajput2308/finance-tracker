# Personal Finance Management & Investment Tracker

A comprehensive web application for managing personal finances, tracking investments, and visualizing financial data. Built with React, Tailwind CSS, and localStorage for data persistence.

![Finance Tracker](https://via.placeholder.com/800x400?text=Finance+Tracker+Screenshot)

## 🌟 Features

### Core Features
- **Dashboard** - Overview of financial status with summary cards and charts
- **Income Management** - Track all income sources with categories
- **Expense Tracking** - Log and categorize all expenses
- **Budget Management** - Set monthly budgets with visual progress tracking
- **Savings Goals** - Create and track progress toward financial goals
- **Transaction History** - View, search, and export all transactions
- **Investment Tracker** - Monitor your investment portfolio with P/L calculations
- **Bill Reminders** - Never miss a payment with bill tracking
- **Financial Calculators** - EMI, SIP, and Compound Interest calculators
- **Reports & Analytics** - Visualize your finances with interactive charts

### UI/UX Features
- 🌙 **Dark/Light Mode** - Full theme support with smooth transitions
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🔔 **Toast Notifications** - Success, error, and warning messages
- 📊 **Interactive Charts** - Pie charts, bar charts, and line charts
- 💾 **Data Persistence** - All data saved to localStorage
- 📤 **Export/Import** - Backup your data to JSON
- 🎨 **Modern UI** - Clean, professional design with animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: Browser localStorage

## 📁 Project Structure

```
finance-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Charts/          # Chart components
│   │   ├── Common/          # Reusable UI components
│   │   ├── Dashboard/       # Dashboard widgets
│   │   └── Layout/          # Layout components
│   ├── context/             # React Context providers
│   ├── data/                # Sample data
│   ├── pages/               # Page components
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Main app with routes
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Demo Credentials
- **Email**: john@example.com
- **Password**: password123

## 📖 Usage Guide

### First Time Setup
1. The app comes with sample data pre-loaded
2. Login with the demo credentials above
3. Explore the dashboard to see your financial overview

### Adding Transactions
1. Go to Income or Expenses page
2. Click "Add Income" or "Add Expense"
3. Fill in the details and save

### Setting Budgets
1. Navigate to the Budgets page
2. Click "Add Budget" for each category
3. Set your monthly spending limit
4. Track your progress as you spend

### Creating Goals
1. Go to the Goals page
2. Click "Add Goal"
3. Set a target amount and deadline
4. Add money to your goal as you save

### Exporting Data
1. Go to Settings
2. Click "Export Data (JSON)"
3. Save the file for backup

## 🎨 Customization

### Changing Theme
- Click the sun/moon icon in the navbar to toggle dark/light mode
- Theme preference is saved automatically

### Currency & Date Format
1. Go to Settings
2. Select your preferred currency (₹, $, €, £)
3. Choose your date format
4. Click "Save Settings"

## 📊 Component Hierarchy

```
App
├── ThemeProvider
├── NotificationProvider
├── AuthProvider
├── FinanceProvider
└── Routes
    ├── Login
    ├── Register
    └── Layout (Protected)
        ├── Sidebar
        ├── Navbar
        └── Pages
            ├── Dashboard
            ├── Income
            ├── Expenses
            ├── Budgets
            ├── Goals
            ├── Transactions
            ├── Reports
            ├── Investments
            ├── Bills
            ├── Calculators
            ├── Categories
            ├── Settings
            └── Help
```

## 🔑 localStorage Keys

| Key | Description |
|-----|-------------|
| `finance_users` | User accounts |
| `finance_currentUser` | Currently logged in user |
| `finance_transactions` | All income and expense records |
| `finance_budgets` | Budget configurations |
| `finance_goals` | Savings goals |
| `finance_investments` | Investment portfolio |
| `finance_bills` | Bill reminders |
| `finance_categories` | Custom categories |
| `finance_theme` | Theme preference |
| `finance_settings` | App settings |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as a college project.

## 👨‍💻 Author

Created as a college project for Personal Finance Management.

---

**Note**: This application uses browser localStorage for data persistence. For production use, consider implementing a proper backend database.
