/**
 * Created by jspeight on 12/29/15.
 */
'use strict';
const express = require('express');
const router = express.Router();

const test = require('./test');


router.get('/items/:id', [test.prerequest, test.request]);
router.get('/items2/:id', [test.dbConnect]);




module.exports = router;