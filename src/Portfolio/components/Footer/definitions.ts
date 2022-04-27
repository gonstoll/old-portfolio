import resume from '../../../assets/Gonzalo_Stoll_2022.pdf';

export const socialLinks = [
  {
    type: 'link',
    label: '↳ Resume',
    link: resume,
    download: true,
  } as const,
  {
    type: 'link',
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/gonzalostoll/',
    download: false,
  } as const,
  {
    type: 'link',
    label: 'Github',
    link: 'https://github.com/gonstoll/',
    download: false,
  } as const,
  {
    type: 'link',
    label: 'Medium',
    link: 'https://medium.com/@gonstoll',
    download: false,
  } as const,
];
