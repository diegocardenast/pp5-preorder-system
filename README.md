<p align-text="center">
  <img width="150" height="150" src="https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/hofpfistereiLogo.png" alt="HofpfistereiLogo">
</p>

# Bread Preorder System

The hofpfisterei is a traditional bread business based in Bavaria, Germany. Usually, customers need to call and make a preorder. The idea of this project is to offer an **online platform** where **customers can create their preorders without waiting** for someone to answer the phone in one of the selling points. The platform will be created using React and REST Framework.

This project will be separated in two phases. The first one will have accounts access functionality and will provide a CRUD functionality on the types of bread. The second part will be planned and is expected to contain the preorder system. This repository will cover only the first phase.

![Responsive Mockup](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/amIResponsive.png)

## User Experience

### User Stories - Phase 1

#### As a Customer

##### User Registration and Login
- As a **customer**, I want to create an account so that I can log in.

![Registration](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/registration.png)

![Login](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/login.png)

##### Browsing Bread Products
- As a **customer**, I want to browse a list of bread products so that I can choose which bread to preorder.

![BreadList](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/userBreadList.png)

#### As an Admin

##### Managing Bread Products
- As an **admin**, I want to create new bread products so that customers can preorder them.
![CreateBread](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/addBread.png)

- As an **admin**, I want to update existing bread products so that I can keep the product information current.
![EditBread](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/updateBread.png)

- As an **admin**, I want to delete bread products so that I can remove products that are no longer available.
![DeleteBreadBefore](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/deleteBread.png)

![DeleteBreadAfter](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/deleteBread2.png)

- As an **admin**, I want to view a list of all bread products so that I can manage them effectively.
![AdminBreadList](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/adminBreadList.png)

### Functional Requirements - Phase 1

#### User Registration and Authentication
- Implement user registration and login functionality using REST framework for backend authentication.
- Use React for the frontend to create forms for registration and login.

#### Bread Product Management
- Implement CRUD (Create, Read, Update, Delete) operations for bread products in the backend using REST framework.
- Use React to create an admin interface for managing bread products.

![AdminBreadList](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/adminBreadList.png)


### User Stories - Phase 2

#### As a Customer

##### User Registration and Login
- As a **customer**, I want to create an account so that I can place preorders.
- As a **customer**, I want to log in to my account so that I can access my preorder history.

##### Browsing Bread Products
- As a **customer**, I want to see pictures of each bread product so that I can make an informed decision.

##### Placing a Preorder
- As a **customer**, I want to select a bread product to preorder so that I can place an order for future pickup.
- As a **customer**, I want to specify whether I want my bread sliced or unsliced so that my bread is prepared to my preference.
- As a **customer**, I want to choose the quantity of bread (quarter, half, three-quarters, or whole) so that I can order the amount I need.
- As a **customer**, I want to select the date for pickup from one week ahead up to two days before so that I can plan my preorder in advance.

##### Managing Preorders
- As a **customer**, I want to view my preorder history so that I can keep track of my previous orders.
- As a **customer**, I want to cancel or modify my preorder up to two days before the pickup date so that I have flexibility with my order.

#### As an Admin

##### Admin Authentication
- As an **admin**, I want to log in to the admin panel so that I can manage the bread preorder system.

##### Managing Preorders
- As an **admin**, I want to view all preorders so that I can ensure they are fulfilled correctly.
- As an **admin**, I want to update the status of preorders so that customers are informed about their order status.

### Functional Requirements - Phase 2

#### Bread Product Management
- Include image upload functionality for bread products.

#### Preorder Functionality
- Implement preorder creation and management using REST framework.
- Use React to create a user-friendly interface for browsing products, placing preorders, and managing preorder history.

#### Date Selection
- Ensure the date picker in the React frontend allows users to select a pickup date from one week ahead up to two days before the desired date.

#### Order Preferences
- Provide options for customers to specify if they want their bread sliced or unsliced and to choose the quantity (quarter, half, three-quarters, or whole).


### Colour

