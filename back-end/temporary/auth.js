// const forgotPassword = async (email) => {
//         try {
//           // Check if a user exists with the provided email
//           const user = await Admin.findOne({ where: { email } });
//           if (!user) {
//             throw new Error('User not found');
//           }
      
//           // Generate a token
//           const token = generateToken();
      
//           // Save the token and user id in Table2
//           await Table2.create({ userId: user.id, token });
      
//           // Send the email with the token
//           await sendEmail(email, token);
      
//           console.log('Password reset email sent successfully');
//         } catch (error) {
//           console.error('Error in forgotPassword:', error);
//         }
//       };

//         const resetPassword = async (token, newPassword) => {
//     try {
//       // Find the row in Table2 with the provided token
//       const resetRow = await Table2.findOne({ where: { token } });
//       if (!resetRow) {
//         throw new Error('Invalid token');
//       }
  
//       // Check if the token has expired (e.g., token expires after 1 hour)
//       const tokenExpirationTime = 60 * 60 * 1000; // 1 hour in milliseconds
//       const currentTime = new Date();
//       const resetTime = resetRow.createdAt;
//       if (currentTime - resetTime > tokenExpirationTime) {
//         throw new Error('Token has expired');
//       }
  
//       // Find the user in Table1 with the same id as in Table2
//       const user = await Table1.findByPk(resetRow.userId);
//       if (!user) {
//         throw new Error('User not found');
//       }
  
//       // Update the user's password in Table1
//       user.password = newPassword;
//       await user.save();
  
//       console.log('Password reset successfully');
//     } catch (error) {
//       console.error('Error in resetPassword:', error);
//     }
//   };