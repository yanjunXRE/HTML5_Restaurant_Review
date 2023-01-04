"use strict";
const commentsdb = require('../models/CommentsDB');
var commentsDBObject = new commentsdb();
function routeComments(app){
    app.route('/comments')
    .post(commentsDBObject.addComment)
    .get(commentsDBObject.getAllComments);
    app.route('/comments/:id/')
    .delete(commentsDBObject.deleteComment)
    .put(commentsDBObject.updateComment);
    app.route('/commentUser/:userid')
    .delete(commentsDBObject.deleteComment)
}
module.exports = {routeComments};