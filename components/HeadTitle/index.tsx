import React from 'react';
import Head from "next/head";
import { HeadTitleProps } from './HeadTitle.props';

function HeadTitle({ title }: HeadTitleProps): React.ReactElement {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadTitle;