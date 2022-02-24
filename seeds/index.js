const sequelize = require('../config/connection');
const { User, Post} = require('../models');

const userData = require('./users.json');
const postData = require('./posts.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     await User.bulkCreate(userData);
     await Post.bulkCreate(postData);

    process.exit(0);
  };
  
  seedDatabase();
  