# JobOffers React App

## Frontend application for JobOffers Spring Boot Web Application

### Description
Application is deployed on AWS EC2 Linux server and available at:  
http://ec2-16-171-15-220.eu-north-1.compute.amazonaws.com  
JobOffers is a Spring Boot web application that allows you to collect job offers from various sources for Junior Java Developers (websites, other web applications).
The main function of the application is fetching offers form external server in scheduled time. In order to receive offers, user has to register to website. After that, using generated token, user can get offers or add a new one by themselves.

### Specification
Available operations:
* Get offers - list all offers from repository (GET /offers)
* Get offer by ID - find offer by its ID (GET /offers/id)
* Save offer - save offer (POST /offers)
* Login - login into created account (POST /token)
* Register - create a new account (POST /register)

### Installation and run
Running application locally is possible by command npm run start. To connect with backend you need to change config.json file. Application will be hosted automatically at localhost:3000.

### Contact   

> **Author:** Jakub Wykocki  
> **Linkedin:** https://www.linkedin.com/in/jakub-wykocki/





