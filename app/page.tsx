import Outlink from '@/components/ui/Outlink';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

import data from '@/data/home.json';

export default function Home() {
    return (
        <div className='max-w-lg'>
            <Title>Hi, I'm Stefano.</Title>
            <div className='mt-6'>
                <Text>
                    <div>
                        I'm a Frontend Engineer at{' '}
                        <Outlink href='https://evnt.games'>EVNT</Outlink>
                        , where I'm maintaining and building websites.
                    </div>
                    <div className='mt-5'>
                        I'm also working on side projects like{' '}
                        <Outlink href='https://www.settingshunt.com'>Settings Hunt</Outlink>
                        {' '}and{' '}
                        <Outlink href='https://openwaterapp.com'>OpenWater</Outlink>
                        .
                    </div>
                    <div className='mt-5'>
                        This website is open source. Source code can be found on{' '}
                        <Outlink href='https://github.com/smonolo/smnl.it'>GitHub</Outlink>
                        .
                    </div>
                </Text>
            </div>
            <div className='mt-6 flex items-center gap-5'>
                {data.socials.map(social => (
                    <a
                        key={social.name}
                        href={social.url}
                        target='_blank'
                    >
                        <i className={`bi bi-${social.icon} text-lg text-slate-200 block transition-transform hover:scale-105`} />
                    </a>
                ))}
            </div>
        </div>
    );
}