

# 📱 React Native Demo App

This is a simple React Native application showcasing:

- ✅ Login screen with navigation
- ✅ Item listing fetched from API
- ✅ Detail screen with Redux state handling
- ✅ Navigation using React Navigation
- ✅ TypeScript for type safety
- ✅ Basic unit tests with Jest & React Native Testing Library

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

**For Android:**

```bash
npx react-native run-android
```

**For iOS (Mac only):**

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## 🧪 Running Tests

Run all tests:

```bash
npx jest
```

Run specific test file:

```bash
npx jest __tests__/StoreItem.test.tsx
```

---

## 📁 Project Structure

```
src/
├── components         # Reusable UI components
├── navigation         # Navigation stack configuration
├── redux              # Redux slices and store setup
├── screens            # Login, Home, Detail screens
├── services           # API integration
├── models             # TypeScript interfaces
└── assets             # Style constants, images
__tests__/             # Unit tests
```

---

## ⚡ Notes

* Redux Toolkit for state management
* React Navigation for routing
* Axios or Fetch for API calls
* Uses TypeScript for strong typing
* Data passed through Redux, no navigation params needed for Detail screen

---

