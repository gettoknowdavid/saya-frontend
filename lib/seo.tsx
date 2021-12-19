import Head from 'next/head';
import React from 'react';

type Props = {
    // seo: object,
    title?: ''
}

export default function Seo({ title }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" key="viewport" />
      <meta name="twitter:card" content="summary_large_image" />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

Seo.defaultProps = {
  title: 'Saya Online Store',
};
