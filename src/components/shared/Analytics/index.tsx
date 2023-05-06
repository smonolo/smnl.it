'use client';

import Script from "next/script";
import { Fragment } from "react";

export default function Analytics() {
    return (
        <Fragment>
            <Script
                key='googletagmanager'
                id='googletagmanager'
                strategy='lazyOnload'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script
                key='googleanalytics'
                id='googleanalytics'
                strategy="lazyOnload"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
        </Fragment>
    );
}