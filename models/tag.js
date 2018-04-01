/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tagName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tag_name'
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'version'
    }
  }, {
    tableName: 'tag'
  });
};