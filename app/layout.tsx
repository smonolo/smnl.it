import { ReactNode } from 'react';
import { Metadata } from 'next';

import Navigation from '@/components/shared/Navigation';
import Analytics from '@/components/shared/Analytics';

import '@/styles/globals.css';

const title = 'I\'m Stefano';
const description = 'Hi, I\'m Stefano. I\'m a Frontend Engineer at EVNT, also working on a few side projects like Settings Hunt.';

export const metadata: Metadata = {
    metadataBase: new URL('https://smnl.it'),
    title,
    description,
    authors: [{
        name: 'Stefano Monolo <stefano@smnl.it>',
        url: 'https://smnl.it'
    }],
    creator: 'Stefano Monolo <stefano@smnl.it>',
    publisher: 'Stefano Monolo <stefano@smnl.it>',
    viewport: {
        width: 'device-width',
        initialScale: 1
    },
    themeColor: '#ffffff',
    openGraph: {
        siteName: 'smnl.it',
        url: 'https://smnl.it',
        title,
        description,
        type: 'website'
    },
    twitter: {
        card: 'summary',
        site: '@stmonolo',
        creator: '@stmonolo',
        title,
        description
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Analytics />
                <div className='px-12 lg:px-52 pt-24 lg:py-60'>
                    {children}
                </div>
                <Navigation />
            </body>
        </html>
    );
}