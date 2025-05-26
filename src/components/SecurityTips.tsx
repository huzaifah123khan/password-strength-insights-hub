
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Lightbulb, Shield, RefreshCw, Eye } from 'lucide-react';

const SecurityTips = () => {
  const tips = [
    {
      icon: <Shield className="h-5 w-5 text-blue-400" />,
      title: 'Use a Password Manager',
      description: 'Let a password manager generate and store unique, strong passwords for all your accounts.'
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-green-400" />,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security with 2FA whenever possible.'
    },
    {
      icon: <Eye className="h-5 w-5 text-orange-400" />,
      title: 'Avoid Password Reuse',
      description: 'Never use the same password across multiple accounts.'
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
      title: 'Create Memorable Passphrases',
      description: 'Use 4-6 random words combined with numbers and symbols for better security.'
    }
  ];

  return (
    <Card className="shadow-lg bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          Security Best Practices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors bg-gray-700">
              <div className="flex-shrink-0 mt-1">
                {tip.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-100 mb-1">{tip.title}</h4>
                <p className="text-sm text-gray-300">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTips;
