import { SVGProps } from 'react';
// routes
import { PATH_PAGE } from '@/config/routes';
// icons
import InstagramIcon from '@/components/icons/instagram';
import FacebookIcon from '@/components/icons/facebook';
import LinkedinIcon from '@/components/icons/linkedin';
import YoutubeIcon from '@/components/icons/youtube';

// ----------------------------------------------------------------------

const navConfig = {
  pages: [
    {
      name: 'pages.item_1', //translatable string
      href: PATH_PAGE.howItWorks.en
    },
    {
      name: 'pages.item_2', //translatable string
      href: PATH_PAGE.about.en
    },
  ],
};

const socials = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/showcase/besafesuitebesaferate/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <LinkedinIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/besafesuite',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <FacebookIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/besaferate/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <InstagramIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCH7p4G7FU4ps2Jyby8HAomQ',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => <YoutubeIcon />,
  },
];

export { navConfig, socials };
