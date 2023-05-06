import Link from "next/link";

import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function Error() {
    return (
        <div className='max-w-lg'>
            <Title>Ouch, you're lost!</Title>
            <div className='mt-6'>
                <Text>
                    <div>
                        It seems like the page you were trying to go does not exist, and
                        not you're lost.
                    </div>
                    <div className='mt-5'>
                        You should go back home, it's not safe to stay around here.
                    </div>
                </Text>
            </div>
            <div className='mt-8'>
                <Link
                    className='w-fit block'
                    href='/'
                >
                    <Button>
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}