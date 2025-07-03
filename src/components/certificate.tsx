// src/components/certificate.tsx
"use client"

import { useState, useEffect } from "react";
import type { UserInfo } from "./user-info-step"
import type { AnswerDetail } from "./assessment-step"
import AnandakLogo from "./anandak-logo"
import IitKgpLogo from "./iit-kgp-logo"
import { Separator } from "./ui/separator"
import { translations } from "@/lib/assessment-data"

export interface CertificateData extends UserInfo {
  date: string;
  assessmentData: AnswerDetail[];
  finalAssessmentText: string;
}

interface CertificateProps {
  data: CertificateData;
}

interface CertificateContentProps {
  data: CertificateData;
  lang: 'en' | 'hi';
}

const formatDateHindi = (dateString: string): string => {
    const hindiMonths: { [key: string]: string } = {
        'January': 'जनवरी', 'February': 'फ़रवरी', 'March': 'मार्च', 'April': 'अप्रैल',
        'May': 'मई', 'June': 'जून', 'July': 'जुलाई', 'August': 'अगस्त',
        'September': 'सितंबर', 'October': 'अक्टूबर', 'November': 'नवंबर', 'December': 'दिसंबर'
    };

    const devanagariDigits: { [key: string]: string } = {
        '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
        '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
    };

    const toDevanagari = (numStr: string) => numStr.split('').map(digit => devanagariDigits[digit] || digit).join('');

    try {
        const date = new Date(dateString);
        const day = date.getDate().toString();
        const year = date.getFullYear().toString();
        const month = date.toLocaleString('en-US', { month: 'long' });
        
        const hindiMonth = hindiMonths[month];
        const hindiDay = toDevanagari(day);
        const hindiYear = toDevanagari(year);

        if (hindiMonth && hindiDay && hindiYear) {
            return `${hindiDay} ${hindiMonth}, ${hindiYear}`;
        }
    } catch (e) {
        console.error("Could not format date to Hindi:", e);
    }
    
    return dateString;
};


const CertificateContent = ({ data, lang }: CertificateContentProps) => {
  const t = translations[lang];
  const detailedResults = data.assessmentData.filter(item => item.trait !== 'Courage');

  const [transliteratedState, setTransliteratedState] = useState(data.state);
  const [transliteratedDistrict, setTransliteratedDistrict] = useState(data.district);

  useEffect(() => {
      if (lang === 'hi') {
          const transliterateText = async (text: string, setter: (value: string) => void) => {
              if (!text) return;
              try {
                  const response = await fetch('/api/transliterate', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ text }),
                  });
                  const result = await response.json();
                  if (result.transliteration) {
                      setter(result.transliteration);
                  }
              } catch (error) {
                  console.error("Transliteration failed for", text, error);
              }
          };
          transliterateText(data.state, setTransliteratedState);
          transliterateText(data.district, setTransliteratedDistrict);
      }
  }, [lang, data.state, data.district]);

  const getPrefixedName = (name: string, gender: UserInfo['gender']) => {
    if (gender === 'Male') return `Mr. ${name}`;
    if (gender === 'Female') return `Ms. ${name}`;
    return name;
  };

  const getPrefixedNameHi = (name_hi: string, gender: UserInfo['gender']) => {
    if (gender === 'Male') return `श्री ${name_hi}`;
    if (gender === 'Female') return `सुश्री ${name_hi}`;
    return name_hi;
  };

  const prefixedName = lang === 'hi'
    ? getPrefixedNameHi(data.name_hi, data.gender)
    : getPrefixedName(data.name, data.gender);

  const formattedDate = new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className={`printable-area cert-page cert-${lang} w-full max-w-4xl bg-card text-card-foreground rounded-lg shadow-2xl p-6 sm:p-10 my-4`}>
      <div className="cert-border border-4 border-dashed border-primary/50 p-6 sm:p-10 flex flex-col h-full">
        <header className="cert-header-container flex flex-wrap justify-between items-center gap-4 mb-8">
            <AnandakLogo size="small" />
            <IitKgpLogo size="small" />
        </header>

        <div className="text-center space-y-4 cert-title-section">
            <h1 className="text-4xl sm:text-5xl font-headline font-bold text-primary tracking-wide">
              {t.certTitle}
            </h1>
            
            {lang === 'hi' && (
              <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-accent-foreground flex items-baseline justify-center gap-2">
                  <span>{prefixedName}</span>
                  <span className="text-2xl sm:text-3xl font-normal cert-ko">को</span>
              </h2>
            )}

            <p className="text-muted-foreground text-lg">{t.certPresentedTo}</p>
            
            {lang === 'en' && (
              <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-accent-foreground flex items-baseline justify-center gap-2">
                  <span>{prefixedName}</span>
              </h2>
            )}
        </div>

        <Separator className="my-8 bg-primary/30 cert-separator" />

        <main className="cert-content-section text-left space-y-6 text-lg">
          <p className="leading-relaxed">
            {lang === 'en' ? (
                <>
                    {t.certLine1_p1} <span className="font-semibold">{prefixedName}</span> {t.certLine1_p2} <span className="font-semibold">{data.district}, {data.state}</span> {t.certLine1_p3} <span className="font-semibold">{formattedDate}</span>.
                </>
            ) : (
                <>
                    {t.certLine1_p1} <span className="font-semibold">{prefixedName}</span>, {t.certLine1_p2} <span className="font-semibold">{transliteratedDistrict}, {transliteratedState}</span> {t.certLine1_p3} <span className="font-semibold">{formatDateHindi(data.date)}</span> {t.certLine1_p4}
                </>
            )}
          </p>

          <div>
              <h3 className="font-bold text-xl mb-3">{t.detailedResults}</h3>
              <div className="space-y-4">
                  {detailedResults.map(item => (
                      <div key={item.id} className="text-base border-l-4 border-primary/50 pl-4">
                          <p><strong className="font-semibold">{t.traits[item.trait]}:</strong> {t.score} {item.score}/3</p>
                          <p className="text-muted-foreground italic">"{lang === 'en' ? item.feedback : translations.hi.feedback[item.trait][item.score]}"</p>
                      </div>
                  ))}
              </div>
          </div>

          <p className="leading-relaxed pt-4 assessment-summary">
              <strong className="text-foreground">{t.assessmentSummary}:</strong> {lang === 'en' ? data.finalAssessmentText : t.finalAssessment(data.finalAssessmentText)}
          </p>
        </main>
        
        <footer className="cert-footer-section mt-12 flex flex-col sm:flex-row justify-between items-center text-muted-foreground">
            <div className="text-center">
                <p className="font-semibold text-lg border-t-2 border-primary/30 pt-2 mt-2 font-headline">{t.issuingAuthorityName}</p>
                <p className="text-sm">{t.issuingAuthority}</p>
            </div>
            <div className="text-center mt-6 sm:mt-0">
                <p className="font-semibold text-lg border-t-2 border-primary/30 pt-2 mt-2 font-headline">{lang === 'hi' ? formatDateHindi(data.date) : formattedDate}</p>
                <p className="text-sm">{t.dateOfIssue}</p>
            </div>
        </footer>
      </div>
    </div>
  );
};


export function Certificate({ data }: CertificateProps) {
  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          #certificate-wrapper {
            background: transparent !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            width: 100vw !important;
            margin-top: 14% !important;
            margin-left: 10% !important;
            min-height: auto !important;
            max-width: 80vw !important;
          }
          html, body {
            background-color: #fff9c4 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            height: auto;
            margin: 0 !important;
            padding: 0 !important;
            color-adjust: exact !important; /* for older browsers */
            overflow: visible;
          }
          .no-print {
            display: none !important;
          }
          .cert-page {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
            max-width: 100% !important;
            page-break-inside: avoid !important;
          }
          body.print-mode-all .cert-en {
            margin-bottom: -5% !important;
            page-break-before: always !important;
          }

          body.print-mode-all .cert-hi {
            margin-top: 21% !important;
            page-break-before: always !important;
          }

          body.print-mode-en .cert-hi { display: none !important; }
          body.print-mode-hi .cert-en { display: none !important; }

          .cert-border {
            border: 12px solid hsl(40, 100%, 60%) !important;
            padding: 0.5rem !important;
            height: 100% !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .cert-header-container {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-shrink: 0 !important;
            margin-bottom: 0.25rem !important;
          }
          .cert-header-container .anandak-logo-container img, 
          .cert-header-container .iit-kgp-logo-container img {
              width: 40px !important;
              height: 40px !important;
          }
          .cert-header-container .anandak-logo-container h1 {
              font-size: 1rem !important;
          }
          .cert-header-container .anandak-logo-container p {
              font-size: 0.75rem !important;
          }
          .cert-header-container .iit-kgp-logo-container h1 {
              font-size: 0.875rem !important;
          }
          .cert-header-container .iit-kgp-logo-container p {
              font-size: 0.75rem !important;
          }
          .cert-title-section {
            margin-top: 0rem !important;
            margin-bottom: 0 !important;
            padding: 0.25rem 0;
          }
          .cert-title-section h1 {
            color: hsl(40, 100%, 60%) !important;
            font-size: 20pt !important;
            margin-bottom: 0.25rem !important;
          }
          .cert-title-section p {
             font-size: 10pt !important;
             margin-bottom: 0.25rem !important;
          }
          .cert-title-section h2 {
             font-size: 16pt !important;
          }
          .cert-hi .cert-title-section h2 .cert-ko {
            font-size: 12pt !important;
            font-weight: normal !important;
          }
          .cert-separator {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
          }
          .cert-content-section {
            flex-grow: 1 !important;
            font-size: 9pt !important;
            line-height: 1.3 !important;
            padding: 0.25rem 0 !important;
          }
           .cert-content-section p {
            color: #000 !important;
            margin: 0;
           }
           .cert-content-section .text-base {
              font-size: 9pt !important;
           }
           .cert-content-section .assessment-summary {
             padding-top: 0.25rem !important;
           }
           .cert-footer-section {
             flex-shrink: 0 !important;
             margin-top: 0.5rem !important;
           }
           .cert-footer-section p {
              font-size: 8pt !important;
            }
            .cert-footer-section .font-semibold {
              font-size: 10pt !important;
            }
        }
      `}</style>
      <CertificateContent data={data} lang="en" />
      <CertificateContent data={data} lang="hi" />
    </>
  );
}