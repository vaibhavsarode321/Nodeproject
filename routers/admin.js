
const express = require('express');

const app = express();

const loginpost = require('../models/login.js')

//const fs = require('fs');

const router = express.Router();

const admin = require('../controllers/admin-p.js')


 router.get('/login',admin.admins );

 router.post('/post', admin.post);



module.exports  = router;

