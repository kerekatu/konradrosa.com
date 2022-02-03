import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#fbbc04"
          />
          <meta name="msapplication-TileColor" content="#171717" />
          <meta name="theme-color" content="#171717" />
        </Head>
        <body className="bg-neutral-900 text-neutral-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
