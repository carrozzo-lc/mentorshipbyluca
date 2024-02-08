import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from '@/navigation';

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'it',

  // A list of all locales that are supported
  locales,  

  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  pathnames,

  // Don't include a locale prefix for the default locale, only for non-default locales
  localePrefix: 'as-needed',  
});
 
export const config = {
  // Match only internationalized pathnames
  //matcher: ['/', '/(it|en|es)/:path*']
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]  
};