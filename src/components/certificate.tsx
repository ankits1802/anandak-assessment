// // src/components/certificate.tsx

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
    <div className={`printable-area cert-page cert-${lang} w-full max-w-4xl bg-card text-card-foreground shadow-2xl p-6 sm:p-10 my-4`}>
      <div className="cert-border border-4 border-dashed border-primary/50 p-6 sm:p-10 flex flex-col h-full">
        <header className="cert-header-container flex flex-wrap justify-between items-center gap-4 mb-6">
          <AnandakLogo size="small" />
          <IitKgpLogo size="small" />
        </header>

        <div className="text-center cert-title-section mb-6">
          <h1 className="text-4xl sm:text-5xl font-headline font-bold text-primary tracking-wide mb-4">
            {t.certTitle}
          </h1>
          

          {lang === 'hi' && (
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-accent-foreground flex items-baseline justify-center gap-2 mb-2">
              <span className="cert-name">{prefixedName}</span>
              <span className="text-2xl sm:text-3xl font-normal cert-ko">को</span>
            </h2>
          )}
          <p className="text-muted-foreground text-lg mb-3">{t.certPresentedTo}</p>

          {lang === 'en' && (
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-accent-foreground mb-2">
              {prefixedName}
            </h2>
          )}
        </div>

        <Separator className="my-6 bg-primary/30 cert-separator" />

        <main className="cert-content-section flex-1 text-lg space-y-6">
          <p className="leading-relaxed cert-main-line text-center">
            {lang === 'en' ? (
              <>
                This is to certify that <span className="font-bold">{prefixedName}</span> of <span className="font-bold">{data.district}, {data.state}</span> has successfully completed the Anandak Assessment on <span className="font-bold">{formattedDate}</span>.
              </>
            ) : (
              <>
                यह प्रमाणित किया जाता है कि <span className="font-bold">{prefixedName}</span>, निवासी <span className="font-bold">{transliteratedDistrict}, {transliteratedState}</span> ने दिनांक <span className="font-bold">{formatDateHindi(data.date)}</span> को आनंदक मूल्यांकन सफलतापूर्वक पूरा किया है।
              </>
            )}
          </p>

          <div className="detailed-results-section">
            <h3 className="font-bold text-xl mb-4">{t.detailedResults}</h3>
            <div className="space-y-4">
              {detailedResults.map(item => (
                <div key={item.id} className="text-base border-l-4 border-primary/50 pl-4 py-2">
                  <p className="mb-2"><strong className="font-semibold">{t.traits[item.trait]}:</strong> {t.score} {item.score}/3</p>
                  <p className="text-muted-foreground italic leading-relaxed">"{lang === 'en' ? item.feedback : translations.hi.feedback[item.trait][item.score]}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="assessment-summary-section">
            <p className="leading-relaxed">
              <strong className="text-foreground">{t.assessmentSummary}:</strong> {lang === 'en' ? data.finalAssessmentText : t.finalAssessment(data.finalAssessmentText)}
            </p>
          </div>
        </main>

        <footer className="cert-footer-section mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-muted-foreground border-t border-primary/20">
          <div className="text-center">
            <p className="font-semibold text-lg font-headline">{t.issuingAuthorityName}</p>
            <p className="text-sm border-t border-primary/30 pt-2 mt-2">{t.issuingAuthority}</p>
          </div>
          <div className="text-center mt-6 sm:mt-0">
            <p className="font-semibold text-lg font-headline">{lang === 'hi' ? formatDateHindi(data.date) : formattedDate}</p>
            <p className="text-sm border-t border-primary/30 pt-2 mt-2">{t.dateOfIssue}</p>
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
          html, body {
            background: #fff !important;
            font-family: 'Poppins', sans-serif !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          #certificate-wrapper {
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
          }
          .no-print {
            display: none !important;
          }
          body.print-mode-en .cert-hi { display: none !important; }
          body.print-mode-hi .cert-en { display: none !important; }
          body.print-mode-all .cert-en {
            page-break-after: always !important;
          }
          
          /* Main certificate container - optimized for A4 */
          .cert-page {
            width: 210mm !important;
            height: 297mm !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
            padding: 1rem !important;
            box-shadow: none !important;
            border-width: 10px !important;
            border-color: #F59E0B !important;
            display: flex !important;
            flex-direction: column !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
          }
          
          /* Border container with proper spacing */
          .cert-border {
            padding: 1rem !important;
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            overflow: hidden !important;
          }
          
          /* Header section - compact but visible */
          .cert-header-container {
            margin-bottom: 1rem !important;
            flex-shrink: 0 !important;
          }
          
          .cert-page header img {
            width: 48px !important;
            height: 48px !important;
          }
          
          /* Title section - well-spaced */
          .cert-title-section {
            margin-bottom: 1rem !important;
            flex-shrink: 0 !important;
          }
          
          .cert-title-section h1 {
            font-size: 2.5rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.2 !important;
          }
          
          .cert-title-section h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.2 !important;
          }
          
          /* Specific styling for Hindi name and को */
          .cert-title-section h2 .cert-name {
            font-size: 1.8rem !important;
          }
          
          .cert-title-section h2 .cert-ko {
            font-size: 1.2rem !important;
          }
          
          .cert-title-section p {
            font-size: 1.3rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.3 !important;
          }
          
          /* Separator */
          .cert-separator {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
          }
          
          /* Main content section - fills available space */
          .cert-content-section {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
          
          .cert-content-section .space-y-6 > * + * {
            margin-top: 1.2rem !important;
          }
          
          .cert-main-line {
            text-align: center !important;
            font-size: 1rem !important;
            line-height: 1.4 !important;
            padding: 0.5rem 0 !important;
          }
          
          /* Detailed results section */
          .detailed-results-section {
            flex-grow: 1 !important;
          }
          
          .cert-content-section h3 {
            font-size: 1.2rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.3 !important;
          }
          
          .cert-content-section .space-y-4 > * + * {
            margin-top: 0.75rem !important;
          }
          
          .cert-content-section .text-base {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }
          
          .cert-content-section .border-l-4 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          
          .cert-content-section .italic {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
          }
          
          /* Assessment summary section */
          .assessment-summary-section {
            margin-top: 1rem !important;
            padding-top: 0.75rem !important;
            border-top: 1px solid rgba(251, 191, 36, 0.2) !important;
          }
          
          .assessment-summary-section p {
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
          
          /* Footer section - proper spacing */
          .cert-footer-section {
            margin-top: 1.5rem !important;
            padding-top: 1rem !important;
            font-size: 0.85rem !important;
            flex-shrink: 0 !important;
          }
          
          .cert-footer-section p {
            font-size: inherit !important;
            line-height: 1.3 !important;
          }
          
          .cert-footer-section .text-lg {
            font-size: 1rem !important;
          }
          
          .cert-footer-section .text-sm {
            font-size: 0.75rem !important;
          }
        }
        
        /* Screen styles */
        .cert-main-line {
          text-align: center;
        }
      `}</style>
      <CertificateContent data={data} lang="en" />
      <CertificateContent data={data} lang="hi" />
    </>
  );
}
