import type { AppProps } from 'next/app';

import Navigation from '@/components/shared/Navigation';
import Metadata from '@/components/shared/Metadata';
import Analytics from '@/components/shared/Analytics';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Metadata>
            <Analytics />
            <Component {...pageProps} />
            <Navigation />
        </Metadata>
    );
}