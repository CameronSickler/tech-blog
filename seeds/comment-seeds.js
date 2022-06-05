const { Comment } = require('../models');

const commentData = [{
    comment_text: "Test comment for id 1",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Test comment for id 2",
    user_id: 1,
    post_id: 1
}
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;