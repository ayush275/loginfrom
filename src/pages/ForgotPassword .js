// ForgotPasswordForm.js

import React from 'react';

const ForgotPassword = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your password reset logic here
    
    onClose();
  };

  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="New Password" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
