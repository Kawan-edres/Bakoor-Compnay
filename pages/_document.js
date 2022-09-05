
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"  >
        <Head>
          
        
        </Head>
        <body>
        <div id="NotificationOverLay"></div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;