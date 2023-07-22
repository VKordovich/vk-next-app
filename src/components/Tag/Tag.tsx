import { JSX } from 'react';
import style from './Tag.module.css'
import {TagProps} from "@/components/Tag/Tag.props";
import cn from "classnames";

export const Tag = ({ tagType, children, href, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(style.tag, {
                [style.discount]: tagType === 'discount',
                [style.ghost]: tagType === 'ghost',
                [style.info]: tagType === 'info',
            })}
            {...props}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }</div>
    )
}
