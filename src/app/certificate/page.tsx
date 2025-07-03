// src/app/certificate/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { Certificate, type CertificateData } from '@/components/certificate';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Home, Printer } from 'lucide-react';

function CertificateSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4">
            <div className="w-full max-w-4xl p-8 space-y-8">
                <Skeleton className="h-12 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
                <div className="space-y-4 pt-8">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="pt-10 flex justify-between">
                    <Skeleton className="h-10 w-1/4" />
                    <Skeleton className="h-10 w-1/4" />
                </div>
            </div>
        </div>
    )
}

type PrintMode = 'all' | 'en' | 'hi';

export default function CertificatePage() {
    const [certData, setCertData] = useState<CertificateData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        try {
            const data = localStorage.getItem('anandakAssessmentCertificate');
            if (data) {
                setCertData(JSON.parse(data));
            } else {
                router.replace('/');
            }
        } catch (error) {
            console.error("Failed to parse certificate data", error);
            router.replace('/');
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    const handlePrint = useCallback((mode: PrintMode) => {
        const handleAfterPrint = () => {
            document.body.classList.remove(`print-mode-${mode}`);
            window.removeEventListener('afterprint', handleAfterPrint);
        };
        window.addEventListener('afterprint', handleAfterPrint);
        document.body.classList.add(`print-mode-${mode}`);
        window.print();
    }, []);

    const handleHome = () => {
        router.push('/');
    };
    
    if (isLoading || !certData) {
        return <CertificateSkeleton />;
    }
    
    return (
      <div id="certificate-wrapper" className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4 sm:p-8">
        <Certificate data={certData} />
        
        <div className="no-print w-full max-w-4xl flex flex-wrap justify-center gap-4 mt-4">
            <Button onClick={handleHome} variant="outline" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
            </Button>
            <Button onClick={() => handlePrint('all')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Printer className="mr-2 h-5 w-5" />
                Print Full Certificate
            </Button>
            <Button onClick={() => handlePrint('en')} size="lg" variant="outline">
                <Printer className="mr-2 h-5 w-5" />
                Print English Only
            </Button>
            <Button onClick={() => handlePrint('hi')} size="lg" variant="outline">
                <Printer className="mr-2 h-5 w-5" />
                Print Hindi Only
            </Button>
        </div>
      </div>
    );
}

