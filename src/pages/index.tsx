export default function Home() {
    return (
        <div className='px-12 lg:px-52'>
            <div className='my-24 lg:my-52 max-w-lg'>
                <div className='text-4xl font-serif font-semibold'>
                    Hi, I'm Stefano!
                </div>
                <div className='mt-5 font-sans text-slate-500 font-medium'>
                    <div>
                        I'm a Frontend Engineer at{' '}
                        <a
                            className='text-black underline underline-offset-2'
                            href='https://evnt.games'
                            target='_blank'
                        >
                            EVNT
                        </a>
                        , where I'm maintaining and building websites.
                    </div>
                    <div className='mt-5'>
                        I also work on side projects like{' '}
                        <a
                            className='text-black underline underline-offset-2'
                            href='https://www.settingshunt.com'
                            target='_blank'
                        >
                            Settings Hunt
                        </a>
                        .
                    </div>
                    <div className='mt-5'>
                        This website is under construction. Source code can be found on{' '}
                        <a
                            className='text-black underline underline-offset-2'
                            href='https://github.com/smonolo/smnl.it'
                            target='_blank'
                        >
                            GitHub
                        </a>
                        .
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-5'>
                    <a
                        href='https://twitter.com/stmonolo'
                        target='_blank'
                    >
                        <i className='bi bi-twitter text-lg' />
                    </a>
                    <a
                        href='https://github.com/smonolo'
                        target='_blank'
                    >
                        <i className='bi bi-github text-lg' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/stemon/'
                        target='_blank'
                    >
                        <i className='bi bi-linkedin text-lg' />
                    </a>
                </div>
            </div>
        </div>
    );
}