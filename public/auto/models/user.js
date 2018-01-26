/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'password'
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    },
    createBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'createBy'
    },
    updateBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'updateBy'
    }
  }, {
    tableName: 'user'
  });
};
