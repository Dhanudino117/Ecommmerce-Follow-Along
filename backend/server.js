const app = require("./app")
const connectToDatabase = require("./db/Database")

process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server for handling uncaught exception")
});

if(process.env.NODE_ENV!=="PRODUCTION"){
  require("dotenv").config({
    path:"config/.env"
});
};
  
  // Call the function to connect to the database
  connectToDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on https://localhost:${process.env.PORT}`);
})


process.on("unhandledRejection",(err)=>{
  console.error(`UnhandledRejection: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(()=>{
    process.exit(1);
  });
});