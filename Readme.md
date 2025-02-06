Copy the link from bootstrap in your index.html above title tag
React Setup :-
npm i  axios react-router-dom redux react-redux

Reactjs Routing and layout Mern stack:-
In this we will create App.js, layout, header and Footer components of Frontend

Login Registration Form:-
To install antdesign library : npm install antd --save
import "antd/dist/antd.min.css"; in index.js
After this some error has come and we have checked versions and dependencies and resolved it successfully.
We have made the Register form and Login form here and taken the Format from ant design 
Link :- https://ant.design/components/form

Client Server Login Register Functionality :- 
- app.use('/api/v1/users', require('./routes/userRoute'))

- Now we have to cmobine both bakend server port (8080) and frontend server port (3000)
So we install concurrently package [npm i concurrently]
- We have to add these two in package.json files

    {
    "client": "npm start --prefix client",
    "dev":"concurrently \"npm run server\" \"npm run client\" "
    }

    We have added spinner to register and login page.

Protected Routes and Logout Function:-
In this We have made the protected route function in APP.js

Transaction Model Routes Controller :-

Transaction Model UI Mern Stack :- 
We are using Modalsin HomePage.js
Modals are used in web development to create pop-up windows or overlays that focus the user's attention on a specific task or piece of information, often while temporarily disabling interaction with the rest of the page.

In this we have added to HomePage.js and also made transaction Controller and transaction Model

Creating transaction and getting all transactions :-

-Now we will add filters date. To do it we will add moment library
    We have added moment library to both frontend and backend
    npm i moment
-The useEffect hook in React is used to perform side effects in functional components. Side effects can include tasks such as fetching data, directly updating the DOM, setting up subscriptions, or cleaning up after a component unmounts.
-useEffect allows you to run code whenever a specific state or prop changes by specifying a dependency array.

- We will add custom date feature so that user can check within custom range of Date using datePicker from antdesign 


Analytics of all transactions :- 
Till now we have data in tabular form
install in frontend 
npm install --save @ant-design/icons
We are installing this to add icons in our frontend
We have worked on Analytics.js

Now we will import progress bar of antdesign

Edit and Delete Transactions :-
In this we have added edit and delete transaction routes ans their controllers
