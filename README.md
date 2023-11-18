# JobOffers React App

## Frontend application for JobOffers Spring Boot Web Application

### Description
Application is in its early stages.  
Couple functionalities with simple JSON server.  
No CSS for now.

### Specification
Available operations:
* Get offers - list all offers from repository (GET /offers)
* Get offer by ID - find offer by its ID (GET /offers/id)
* Save offer - save offer (POST /offers)

### Installation and run
>npx json-server --watch data/db.json --port 8000  

to run server

>npm run start

to run application


### In progress
* CSS styles
* login and register
* token operations
* connecting to proper application on AWS
