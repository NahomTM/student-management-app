const {Sequelize, DataTypes} = require ('sequelize');
import sequelize from '../db';
import Admin from './admin';

const PasswordReset = sequelize.define('paswordReset', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true

    },
    
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Admin,
            key: 'id'
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resetToken: {
            type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN

    }
},
{
    freezeTableName: true,
    timestamps: true,
    createdAt: true,
    updatedAt: false
}
);

Admin.hasMany(PasswordReset, {foreignKey: 'userId'});
PasswordReset.belongsTo(Admin, {foreignKey: 'userId'});

sequelize.sync().then(() => {
    console.log('Tables created successfully!');
  }).catch((error) => {
    console.error('Error creating tables:', error);
  });
  
export default PasswordReset;
