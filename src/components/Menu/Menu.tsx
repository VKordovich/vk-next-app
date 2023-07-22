'use client';
import styles from './Menu.module.css';
import Link from 'next/link';
import { MenuProps } from '@/components/Menu/menu.props';
import CoursesIcon from '@/assets/courses.svg'
import { FirstLevelMenuItem } from '@/intefaces/menu.interface';
import { TopLevelCategory } from '@/intefaces/top-page.interface';
import ServicesIcon from '@/assets/services.svg';
import BooksIcon from '@/assets/books.svg';
import ProductsIcon from '@/assets/products.svg';
import cn from 'classnames';
import {
	MenuItem,
	PageItem
} from '@/intefaces/home-page.interface';
import {
	usePathname,
	useRouter
} from 'next/navigation';
import { useState } from 'react';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export default function Menu({menuDataProp, firstCategory}: MenuProps ): React.JSX.Element {
	const router = useRouter();
	const [menuData, setMenuData] = useState<MenuItem[]>(menuDataProp);
	const [,firstLvlPath,secondLvlPath] = usePathname().split('/')

	const openSecondLevel = (secondCategory: string) => {
		setMenuData && setMenuData(menuData.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(m => (
					<li key={m.route} aria-expanded={m.route == firstLvlPath}>
						<Link href={`/${m.route}`}>
							<div
								className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.route == firstLvlPath})}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		if (!menuData) return (<div>No data</div>)
		return (
			<div className={styles.secondBlock}>
				{menuData.map(m => {
					const pageAlias = m.pages.map(page => page.alias);
					if (pageAlias.includes(secondLvlPath)) m.isOpened = true;
					return (
						<div key={m._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={()=> openSecondLevel(m._id.secondCategory)}
							>{m._id.secondCategory}</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route, !!m.isOpened)}
							</div>
						</div>
					)
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (
			pages.map(p => (
				<Link
					key={p._id}
					href={`${route}/${p.alias}`}
					className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: secondLvlPath === p.alias})}
					scroll={false}
				>
					{p.category}
				</Link>
			))
		);
	};

	return (
		<nav className={styles.menu} role='navigation'>
			{buildFirstLevel()}
		</nav>
	);
};
