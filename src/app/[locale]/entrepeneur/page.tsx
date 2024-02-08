// translations
import { getTranslations } from 'next-intl/server';
// components
import EntrepeneurPageView from "@/components/views/EntrepeneurPageView";
//types
import type { Metadata } from 'next';
// utils
import { metaObject } from '@/utils/meta-object';

// ----------------------------------------------------------------------

// Seo Metadata
export async function generateMetadata({ params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'entrepeneur_page' });
  return metaObject(
    t('seo.title'), 
    undefined, 
    t('seo.description'), 
    locale
  );
};

const entrepeneurPage = () => {
  return <EntrepeneurPageView />
}

export default entrepeneurPage