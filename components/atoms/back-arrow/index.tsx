import React from 'react';
import Image from 'next/image';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { useRouter } from 'next/router';

export function BackArrow() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      overrides={{
        BaseButton: {
          style: () => ({
            backgroundColor: 'transparent',
            position: 'absolute',
            paddingTop: '10px',
            paddingRight: '10px',
            paddingBottom: '10px',
            paddingLeft: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30px',
            width: '46px',
            ':hover': { backgroundColor: 'transparent' },
            ':focus': { backgroundColor: 'transparent' },
          }),
        },
      }}
    >
      <Block>
        <Image src="/back.png" alt="Back Arrow Button" height="30px" width="30px" />
      </Block>
    </Button>
  );
}
