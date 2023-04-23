import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
    return (
        <div className='bg-black w-fit text-white py-2 px-3.5 rounded-lg text-sm font-medium border border-black box-border transition-colors hover:bg-white hover:text-black hover:border-black'>
            {props.children}
        </div>
    );
}