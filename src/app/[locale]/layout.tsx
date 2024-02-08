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
      </body>
    </html>
  )
};