import Sequelize from 'sequelize'

const sequelize = new Sequelize(config.database, config.username, config.password);

const models = {
    user: sequelize.import('./users'),
}


