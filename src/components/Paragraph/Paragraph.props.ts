import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface ParagraphProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}
