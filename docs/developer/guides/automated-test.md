# Automated Testing

This document serves as a guide for setting up, writing, and running automated tests for our project. It explains the frameworks, tools, and conventions used to ensure consistency and efficiency.

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

Automated tests are a crucial part of our development workflow to ensure code quality and stability. We use a combination of unit tests, integration tests, and end-to-end (E2E) tests to cover all aspects of the application.

### Test Categories

- **Unit Tests**: Validate individual methods and classes.
- **Integration Tests**: Test how different components interact.
- **E2E Tests**: Simulate user interactions and workflows.

## Test Frameworks and Tools

### Backend

- **JUnit**: Unit testing framework for Java.
- **Testcontainers**: Manages containerized dependencies (e.g., databases) for integration tests.
- **JaCoCo**: Tracks code coverage.

### Utilities

- **Maven Surefire Plugin**: Runs unit and integration tests.
- **JaCoCo Maven Plugin**: Measures test coverage.

## Test Structure and Conventions

The tests are organized into different categories based on their scope:

```plaintext
src/
  main/
    java/        # Application code
  test/
    java/
        cc/
          altius/
            FASP       # Unit and integration tests

```
# Naming Conventions

- **Test Classes**: Test classes should end with `Test` (e.g., `UserServiceTest`).
- **Test Methods**: Test methods should be descriptive (e.g., `shouldReturnUserById`).

## Annotations (JUnit)

- `@Test`: Marks a method as a test.
- `@BeforeAll` / `@BeforeEach`: Setup methods that run before tests.
- `@AfterAll` / `@AfterEach`: Cleanup methods that run after tests.

---

# Running Tests

## Backend

- **Run all tests**:
  ```bash
  mvn clean test
  ```

- **Run specific test class**:
  ```bash
  mvn -Dtest=UserServiceTest test
  ```
- **Run integration tests**:
  ```bash
  mvn verify
  ```

## Writing New Tests

### Backend (JUnit)
1. Create a test class in `src/test/java`.
2. Use mocks (e.g., with Mockito) to isolate components.

#### Example:
```java
@Test
public void shouldReturnUserById() {
    when(userRepository.findById(1)).thenReturn(Optional.of(new User(1, "John Doe")));
    User result = userService.getUserById(1);
    assertEquals("John Doe", result.getName());
}
```
## Code Coverage
We aim for **10% coverage** as the minimum threshold. Ensure your tests cover:
- Edge cases
- Error handling
- Key workflows

### To enforce coverage thresholds:
Configure JaCoCo in `pom.xml`:
```xml
<rules>
  <rule>
    <element>CLASS</element>
    <limits>
      <limit>
        <counter>LINE</counter>
        <value>COVEREDRATIO</value>
        <minimum>0.10</minimum>
      </limit>
    </limits>
  </rule>
</rules>
```
## Continuous Integration (CI) Integration
Our CI pipeline (Jenkins/GitHub Actions) automatically runs tests on every push/PR.

### Steps:
1. Run tests: Backend and frontend tests.
2. Generate coverage reports: Both JaCoCo and frontend reports.
3. Fail build on low coverage.

## Troubleshooting

### Common Issues
- **Testcontainers not starting**: Verify Docker is running and accessible.

### Debugging Tips
- Use `mvn -X` for verbose logs.
- For flaky tests, isolate and re-run:
  ```bash
  mvn -Dtest=FlakyTest test
  ```

## References
- [JUnit 5 Documentation](https://junit.org/junit5/docs/current/user-guide/)
- [Testcontainers](https://www.testcontainers.org/)
- [JaCoCo Maven Plugin](https://www.jacoco.org/)

Feel free to extend this documentation as our testing strategy evolves!



