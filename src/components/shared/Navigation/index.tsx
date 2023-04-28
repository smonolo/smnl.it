import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import data from '@/data/shared/navigation.json';
import homeData from '@/data/home.json';

export default function Navigation() {
    const router = useRouter();
    const isHome = router.asPath === '/';
    const itemClass = 'px-2.5 py-2 text-sm font-medium hover:text-black transition-colors';
    const dividerClass = 'h-5 w-px bg-slate-200 mx-1';

    return (
        <div className='fixed mx-auto rounded-full inset-x-0 bottom-16 shadow-lg shadow-slate-200 px-4 w-fit backdrop-blur border-solid border border-slate-200'>
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
                                    className={itemClass + ' text-slate-600'}
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
                        <div className={itemClass + (router.asPath === item.url ? ' text-black' : ' text-slate-600')}>
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
                                        <div className='text-sm text-slate-600 hover:text-black transition-colors'>
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