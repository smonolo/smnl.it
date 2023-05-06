'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { OutlinkProps } from "./types";

export default function Outlink(props: OutlinkProps) {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    
    return (
        <div
            className='inline relative'
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
        >
            <a
                className='text-black underline underline-offset-2 font-semibold'
                href={props.href}
                target='_blank'
            >
                {props.children}
            </a>
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        key='outlink-tooltip'
                        className='hidden absolute left-0 bottom-full items-center gap-1 text-sm py-1 px-2 backdrop-blur-lg rounded-md lg:flex'
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: -8 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <i className='bi bi-link' />
                        {props.href.replace('https://', '')}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}