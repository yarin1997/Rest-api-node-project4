Node.js Final Project
Overview
This project is a REST API developed using Node.js and various libraries such as Express.js, MongoDB, JWT, and Mongoose. It is designed to handle user management and business card functionalities, allowing registered users to create, edit, and delete content. The API includes role-based access control for regular users, business users, and administrators, providing a range of features based on user privileges.

Features
User Management: Registration, login, editing profiles, changing business status, and deletion of users.
Business Card Management: Creation, editing, and deletion of business cards.
Authorization & Authentication: Uses JWT (JSON Web Tokens) to manage access based on user roles.
Data Validation: Ensures data integrity using the Joi library for input validation.
Security: Passwords are hashed using bcryptjs.
Error Handling: Centralized error handling with morgan and custom error logger.
Cross-Origin Resource Sharing (CORS): Enabled to allow safe API access from other domains.
Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for handling HTTP requests.
MongoDB: NoSQL database for storing users and cards.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
JWT (jsonwebtoken): For secure user authentication.
Bcrypt.js: For hashing and verifying passwords.
Joi: For validating user inputs.
dotenv: For managing environment variables.
chalk: For styled console logs.
morgan: For logging HTTP requests.
cors: For enabling cross-origin resource sharing.
moment.js: For managing and formatting dates.
API Endpoints
User Endpoints
Register: POST /users - Register a new user.
Login: POST /users/login - Login with email and password, returning a token.
Get All Users: GET /users - Admins can retrieve all users.
Get User by ID: GET /users/:id - Retrieve a specific user's details (admin or self).
Edit User: PUT /users/:id - Edit user details (self).
Change Business Status: PATCH /users/:id - Toggle user's business status (self).
Delete User: DELETE /users/:id - Delete a user (self or admin).
Card Endpoints
Get All Cards: GET /cards - Retrieve all cards.
Get User's Cards: GET /cards/my-cards - Retrieve cards created by the logged-in user.
Get Card by ID: GET /cards/:id - Retrieve a specific card by its ID.
Create New Card: POST /cards - Create a new card (business users only).
Edit Card: PUT /cards/:id - Edit a card (owner only).
Like Card: PATCH /cards/:id - Like a card (registered users only).
Delete Card: DELETE /cards/:id - Delete a card (owner or admin).
Error Handling and Logging
morgan logs every request made to the server, including method, URL, status code, and response time.
chalk is used to colorize logs for easier debugging.
Errors with status codes 400 and above are logged in a file under the /logs directory, with logs organized by date.
Setup Instructions
Prerequisites
Node.js (version 14.x or higher)
MongoDB (local or Atlas cloud instance)

Installation
1. Clone the repository:
git clone <repository-url>
cd <repository-directory>

2. Install dependencies:
npm install

3. Create a .env file in the root directory and add the following environment variables:
JWT_SECRET=<your_jwt_secret>
MONGO_URI=<your_mongo_connection_string>
