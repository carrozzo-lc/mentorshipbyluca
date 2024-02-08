import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

// routes
import { PATH_PAGE } from '@/config/routes';
 
export const locales = ['it', 'en'] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
 
  // If locales use different paths, you can
  // specify each external path per locale.
  [PATH_PAGE.career.en]: {
    it: `${PATH_PAGE.career.it}`,
    en: `${PATH_PAGE.career.en}`
  },
  [PATH_PAGE.entrepeneur.en]: {
    it: `${PATH_PAGE.entrepeneur.it}`,
    en: `${PATH_PAGE.entrepeneur.en}`
  }
 
} satisfies Pathnames<typeof locales>;
 
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });