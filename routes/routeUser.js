"use strict";
const commentsdb = require('../models/userDB');
var commentsDBObject = new commentsdb();
function routeUser(app){
    app.route('/user')
    .post(commentsDBObject.addUser)
    .get(commentsDBObject.getAllUser);
    app.route('/user/:id')
    .delete(commentsDBObject.deleteUser)
    .put(commentsDBObject.updateUser);
  
}
module.exports = {routeUser};