const {Sequelize, DataTypes} = require ('sequelize');
import sequelize from '../db';

const Admin = sequelize.define("admin", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    idTag: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,   
    }
},

{
    freezeTableName: true,
    timestamps: false
}
);

sequelize.sync().then(() => {
    console.log('Tables created successfully!');
  }).catch((error) => {
    console.error('Error creating tables:', error);
  });

export default Admin;
