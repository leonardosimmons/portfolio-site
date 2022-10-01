import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="Leonardo Simmons main site"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta name="AdsBot-Google" content="none" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
