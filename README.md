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

## Milestone 8: Home Page creation
In this Milestone,

- Create a card component.
- Display those cards on the products page.
- A single card component that accepts product details as props.
- Array mapping to iterate over the product list and render a card for each product.
- Reusable card component with props for product details (e.g., name, image, price).
- A grid layout or flexbox for displaying multiple cards neatly.
- A home page with a route connecting to app.jsx.

## Milestone 9: Product Creation Page
In this Milestone,

- Learned how to create a form that will take all the details of product
- Learned how to take multiple images as input.
- Creating the page using Tailwind CSS and React JS.
- Form creation using useState.
- And styling it accordingly using Tailwind CSS
  
## Milestone 10: Connecting to Mongo DB
In this Milestone,

- Learned how to write product schema using mongoose
- Learned how to create an end point to validate and store product details in mongodb.
- Get about 10 images from the user and post it to backend.
- Use Multer to store the images in the Product folder.
- Build a POST endpoint to receive product data.
- Validate and save the product details to MongoDB.

## Milestone 11: Dynamic Product Card
In this Milestone,

- To write an endpoint that will send data from extract and send data from mongodb.
- To receive data at frontend -How to display that data dynamically using product card created earlier.
- Change a bit of data in Multer.js
- Dynamically add the created products to the home page.
- View the data from the main page.

## Milestone 12: Dynamic Filtering
In this Milestone,

- To write an endpoint that will send data by filtering with my mail and send data from mongodb.
- To receive data at frontend -How to display that data dynamically using product card created earlier.
- The user can give their email, and the products from that email can be seen.
- We create a new page myProducts to show the products of the user.
- We update product.js in the backend to create,save and show the product.

## Milestone 13:
In this Milestone,

- Write an endpoint that will update the existing data in MongoDB.
- Auto fill the form with previous data and give option to edit.
- We use router and post method.
- The entire data and also part of data can be changed.
- frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.

## Milestone 14:
In this Milestone,

- Write an endpoint that delete the product with specific ID from MongoDB.
- We use routers to delete the product
- In frontend we will add an delete button to the product card.
- When click on delete button we will send the product id to server endpoint.
- After deleting the product will be removed from user's page.

## Milestone 15: Nav Bar
In this Milestone,

- Creating and Nav component.
- Reusing the same component in multiple pages.
- Create an new Nav component with links to all pages:
     - Home
     - My-products 
     - Add product
     - cart
- Adding the nav component to all the pages and make the navigations to all this pages smooth and easy.
- Making the Navbar responsive to all screen sizes.

## Milestone 16: New Product Page
In this Milestone,

- Create an product info page that display all the product data and choose quantity and add to card button.
- New page to display each product.
- Adding quantity and add to card button.


## Milestone 17: Cart
In this Milestone,

- Edit the user schema to store cart products .
- Write an end point to receive the product details and store in database.


## Milestone 18: Cart continuation
In this Milestone,

- Create an endpoint to receive request from cart page.
- Create an backend endpoint to fetch all the products inside cart with user mail.


## Milestone 19: Cart Page
In this Milestone,

- Create an cart page that display the products inside cart using endpoint that we used in the previous milestone.
- Adding + and - buttons to increase or decrease the quantity of the products.
- Also write an endpoint to increase and decrease the quantity.
- Creating cart frontend page and display the products.
- Using PUT method to update the data.


## Milestone 20: Profile Page
In this Milestone,

- Create and backend endpoint that will send all the user data using mail.
- Create an frontend profile page that will display all the user data.
- Display profile photo, name, mail and addresses.

## Milestone 21: Address Page
In this Milestone,

- Create an frontend form that will will take address.
- Take country, city, address1, address2, zip code, address type
- Create an state that will store input address
- Create address form frontend page
- when we click on add address in profile it should navigate to this form page.


## Milestone 22: Add Address
In this Milestone,

- Create an endpoint that will receive the address from address form in frontend.
- Add the address to the address array inside user collection.
- Display the address in the Profile section.

## Milestone 23: Place Order
In this Milestone,

- Add an button inside cart called "Place order".
- Create an select address page where we will display all the address and ask to select delivery address.
- Write mongoose schema for storing orders details.
- Create an placeorder button inside cart page and navigate to select address page when clicked.
- Create and select address page that will display all the available address and have an option to select one address.
- Write an backend endpoint that will send all the addresses of the user.

## Milestone 24: Order Confirmation
In this Milestone,

- Create an order conformation page.
- Display all the products we are ordering.
- Display the address user selected to deliver.
- Display the total value of the cart.
- Place order button at the bottom.

## Milestone 25: Place Order Backend
In this Milestone,

- Create an endpoint that will receive the products, user, address details.
- Get the mail of the user using that you need to retrive the _id of the user.
- For each product the order will be different with same address.
- Using order schema we created earlier we will store order details in mongodb order collection.
- The page will finally lead to the success endpoint if Successfull.


## Milestone 26: Backend Endpoint
In this Milestone,

- Create an endpoint that will receive the user mail.
- Get the mail of the user using that you need to retrive the _id of the user.
- Use the _id to get all the orders of that user.
- Send all the users orders in the response.
- Also do Error management.

## Milestone 27: My Orders Page
In this Milestone,

- Create an my-orders page.
- Send a get request to my-orders endpoint that we created in previous milestone.
- Send user mail in to endpoint to get all the user orders.
- Display all the user orders.
- Add my-orders page in navbar for better navigation.

## Milestone 28: Cancel Order Feature

In this Milestone,

- Add a Cancel Order button next to each active order on the My Orders page.
- Ensure the button is not displayed if the order is already canceled.
- Create a POST API endpoint (/orders/cancel) to handle order cancellations.
- Send the orderId in the request body to identify the order.
- Update the order status to "Canceled" in the database.
- Save the updated order and return an appropriate response.
- Integrate the API with the frontend to allow users to cancel orders.
- Refresh the My Orders page after a successful cancellation.

## Milestone 29: Payment
In this Milestone,

- Using PayPal API in our program.
- Integrating online payments.
- Making sure it works without errors.

## Milestone 30: Pay Pal
In this Milestone,

- Creating PayPal account and getting the UserID inside sandbox account.
- Implementing online payment using PayPal API using the client key you created earlier.
- Downloading NPM package called react-paypal-js that will provide an component called PayPalScriptProvider which will - - display online payment methods like credit or debit card.

## Milestone 31: Global State Management
In this Milestone,

- Using redux for global state management.
- Implementing redux store to store all global states.
- Installing Redux and using it fro email in Signup and Login.