"use strict";
const commentsdb = require('../models/userDB');
var commentsDBObject = new commentsdb();
function routeForgot(app){
    app.route('/forget/:id')
    .put(commentsDBObject.updatePass);
}
module.exports = {routeForgot};