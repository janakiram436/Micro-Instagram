Micro Instagram - Backend Interns
Assignment
1. Create a user model with following field.
a. Id - Number, autoincrement
b. Name - Varchar(256)
c. Mobile number- number(unique)
d. Address - Text
e. Post count - number (Whenever user creates a new post the count increases by 1)
2. Create Post Model with following details
a. Id - Number, autoincrement
b. Title - Text field
c. Description - Text field
d. User ID - Foreign key to user table in point 1
e. Images - JSON Array of strings

Add following REST APIs :-
1. Get all the posts of users
2. Create a post for user
3. Edit a post of a user
4. Delete a post of user
5. Get all users
6. Get All posts
Follow REST guidelines while designing APIs
REST API URI Naming Conventions and Best Practices
Expectations
1. You need to add all relevant APIs, models and migrations to achieve the above tasks.
2. Adding Unit tests for each APIs will give you more brownie points.
3. Add a proper readme which contains step to run your code.
4. If you are adding any relevant .env commit the .env as well.
5. Create a proper repository on GitHub with README and share the GitHub public link as a part of submission of the project.
Constraints
1. Use Node JS. Using type script will be plus.
2. You can choose any testing framework of your choice. No bounds.
3. Database needs to be relational and avoid using any JSON field in relational databases.
4. Avoid Redis or any caching or optimization to save your time.
5. Database schema should be in normalized form.
