const { User } = require('../models');

const userData = [{
    username: "CameronTest1",
    password: "HelloWorld123"
}, {
    username: "AnotherTest2",
    password: "HelloWorld123"
}]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;