'use client';
import { usePathname } from '@/navigation';

// Determines if the provided path matches the current pathname
function matchPath(targetPath: string, currentPathname: any, deep: boolean): boolean {
  if (deep) {
    return currentPathname.startsWith(targetPath);
  } else {
    // This assumes targetPath is a discrete URL segment without dynamic parameters
    return currentPathname === targetPath;
  }
}

export default function useActiveLink(path: string, deep: boolean = true) {
  const pathname = usePathname() || ''; // Provide a default empty string if null
  const isActive = matchPath(path, pathname, deep);

  return {
    active: isActive,
    isExternalLink: path.includes('http'),
  };
}