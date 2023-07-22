import { JSX } from 'react';
import { HeaderProps } from '@/components/header/header.props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    )
}
