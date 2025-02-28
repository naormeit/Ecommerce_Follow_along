# Ecommerce Follow-Along  

## Milestone 1: Project Overview  
In our first milestone, we had an enlightening session where we laid the groundwork for our E-Commerce application. Here are some of the key takeaways:  

**Exploring the MERN Stack**: We kicked things off by understanding the MERN stack—what it is, its components, and why it's such a popular choice for building full-stack applications. The beauty of this stack is that we can write our code in JavaScript throughout, making our development experience smoother and more seamless.

**Diving into REST APIs**: We delved into the world of RESTful APIs, which are crucial for enabling communication between our front-end and back-end. You’ll learn to create various API endpoints to handle essential tasks such as:  
  - **User Authentication**: Helping users register and log in securely.
  - **Product Management**: Adding, updating, and fetching product details.  
  - **Order Handling**: Managing customer orders effortlessly.  

**Understanding Database Schema Design**: We explored the fundamentals of how to organize our data in MongoDB. This part is vital for ensuring our application runs smoothly and efficiently.  

**The Importance of User Authentication**: We discussed how authentication is key in web applications to verify users' identities, allowing them access to specific areas of our app. This ensures that sensitive information and transaction processes remain secure.  
  

## Milestone 2: Project Setup and Login Page
In this milestone, we focused on setting up the initial front-end structure and implementing the login page for the application. Key achievements include:

**Front-End Framework:-** Set up the React framework with Vite for a fast and modern development experience.

**Folder Structure:-** Organized the src folder to include separate directories for components, pages, and assets to improve scalability and maintainability.

**Login Page Implementation:-** Developed a basic login page (Login.jsx) that includes a user interface for email and password input.
  **-** Incorporated validation logic to ensure proper user input.

**Routing:-** Implemented React Router for navigation and created routes for the login and signup pages.

**Styling:-** Added basic styling using CSS (App.css) to ensure a clean and user-friendly design.

**Git Integration:-** Added the new files to version control and committed progress to the GitHub repository.

This milestone lays the groundwork for creating the front-end interface and interaction logic for the application.

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


## Milestone 5: Creating the Signup Page
In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include:

**Signup Page Implementation:-** - Developed the Signup.jsx component with a user-friendly interface for account registration.
                                 - Included form fields for user details such as name, email, and password.

**Form Validation:-** Added client-side validation logic to ensure proper input formatting and error messages for invalid entries.

**Integration with Routing:-** Configured navigation to and from the signup page using React Router for seamless user flow.

**Styling:-** Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience.

**Code Organization:-** Refactored the code into reusable components where possible to promote cleaner and more maintainable code.

This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6: Encrypting Passwords and Storing User Data

In this milestone, the focus was on enhancing the security and data handling during the user registration process. Key achievements include:

**Password Encryption:**  Utilized bcrypt to hash user passwords during the signup process to ensure secure storage.
                      Replaced plain-text password storage with hashed passwords in the database.

**Complete User Data Storage:** Stored all user information, including name, email, and the hashed password, in the database using the User model.
Ensured sensitive data is handled securely and adheres to best practices.

**Validation Enhancements:**  Added additional backend validation to verify that required fields are provided during signup.
                          Prevented duplicate user registrations by ensuring email uniqueness in the database.

**API Integration:**  Updated the registration endpoint (/api/users/register) to handle password hashing and data storage seamlessly.

**Live Coding Walkthrough:** Demonstrated the implementation of these features during a live coding session, explaining the importance of password encryption and secure data handling.

This milestone significantly enhances the application's security by protecting user credentials and laying a solid foundation for authentication and authorization in future milestones.

## Milestone 7: Creating the Login Endpoint

In this milestone, we focused on implementing a secure and efficient login endpoint for user authentication. Key achievements include:

**1. Login Endpoint Creation:** 
  Developed an API endpoint (/api/users/login) to handle user login requests.
  Configured the endpoint to accept user credentials, such as email/username and password.

**2. User Retrieval:**
  Implemented logic to retrieve the corresponding user from the MongoDB database based on the provided email or username.

**3. Password Validation:**
  Utilized bcrypt to compare the hashed password entered by the user with the stored hashed password in the database.
  Ensured that only valid credentials allow user authentication while providing appropriate error messages for invalid inputs.

**4. Error Handling:**
  Added robust error handling to return informative responses for scenarios such as:
    Non-existent users.
    Incorrect passwords.

**5. Security Enhancements:**
  Ensured that sensitive user data, such as passwords, remains protected during the authentication process.
  Followed industry best practices to prevent common vulnerabilities, such as brute force attacks.


This milestone provides the foundation for user authentication, paving the way for implementing session management and token-based authentication in future milestones.

## Milestone 8: Designing the Homepage and Card Component

In this milestone, we focused on creating a visually appealing and functional homepage layout with reusable components for showcasing products. Key achievements include:

**1. Card Component:**
  Designed a reusable card component for displaying product details.
  Configured props to dynamically render product information such as:
    Product Name
    Product Image
    Product Price

**2. Homepage Layout:**
  Set up a clean and responsive homepage layout for displaying multiple product cards.
  Utilized grid layout and flexbox to ensure a visually consistent and user-friendly design.

**3. Component Reusability:**
  Ensured the card component is modular and adaptable for use across different pages of the application.

**4. Code Submission:**
  Pushed the updated code to the GitHub repository.
  Verified that the repository is publicly accessible for evaluation.

## Milestone 9: Creating the Product Form

In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:

**1. Product Form Implementation:**
  Designed and developed a form to capture essential product details, such as:
    Product Name
    Description
    Price
    Category
    Multiple Product Images (file upload support)

**2. Image Upload Handling:**
  Implemented functionality to allow multiple product images to be uploaded.
  Ensured proper validation for image formats and file sizes.

**3. Data Management:**
  Configured state management to handle form inputs efficiently.
  Validated user inputs before submission to ensure accurate product data.

**4. Future Enhancements & Experimentation:**
  Considered additional features for better access control:
  Admin Access: Restrict product creation to admin users only.
  Shop Profiles: Implemented a feature where only users with shop profiles can upload products.
  Enhanced UI/UX: Improved form design for a seamless user experience.
