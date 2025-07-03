"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserInfoStep, type UserInfo } from './user-info-step';
import { AssessmentStep, type AnswerDetail } from './assessment-step';
import { ResultsStep } from './results-step';
import { ClipboardList, UserCheck } from 'lucide-react';

type Step = 'info' | 'assessment' | 'results';

export default function AptitudeInsightApp() {
  const [step, setStep] = useState<Step>('info');
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const [assessmentData, setAssessmentData] = useState<AnswerDetail[]>([]);
  
  const handleInfoSubmit = (data: UserInfo) => {
    setUserData(data);
    setStep('assessment');
  };

  const handleAssessmentComplete = (data: AnswerDetail[]) => {
    setAssessmentData(data);
    setStep('results');
  };

  const getStepComponent = () => {
    switch (step) {
      case 'info':
        return (
            <>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><UserCheck/> Personal Information</CardTitle>
                    <CardDescription>Please provide your details to begin the assessment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <UserInfoStep onSubmit={handleInfoSubmit} />
                </CardContent>
            </>
        );
      case 'assessment':
        return (
            <>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><ClipboardList/> Situational Assessment</CardTitle>
                    <CardDescription>Read each scenario carefully and choose the option that best describes your likely response.</CardDescription>
                </CardHeader>
                <CardContent>
                    <AssessmentStep onComplete={handleAssessmentComplete} />
                </CardContent>
            </>
        );
      case 'results':
        if (userData && assessmentData) {
            const totalScore = assessmentData.reduce((acc, val) => acc + val.score, 0);
            return <ResultsStep score={totalScore} userData={userData} assessmentData={assessmentData} />;
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full shadow-lg transition-all duration-500 ease-in-out hover:shadow-primary/20 hover:shadow-xl">
        <div key={step} className="animate-in fade-in-50 duration-500">
            {getStepComponent()}
        </div>
    </Card>
  );
}
