# Xpenzes

A React Native mobile application for tracking shared expenses, managing groups, and splitting bills. Built with Expo and TypeScript.

## Features (Work in Progress)

* **Tab Navigation**: Seamless file-based routing using Expo Router with bottom tabs for **Home**, **Groups**, and **Settings**.
* **Groups Dashboard**: 
  * View a grid list of all your active groups (e.g., Roommates, Trips, Dinner, etc.).
  * Quickly see your balances: "Amount Owed" and "Amount To Pay" for each group.
  * Quick action to navigate to the "Create Group" screen.
* **Settings & Authentication**: Simple settings screen with sign-out functionality integrated with a global auth store.

## Tech Stack

* **Framework**: React Native with [Expo](https://expo.dev/)
* **Routing**: Expo Router (File-based routing)
* **Language**: TypeScript
* **UI & Styling**: React Native `StyleSheet`, `react-native-safe-area-context`, and `@expo/vector-icons`
* **State Management**: Custom global authentication store (`useAuthStore`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npx expo start
   ```
3. Open the app on your physical device using the Expo Go app, or press `i` / `a` to open on an iOS Simulator / Android Emulator.