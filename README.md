# Meower Frontend Module

**Meower** is an application build in Vue Js and Express Js. This application is a dead simple social media that allow you to share what's in your mind

## Getting Started

You can run this application on your server by clone to [https://github.com/titanabrian/meower-backend.git](https://github.com/titanabrian/meower-backend.git) for the backend service and [https://github.com/titanabrian/meower-frontend.git](https://github.com/titanabrian/meower-frontend.git) for the frontend

### Prerequisites

The things that you need to install before running this application
*   run the backend service here the backend service [documentation](https://github.com/titanabrian/meower-backend.git)

### Installing The Frontend

You have to clone to this project

```
$ git clone https://github.com/titanabrian/meower-frontend.git
```

Move to your application directory

```
$ cd meower-frontend
```
Create your own .env file that allows you to manage your application environment variable. You can copy from .env-example and change the value

```
VUE_APP_SERVICE_HOST=${YOUR_BACKEND_HOST_AND_PORT}
```

Install dependencies

```
$ npm install
```

## Running The Frontend
Before you run the frontend, make sure that your backend service already running

### Development Environment
Run folowing command
```
$ npm run serve
```

### Production Environment
First you have to build your frontend application by performing the following command
```
$ npm run build
```
Your built-in application will be located on **dist** directory

## Authors

* **titanabrian**
