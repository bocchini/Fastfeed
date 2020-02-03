'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeliveryManagement = sequelize.define('DeliveryManagement', {
    name: DataTypes.STRING
  }, {});
  DeliveryManagement.associate = function(models) {
    // associations can be defined here
  };
  return DeliveryManagement;
};