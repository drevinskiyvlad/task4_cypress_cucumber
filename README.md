# AQA Testing Repository with Cypress and Cucumber Framework

## Summary of Repository

This repository is dedicated to Automated Quality Assurance (AQA) testing using the Cypress testing framework with Cucumber integration. It is designed to facilitate end-to-end testing of web applications, providing a structured and easy-to-use framework for writing and executing tests.

## Requirements

Before you begin, ensure you have the following prerequisites installed:

- Node.js: 18.0.0 or higher
- npm (Node Package Manager): npm is included with Node.js installation.

## Steps to Install

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/drevinskiyvlad/task4_cypress_cucumber
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Steps to Launch

   ### Run Tests in Headless Mode
   
   To run tests in headless mode, use the following command:
   
   ```bash
   npm run cypress:run
   ```
   
   ### Run Tests in Interactive Mode
   
   To open the Cypress Test Runner for interactive testing, use:
   
   ```bash
   npm run cypress:open
   ```
   ### Run Tests on Mobile View
   
   To open Cypress Test Runner with mobile configurations, use:
   
   ```bash
   npm run cypress:open:mobile
   ```
   
   ### Run Tests on Tablet View
   To open Cypress Test Runner with tablet configurations, use:
   
   ```bash
   npm run cypress:open:tablet
   ```

## Steps to Creating the Report

1. Run the tests and generate the report:

   ```bash
   npm run report:generate
   ```

2. To view the generated report, use the following command:

   ```bash
   npm run report:open
   ```

This will open the generated HTML report in your default web browser.