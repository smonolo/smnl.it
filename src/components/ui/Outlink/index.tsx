import { OutlinkProps } from "./types";

export default function Outlink(props: OutlinkProps) {
    return (
        <a
            className='text-black underline underline-offset-2 font-semibold'
            href={props.href}
            target='_blank'
        >
            {props.children}
        </a>
    );
}