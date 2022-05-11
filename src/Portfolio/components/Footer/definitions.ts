import resume from '../../../assets/Gonzalo_Stoll_2022.pdf';
import {ItemLink} from '../List/List';

export const socialLinks: ItemLink[] = [
  {
    type: 'link' as const,
    label: '↳ Resume',
    href: resume,
    download: true,
    'aria-label': 'Download my resume',
  },
  {
    type: 'link' as const,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/gonzalostoll/',
    download: false,
  },
  {
    type: 'link' as const,
    label: 'Github',
    href: 'https://github.com/gonstoll/',
    download: false,
  },
  {
    type: 'link' as const,
    label: 'Medium',
    href: 'https://medium.com/@gonstoll',
    download: false,
  },
];
