# Sufiyan Shahid Portfolio - React + Tailwind + Firebase

This project is a React conversion of the original HTML/CSS/JavaScript portfolio.

## Stack

- React
- Vite
- Tailwind CSS
- React Toastify
- Firebase Firestore

## Run the project

```bash
npm install
npm run dev
```

## Firebase setup

1. Create a Firebase project.
2. Open **Project settings > Your apps > Web app** and copy the Firebase configuration values.
3. Create a `.env` file in the project root using `.env.example` as the template.
4. Paste your Firebase values into the `VITE_FIREBASE_*` variables.
5. In Firebase Console, create a **Cloud Firestore Database**.
6. Publish the rules from `firestore.rules`.
7. Run the app again with `npm run dev`.

The Contact form saves messages into the Firestore collection:

`feedback`

The form validates:

- Full name: minimum 3 characters
- Email: valid email format
- Phone: 10 to 15 digits
- Subject: required
- Message: minimum 10 characters

## Dynamic content

Portfolio content is stored in:

`src/data/portfolioData.js`

You can update profile information, navigation labels, skills, education, projects, services, and social links from that file without rewriting the UI components.
