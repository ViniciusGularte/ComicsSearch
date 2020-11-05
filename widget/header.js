import React from "react";
import Head from "next/head";

export default function HeaderWidget({
  name = "BattleCoomic",
  author,
  description,
  keywords,
}) {
  <Head>
    <title>{name}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="author" content={author} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>;
}
