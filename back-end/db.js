const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('sma_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
    connect();
export default sequelize