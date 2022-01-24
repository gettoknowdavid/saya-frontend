import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import PropTypes from 'prop-types';
import { VerticalSpacer } from '@atoms/spacer';

type Props = {
    number: string,
    title: string,
    description: string,
}

export function NewFeatureItem({ number, title, description }: Props) {
  const [css, theme] = useStyletron();

  return (
    <Block>
      <Block display="flex" justifyContent="flex-start" alignItems="center">
        <p className={css({
          fontSize: theme.typography.ParagraphLarge.fontSize,
          fontWeight: '300',
          color: theme.colors.accent200,
          marginRight: '20px',
          marginBottom: '0px',
          marginTop: '0px',
          width: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
        >
          {number}
        </p>
        <h3 className={css({
          fontWeight: '500',
          marginTop: '14px',
          marginBottom: '14px',
          color: theme.colors.accent400,
          [theme.mediaQuery.small]: { fontSize: theme.typography.HeadingSmall.fontSize },
          [theme.mediaQuery.medium]: { fontSize: theme.typography.HeadingSmall.fontSize },
          [theme.mediaQuery.large]: { fontSize: theme.typography.HeadingSmall.fontSize },
        })}
        >
          {title}
        </h3>
      </Block>
      <Block marginLeft="50px">
        <p className={css({
          marginTop: '0',
          marginBottom: '0px',
          maxWidth: '450px',
          lineHeight: theme.typography.ParagraphLarge.lineHeight,
          color: theme.colors.accent200,
          [theme.mediaQuery.small]: { fontSize: theme.typography.ParagraphSmall.fontSize },
          [theme.mediaQuery.medium]: { fontSize: theme.typography.ParagraphMedium.fontSize },
          [theme.mediaQuery.large]: { fontSize: theme.typography.ParagraphMedium.fontSize },
        })}
        >
          {description}
        </p>
      </Block>
      <VerticalSpacer height={30} />
    </Block>
  );
}

NewFeatureItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
