'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import data from '@/data/shared/navigation.json';
import homeData from '@/data/home.json';

export default function Navigation() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const itemClass = 'px-2.5 py-2 text-sm font-medium hover:text-slate-200 transition-colors';
    const dividerClass = 'h-5 w-px bg-slate-800 mx-1';

    return (
        <div className='fixed mx-auto rounded-full inset-x-0 bottom-16 shadow-lg bg-slate-900/20 shadow-slate-900/50 px-4 w-fit backdrop-blur border border-slate-800/70'>
            <div className='flex items-center'>
                <AnimatePresence>
                    {!isHome && (
                        <motion.div
                            key='navigation-left-flex'
                            className='flex items-center'
                            initial={{ width: 0 }}
                            animate={{ width: 'fit-content' }}
                            exit={{ width: 0, transition: { delay: 0.2 } }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <Link href='/'>
                                <motion.div
                                    key='navigation-left-flex-item'
                                    className={itemClass + ' text-slate-500'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: 'tween', duration: 0.2 }}
                                >
                                    Home
                                </motion.div>
                            </Link>
                            <div className={dividerClass} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {data.items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                    >
                        <div className={itemClass + (pathname === item.url ? ' text-slate-200' : ' text-slate-500')}>
                            {item.text}
                        </div>
                    </Link>
                ))}
                <AnimatePresence>
                    {!isHome && (
                        <motion.div
                            key='navigation-right-flex'
                            className='flex items-center'
                            initial={{ width: 0 }}
                            animate={{ width: 'fit-content' }}
                            exit={{ width: 0, transition: { delay: 0.2 } }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <div className={dividerClass} />
                            <motion.div
                                className='px-2.5 flex items-center gap-3'
                                key='navigation-right-flex-item'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'tween', duration: 0.2 }}
                            >
                                {homeData.socials.map(social => (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        target='_blank'
                                    >
                                        <div className='text-sm text-slate-500 hover:text-slate-200 transition-colors'>
                                            <i className={`bi bi-${social.icon}`} />
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}