The colour selection was generated from the company website: [Hofpfisterei website](https://www.hofpfisterei.de/). The main HEX code is [#596eb1](https://g.co/kgs/E5BdCuk).

## Database Model - Phase 1

The Database scope for phase 1 considers the userstories created and covered for this phase of the project.

![Database Model](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/drawSQL-pp5-phase1.png)

## Database Model - Phase 2

The Database scope for phase 2 considers the userstories created and covered for the 1st and 2nd phase of the project.

![Database Model](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/drawSQLpp5.png)

## Wireframes

__Home__  

![Home](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/homeWireframe.png)

__Bread Order__  

![BreadOrder](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/breadOrderWireframe.png)

__Login__  

![Login](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/loginWireframe.png)

## Tasks and Planning (GitHub Projects)

Tasks and planning can be seen in the [Bread Preorder System - GitHub Project (click here)](https://github.com/users/diegocardenast/projects/7).

## Use of React Components

### Hook
The use of Hooks enable you to extract logic into reusable functions and improve code readability. An example of this is the useClickOutsideToggle.js file which helps our collapsed navbar to hide once the user has clicked one of the nav options or outside the navbar.

### Directory layout
It’s more necessary to maintain a clean structure that’s easy to grasp by everyone in the codebase than to make the directory title an impermeable guideline. The react app structure can be seen in the folder bread-preorder-frontend.

### Context
With React Context tool, you can transmit information up and down the component tree without resorting to prop drilling. It’s a different strategy that allows a parent component to prop up the complete child tree. The file CurrentUserContext.js is an example of this react component. 

## Use of Libraries

### Axios
Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations. 

### React Bootstrap
React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed, you have everything you need.

### JWT-Decode
JSON web token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON web signature (JWS) structure or as the plaintext of a JSON web encryption (JWE) structure.

## Testing

### Validator Testing
- All relevant files were tested.
- Python
  - No errors were returned when passing through the official [pep8ci validator](https://pep8ci.herokuapp.com/)  
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?)
- Lighthouse
  - The result given by the system for the lighthouse assessment is the following:
![Lighthouse results](https://github.com/diegocardenast/pp5-preorder-system/blob/main/assets/images/lighthouse-test.png)

### Manual Testing
**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
Index | Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
Index | Size to 1440px using Chrome Dev Tools | Elements look good 1440px | Works as expected
Login | Login with an admin account	| Notify user with name in navbar and show admin options | Works as expected
Logout | Logout from an admin account and normal account | Notify user taking out name in navbar and changing nav options | Works as expected
Login | Login with a normal account	| Notify user with name in navbar and show admin options | Works as expected
Logout | Login from a normal account | Notify user about succesfful logout and hide products list options | Works as expected
Register | Allow users logged out to register into the platform | Form is saved into admin DB | Works as expected
Contact us | Fill out contact us form with questions | Form information will be saved into the admin DB | Works as expected
Admin settings | Create and erase a user from the admin panel with an admin account | admin DB will work correctly based on CRUD principles | Works as expected
Add Product | Create a product | admin DB will work correctly based on CRUD principles | Works as expected
Edit Product | Update a product | admin DB will work correctly based on CRUD principles | Works as expected
Delete Product | Delete a product | admin DB will work correctly based on CRUD principles | Works as expected
Product list | Visualize the product list as a normal user | interface will render admin DB products correctly | Works as expected


### Unfixed Bugs

- NA

## Deployment

### Backend (Django REST Framework)
- Set-Up Django and Django REST Framework installing them by running in the Gitpod terminal **"pip3 install Django~=4.2.1"** & **"pip3 install django djangorestframework"**
- Update the requirements file by running in the Gitpod terminal **"pip3 freeze > requirements.txt"**
- Run in the Gitpod terminal **"django-admin startproject bread_preorder_system ."** to create a Django project. In this case, my_project is called **bread_preorder_system**
- Add the **ALLOWED_HOSTS** (in this case '8000-') into **bread_preorder_system/settings.py** file
- Add the **CSRF_TRUSTED_ORIGINS** **bread_preorder_system/settings.py** file
- Push the latest changes to the GitHub repository
- Create Django Apps and Views, as well as configure settings.py
- Push the latest changes to the GitHub repository

### Frontend (React)
- Set-Up React in the main folder running **"npx create-react-app bread-preorder-frontend"**. Afterwards, enter  **"cd bread-preorder-frontend"** and then run **"npm install axios react-router-dom"**
- Install react-bootstrap **"npm install react-bootstrap bootstrap"**
- 





- The site was deployed in the Heroku. The steps to deploy are as follows: 
  - Install the **Django Python package** by running in the Gitpod terminal **"pip3 install Django~=4.2.1"**
  - Update the requirements file by running in the Gitpod terminal **"pip3 freeze > requirements.txt"**
  - Push the latest changes to the GitHub repository 
  - Run in the Gitpod terminal **"django-admin startproject my_project ."** to create a Django project. In this case, my_project is called **plastilecor_portal**
  - Add the **ALLOWED_HOSTS** (in this case '8000-diegocarden-pp4plastile-dl4pq8wxrog.ws-eu108.gitpod.io') into **plastilecor_portal/settings.py** file
  - Push the latest changes to the GitHub repository
  - Create Django Apps and Views, as well as configure settings.py
  - Push the latest changes to the GitHub repository
  - Inside the Heroku account, create a new app with a unique name (in this case **project-plastilecor-portal**)
  - Install a production-ready webserver for Heroku running this command inside the gitpod terminal **pip3 install gunicorn~=20.1**
  - Add **gunicorn==20.1.0** to the **requirements.txt** file with the following command **pip3 freeze --local > requirements.txt**
  - Inside the Heroku app settings tab, create a _Config Var_ called `PORT`. Set this to `8000`
  - Inside the Heroku app settings tab, add two buildpacks:
    - `heroku/python`
    - `heroku/nodejs`
  - Inside the Heroku app deploy tab, select GitHub as deployment method and connect the GitHub repository to the Heroku app
  - Inside the Heroku app deploy tab, click on deploy branch
  - Click on View App

The live link can be found [HERE]()

--- 

## Credits

### Content 

- Good/Best practice on the readme were shared by Lauren-Nicole Popich in her [mentoring](https://github.com/CluelessBiker/mentoring/tree/main) GitHub repositry
- User Stories and tasks creation was implemented following this [publication](https://boosthigh.com/software-requirements-specification/)
- Use of Google to import [Google fonts](https://fonts.google.com/?classification=Display) 
- Inspiration of the [institutional color](https://www.hofpfisterei.de/)
- The use of GitHub to collaborate and apply good practices was implemented following this [Slack post](https://code-institute-room.slack.com/archives/C05UQAPDNCT/p1697457705802579) and this [GitHub post](https://github.com/auxfuse/hackathon-git-labs/blob/main/basic.md)
- Troubleshooting with [stack overflow](https://stackoverflow.com/)
- JWT library explanation inside [builtin.com](https://builtin.com/articles/jwt-decode)
- React components and architecture inside [etatvasoft.com](https://www.etatvasoft.com/blog/react-architecture-patterns/)

### Media

- The wireframes were created using [Balsamiq Cloud](https://balsamiq.cloud/)
- The Database model was created using [DrawSQL](https://drawsql.app/)




Thank You!

Diego Cárdenas 


### FRONTEND :
- [ ] All deployment steps
- [ ] Thoroughly document manual testing

--- 