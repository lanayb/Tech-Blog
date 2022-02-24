const sequelize = require('../config/connection');
const { User, Confession} = require('../models');

const userData = require('./users.json');
const postData = require('./posts.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     await User.bulkCreate(userData);
     await Confession.bulkCreate(postData);

    process.exit(0);
  };
  
  seedDatabase();
  