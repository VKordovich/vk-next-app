import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface TagProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    tagType: 'discount' | 'ghost' | 'info'
    href?: string;
}
