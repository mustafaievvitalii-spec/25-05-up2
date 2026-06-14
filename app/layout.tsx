import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'DocExpert — Відновлення посвідчення водія дистанційно',
  description:
    'Юридичний супровід дистанційного відновлення посвідчення водія для українців за кордоном.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHNXRVVP');`}
        </Script>

        <Script id="microsoft-clarity" type="text/javascript" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wxa0ay8aes");`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHNXRVVP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <section className="border-t border-neutral-900 bg-black px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4FF00]/20 bg-[#0A0A0A]/90 p-5 shadow-[0_0_35px_rgba(212,255,0,0.08)] backdrop-blur sm:p-6 lg:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4FF00]">
              Юридична інформація
            </p>
            <div className="mt-5 grid gap-4 text-sm leading-relaxed text-zinc-400 md:grid-cols-2 lg:grid-cols-4">
              <p>
                <span className="block font-semibold text-zinc-100">Document Expert</span>
              </p>
              <p>
                Послуги надає{' '}
                <span className="font-medium text-zinc-100">ФОП Мустафаєв Віталій Русланович</span>
              </p>
              <p>
                Адреса:{' '}
                <span className="text-zinc-200">
                  35350, Рівненська область, смт Квасилів, вул. Давня 63
                </span>
              </p>
              <p>
                Телефон:{' '}
                <a
                  href="tel:+380680513251"
                  className="font-semibold text-zinc-100 transition hover:text-[#D4FF00]"
                >
                  +380680513251
                </a>
              </p>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
