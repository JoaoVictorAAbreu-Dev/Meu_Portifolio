declare const __SITE_URL__: string;

export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || __SITE_URL__,
  baseUrl: import.meta.env.BASE_URL,
};
