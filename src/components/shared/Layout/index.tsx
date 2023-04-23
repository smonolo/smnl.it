import { LayoutProps } from "./types";

export default function Layout(props: LayoutProps) {
    return (
        <div className='px-12 lg:px-52 pt-24 lg:pt-60'>
            {props.children}
        </div>
    );
}