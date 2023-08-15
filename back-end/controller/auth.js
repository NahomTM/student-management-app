
import Sequelize from 'sequelize';
import sequelize from '../db';
import Admin from '../model/admin';
import PasswordReset from '../model/forgotPassword';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const loginController = async (req, res) => {
    const body = req.body;
    const name = body.name;
    const password = body.password;
    const role = body.role;
    try {
        const user = await role.findOne({
            where:{
            username: name,
            password: password
            }
        }
        );

        if(!user){
            res.json({success: false, msg: "User doesn't exist"});
        }

        else{
            res.json({msg: "Use found"})
        }
    } catch (error) {
        res.json({msg: "Error in selection", error});
    }
    
   
   }

const generateToken = () => {
    return crypto.randomBytes(20).toString('hex');
  };


const sendEmail = async (email, token) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });

  // Send email with the token
  let info = await transporter.sendMail({
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click on the following link to reset your password: http://localhost:4000/reset-password?token=${token}`,
  });

  console.log('Email sent:', info.messageId);
};

const forgotPassword = async(req, res) =>{
    const {email} = req.body;
    const {role} = req.body;
    try{
        const user = null;

        if(role == "Admin"){
            user = await Admin.findOne({where: {email}});
        }
        
        if(!user){
            res.json({msg: "User doesn't exist"})
        }

        const token = generateToken();

        await PasswordReset.create({
            userId: user.id,
            role: role,
            token: token
        })

        await sendEmail(email, token)
        res.json({msg: "Email was sent successfully"});
    } catch(error){
        res.json({success: false, msg: "Email wasn't sent."})
    }
};

const resetPassword = async (req, res) => {
    const {token} = req.body;
    const {newPassword} = req.body;
    
    try{
        const resetRow = await PasswordReset.findOne({ where: { token }});
        if(!resetRow){
            res.json({msg: "Invalid token"});
        }

        const tokenExpirationTime = 60 * 60 * 1000;
        const currentTime = new Date();
        const resetTime = resetRow.createdAt;
        if(currentTime - resetTime > tokenExpirationTime) {
            res.json({msg: "Token has expired"});
        }

        const user = await Admin.findByPk(resetRow.userId);
        if (!user) {
            res.json({msg: "User not found"});
        }

        user.password = newPassword;
        await user.save();
        req.json({msg: "Password reset successfully"})
    } catch(error){
        res.json({msg: "Error in resetting password", error})
    }
}

  
  module.exports = {
    forgotPassword,
    loginController,
    resetPassword
  }
  