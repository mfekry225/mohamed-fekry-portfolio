import { Helmet } from 'react-helmet-async';
export const SEO = ({ t }) => (
  <Helmet>
    <html lang={t.lang} dir={t.dir} />
    <title>{t.name} | {t.title}</title>
    <meta name="description" content={t.about} />
  </Helmet>
);
