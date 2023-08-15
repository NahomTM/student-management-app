import sequelize from '../db'
import admin from '../model/admin'
const loginController = (req, res) => {
    const body = req.body;
    const name = body.name;
    const password = body.password;
//    sequelize.sync().then(()=>)
   if(name == 'nahom' && password == '123')
       return   res.json({success: true, data: []})
    res.json({msg: "invalid password"})
   }

   export default loginController
   
   
