import AptitudeInsightApp from '@/components/aptitude-insight-app';
import AnandakLogo from '@/components/anandak-logo';
import { BrainCircuit } from 'lucide-react';
import IitKgpLogo from '@/components/iit-kgp-logo';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <header className="p-4 sm:p-6 md:p-8 flex justify-between items-center gap-4">
        <AnandakLogo />
        <IitKgpLogo />
      </header>
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 pt-0 sm:pt-0 md:pt-0">
        <div className="w-full max-w-4xl mx-auto">
          <header className="text-center mb-8 flex flex-col items-center">
            <div className="bg-primary/20 text-primary rounded-full p-3 mb-4">
              <BrainCircuit className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">Anandak Assessment</h1>
            <p className="text-muted-foreground mt-2 text-lg">Discover your strengths through our assessment.</p>
          </header>
          <AptitudeInsightApp />
        </div>
      </main>
    </div>
  );
}
