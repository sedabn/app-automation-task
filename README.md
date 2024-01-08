# Mobile App Automation Project

## Overview

This project is aimed at automating tests for a mobile application using Appium and WebDriverIO.

## Tools Used

- Appium: An open-source tool for automating mobile applications on Android and iOS platforms.
WebDriverIO: A JavaScript test automation framework that uses WebDriver to interact with browsers and mobile devices.
- Mocha: A JavaScript test framework that runs on Node.js and in the browser, making asynchronous testing simple and fun.
- Chai: A BDD / TDD assertion library for Node.js and the browser.
- Mochawesome Reporter: A custom reporter for Mocha that generates an awesome HTML report.

## Project Structure

- /MyDemoApp.app: Sample open source application to automate the tests on
- /pom: Page Object Model classes for better test structure and maintenance.
- /specs: Contains test scripts written in WebDriverIO.
- /wdio.conf.js: Configuration file for WebDriverIO.
- /reports: Location for generated test reports.


## Getting Started

# Prerequisites

- Install Node.js and npm
- Install Java JDK & setup JAVA_HOME var for Mac
- Install XCode Dev Env
- Download Appium Inspector
- Install Apium
- Install Appium Doctor and Drivers
- Clone the repository:
  * git@github.com:sedabn/app-automation-task.git
- Install dependencies:
  * npm install

# Running Tests

- Run the app
- Add a iPhone 13 Pro Max device in the Appium server
- Run the tests using the following command:
  * npm run wdio

# Viewing Reports

After test execution, the Mochawesome HTML report can be found in the /reports directory.
