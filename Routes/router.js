// // import express
// const express = require('express')
// const usercontroller = require('../Controlers/Usercontroler')
// // create router object of express to define path
//    const router = express.Router()

// // register api call
//  register.post('/register',usercontroler.register)

//  module.exports = router

// import express
const express = require('express');
const usercontroller = require('../Controlers/Usercontroler'); // Corrected spelling
const projectController = require('../Controlers/projectController');
const jwtMidleware = require('../Middlewares/jwtMiddleware');
const multerConfig =require('../Middlewares/multerMiddleware');

// create router object of express to define path
const router = express.Router();

// register api call
router.post('/register', usercontroller.register); // Changed register.post to router.post, and corrected the spelling of usercontroller

// 4 login api call
  router.post('/login',usercontroller.login);

  // 5 add project api call
    router.post('/project/add-project',jwtMidleware, multerConfig.single('projectImage'), projectController.addproject)

  // 6 get a particular user project details api
  router.get('/project/get-auser-project',jwtMidleware,projectController.getAprojects)

  // 7 get 3 project fro home
  router.get('/project/home-project',projectController.getHomeprojects)

  // 8 get all projects
  router.get('/project/get-all-project',jwtMidleware,projectController.getAllprojects)

module.exports = router;
