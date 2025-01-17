# Flashcard SaaS

## Overview

This project is a web application that allows users to create and manage flashcards from text prompts or uploaded PDF files. Utilizing OpenAI's language model, the application generates concise and effective flashcards based on the provided content. Users can also save their flashcards for easy access and management.

## Features

- **AI Flashcard Generation**: The application uses OpenAI's API to generate flashcards based on the provided content (PDF upload or text prompt).
- **User Authentication**: Users can sign in and manage their flashcards securely.
- **Firebase Integration**: Flashcards are stored in a Firebase Firestore database, allowing users to save and retrieve their collections.

## Installation

To set up the project, ensure you have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```
   NEXT_PUBLIC_API_KEY=your_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_APP_ID=your_app_id
   NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. Run the application:

   ```
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Sign in or create an account.

4. Use the text input or upload a PDF file to generate flashcards.

5. Save your flashcards for later use.

## File Descriptions

- **app/api/upload/route.js**: Handles file uploads and generates flashcards from PDF files.
- **app/api/generate/route.js**: Processes text input to generate flashcards using OpenAI.
- **app/api/checkout_session/route.js**: Manages Stripe checkout sessions for subscription payments.
- **app/page.js**: The main landing page of the application.
- **components/FileUpload.js**: Component for handling file uploads.
- **firebase.js**: Initializes Firebase and exports the Firestore database instance.
- **app/generate/page.js**: Page for generating flashcards from user input.
- **app/flashcards/page.js**: Displays all flashcards saved in the user's library.
- **app/flashcard/page.js**: Shows details of a specific flashcard.
- **app/result/page.js**: Displays the result of a Stripe payment.
- **app/sign-in/[[...sign-in]]/page.js**: Sign-in page for user authentication.
- **app/sign-up/[[...sign-up]]/page.js**: Sign-up page for new users.
- **utils/get-stripe.js**: Utility for loading the Stripe.js library.

## Dependencies

- **Next.js**: Framework for building the React application.
- **Firebase**: For user authentication and database management.
- **OpenAI**: For generating flashcards based on user input.
- **Stripe**: For handling subscription payments.
- **Material-UI**: For UI components and styling.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
