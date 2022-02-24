const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
    }
);

module.exports = Post;