import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
const dev = process.env.NODE_ENV === 'development';

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = 'default description',
  locale?: string
): Metadata => {

  const baseMetadata = dev ? { metadataBase: new URL('https://mentorshipbyluca.com/') } : {};

  return {
    ...baseMetadata,
    title: title ? `${title} - Mentorship by Luca` : 'default title',
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Mentorship by Luca` : title,
      description,
      url: 'https://mentorshipbyluca.com',
      siteName: 'Mentorship by Luca', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://www.lucacarrozzo.com/assets/images/masthead-img.svg',
        width: 1200,
        height: 630,
      },
      locale: locale,
      type: 'website',
    },
  };
};
