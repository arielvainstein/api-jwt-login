# api-jwt-login
Login and register API with JWT (JSON web token)

## What´s in here?
This api uses Mongo DB to store users information, Node JS as structure, bycript library to encript users passwords and JWT token to protect login info with a secret token.

## Two endpoints in this boilerplate
- `/register`: POST. Accepts a body incluing the following a `name`, `email` and `password`. Password is encrypted before storing in DB.
- `/login`: POST. Accepts a body incluing `email` and `password`. 

## How do i start?
Just type `npm run dev` on your local environment and Db will connect automatically and your api will start right away! 
Server will run by default on port 3001.