import { JSX } from 'react';
import { FooterProps } from '@/components/footer/footer.props';
import style from './footer.module.css'
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, style.wrapper)} {...props}>
            <span className={style.rights}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
            <a className={style.agreement}>Пользовательское соглашение</a>
            <a className={style.confidentiality}>Политика конфиденциальности</a>
        </footer>
    );
}
