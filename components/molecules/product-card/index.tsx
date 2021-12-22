import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Block } from 'baseui/block';
import Image from 'next/image';
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography';
import { currency } from '@utils/currency-formatter';
import { Card } from 'baseui/card';
import { useStyletron } from 'baseui';
import { ProductInterface } from '../../../types';

type Props = {
    product: ProductInterface
}

const HeaderImageComponent = ({ product }: Props) => {
  const [css, theme] = useStyletron();

  const STRAPI_URL = `${process.env.NEXT_PUBLIC_API}`;

  return (
    <Link href={`/products/${product.attributes.slug}`} passHref>
      <Block className={css({
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: theme.colors.mono100,
        transitionProperty: 'all',
        transitionDuration: theme.animation.timing900,
      })}
      >
        <Block className={css({
          opacity: '1',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing600,
          ':hover': { opacity: product.attributes.gallery.data.length ? '0' : '1' },
        })}
        >
          <Image
            src={`${STRAPI_URL}${product.attributes.featuredImage.data.attributes.url}`}
            alt={product.attributes.name}
            height="512px"
            width="512px"
          />
        </Block>
        {product.attributes.gallery.data.length ? (
          <Block className={css({
            position: 'absolute',
            backgroundColor: theme.colors.mono100,
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            objectFit: 'contain',
            opacity: '0',
            transitionProperty: 'all',
            transitionDuration: theme.animation.timing800,
            ':hover': {
              opacity: product.attributes.gallery.data.length ? '1' : '0',
            },
          })}
          >
            <Image
              src={`${STRAPI_URL}${product.attributes.gallery.data[0]?.attributes.url}`}
              alt={product.attributes.gallery.data[0]?.attributes.name}
              height="512px"
              width="512px"
            />
          </Block>
        ) : null}
      </Block>
    </Link>
  );
};

const TitleComponent = ({ product }: Props) => {
  const [css, theme] = useStyletron();
  return (
    <Block>
      <ParagraphXSmall className={css({
        marginTop: '0px',
        marginBottom: '0px',
        color: theme.colors.accent100,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '10px',
      })}
      >
        {product.attributes.category.data.attributes.name}
      </ParagraphXSmall>
      <Link href={`/products/${product.attributes.slug}`} passHref>
        <p className={css({
          fontSize: '15px',
          fontWeight: '500',
          marginTop: '2px',
          marginBottom: '8px',
          color: theme.colors.accent600,
          cursor: 'pointer',
          transitionProperty: 'all',
          transitionDuration: theme.animation.timing900,
          ':hover': {
            color: theme.colors.accent500,
          },
        })}
        >
          {product.attributes.name}
        </p>
      </Link>
    </Block>
  );
};

export function ProductCard({ product }: Props) {
  const [css, theme] = useStyletron();
  const STRAPI_URL = `${process.env.NEXT_PUBLIC_API}`;

  return (
    <Card
      headerImage={`${STRAPI_URL}${product.attributes.featuredImage.data.attributes.url}`}
      title={product.attributes.name}
      overrides={{
        Root: {
          style: () => ({
            borderTopWidth: '0px',
            borderRightWidth: '0px',
            borderBottomWidth: '0px',
            borderLeftWidth: '0px',
            backgroundColor: 'transparent',
            borderTopRightRadius: '0',
            borderTopLeftRadius: '0',
            borderBottomRightRadius: '0',
            borderBottomLeftRadius: '0',
          }),
        },
        HeaderImage: { component: () => <HeaderImageComponent product={product} /> },
        Title: { component: () => <TitleComponent product={product} /> },
        Contents: { style: () => ({ marginRight: '0', marginLeft: '0', textAlign: 'left' }) },
      }}
    >
      <Block>
        <ParagraphSmall className={css({
          marginTop: '0px',
          marginBottom: '0px',
          color: theme.colors.accent200,
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
        })}
        >
          {`${currency.format(product.attributes.price)} `}
          <span className={css({
            fontSize: '11px', letterSpacing: '2px', marginLeft: '4px', color: theme.colors.mono600,
          })}
          >
            {' NGN'}
          </span>
        </ParagraphSmall>
      </Block>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
