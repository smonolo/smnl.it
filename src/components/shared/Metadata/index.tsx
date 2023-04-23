import Head from "next/head";
import { Fragment } from "react";

import { MetadataProps } from "./types";

export default function Metadata(props: MetadataProps) {
    const title = 'Stefano';
    const description = "Hi, I'm Stefano. I'm a Frontend Engineer at EVNT and am working on a few side projects like Settings Hunt.";

    return (
        <Fragment>
            <Head>
                <meta
                    name='description'
                    content={description}
                />
                <meta
                    name='author'
                    content='Stefano Monolo <stefano@smnl.it>'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta charSet='utf-8' />
                <meta
                    name='theme-color'
                    data-react-helmet='true'
                    color='#ffffff'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
                <meta
                    property='og:site_name'
                    content='smnl.it'
                />
                <meta
                    property='og:url'
                    content='https://smnl.it'
                />
                <meta
                    property='og:title'
                    content={title}
                />
                <meta
                    property='og:description'
                    content={description}
                />
                <meta
                    name='twitter:card'
                    content='summary'
                />
                <meta
                    name='twitter:site'
                    content='@stmonolo'
                />
                <meta
                    name='twitter:creator'
                    content='@stmonolo'
                />
                <meta
                    name='twitter:title'
                    content={title}
                />
                <meta
                    name='twitter:description'
                    content={description}
                />
                <title>{title}</title>
            </Head>
            {props.children}
        </Fragment>
    );
}