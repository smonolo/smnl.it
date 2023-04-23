import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

import Navigation from '@/components/shared/Navigation';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <title>Stefano</title>
            </Head>
            <Component {...pageProps} />
            <Navigation />
        </Fragment>
    );
}