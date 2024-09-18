# Text Editor PWA

## Description

This project is a browser-based text editor designed as a Progressive Web Application (PWA). It allows users to create notes or code snippets, functioning both online and offline. The application employs various data persistence techniques to ensure reliability and redundancy, making it ideal for developers and anyone needing a simple note-taking tool.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Features

- **Offline Capability**: The application functions without an internet connection.
- **Data Persistence**: Utilizes IndexedDB to store user data, with automatic saving when the editor loses focus.
- **Service Worker**: Implements a service worker for caching static assets, enhancing performance and offline accessibility.
- **User-Friendly Interface**: A clean and intuitive interface for easy navigation and editing.

## Installation

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:schneibley/HW19-TextEditor-PWA.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd HW19-TextEditor-PWA
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the application**:
   ```bash
   npm run start
   ```

## Usage

- Open the application in your browser.
- Create and edit notes or code snippets.
- Content will automatically save when you click outside the text editor.
- Reopen the application to retrieve saved content.

## Deployment

The application is deployed on Render. Access it via the following link:

[Deployed Application URL](https://hw19-texteditor-pwa.onrender.com)

## Screenshots


- **Manifest File**: ![Manifest file](https://github.com/user-attachments/assets/02c9ef65-b1be-4ec5-a479-f719ece076f9)

- **Service Worker**: ![Service Worker](https://github.com/user-attachments/assets/9d3385c2-19e2-436e-9c6f-326a92e7561b)

- **IndexedDB Storage**: ![IndexedDB Storage](https://github.com/user-attachments/assets/c4f1bfd2-ce62-4aee-882d-93c46ee1d5cc)


 Feel free to explore, use, and modify the code as needed! If you have any questions, don't hesitate to reach out.
