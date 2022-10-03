import Document, { Head, Html, Main, NextScript } from "next/document";

import React from "react";

/* _document is important cuz here we can set the correct structure and insert aditional language and meta data WE HAVE TO RESPECT THE DEFAULT FORMAT STRUCTURE*/
class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">  {/* here we can add the language attribute  */}
        <Head>
          <body>
            <Main />
            <NextScript />
            <div id='notifications'></div>
          </body>
        </Head>
      </Html>
    )
  }
}

export default MyDocument; 