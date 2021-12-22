import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectGlobal } from '@redux/slices/global.slice';
import { SeoInterface } from '../types';

type Props = {
    seo: SeoInterface
}

export default function Seo({ seo }: Props) {
  const { settings } = useAppSelector(selectGlobal);
  const defaultSeo = settings.data.attributes;
  const seoWithDefaults = { ...defaultSeo, ...seo };

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: seoWithDefaults.metaDescription
      ? `${seoWithDefaults.metaTitle} • ${seoWithDefaults.metaDescription}`
      : seoWithDefaults.metaTitle,
    shareImage: seoWithDefaults.shareImage.media.data.attributes.url,
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" key="viewport" />
      <meta name="twitter:card" content="summary_large_image" />

      <title>
        {!seoWithDefaults.metaDescription
          ? `${fullSeo.metaTitle} • ${defaultSeo.metaDescription}`
          : `${fullSeo.metaTitle} | ${defaultSeo.metaDescription}`}
      </title>

      {fullSeo.metaTitle && (
        <>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}

      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}

      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}

      {fullSeo.preventIndexing && (
        <>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </>
      )}

      {fullSeo.isProduct && <meta property="og;type" content="product" />}

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

Seo.propTypes = {
  seo: PropTypes.object.isRequired,
};
