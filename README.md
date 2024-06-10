<p align="center">
  <img width="500" height="100" src="https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/plastilecorLogo.jpg" alt="PlastilecorLogo">
</p>

# Bread Preorder System

The hofpfisterei is a traditional bread business based in Bavaria, Germany. Usually, customers need to call in order to make a bread preorder. The idea of this project is to offer an **online platform** where **customers can create their preorders without waiting** for someone to answer the phone in one of the selling points. The platform will be created using React and REST Framework

![Responsive Mockup](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/am-i-responsive.png)

## User Experience

### User Stories
- As a **user** I want to **login into the portal** so that I can **see the updated price list of products**
- As a **user** I want to **logout from the portal** so that I can **keep my user credentials safe**
- As a **user** I want to **register in the portal** so that I can **have my own user access**
- As a **user** I want to **have a landing page with a link to the products list** so that I can **always watch the most updated version of the list**
- As a **user** I want to **have a landing page with a link to the the contact form** so that I can **contact plastilecor support in case of any doubt**
- As a **user** I want to **have a landing page with a link to the official Plastilecor website** so that I can **check more information of the company if I need to**
- As an **admin user** I want to **login into the portal** so that I can **CRUD user accounts and price list of products**
- As an **admin user** I want to **logout from the portal** so that I can **keep users credentials and the product list safe**
- As an **admin user** I want to **CRUD user accounts** so that I can **make sure who has access into the portal**
- As an **admin user** I want to **CRUD the product list inside the website** so that I can **make sure we always have the most updated version inside the portal**
- As an **admin user and user** I want to **check the documentation of the website** so that I can **better understand the functionalities, quality and features of it**


### Tasks and Planning

Tasks and planning can be seen in the [Plastilecor Price List Portal - GitHub Project](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal).

### Colour

The colour selection was generated from the company logo: [Plastilecor logo](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/plastilecorLogo.jpg). The main HEX code is [#004F1F](https://g.co/kgs/ZfFH1aA).

## Database Model

![Database Model](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/drawSQL-pp4.png)

## Wireframes

__Login__  

![Login](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/login-wireframe.png)

__Home__  

![Home](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/home-wireframe.png)

__Price List__  

![PriceList](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/price-list-wireframe.png)


## Features

__Register__

![Register](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/register-feature.png)

__Contact Us__

![ContactUs](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/Contact-us-feature.png)

__Price List Details__

  - The time counter, the name of the schenario, pumpkins (lives) counter and how many ghosts you have hunt are part of the visual tools for the user/player. 

![PriceListDetails](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/price-list-details-feature.png)

__CRUD Functionality__ 

![AddProduct](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/AddProduct.png)

![EditDeleteProduct](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/EditDeleteProduct.png)


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
![Lighthouse results](https://github.com/diegocardenast/pp4-plastilecor-price-list-portal/blob/main/assets/images/lighthouse-test.png)

### Manual Testing
**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
Index | Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
Index | Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
Login | Login with an admin account	| Notify user about succesfful login and show admin settings options | Works as expected
Logout | Logout from an admin account | Notify user about succesfful logout and hide admin settings options | Works as expected
Login | Login with a normal account	| Notify user about succesfful login and show products list options | Works as expected
Logout | Login from a normal account | Notify user about succesfful logout and hide products list options | Works as expected
Register | Allow users logged out to register into the platform | Form is saved into admin DB | Works as expected
Contact us | Fill out contact us form with questions | Form information will be saved into the admin DB | Works as expected
Admin settings | Create and erase a user from the admin panel with an admin account | admin DB will work correctly based on CRUD principles | Works as expected
Add Product | Create a product | admin DB will work correctly based on CRUD principles | Works as expected
Edit Product | Update a product | admin DB will work correctly based on CRUD principles | Works as expected
Delete Product | Delete a product | admin DB will work correctly based on CRUD principles | Works as expected
Price list | Visualize the product list as a normal user | interface will render admin DB products correctly | Works as expected
Price list | Visualize a product detail page as a normal user | interface will render admin DB information correctly | Works as expected



### Unfixed Bugs

- NA

## Deployment 

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

The live link can be found [HERE](https://plastilecor-portal-pp4-b72037813267.herokuapp.com/)

--- 

## Credits

### Content 

- Good/Best practice on the readme were shared by Lauren-Nicole Popich in her [mentoring](https://github.com/CluelessBiker/mentoring/tree/main) GitHub repositry
- CRUD functionality support found in the videos of [Dee Mc YouTube channel](https://www.youtube.com/@IonaFrisbee)
- User Stories and tasks creation was implemented following this [publication](https://boosthigh.com/software-requirements-specification/)
- Use of Google to import [Google fonts](https://fonts.google.com/?classification=Display) 
- Inspiration of the [institutional color](https://www.plastilecor.com/)
- The use of GitHub to collaborate and apply good practices was implemented following this [Slack post](https://code-institute-room.slack.com/archives/C05UQAPDNCT/p1697457705802579) and this [GitHub post](https://github.com/auxfuse/hackathon-git-labs/blob/main/basic.md)

### Media

- The wireframes were created using [Balsamiq Cloud](https://balsamiq.cloud/)
- The Database model was created using [DrawSQL](https://drawsql.app/)




Thank You!

Diego Cárdenas 
