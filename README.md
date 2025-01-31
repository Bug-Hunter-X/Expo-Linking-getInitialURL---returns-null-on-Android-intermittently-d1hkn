# Expo Linking.getInitialURL() Android Intermittency Issue

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API on Android. The method inconsistently returns `null`, even when a deep link successfully opens the application. This behavior is not observed on iOS.

## Reproduction Steps

1. Clone this repository.
2. Run the Android app.
3. Open a deep link (e.g., from a browser).
4. Observe that `Linking.getInitialURL()` might return `null`, even though the app launched correctly from the deep link.

## Workaround

The provided `bugSolution.js` file demonstrates a potential workaround using the `Linking.addEventListener` approach to listen for deep link events.