import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": "Верифікація посвідчення водія: інструкція | DocExpert",
  "description": "Коли потрібна верифікація посвідчення водія, що впливає на результат і як розібратися з процедурою: відеоінструкція та допомога DocExpert.",
  "alternates": {
    "canonical": "/verification"
  },
  "openGraph": {
    "title": "Верифікація посвідчення водія: інструкція | DocExpert",
    "description": "Коли потрібна верифікація посвідчення водія, що впливає на результат і як розібратися з процедурою: відеоінструкція та допомога DocExpert.",
    "url": "/verification",
    "siteName": "DocExpert",
    "locale": "uk_UA",
    "type": "website"
  }
};

export default function VerificationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
