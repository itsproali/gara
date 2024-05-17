import { INavLink } from '../models/interfaces/INavLink';

export const menuLinks: INavLink[] = [
  { label: 'Éditeurs', path: '/editor', children: [] },
  {
    label: 'Partenaires',
    children: [
      { label: 'Télécoms et Agrégateurs', path: '/par' },
      {
        label: 'Institutionnels',
        path: '/',
      },
      {
        label: 'Privés et Universités',
        path: '/',
      },
      {
        label: 'Influenceurs et Ambassadeurs',
        path: '/',
      },
    ],
  },
  {
    label: 'Investisseurs',
    path: '/',
    children: [],
  },
  {
    label: 'Nos Valeurs et Équipe',
    path: '/',
    children: [],
  },
  {
    label: 'Média',
    path: '/media',
    children: [],
  },
  {
    label: 'Public Data',
    path: '/',
    children: [],
  },
];
