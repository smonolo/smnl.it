import Link from "next/link";

import Layout from "@/components/shared/Layout";

export default function NotFound() {
    return (
        <Layout>
            <div className='max-w-lg'>
                <div className='text-4xl font-serif font-semibold'>
                    Ouch, you're lost!
                </div>
                <div className='mt-6 font-sans text-slate-500 font-medium'>
                    <div>
                        It seems like the page you were trying to go does not exist, and
                        not you're lost.
                    </div>
                    <div className='mt-5'>
                        You should go back home, it's not safe to stay around here.
                    </div>
                </div>
                <div className='mt-8'>
                    <Link
                        className='w-fit block'
                        href='/'
                    >
                        <div className='bg-black w-fit text-white py-2 px-3.5 rounded-lg text-sm font-medium border border-black box-border transition-colors hover:bg-white hover:text-black hover:border-black'>
                            Go Home
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}