import { JSX } from 'react';
import { HTagProps } from '@/components/Htag/Htag.props';
import style from './Htag.module.css'

export const HTag = ({ typeHeader, children }: HTagProps): JSX.Element => {
    return (
        <>
            {typeHeader === 'h1' && <h1 className={style.h1}>{children}</h1>}
            {typeHeader === 'h2' && <h2 className={style.h2}>{children}</h2>}
            {typeHeader === 'h3' && <h3 className={style.h3}>{children}</h3>}
        </>
    )
}
