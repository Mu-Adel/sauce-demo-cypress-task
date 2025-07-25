# Sauce Demo Cypress Test Suite

This project contains a comprehensive Cypress end-to-end test suite for the Sauce Labs demo website (https://www.saucedemo.com). The tests are written in TypeScript using the Page Object Model pattern and automate a complete e-commerce checkout flow with three randomly selected items.

## 🎯 Test Scope

The test suite covers:
- User login functionality
- Product selection (3 random items from available inventory)
- Shopping cart management
- Checkout process (information form, overview, completion)
- Order total calculation validation
- Success confirmation

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**
- **Git** (for cloning the repository)

## 📦 Dependencies

The project uses the following key dependencies:

### Core Testing Framework
- **Cypress** (v14.5.2) - End-to-end testing framework
- **TypeScript** (v5.8.3) - Type-safe JavaScript development

### Reporting & Formatting
- **cypress-mochawesome-reporter** (v4.0.0) - HTML test report generation
- **Prettier** (v3.6.2) - Code formatting

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify Cypress installation: (optional)**
   ```bash
   npx cypress verify
   ```

## 🏃‍♂️ Running Tests

### Headless Mode (CI/CD friendly)
```bash
# Run all tests in Chrome headless mode
npm test

# Alternative: Direct Cypress command
npx cypress run

# Run with specific browser
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Interactive Mode (Development)
```bash
# Open Cypress Test Runner
npm run cypress:open

# Alternative: Direct Cypress command
npx cypress open --e2e
```


## 📁 Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── saucedemo.cy.ts          # Main test file
│   ├── fixtures/
│   │   └── credentials.json         # Test data (login credentials)
│   ├── pages/                       # Page Object Model files
│   │   ├── BasePage.ts             # Base page class
│   │   ├── LoginPage.ts            # Login page selectors/methods
│   │   ├── ProductsPage.ts         # Products page selectors/methods
│   │   ├── CartPage.ts             # Shopping cart page
│   │   ├── CheckoutInfoPage.ts     # Checkout information form
│   │   ├── CheckoutOverviewPage.ts # Order review page
│   │   ├── CheckoutCompletePage.ts # Order confirmation page
│   │   └── index.ts                # Page exports
│   ├── reports/
│   │   └── html/                   # Generated HTML reports
│   └── support/
│       ├── commands.ts             # Custom Cypress commands
│       └── e2e.ts                  # Global test configuration
├── cypress.config.ts               # Cypress configuration
├── package.json                    # Project dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
└── types.d.ts                      # TypeScript type declarations
```

## 🧪 Test Architecture

### Page Object Model (POM)
The test suite implements the Page Object Model pattern for better maintainability:

### Custom Commands
Located in `cypress/support/commands.ts`:
- `cy.login()` - Automated login using fixture data

### Test Data Management
- Credentials stored in `cypress/fixtures/credentials.json`
- Default user: `standard_user` / `secret_sauce`

## 📊 Test Reports

### HTML Reports
After running tests, detailed HTML reports are generated using Mochawesome:

**Location:** `cypress/reports/index.html`

**Features:**
- Test execution summary with pass/fail counts
- Detailed test case breakdown
- Embedded screenshots for failures
- Execution timeline and duration


### Video Recording
Cypress automatically records videos of test runs in headless mode:
- **Location:** `cypress/videos/`
- **Format:** MP4

### Screenshots
Screenshots are captured automatically on test failures:
- **Location:** `cypress/screenshots/`
- **Format:** PNG
- **Naming:** `{test-file}/{test-name} (failed).png`
- **Retention:** Failed tests only (configurable)


## 🔍 Code Quality

### Formatting
```bash
# Format all TypeScript files using Prettier
npm run format
```

### Best Practices Implemented
- Page Object Model for maintainability
- TypeScript for type safety
- Custom commands for reusability
- Fixture-based test data management
- Detailed reporting and logging

## 📝 Notes

- Screenshots are captured for failed tests only
- Reports are overwritten on each test run
