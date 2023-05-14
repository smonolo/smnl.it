'use client';

import { TitleProps } from "./types";

export default function Title(props: TitleProps) {
    return (
        <div className='text-4xl font-serif font-semibold text-slate-200'>
            {props.children}
        </div>
    );
}