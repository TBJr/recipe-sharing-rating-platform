
# Recipe Sharing and Rating Platform

Welcome to the **Recipe Sharing and Rating Platform**! This platform allows users to share their favorite recipes, explore new ones, and rate and review recipes shared by others. It's built to foster a community of food enthusiasts and home cooks.

## 🚀 Features

- **Recipe Submission**: Submit your own recipes with detailed instructions, ingredients, and images.
- **Recipe Search and Filter**: Find recipes easily by cuisine, difficulty, or ingredients.
- **Ratings and Reviews**: Share your experience with recipes by rating and commenting.
- **Real-Time Updates**: See newly added recipes in real-time.
- **User Authentication**: Log in to save your favorite recipes and submit your own.

## 🛠 Tech Stack

### Frontend
- **HTML**
- **CSS**
- **JavaScript**
- **React** (for dynamic content and user interaction)

### Backend
- **Firebase Firestore**: For storing recipes, ratings, and user data.
- **Firebase Authentication**: For secure user login and registration.

### Hosting
- **GitHub Pages**: Host the platform and make it publicly accessible.

## 📂 Project Structure

```
recipe-sharing-rating-platform/
│
├── src/
│   ├── components/      # React components
│   ├── pages/           # Main application pages
│   ├── assets/          # Images and static assets
│   └── utils/           # Helper functions
│
├── public/              # Static files
├── firebase.json        # Firebase configuration
├── .gitignore           # Files to be ignored by Git
├── README.md            # Project documentation
└── package.json         # Project dependencies
```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TBJr/recipe-sharing-rating-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-sharing-rating-platform
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## 🔥 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add Firestore to your project for storing recipes and user data.
3. Set up Firebase Authentication for user login.
4. Add your Firebase configuration details to the project (in `src/utils/firebaseConfig.js`).

## 🌐 Live Demo

Visit the live platform: [Recipe Sharing and Rating Platform](https://tbjr.github.io/recipe-sharing-rating-platform)

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to improve the platform.

---

🎉 Happy cooking and sharing!