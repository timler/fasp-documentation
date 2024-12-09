# Automated Testing - Frontend

This document serves as a guide for setting up, writing, and running automated tests for our frontend project. It explains the frameworks, tools, and conventions used to ensure consistency and efficiency.

## Table of Contents

1. [Introduction](#introduction)
2. [Test Frameworks and Tools](#test-frameworks-and-tools)
3. [Test Structure and Conventions](#test-structure-and-conventions)
4. [Running Tests](#running-tests)
5. [Writing New Tests](#writing-new-tests)
6. [Code Coverage](#code-coverage)
7. [Continuous Integration (CI) Integration](#continuous-integration-ci-integration)
8. [Troubleshooting](#troubleshooting)
9. [References](#references)

## Introduction

Automated tests are crucial for ensuring our React application's reliability and maintainability. We implement three levels of testing.

### Test Categories

- **Unit Tests**: Test individual functions and classes in isolation.
- **Component Tests**: Test React components and their interactions.
- **E2E Tests**: Simulate complete user workflows (planned for Node.js 18 upgrade)

## Test Frameworks and Tools

### Frontend

- **Vitest**: Unit testing framework.
- **@testing-library/react:**: Component testing library.
- **Cypress**: E2E testing (planned)

### Utilities

- **vi.mock()**: Mocking utility for Vitest.
- **@testing-library/jest-dom**: DOM testing utilities.
- **Istanbul/v8**: Code coverage tools.

## Test Structure and Conventions


```plaintext
project/
├── tests/
│   ├── unit/           # Unit tests
│   │   └── *.test.jsx
│   └── integration/    # Component tests
│       └── *.test.jsx
├── cypress/            # Future E2E tests
│   └── e2e/
└── vitest.config.js

```
# Naming Conventions

- **Test Files**: Should end with `.test.jsx`
- **Test Descriptions**: Should clearly describe the functionality being tested.

## Common Patterns

```jsx
describe('ComponentName', () => {
    beforeEach(() => {
        // Setup code
    });

    test('should perform specific action', () => {
        // Test code
    });
});
```

# Running Tests

## Frontend

- **Run all tests**:
  ```bash
  npm test
  ```

- **Run with coverage**:
  ```bash
  npm run test:coverage
  ```
- **Run in CI mode**:
  ```bash
  npm run test:ci
  ```

## Writing New Tests

### Unit Tests (Vitest)
```jsx
// tests/unit/RealmService.test.jsx
describe('RealmService', () => {
    let service;

    beforeEach(() => {
        service = new RealmService();
    });

    test('should construct URL correctly', () => {
        expect(service.getUrl()).toBe(`${API_URL}/api/realm`);
    });
});
```
### Component Tests (@testing-library/react)
```jsx
// tests/integration/EditRealmComponent.test.jsx
describe('EditRealmComponent', () => {
    const renderComponent = () => {
        return render(
            <Router history={history}>
                <EditRealmComponent {...props} />
            </Router>
        );
    };

    test('loads existing realm data', async () => {
        renderComponent();
        await waitFor(() => {
            expect(document.getElementById('label').value)
                .toBe('ExistingRealm');
        });
    });
});
```


## Code Coverage
We enforce minimum coverage thresholds via Vitest configuration:
```js
// vitest.config.js
export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            thresholds: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80
            }
        }
    }
});
```
## Continuous Integration (CI) Integration
Our CI pipeline automatically:
1. Runs all tests.
2. Generates coverage reports.
3. Fails build if coverage thresholds aren't met

## Troubleshooting

### Common Issues
- **Test Timeouts**: Increase timeout in waitFor.
- **Mock Issues**: Check vi.mock() hoisting.
- **DOM errors**: Verify cleanup between tests.

### Debugging Tips
  ```jsx
  // Add console.log for debugging
test('problematic test', () => {
    console.log('Debug output');
    screen.debug(); // Shows current DOM state
});
  ```
## Future Implementation
### Cypress E2E Tests
- **Note**: Will be implemented after upgrading to Node.js 18 (current version 16 is deprecated)
##### Planned structure:
  ```jsx
// cypress/e2e/realm.cy.js
describe('Realm Management', () => {
    it('creates new realm');
    it('edits existing realm');
    it('lists all realms');
});
  ```

## References
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)

Feel free to extend this documentation as our testing strategy evolves!



