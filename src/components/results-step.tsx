"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getFinalFeedback, getFinalAssessment } from "@/lib/assessment-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { UserInfo } from "./user-info-step"
import type { AnswerDetail } from "./assessment-step"
import { Award, Download } from "lucide-react"

interface ResultsStepProps {
  score: number
  userData: UserInfo
  assessmentData: AnswerDetail[]
}

export function ResultsStep({ score, userData, assessmentData }: ResultsStepProps) {
  const router = useRouter()
  const feedback = getFinalFeedback(score)
  const finalAssessment = getFinalAssessment(feedback)

  useEffect(() => {
    const certificateData = {
      ...userData,
      assessmentData,
      finalAssessmentText: finalAssessment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    }
    try {
      localStorage.setItem('anandakAssessmentCertificate', JSON.stringify(certificateData))
    } catch (error) {
        console.error("Could not save certificate data to localStorage", error);
    }
  }, [userData, assessmentData, finalAssessment])

  const handleViewCertificate = () => {
    router.push('/certificate')
  }

  return (
    <Card className="text-center animate-in fade-in duration-500">
      <CardHeader>
        <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit mb-4">
            <Award className="h-10 w-10" />
        </div>
        <CardTitle className="text-3xl">Assessment Complete!</CardTitle>
        <CardDescription className="text-lg">Thank you for participating, {userData.name}.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 bg-secondary/50 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Your Insight</h3>
          <p className="text-foreground text-lg">{feedback}</p>
        </div>
        <p className="text-muted-foreground">
          A detailed certificate has been generated based on your results.
        </p>
        <Button onClick={handleViewCertificate} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Download className="mr-2 h-5 w-5" />
          View & Download Certificate
        </Button>
      </CardContent>
    </Card>
  )
}
