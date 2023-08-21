const sewsummary = require('./sewsummary')
const express = require('express');
const router = express.Router();

class sewsummaryController {
    constructor(app) {
        router.get('/',sewsummary.getAllsewsummary);
     
        app.use('/api/v1/sewsummary', router);

    }
}

module.exports=sewsummaryController;