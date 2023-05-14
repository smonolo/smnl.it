'use client';

import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
    return (
        <div className='bg-slate-50 w-fit text-slate-950 py-2 px-3.5 rounded-lg text-sm font-medium border border-black box-border transition-colors hover:bg-slate-950 hover:text-slate-200 hover:border-slate-200'>
            {props.children}
        </div>
    );
}