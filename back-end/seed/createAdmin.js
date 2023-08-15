const Admin = require('../model/admin');

async function checkIfTableIsEmpty() {
    try {
        const rowCount = await Admin.count();
        if (rowCount === 0) {
            console.log('Table is empty');
            await Admin.create({
                username: admin,
                password: admin
            })
        } 

        } catch (error) {
        console.log('Error occurred while checking table:', error);
    }
  }
  
  export default checkIfTableIsEmpty