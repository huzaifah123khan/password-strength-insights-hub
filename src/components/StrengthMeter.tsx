
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

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

interface StrengthMeterProps {
  analysis: PasswordAnalysisResult;
}

const StrengthMeter = ({ analysis }: StrengthMeterProps) => {
  const progressValue = (analysis.score / 6) * 100;
  
  const getProgressColor = () => {
    if (analysis.score <= 1) return 'bg-red-500';
    if (analysis.score <= 2) return 'bg-orange-500';
    if (analysis.score <= 3) return 'bg-yellow-500';
    if (analysis.score <= 4) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getIcon = () => {
    if (analysis.score <= 2) return <XCircle className="h-5 w-5 text-red-500" />;
    if (analysis.score <= 4) return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    return <CheckCircle className="h-5 w-5 text-green-500" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className={`font-semibold ${analysis.color.replace('text-', 'text-')}`}>
            {analysis.strength}
          </span>
        </div>
        <span className="text-sm text-gray-300">
          {analysis.score}/6 criteria met
        </span>
      </div>
      
      <div className="space-y-2">
        <Progress 
          value={progressValue} 
          className="h-3 bg-gray-700"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>Very Weak</span>
          <span>Very Strong</span>
        </div>
      </div>

      {analysis.feedback.length > 0 && (
        <div className="space-y-1">
          {analysis.feedback.map((item, index) => (
            <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StrengthMeter;
