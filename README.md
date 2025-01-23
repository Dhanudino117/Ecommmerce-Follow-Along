# E-Commerce Application: Milestone 1

Welcome to the Follow Along Project: Milestone 1! This project marks the beginning of an exciting journey to build a full-fledged E-Commerce Application from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

---


## Project Description
This project is designed to provide hands-on experience with real-world development concepts and tools. Through this journey, you will learn to build an e-commerce application that demonstrates the functionalities of a complete MERN stack application, including user authentication, product management, and order handling. By leveraging JavaScript throughout, the project ensures streamlined and efficient development across both the frontend and backend.

---

## Milestone 1:
In this milestone, we will:
- Gain an understanding of the overall structure of a MERN stack project.
- Learn the foundational steps for setting up a new project repository.
- Explore the functionalities of an e-commerce application.
- Witness a live demonstration of the completed application to understand its functionality, user interface, and backend integration.

---

## Milestone 2 : 
We structured the project, set up the frontend and backend, and built the login page for the application.
This milestone focuses on creating the project structure, configuring tools, and starting with our first user-facing feature - the Login Page.

---

## Milestone 3:
In this Milestone we have setup the backend folder and initialize Node.js server to handle API requests. Connected the application to the MongoDB to store and manage the data. We created several folders and files to organize the backend code and set up the Express.js server to handle HTTP requests. And config file for environmental variables. Middleware , model , utils. Error.js for handling the specific error .db folder for connecting to the MongoDB database.

## Milestone 4:
In this milestone we have created the user model and schema for the user data.User Management and File Uploads
### Features Implemented
- Created a User Model:
Defined a schema for storing user data using MongoDB. The schema includes fields like name, email, and password to map the structure of user information.
- Developed a User Controller:
Implemented logic for managing user-related actions such as adding new users and retrieving their information. This controller acts as a bridge between the user interface and the database.
- Set Up File Uploads with Multer:
Configured Multer to handle file uploads, allowing users to upload profile pictures or other files. Files are stored securely in the backend with paths linked to user profiles.

## Milestone 5:

In this project, a **SignUp Page** was developed and structured under the `components` folder for modularity and better code organization. The SignUp component was subsequently imported into the `pages` folder to streamline routing and page-level management. Finally, the component was integrated into the `App.js` file to connect it to the overall application flow. 

The SignUp page includes a user-friendly form that allows users to enter their details, such as Name, Email, Password, and Confirm Password, with client-side validation implemented using `react-hook-form`. Additionally, a feature was added to upload a profile picture, allowing users to preview their image before submission. This enhances the user experience and provides a seamless interface for uploading images. The form is fully functional, and the profile picture data is managed alongside other form inputs to ensure smooth submission. This integration effectively combines functionality and user-centric design for a cohesive application experience. 

## Milestone 6: Connect
In this Milestone

We learned how to encrypt data using bcrypt before saving.
We also learned how to store user's data to the database without the problem of them getting lost.
We also learned how to connect backend to frontend.
All the frontend part we have done was later connected to the backend, so that the profile image the user sends will be stored in the uploads folder.
We also managed data using json web tokens.

## Milestone 7: MongoDB connection
In this Milestone,

- Understand how to validate user credentials during login.
- Learn how to compare the encrypted password with the user’s input.
- The user provides their email/username and password on the login page.
- The backend retrieves the user record based on the provided email/username.
- If the user is not found, return an error: "User does not exist."
- Process the user's input password using the same hashing algorithm (e.g., bcrypt).
- Compare the resulting hash to the stored hashed password.
- If they match, the user is authenticated; if not, send an error.


