# Online Group Study Website (Client-side)

Welcome to the README for the React client-side of our Online Group Study Website project. This project facilitates collaborative learning, assignment management, and user interaction. Below, you'll find essential information about the project and how to set it up.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
4. [Deployment](#deployment)
5. [Contributing](#contributing)
6. [License](#license)

## Project Overview

Our Online Group Study Website is designed to create a collaborative and user-friendly platform for students to work together, manage assignments, and engage in group study sessions. Here's a brief overview of the client-side setup.

## Key Features

### User Authentication and Social Login

- Users can register with their name, photo URL, email, and password through Firebase.
- Seamlessly log in using at least one social login method, such as Google or GitHub.

### Assignment Management

- Create assignments with ease, including title, description, marks, thumbnail image URL, difficulty level (easy, medium, hard), and due date.
- Safely delete assignments, with only the creator allowed to delete their own assignments.
- Update assignment details conveniently, with autofill options for enhanced editing.

### Taking Assignments as an Individual

- Browse assignments and filter them based on difficulty level, even when not logged in.
- View assignment details, including the title, marks, and difficulty level, and take assignments effortlessly.

### Assignment Submission and Grading

- Submit assignments with a PDF link and provide a quick note.
- Grade pending assignments, offering marks, feedback, and the option to change the assignment status to completed.

## Getting Started

To set up and run the client-side of the Online Group Study Website, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.

   ```bash
   cd online-group-study-client
   ```

3. Install project dependencies.

   ```bash
   npm install
   ```

4. Create a `.env` file at the root of the project and configure your Firebase settings for authentication.

   ```dotenv
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server.

   ```bash
   npm start
   ```

6. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Deployment

You can deploy the client-side of this project using various hosting services such as Firebase Hosting, Netlify, or Vercel. Configure the deployment settings according to your chosen hosting platform.

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to this project, please review our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for exploring our Online Group Study Website! Enjoy collaborative learning and efficient assignment management. If you have any questions or feedback, feel free to reach out to us.
