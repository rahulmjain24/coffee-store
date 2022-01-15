import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocument extends Document {
    render(): JSX.Element {
        return <Html lang="en">
            <Head>
                <link 
                    rel="preload" 
                    href="/fonts/Poppins-Bold.ttf"
                    as="font"
                    crossOrigin="anonymous" />
                <link 
                    rel="preload" 
                    href="/fonts/Poppins-Regular.ttf"
                    as="font"
                    crossOrigin="anonymous" />
                <link 
                    rel="preload" 
                    href="/fonts/Poppins-SemiBold.ttf"
                    as="font"
                    crossOrigin="anonymous" />
            </Head>
            <body>
                <Main></Main>
                <NextScript></NextScript>
            </body>
        </Html>
    }
}

export default MyDocument