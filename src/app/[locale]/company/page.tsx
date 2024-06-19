// translations
import { getTranslations } from 'next-intl/server';
// components
import CompanyPageView from "@/components/views/CompanyPageView";
//types
import type { Metadata } from 'next';
// utils
import { metaObject } from '@/utils/meta-object';

// ----------------------------------------------------------------------

// Seo Metadata
export async function generateMetadata({ params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'company_page' });
  return metaObject(
    t('seo.title'), 
    undefined, 
    t('seo.description'), 
    locale
  );
};

const CompanyPage = () => {
  return <CompanyPageView />
}

export default CompanyPage;