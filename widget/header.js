import React from "react";
import Head from "next/head";

const HeaderWidget = ({
  name = "ComicSearch",
  author = "Vinicius gularte",
  description = "Commic search in web",
  keywords = "comics, characters",
}) => {
  return (
    <Head>
      <title>{name}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};
export default HeaderWidget;
