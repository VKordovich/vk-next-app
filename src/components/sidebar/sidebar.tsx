import { SidebarProps } from '@/components/sidebar/sidebar.props';
import axios from 'axios';
import { MenuItem } from '@/intefaces/home-page.interface';
import Menu from '@/components/Menu/Menu';
import { Search } from '@/components/search/Search';

const firstCategory = 0;
async function getMenu() {
    return await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });
}

export const Sidebar = async ({ ...props }: SidebarProps) => {
    const {data: menuData} = await getMenu();
    return (
        <div {...props}>
            <Search/>
            <Menu menuDataProp={menuData} firstCategory={firstCategory}/>
        </div>
    )
}
