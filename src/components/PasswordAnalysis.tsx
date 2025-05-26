
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Key, Hash, Type, AtSign } from 'lucide-react';

interface PasswordAnalysisResult {
  score: number;
  strength: 'Very Weak' | 'Weak' | 'Fair' | 'Good' | 'Strong' | 'Very Strong';
  color: string;
  feedback: string[];
  criteria: {
    length: boolean;
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
    noCommon: boolean;
  };
}

interface PasswordAnalysisProps {
  analysis: PasswordAnalysisResult;
}

const PasswordAnalysis = ({ analysis }: PasswordAnalysisProps) => {
  const criteriaItems = [
    {
      key: 'length',
      label: 'At least 8 characters',
      icon: <Type className="h-4 w-4" />,
      met: analysis.criteria.length
    },
    {
      key: 'lowercase',
      label: 'Lowercase letters (a-z)',
      icon: <Type className="h-4 w-4" />,
      met: analysis.criteria.lowercase
    },
    {
      key: 'uppercase',
      label: 'Uppercase letters (A-Z)',
      icon: <Type className="h-4 w-4" />,
      met: analysis.criteria.uppercase
    },
    {
      key: 'numbers',
      label: 'Numbers (0-9)',
      icon: <Hash className="h-4 w-4" />,
      met: analysis.criteria.numbers
    },
    {
      key: 'symbols',
      label: 'Special characters (!@#$...)',
      icon: <AtSign className="h-4 w-4" />,
      met: analysis.criteria.symbols
    },
    {
      key: 'noCommon',
      label: 'Not a common password',
      icon: <Key className="h-4 w-4" />,
      met: analysis.criteria.noCommon
    }
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Security Criteria Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {criteriaItems.map((item) => (
            <div key={item.key} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2 flex-1">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.met ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordAnalysis;
