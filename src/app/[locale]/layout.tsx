// next
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'
// translations
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
// fonts
import { inter } from '@/app/fonts';
// component
import MentorshipLayout from '@/layouts/mentorship/MentorshipLayout';
//types
import { LanguageCode } from '@/types';
import type { Metadata } from 'next';
// utils
import { metaObject } from '@/utils/meta-object';

// ----------------------------------------------------------------------

// Default Seo, fallback seo to child route segments that don't define seo.
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo_default' });

  return metaObject(
    t('title'), 
    undefined, 
    t('description'), 
    locale
  );
};

type RootLayoutProps = {
  children: React.ReactNode,
  params: {locale: LanguageCode}
}

export default function RootLayout({
  children,
  params: {locale}
}: RootLayoutProps) {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as LanguageCode)) notFound();

  // Receive messages provided in `i18n.ts`
  const messages = useMessages();  

  return (
    <html lang={locale}>
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MentorshipLayout>
            {children}
          </MentorshipLayout>
        </NextIntlClientProvider>
        
        {/* Google analytics script */}
        <GoogleAnalytics gaId="G-XJRJ578Y3R" />
        {/* END Google analytics script */}

        {/* Iubenda script */}
        <Script strategy="afterInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "askConsentAtCookiePolicyUpdate":true,
              "floatingPreferencesButtonDisplay":"bottom-right",
              "perPurposeConsent":true,
              "siteId":3319743,
              "whitelabel":false,
              "cookiePolicyId":32656893,
              "lang":"it",
              "banner": {
                "acceptButtonDisplay":true,
                "closeButtonDisplay":false,
                "customizeButtonDisplay":true,
                "explicitWithdrawal":true,
                "listPurposes":true,
                "position":"float-bottom-center",
                "rejectButtonDisplay":true,
                "showPurposesToggles":true
              }
            };
          `}
        </Script>
        <Script src="https://cs.iubenda.com/autoblocking/3319743.js" strategy="afterInteractive" />
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" charset="UTF-8" async />
        {/* END Iubenda script */}       
      </body>
    </html>
  )
};