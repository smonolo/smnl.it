import Outlink from "@/components/ui/Outlink";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";

import data from '@/data/contact.json';

export default function Contact() {
    return (
        <div className='max-w-lg'>
            <Title>I'm all ears.</Title>
            <div className='mt-6'>
                <Text>
                    If you'd like to reach out to me for business or other purposes,
                    feel free to send me an email. Alternatively, you can leave me a
                    message on{' '}
                    <Outlink href='https://discord.com/users/191598787410526208'>Discord</Outlink>
                    .
                </Text>
            </div>
            <div className='mt-6'>
                {data.emails.map(({ label, email }, index) => (
                    <div
                        key={index}
                        className='border-solid border-b py-4 border-slate-800'
                    >
                        <div className='text-slate-500 text-sm font-medium'>
                            {label}
                        </div>
                        <a
                            className='w-fit block'
                            href={`mailto:${email}`}
                        >
                            <div className='mt-0.5 text-slate-200 font-semibold underline underline-offset-2'>
                                {email}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}