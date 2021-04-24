import React from 'react';
import Head from "next/head";

function HeadTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default HeadTitle;