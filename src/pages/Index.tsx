
import React from 'react';
import PasswordStrengthChecker from '@/components/PasswordStrengthChecker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Password Strength Insights Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze your password strength in real-time with AI-powered insights and security recommendations
          </p>
        </div>
        
        <PasswordStrengthChecker />
      </div>
    </div>
  );
};

export default Index;
