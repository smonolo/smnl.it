import Layout from '@/components/shared/Layout';

import data from '@/data/home.json';

export default function Home() {
    const linkClass = 'text-black underline underline-offset-2 font-semibold';

    return (
        <Layout>
            <div className='max-w-lg'>
                <div className='text-4xl font-serif font-semibold'>
                    Hi, I'm Stefano.
                </div>
                <div className='mt-6 font-sans text-slate-500 font-medium'>
                    <div>
                        I'm a Frontend Engineer at{' '}
                        <a
                            className={linkClass}
                            href='https://evnt.games'
                            target='_blank'
                        >
                            EVNT
                        </a>
                        , where I'm maintaining and building websites.
                    </div>
                    <div className='mt-5'>
                        I'm also working on side projects like{' '}
                        <a
                            className={linkClass}
                            href='https://www.settingshunt.com'
                            target='_blank'
                        >
                            Settings Hunt
                        </a>
                        .
                    </div>
                    <div className='mt-5'>
                        This website is open source. Source code can be found on{' '}
                        <a
                            className={linkClass}
                            href='https://github.com/smonolo/smnl.it'
                            target='_blank'
                        >
                            GitHub
                        </a>
                        .
                    </div>
                </div>
                <div className='mt-6 flex items-center gap-5'>
                    {data.socials.map(social => (
                        <a
                            key={social.name}
                            href={social.url}
                            target='_blank'
                        >
                            <i className={`bi bi-${social.icon} text-lg block transition-transform hover:scale-105`} />
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    );
}