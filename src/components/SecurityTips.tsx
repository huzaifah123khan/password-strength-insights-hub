
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Lightbulb, Shield, RefreshCw, Eye } from 'lucide-react';

const SecurityTips = () => {
  const tips = [
    {
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      title: 'Use a Password Manager',
      description: 'Let a password manager generate and store unique, strong passwords for all your accounts.'
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-green-500" />,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security with 2FA whenever possible.'
    },
    {
      icon: <Eye className="h-5 w-5 text-orange-500" />,
      title: 'Avoid Password Reuse',
      description: 'Never use the same password across multiple accounts.'
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-purple-500" />,
      title: 'Create Memorable Passphrases',
      description: 'Use 4-6 random words combined with numbers and symbols for better security.'
    }
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Security Best Practices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex-shrink-0 mt-1">
                {tip.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTips;
