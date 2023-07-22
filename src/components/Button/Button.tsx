import { JSX } from 'react';
import style from './Button.module.css'
import { ButtonProps } from '@/components/Button/Button.props';
import cn from 'classnames'
import ArrowIcon from '@/assets/arrow.svg'

export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(style.button, className, {
                [style.primary]: appearance === 'primary',
                [style.ghost]: appearance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(style.arrow, {
                [style.right]: arrow === 'right',
                [style.down]: arrow === 'down'
            })}><ArrowIcon/></span> }
        </button>
    )
}
