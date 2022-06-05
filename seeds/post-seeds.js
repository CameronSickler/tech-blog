const { Post } = require('../models');

const postData = [{
    title: "This is the first post title",
    post_content: "This is the content text for the 1st post seed",
    user_id: 1
},
{
    title: "This is the second post title",
    post_content: "This is the content text for the 2nd post seed",
    user_id: 1
}]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;