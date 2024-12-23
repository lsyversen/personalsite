import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteMetadata from '@/data/siteMetadata';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteMetadata.language} className="scroll-smooth">
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/gifs/snowboard3.gif" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
