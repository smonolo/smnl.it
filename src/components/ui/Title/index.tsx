import { TitleProps } from "./types";

export default function Title(props: TitleProps) {
    return (
        <div className='text-4xl font-serif font-semibold'>
            {props.children}
        </div>
    );
}