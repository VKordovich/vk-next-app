import { SidebarProps } from '@/components/sidebar/sidebar.props';
import { MenuItem } from '@/intefaces/home-page.interface';
import Menu from '@/components/Menu/Menu';
import { Search } from '@/components/search/Search';
import axios from 'axios';
import cn from 'classnames';
import styles from './sidebar.module.css';
import Logo from '@/assets/logo.svg'
import { JSX } from 'react';

const firstCategory = 0;

async function getMenu() {
    return await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });
}

// @ts-ignore
export const Sidebar = async ({ className, ...props }: SidebarProps): JSX.Element => {
    const {data} = await getMenu();
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <Search/>
            <Menu menuDataProp={data} firstCategory={firstCategory}/>
        </div>
    )
}
