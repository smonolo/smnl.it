import Layout from "@/components/shared/Layout";
import Outlink from "@/components/ui/Outlink";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";

export default function About() {
    return (
        <Layout>
            <div className='max-w-lg'>
                <Title>I'm a Frontend Engineer.</Title>
                <div className='mt-6'>
                    <Text>
                        <div>
                            I'm working at{' '}
                            <Outlink href='https://evnt.games'>EVNT</Outlink>
                            , maintaining and building websites and web applications for
                            one of the fastest-growing events organization company.
                            I've also worked at{' '}
                            <Outlink href='https://www.moonsworth.com'>Moonsworth</Outlink>
                            ,{' '}
                            <Outlink href='https://www.badlion.net'>ESL</Outlink>
                            {' '}and{' '}
                            <Outlink href='https://top.gg'>Top.gg</Outlink>
                            {' '}in the past.
                        </div>
                        <div className='mt-5'>
                            I'm also working on a few side projects like {' '}
                            <Outlink href='https://www.settingshunt.com'>Settings Hunt</Outlink>
                            , a place for gamers to share and download the best game settings.
                        </div>
                        <div className='mt-5'>
                            I'm experienced building scalable dashboards, utility and
                            marketing websites for companies and individuals, as well as
                            products related to Minecraft, Fortnite and Roblox.
                        </div>
                        <div className='mt-5'>
                            More about my work experience can be found at{' '}
                            <Outlink href='https://read.cv/stefano'>read.cv/stefano</Outlink>
                            .
                        </div>
                    </Text>
                </div>
            </div>
        </Layout>
    );
}