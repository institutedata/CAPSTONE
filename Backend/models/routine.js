/** @format */

const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../config/dbConnect');
const Exercise = require('./exercise');

const sequelizeInstance = dbConnect.Sequelize;

class Routine extends Model {}
// Sequelize will create this table if it doesn't exist on startup

Routine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    routineName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: 'routine', // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

// Define the many-to-many association between Routine and Exercise
// Routine.belongsToMany(Exercise, { through: 'RoutineExercise' });
// Exercise.belongsToMany(Routine, { through: 'RoutineExercise' });

module.exports = Routine;
