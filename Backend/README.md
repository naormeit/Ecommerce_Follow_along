## ECommerce Follow Along

## Milestone 3: Project Setup for Backend
In this milestone, the foundational backend structure for the e-commerce application was successfully established. Key achievements include:

**Backend Folder Structure:-** Organized the project into clearly defined folders (config, controller, db, middleware, model, and utility) to ensure scalability and maintainability.

**Database Integration:-** Set up a connection to MongoDB using Mongoose, enabling seamless interaction with the database.

**Environment Configuration-** Implemented a .env file to securely manage sensitive data such as database credentials, ensuring better security practices.

**Middleware Implementation-** Created essential middleware for authentication, error handling, and asynchronous error management to streamline request processing and ensure robust error handling.
**Utility Functions -** Added reusable utility components like a custom error handler to improve consistency and simplify debugging.

**Git Integration-** Configured version control with Git and included a .gitignore file to exclude sensitive files and unnecessary folders like node_modules.

This milestone sets up a solid backend foundation for further development, including API implementation, user authentication, and business logic handling. It ensures that the project is structured, secure, and ready for future expansion.

## Milestone 4: Creating User Model and Controller

In this milestone, the focus was on implementing the user model and controller for managing user data and operations in the backend. Key achievements include:

**User Model:-** Created a User schema using Mongoose to define the structure for storing user information in the MongoDB database.
                - Fields include essential user details such as name, email, password, and timestamps.
                - Added validation for required fields and unique constraints for the email field.

**Password Hashing:-** Implemented password hashing using bcrypt to securely store user passwords in the database.

**User Controller:-** Developed a user controller to handle user-related backend operations such as registration and login.
                    - Added methods for creating new users and retrieving user details.

**API Endpoints:-** Set up API routes for user-related operations, including:
                  - /api/users/register: Endpoint to register a new user.
                  - /api/users/login: Endpoint to authenticate a user.

**Error Handling:-** Added error handling for scenarios such as duplicate email registration and invalid login credentials.

**Git Integration:-** Committed progress to version control, ensuring proper documentation of changes and updates.

This milestone provides the necessary backend infrastructure to manage user data, supporting future features like user authentication and authorization.