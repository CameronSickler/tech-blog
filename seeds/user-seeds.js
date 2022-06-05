const { User } = require('../models');

const userData = [{
    username: "CameronTest",
    password: "HelloWorld123"
}]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;