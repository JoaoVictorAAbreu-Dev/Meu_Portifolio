declare const __SITE_URL__: string;

export const siteConfig = {
  siteUrl:
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : __SITE_URL__),
  baseUrl: import.meta.env.BASE_URL,
};
