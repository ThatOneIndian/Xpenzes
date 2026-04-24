# Xpenzes

A React Native mobile application for tracking shared expenses, managing groups, and splitting bills. Built with Expo, TypeScript, and Supabase.

## Features (Work in Progress)

* **Authentication & Profiles**: 
  * Google OAuth integration via Supabase with deep linking.
  * Protected app routing (users are securely redirected to sign-in if unauthenticated).
  * Automatic user profile creation upon first login.
* **Tab Navigation**: Seamless file-based routing using Expo Router with custom-icon bottom tabs for **Home**, **Groups**, and **Settings**.
* **Groups Dashboard**: 
  * View a grid list of all your active groups fetched live from the Supabase database.
  * Pull-to-refresh functionality to update your groups on the fly.
  * Displays "Amount Owed" and "Amount To Pay" for each group.
* **Group Management**:
  * "Create Group" flow that securely creates database records and links the user as the first group member.
  * Dynamic routing to individual Group Detail screens (`/group/[id]`) by tapping a group card.
* **Settings**: Simple settings screen with sign-out functionality integrated with a global auth store.

## Tech Stack

* **Framework**: React Native with [Expo](https://expo.dev/)
* **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Row Level Security)
* **Routing**: Expo Router (File-based routing & Dynamic Routes)
* **Language**: TypeScript
* **UI & Styling**: React Native `StyleSheet`, `react-native-safe-area-context`, and `@expo/vector-icons`
* **State Management**: Custom global authentication store (`useAuthStore`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install

2. Set up your environment variables:
   Create a .env.local file in the root directory.
   Add your Supabase credentials:
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url_here
   EXPO_PUBLIC_SUPABASE_KEY=your_supabase_anon_key_here  

3. Start the Expo development server (clearing the cache is recommended):
   ```bash
   npx expo start -c
   (Note: If you are testing on a physical Android device and the app fails to load, use the tunnel flag to bypass local network firewalls: npx expo start --tunnel)
   
4. Open the app on your physical device using the Expo Go app, or press i / a to open on an iOS Simulator / Android Emulator.