import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import data from '@/data/shared/navigation.json';

export default function Navigation() {
    const router = useRouter();
    const isHome = router.asPath === '/';
    const itemClass = 'px-2.5 py-2 text-sm font-medium hover:text-black transition-colors';

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
                        <div className='h-5 w-px bg-slate-200 mx-1' />
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
            </div>
        </div>
    );
}