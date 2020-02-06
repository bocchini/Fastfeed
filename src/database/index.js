// Arquivo de conexão com o BD

import Sequelize from 'sequelize';

import dataBaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import DeliveryManagement from '../app/models/DeliveryManagement';
import File from '../app/models/File';

const models = [User, Recipient, File, DeliveryManagement];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
