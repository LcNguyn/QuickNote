# QuickNote

A React Native note-taking application built with Expo and TypeScript.

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/5bb89fb5-c5ad-4322-b74e-fbbf72e1886a" />

## 📱 Features

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/9d22fd62-33e5-47db-bc73-4c24a9491ee6" width="200px;" alt="image 1" />
      <br />
    </td>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/bc8325b7-2c0a-4ce4-b210-066561bb6f01" width="200px;" alt="image 4" />
      <br />
    </td>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/33cadf9d-f29f-4ddc-94c0-75b5e6cfb182" width="200px;" alt="image 3" />
      <br />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/de1454df-19ee-4fae-8724-1af4e38d2d08" width="200px;" alt="image 2" />
      <br />
    </td>
  </tr>
</table>



- Create/delete a note across different categories
- Delete all notes
- Beautiful gradient UI with custom themes
- Tab-based navigation with home, summary, settings and add note screens
- Redux state management with persistent storage
- Custom fonts and icons
- Cross-platform support (iOS & Android)

## 📱 Additional Features (not in the requirements)
<table>
  <tr>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/fb87b610-32b5-4c9d-a620-9a206a6a9924" width="200px;" alt="image 2" />
      <br />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c8cf8e3d-9b77-4b45-a6e6-f26fc1e408a3" width="200px;" alt="image 1" />
      <br />
    </td>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/fdb14bbf-2f79-40db-9d07-c2138106d8bf" width="200px;" alt="image 4" />
      <br />
    </td>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/6d7a2236-f71e-40a0-abb9-b9c7f4a8b183" width="200px;" alt="image 3" />
      <br />
    </td>
     <td align="center">
      <img src="https://github.com/user-attachments/assets/54c4da81-f09d-4b7c-abd0-600ede14c4a2" width="200px;" alt="image 3" />
      <br />
    </td>
 
  </tr>
</table>

- Theme colors, fonts, styling setup
- Auto seed data for testing purpose
- Flexible, reusable modal
- Pressing a note opens a modal showing the note detail
- Delete the note by pressing the button in the modal
- Add note screen has a message showing number of the remain characters the user can input
- Delete all notes has a confirm modal for user to double check their decision


## 🚀 Runtime Environment & SDK Versions

### Core Framework

- **React Native**: 0.81.5
- **React**: 19.1.0
- **Expo SDK**: ~54.0.27
- **TypeScript**: ~5.9.2

### Navigation

- **@react-navigation/native**: ^7.1.25
- **@react-navigation/bottom-tabs**: ^7.8.12
- **@react-navigation/native-stack**: ^7.8.6
- **expo-router**: ~6.0.19

### State Management & Storage

- **@reduxjs/toolkit**: ^2.11.1
- **react-redux**: ^9.2.0
- **@react-native-async-storage/async-storage**: 2.2.0

### UI Components & Graphics

- **expo-linear-gradient**: ~15.0.8
- **react-native-svg**: 15.12.1
- **@expo/vector-icons**: ^15.0.3
- **expo-blur**: ~15.0.8
- **react-native-dropdown-picker**: ^5.4.6
- **react-native-toast-message**: ^2.3.3

### Platform & Device APIs

- **expo-constants**: ~18.0.12
- **expo-linking**: ~8.0.10
- **expo-status-bar**: ~3.0.9
- **react-native-safe-area-context**: ~5.6.0
- **react-native-screens**: ~4.16.0
- **@react-native-masked-view/masked-view**: ^0.3.2

### Development Tools

- **@types/react**: ~19.1.0
- **@react-native-picker/picker**: 2.11.1

## 🛠️ Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio & Android SDK (for Android development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd QuickNote
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator

## 🏗️ Project Structure

```
QuickNote/
├── .expo/                 # Expo development cache
├── .git/                  # Git version control
├── .vscode/               # VS Code settings
├── app/                   # App routing (expo-router)
│   ├── (tabs)/           # Tab-based screens
│   │   ├── add-note.tsx  # Add note screen
│   │   ├── index.tsx     # Home screen
│   │   ├── settings.tsx  # Settings screen (tab)
│   │   ├── summary.tsx   # Summary screen
│   │   └── _layout.tsx   # Tabs layout
│   └── _layout.tsx       # Root layout
├── src/                  # Source code
│   ├── components/       # Reusable components
│   ├── config/          # Configuration files
│   ├── context/         # React contexts
│   ├── hooks/           # Custom hooks
│   ├── redux/           # Redux store & slices
│   ├── screens/         # Screen components
│   ├── storage/         # Storage utilities
│   └── types/           # TypeScript type definitions
├── assets/              # Static assets
│   ├── fonts/          # Custom fonts (PingFang)
│   ├── icons/          # App icons and tab icons
│   ├── icon.png        # App icon
│   ├── splash-icon.png # Splash screen icon
│   └── adaptive-icon.png # Android adaptive icon
├── theme/              # Theme configuration
├── node_modules/       # Dependencies
├── app.json           # Expo configuration
├── package.json       # Package configuration
├── tsconfig.json      # TypeScript configuration
├── yarn.lock          # Yarn lock file
└── README.md          # Project documentation
```

## 🎨 Key Technologies

- **File-based Routing**: Using Expo Router for intuitive navigation
- **Custom Theming**: Centralized theme system with gradient backgrounds
- **Redux Toolkit**: Modern Redux with async thunks and RTK Query
- **TypeScript**: Full type safety throughout the application
- **Custom Fonts**: PingFang font family integration
- **SVG Icons**: Custom SVG components for better performance

## 📱 Supported Platforms

- iOS (iPhone & iPad)
- Android (Phone & Tablet)

## 🔧 Configuration

The app uses Expo's managed workflow for easier development and deployment. Configuration can be found in:

- `app.json` - Expo configuration
- `tsconfig.json` - TypeScript configuration
- `metro.config.js` - Metro bundler configuration (if present)

---

_Built with ❤️ using React Native and Expo_
