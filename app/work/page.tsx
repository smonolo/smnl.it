import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";

import data from '@/data/work.json';

export default function Work() {
    const { featured, others } = data;

    return (
        <>
            <div className='max-w-lg'>
                <Title>Businesses and projects.</Title>
                <div className='mt-6'>
                    <Text>
                        <div>
                            I have worked on several various websites and desktop applications
                            for different companies and individuals.
                        </div>
                        <div className='mt-5'>
                            This is a list of featured businesses I have been a contractor
                            at and a few other websites. Note that some of them might be unreachable.
                        </div>
                    </Text>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 max-w-4xl'>
                {featured.map((item, index) => (
                    <div key={index}>
                        <div className='flex items-center gap-2'>
                            <div className='font-semibold text-slate-200'>{item.displayName}</div>
                            {item.ongoing && (
                                <div className='text-[10px] bg-green-950 py-0.5 px-1.5 text-green-600 rounded font-medium box-border uppercase'>
                                    Ongoing
                                </div>
                            )}
                        </div>
                        <div className='mt-2 text-sm text-slate-400'>
                            {item.position}
                        </div>
                        <a
                            className='mt-3.5 text-sm text-slate-500 font-medium block w-fit'
                            href={item.url}
                            target='_blank'
                        >
                           <i className='bi bi-link' /> {item.url.replace('https://', '').replace('www.', '')}
                        </a>
                    </div>
                ))}
            </div>
            <div className='mt-16 max-w-xl'>
                {others.map((item, index) => (
                    <div
                        key={index}
                        className='border-b box-border border-slate-800 py-3 flex items-center justify-between gap-3'
                    >
                        <div className='text-sm font-medium text-slate-200'>
                            {item.displayName}
                        </div>
                        <a
                            className='text-sm text-slate-500 font-medium block w-fit'
                            href={item.url}
                            target='_blank'
                        >
                            {item.url.replace('https://', '').replace('www.', '')} <i className='bi bi-link' />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}