import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import data from '@/data/shared/navigation.json';
import homeData from '@/data/home.json';

export default function Navigation() {
    const router = useRouter();
    const isHome = router.asPath === '/';
    const itemClass = 'px-2.5 py-2 text-sm font-medium hover:text-black transition-colors';
    const dividerClass = 'h-5 w-px bg-slate-200 mx-1';

    return (
        <div className='absolute mx-auto rounded-full inset-x-0 bottom-16 shadow-lg shadow-slate-200 px-4 w-fit backdrop-blur border-solid border border-slate-200'>
            <div className='flex items-center'>
                {!isHome && (
                    <Fragment>
                        <Link href='/'>
                            <div className={itemClass + ' text-slate-600'}>
                                Home
                            </div>
                        </Link>
                        <div className={dividerClass} />
                    </Fragment>
                )}
                {data.items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                    >
                        <div className={itemClass + (router.asPath === item.url ? ' text-black' : ' text-slate-600')}>
                            {item.text}
                        </div>
                    </Link>
                ))}
                {!isHome && (
                    <Fragment>
                        <div className={dividerClass} />
                        <div className='px-2.5 flex items-center gap-3'>
                            {homeData.socials.map(social => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                >
                                    <div className='text-sm text-slate-600 hover:text-black transition-colors'>
                                        <i className={`bi bi-${social.icon}`} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}