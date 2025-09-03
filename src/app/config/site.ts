import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export const siteMetadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const navigation = {
  main: [
    { name: 'Features', href: '#features' },
    { name: 'Domains', href: '#domains' },
    { name: 'Data Cockpit', href: '#cockpit' },
    { name: 'PyRun', href: '#pyrun' },
    { name: 'Architecture', href: '#architecture' },
  ],
  footer: {
    product: ['Documentation', 'Tutorials', 'Examples', 'Data Cockpit', 'PyRun'],
    community: ['GitHub', 'Discussions', 'Contributing'],
    support: ['Issues', 'Contact', 'License'],
  },
};

export const socialLinks = {
  github: 'https://github.com/dataplug',
  twitter: 'https://twitter.com/dataplug',
  linkedin: 'https://linkedin.com/company/dataplug',
  discord: 'https://discord.gg/dataplug',
}; 