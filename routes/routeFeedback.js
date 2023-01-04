"use strict";
const commentsdb = require('../models/feedbackDB');
var commentsDBObject = new commentsdb();
function routeFeedback(app){
    app.route('/feedback')
    .post(commentsDBObject.addComment)
    .get(commentsDBObject.getAllComments);
   
}
module.exports = {routeFeedback};