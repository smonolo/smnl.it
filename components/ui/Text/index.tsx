'use client';

import { TextProps } from "./types";

export default function Text(props: TextProps) {
    return (
        <div className='font-sans text-slate-400 font-medium'>
            {props.children}
        </div>
    );
}