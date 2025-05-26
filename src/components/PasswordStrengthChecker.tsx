
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Eye, EyeOff, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import StrengthMeter from './StrengthMeter';
import SecurityTips from './SecurityTips';
import PasswordAnalysis from './PasswordAnalysis';

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

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [analysis, setAnalysis] = useState<PasswordAnalysisResult | null>(null);

  const analyzePassword = (pwd: string): PasswordAnalysisResult => {
    if (!pwd) {
      return {
        score: 0,
        strength: 'Very Weak',
        color: 'text-gray-400',
        feedback: ['Enter a password to see analysis'],
        criteria: {
          length: false,
          lowercase: false,
          uppercase: false,
          numbers: false,
          symbols: false,
          noCommon: true
        }
      };
    }

    const criteria = {
      length: pwd.length >= 8,
      lowercase: /[a-z]/.test(pwd),
      uppercase: /[A-Z]/.test(pwd),
      numbers: /\d/.test(pwd),
      symbols: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      noCommon: !['password', '123456', 'qwerty', 'abc123', 'password123'].includes(pwd.toLowerCase())
    };

    const score = Object.values(criteria).filter(Boolean).length;
    const feedback: string[] = [];

    if (!criteria.length) feedback.push('Use at least 8 characters');
    if (!criteria.lowercase) feedback.push('Add lowercase letters');
    if (!criteria.uppercase) feedback.push('Add uppercase letters');
    if (!criteria.numbers) feedback.push('Include numbers');
    if (!criteria.symbols) feedback.push('Add special characters');
    if (!criteria.noCommon) feedback.push('Avoid common passwords');

    if (score === 6) feedback.push('Excellent! Your password is very strong');
    else if (score >= 4) feedback.push('Good password strength');
    else if (score >= 3) feedback.push('Consider adding more complexity');

    const strengthMap = {
      0: { strength: 'Very Weak' as const, color: 'text-red-600' },
      1: { strength: 'Very Weak' as const, color: 'text-red-600' },
      2: { strength: 'Weak' as const, color: 'text-orange-600' },
      3: { strength: 'Fair' as const, color: 'text-yellow-600' },
      4: { strength: 'Good' as const, color: 'text-blue-600' },
      5: { strength: 'Strong' as const, color: 'text-green-600' },
      6: { strength: 'Very Strong' as const, color: 'text-green-700' }
    };

    return {
      score,
      ...strengthMap[score as keyof typeof strengthMap],
      feedback,
      criteria
    };
  };

  useEffect(() => {
    setAnalysis(analyzePassword(password));
  }, [password]);

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Password Strength Analyzer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Enter your password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password here..."
                className="pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {analysis && <StrengthMeter analysis={analysis} />}
        </CardContent>
      </Card>

      {analysis && password && (
        <>
          <PasswordAnalysis analysis={analysis} />
          <SecurityTips />
        </>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
