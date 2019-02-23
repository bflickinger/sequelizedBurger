# Eat Da Burger! Node Express Handlebars MySQL

### Overview

This is a simple application that headlines the following technologies MySQL, Node, Express, Handlebars and a custom ORM.

### Instructions

* Eat-Da-Burger! is a application that allows a user to create new burgers by enter a name and submitting.

* Burgers that can be eaten are displayed with a button that allows the user to 'Devour it'.  When this button is clicked, the burger will be moved to the right side of the page.

Heroku app: https://afternoon-shore-51728.herokuapp.com/

#### Directory structure

MvC Layout:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```