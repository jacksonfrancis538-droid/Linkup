# LINKUP Mobile

Native Android and iOS app built with Expo + React Native. It connects to the existing LINKUP Supabase project and does not modify the LINKUP web app or SORTBET NG.

## Setup
1. Install Node.js LTS.
2. Copy `.env.example` to `.env` and set:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY` (publishable key only; never use service-role/secret keys)
3. From this folder run `npm install`, then `npx expo start`.
4. Scan the QR code with Expo Go to preview on a phone.

## Native builds
Install EAS CLI and authenticate with an Expo account, then run `eas build:configure`. Set the Expo project ID in `app.json`, then:
- Android preview APK: `eas build --platform android --profile preview`
- Android Play Store bundle: `eas build --platform android --profile production`
- iOS App Store build: `eas build --platform ios --profile production`

Store submission requires developer accounts, app-store metadata, privacy policy, support contact, and review approval.
