# User Registration & Login in JWT

1. It is node & express application which uses the cloud database provided by MongoDB named MongoDB Atlas.Even a local instance of MongoDB can be utilised for this purpose.

2. It shows registration and login of an user with JWT along with required validations.

3. MVC pattern is implemented with an exception that views are not used for this purpose. Only Model & Controllers are present with required middlewares and validations.

4. Its a server side application in which APIs are tested on Postman which are working fully funtional.

5. Two protected routes are implemented. One is verified by the help of a custom auth middleware. Another route is verified by passport auth middleware.

## How to run this application.

1. Once this project is cloned, please navigate to the project directory folder run the command : "npm install" inside of your terminal. This will install the dependecies/node_modules this project uses
2. Run following command: "npm run dev". It will start your application in the port 3500.
3. If you want you can set the PORT variable in .env file as follows:. This step can be skipped as well if not going for production and if its for learning purpose.

## ENVIRONMENT VARIABLES (.env file)

NODE_ENV=development/testing/production,
PORT=xxxx

And then, running "npm run dev" will start the application in localhost:xxxx.

This branch version-two differs from main branch where some code refactorments are done.

1. Controllers are implemented for protected routes.
2. Passport JWT authentication is made along with Custom JWT authentication is implemented.
3. Two protected routes are implemented. One for Passport JWT and one for Custom JWT.
4. Also, you dont need to use the global config anywhere or default.json file for including secret credentials or DB credentials.
5. In .env file every credentials can be mentioned unlike the main branch.

## ENVIRONMENT VARIABLES (.env file)

NODE_ENV = development/testing/production
PORT = xxxx
MONGO_URI = Mongo_URI connection string/credentials
SECRET_TOKEN = Any_String_Of_Chaaracters

### Add .env file before running the application and adding the MongoDB database credentials along with a SECRET_TOKEN. PORT can be optional as skipping PORT environement variable will make this application run at PORT=3500

## API END-POINTS

1. localhost:3500/api/user/login - Login a User
2. localhost:3500/api/user/register - Register a User
3. localhost:3500/api/profile/auth_protected - Protected route. Authenticated user will able to access it
4. localhost:3500/api/profile/passport_protected - Protected route. Authenticated user will able to access it

### In above, PORT=3500. If you set PORT variable in .env file as let say 5000 then, the application will run at localhost:5000.
