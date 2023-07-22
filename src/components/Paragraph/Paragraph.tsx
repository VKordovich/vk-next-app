import { JSX } from 'react';
import style from './Paragraph.module.css'
import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import cn from "classnames";

export const Paragraph = ({ size = 'm', children, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn({
                [style.sSize]: size === 's',
                [style.mSize]: size === 'm',
                [style.lSize]: size === 'l'
            })}
            {...props}
        >{children}</p>
    )
}
