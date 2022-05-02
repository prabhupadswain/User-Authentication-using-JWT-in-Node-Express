# User Registration & Login in JWT

It is node & express application which uses the cloud database provided by MongoDB names MongoDB Atlas. 
It shows registration and login of an user with JWT along with required validations.

MVC pattern is implemented with an exception that views are not used for this purpose. Only Model & Controllers are present with required middlewares and validations.
Its a server side application in which APIs are tested on Postman tool which are working fully.

## How to run this application.
1. Once this project is cloned, please navigate to the project directory folder run the command : "npm install" inside of your terminal. This will install the dependecies/node_modules this project uses
2. Run following command: "npm run dev". It will start your application in the port 3500.
3. If you want can set the PORT variable in .env file as follows:. This step can be skipped as well if not going for production and if its for learning purpose. 
   
## ENVIRONMENT VARIABLES (.env file)
NODE_ENV=development/testing/production
PORT=xxxx

And then, running ##"npm run dev" will start the application in localhost:5000.

## default.json file
Included following things in this file inside config folder of this project directory.
{
  "mongoURI": "YOUR_MONGO_URI_CREDENTIALS",
  "SECRET_TOKEN": "YOUR-SECRET_TOKEN"
}

### Add default.json file before running the application and adding the MongoDB database credentials.


