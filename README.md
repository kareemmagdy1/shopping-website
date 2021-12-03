# shopping-website
This is a shopping website designed with nodejs as the back-end and also serves the pages in form of pug files a templating engine


## Getting Started

- First run the following command to insall the packages used in this project

```sh
$ npm install 
```

- Second you will have to create a `.env` file which will hold your private variables you will find variables such as :

```javascript
const URI=process.env.DATABASE_URI;
```
- In this example nodejs will attempt to access the `.env` file and  fetch the value  for the variable `DATABASE_URI`

## Run The Server

- To run the server run the command

```sh
npm start
```


## Technologies

Nodejs , ExpressJs , MongoDB , Pug , PassportJs 
