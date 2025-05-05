# Code Blitz

Code Blitz is an online multiplayer coding platform for solving Data Structures and Algorithms (DSA) problems. It allows users to compete in real-time, solve coding challenges, and improve their problem-solving skills.

---

## Features

- **Multiplayer Mode**: Compete with other users in real-time.
- **DSA Problems**: Solve a variety of coding challenges with different difficulty levels.
- **Test Cases**: Validate solutions with public and hidden test cases.
- **Code Templates**: Predefined templates for multiple programming languages.
- **Cloud Storage**: Store and manage problem assets using Cloudinary.
- **REST API**: Fetch questions and submit solutions via a robust API.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **File Uploads**: Multer
- **Environment Management**: dotenv
- **Cloud Storage**: Cloudinary

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-blitz.git
   cd code-blitz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017
   CORS_ORIGIN=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Running the Server
- To start the server in development mode:
  ```bash
  npm run dev
  ```


## Folder Structure

```
Code Blitz/
├── src/
│   ├── app.js          # Express app configuration
│   ├── index.js        # Entry point
│   ├── db/             # Database connection
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── controllers/    # Route handlers
│   ├── constants.js    # Constants used across the app
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
```

---


## License

This project is licensed under the ISC License.